export function moveArray<T = any>(array: Array<T>, fromIndex: number, toIndex: number) {
	const startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex;

	if (startIndex >= 0 && startIndex < array.length) {
		const endIndex = toIndex < 0 ? array.length + toIndex : toIndex;

		const [item] = array.splice(fromIndex, 1);
		array.splice(endIndex, 0, item);
	}
}

export function moveAndCopyArray<T = any>(array: Array<T>, fromIndex: number, toIndex: number) {
	const newArray = [...array];
	moveArray(newArray, fromIndex, toIndex);
	return newArray;
}
