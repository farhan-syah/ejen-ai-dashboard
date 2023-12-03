export function sort<T = any>(
	args: T[],
	state: SortState,
	key?: keyof T
): { data: T[]; state: SortState } {
	const opt: number = state == SortState.DESC ? 1 : -1;
	let data = args;

	if (key) {
		data = args.sort((_a, _b) => {
			const a = _a[key] as any;
			const b = _b[key] as any;

			if (typeof a === "boolean" && typeof b === "boolean") {
				return a ? opt : -opt;
			}

			if (typeof a === "string" && typeof b === "string") {
				return opt * a.localeCompare(b);
			}

			if (typeof a === "number" && typeof b === "number") {
				return opt * (a - b);
			}

			return opt;
		});
	} else {
		data = args.sort((a, b) => {
			if (typeof a === "boolean" && typeof b === "boolean") {
				return a ? opt : -opt;
			}

			if (typeof a === "string" && typeof b === "string") {
				return opt * a.localeCompare(b);
			}

			if (typeof a === "number" && typeof b === "number") {
				return opt * (a - b);
			}

			return opt;
		});
	}

	return {
		data,
		state: updateState(state),
	};
}

export const SortState = {
	ASC: "ASC",
	DESC: "DESC",
};

export type SortState = (typeof SortState)[keyof typeof SortState] | undefined;

function updateState(state: SortState): SortState {
	if (state === SortState.ASC) return SortState.DESC;
	else if (state === SortState.DESC) return SortState.ASC;
	else return SortState.DESC;
}
