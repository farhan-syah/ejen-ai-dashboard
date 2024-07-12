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

export function mergeArray<T = any>(a: Array<T>, b: Array<T>) {
	const c = [...a];
	b.forEach((bItem) => {
		const exist = c.some((cItem) => cItem === bItem);
		if (!exist) c.push(bItem);
	});
	return c;
}

export function arrayIncludesEvery<T = any>(a: Array<T>, b: Array<T>) {
	return b.every((bItem) => a.includes(bItem));
}

export function getDuplicates<T = any>(arr: T[]): T[] {
	const seen = new Set<T>();
	const duplicates = new Set<T>();
	for (const obj of arr) {
		if (seen.has(obj)) {
			duplicates.add(obj);
		} else {
			seen.add(obj);
		}
	}
	return Array.from(duplicates);
}
