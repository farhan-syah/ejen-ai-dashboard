import PageTitle from "./PageTitle.svelte";

export type BreadcrumbItem = {
	label: string;
	path?: string;
	currentPage?: boolean;
};

export { PageTitle };
