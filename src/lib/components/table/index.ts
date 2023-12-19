import { mergeArray } from "$lib/utils";
import type { CSV, FieldOption } from "$types";
import { atom, computed, type WritableAtom } from "nanostores";
import { getContext, setContext, type SvelteComponent } from "svelte";
import Table from "./Table.svelte";
import TableBody from "./TableBody.svelte";
import TableFooter from "./TableFooter.svelte";
import TableHeader from "./TableHeader.svelte";
import TableHeaderColumn from "./TableHeaderColumn.svelte";
import TableOption from "./TableOption.svelte";
import TableRow from "./TableRow.svelte";
type OrderObject = Record<string, "asc" | "desc">;
export { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableOption, TableRow };

export interface TableColumn<T = any> {
	key: keyof T;
	label: string;
	transform?: (column?: any, row?: any) => any;
	content?: typeof SvelteComponent | any;
	sortable?: boolean;
	contentClass?: string;
	headerClass?: string;
	align?: "left" | "center" | "right";
	shrink?: boolean;
	visible?: boolean;
}

export type TableInput<T = any, U = any> = {
	data?: Promise<T[]>;
	filter?: U;
	total?: number;
	limit?: number;
	onCount?: (filter?: U) => Promise<number>;
	onSearch?: (filter?: U) => Promise<T[]>;
	onGetSelected?: (selected: (string | number | symbol)[]) => Promise<T[]>;
	columns?: TableColumn[];
	striped?: boolean;
	showColumnFilter?: boolean;
	toCSV?: (data: T[]) => CSV;
	noDataText?: string;
	selectable?: boolean;
	selectByKey?: keyof T;
};

export class TableContext<T = any, U = any> {
	asyncData: WritableAtom<Promise<T[] | undefined>> = atom(Promise.resolve([]));
	data: WritableAtom<T[]> = atom([]);
	filter: WritableAtom<U> = atom({});
	total: WritableAtom<number> = atom(0);
	limit: WritableAtom<number | undefined>;
	limitOptions: WritableAtom<FieldOption[]> = atom([{ value: 10, label: "10" }]);
	readonly columns: TableColumn[] = [];
	visibleColumns: WritableAtom<TableColumn[]> = atom([]);
	showColumnFilter: boolean;
	onCount?: (filter?: U) => Promise<number>;
	onSearch?: (filter?: U) => Promise<T[]>;
	onGetSelected?: (selected: (string | number | symbol)[]) => Promise<T[]>;
	striped?: boolean;
	toCSV?: (data: T[]) => CSV;
	noDataText?: string;
	orderBy: WritableAtom<Record<string, "asc" | "desc"> | undefined> = atom(undefined);
	// Selection
	selectable: WritableAtom<boolean>;
	selected = atom<(string | number | symbol)[]>([]);
	// Paging
	currentPage: WritableAtom<number> = atom(1);
	start: WritableAtom<number> = atom(1);
	end: WritableAtom<number> = atom(1);
	maxPage: WritableAtom<number> = atom(1);
	selectByKey?: string | number | symbol;

	constructor(data: TableInput<T, U>) {
		this.columns = data.columns ?? [];
		this.visibleColumns = atom(data.columns?.filter((c) => c.visible) ?? []);
		this.filter = atom(data.filter);
		this.limit = atom(data.limit ?? undefined);
		this.striped = data.striped;
		this.showColumnFilter = data.showColumnFilter ?? false;
		this.onSearch = data.onSearch;
		this.onCount = data.onCount;
		this.onGetSelected = data.onGetSelected;
		this.toCSV = data.toCSV;
		this.selectable = atom(data.selectable);
		this.selectByKey = data.selectByKey;

		this.total.subscribe((total) => {
			if (total) this.buildLimitOptions(total);
			this.calculatePage();
		});

		this.currentPage.subscribe(() => {
			this.skip();
		});

		this.asyncData.subscribe((data) => {
			data.then((data) => {
				if (data) {
					this.data.set(data);
				}
			});
		});

		this.apply();
	}

	get currentFilter() {
		return this.filter.get();
	}

	get currentLimit() {
		return this.limit.get();
	}

	private buildLimitOptions(total: number) {
		const option = [{ value: 10, label: "10" }];
		if (total > 10) option.push({ value: 20, label: "20" });
		if (total > 20) option.push({ value: 30, label: "30" });
		if (total > 30) option.push({ value: 50, label: "100" });

		this.limitOptions.set(option);
	}

	onLimitChange(value: number) {
		if (this.limit) {
			this.limit.set(value);
			const filter = this.currentFilter as any;
			const query = filter.query ?? {};
			const newFilter = { ...this.currentFilter, query: { ...query, limit: value } };
			this.filter.set(newFilter);
		}
		this.goToFirstPage();
		this.search();
		this.calculatePage();
	}

	count() {
		if (this.onCount) {
			this.onCount(this.currentFilter).then((count) => {
				return this.total.set(count);
			});
		}
	}

	search() {
		if (this.onSearch) {
			this.asyncData.set(this.onSearch(this.currentFilter));
		}
	}

	sort(key: string) {
		const filter = this.currentFilter as any;
		const query = filter.query ?? {};
		const sortOrder = filter.query?.orderBy ? filter.query.orderBy[key] : undefined;
		const orderBy: OrderObject = {};
		if (sortOrder === "asc") orderBy[key] = "desc";
		else orderBy[key] = "asc";
		const newFilter = { ...filter, query: { ...query, orderBy } };
		this.filter.set(newFilter);
		this.orderBy.set(orderBy);
		this.goToFirstPage();
		this.search();
	}

	apply() {
		this.count();
		this.search();
	}

	calculatePage() {
		const limit = this.limit.get();
		if (limit) {
			const currentPage = this.currentPage.get();
			const total = this.total.get();
			// Calculate Start

			this.start.set((currentPage - 1) * limit + 1);

			// Calculate End
			const max = currentPage * limit;
			if (max > total) {
				this.end.set(total);
			} else {
				this.end.set(max);
			}
			this.maxPage.set(Math.ceil(total / limit));
		}
	}

	goToNextPage() {
		const currentPage = this.currentPage.get();
		if (currentPage < this.maxPage.get()) this.currentPage.set(this.currentPage.get() + 1);
	}

	goToPreviousPage() {
		const currentPage = this.currentPage.get();
		if (currentPage > 1) this.currentPage.set(this.currentPage.get() - 1);
	}

	goToFirstPage() {
		const currentPage = this.currentPage.get();
		if (currentPage != 1) this.currentPage.set(1);
	}

	goToLastPage() {
		const currentPage = this.currentPage.get();
		const maxPage = this.maxPage.get();
		if (currentPage != maxPage) this.currentPage.set(maxPage);
	}

	goToPage(page: number): number {
		const maxPage = this.maxPage.get();
		if (page >= maxPage) {
			this.currentPage.set(maxPage);
			return maxPage;
		} else {
			this.currentPage.set(page);
			return page;
		}
	}

	skip() {
		const currentPage = this.currentPage.get();

		const limit = this.limit.get();
		if (limit) {
			const skip = (currentPage - 1) * limit;
			const filter = this.currentFilter as any;
			const query = filter.query ?? {};
			const newFilter = { ...this.currentFilter, query: { ...query, skip: skip } } as U;
			this.filter.set(newFilter);
			this.search();
			this.calculatePage();

			// this.limit.set(input.value);
			// const filter = this.currentFilter as any;
			// const query = filter.query ?? {};
			// const newFilter = { ...this.currentFilter, query: { ...query, limit: input.value } };
			// this.filter.set(newFilter);
		}
	}

	isAllSelected = computed([this.selected, this.data], (selected, data) => {
		const key = this.selectByKey;
		if (key) {
			return data.every((data: any) => selected.includes(data[key]));
		}
		return false;
	});

	select(row: any) {
		if (this.selectable.get() && this.selectByKey) {
			const value = row[this.selectByKey];
			const selected = [...this.selected.get()];
			const index = selected.findIndex((s) => s === value);
			if (index == -1) {
				selected.push(value);
			} else {
				selected.splice(index, 1);
			}
			this.selected.set(selected);
		}
	}

	selectAll() {
		const key = this.selectByKey;
		if (this.selectable.get() && key) {
			if (!this.isAllSelected.get()) {
				const currentSelected = [...this.selected.get()];
				const data = this.data.get();
				const currentPageValues = data.map((data: any) => data[key]);
				const newSelected = mergeArray(currentSelected, currentPageValues);
				this.selected.set(newSelected);
			} else {
				const currentSelected = [...this.selected.get()];
				const currentPageValues = this.data.get().map((data: any) => data[key]);
				const newSelected = currentSelected.filter((row) => {
					return !currentPageValues.includes(row);
				});
				this.selected.set(newSelected);
			}
		}
	}

	clearSelection() {
		this.selected.set([]);
	}
}

export function getTableContext<T = any, U = any>() {
	return getContext<TableContext<T, U>>("tableContext");
}

export function createTableContext<T = any, U = any>(data: TableInput<T, U> = {}) {
	const context = new TableContext<T, U>(data);
	setContext("tableContext", context);
	return context;
}
