export class CSV<T = any> {
	columnKeys: string[];
	data: Array<T>;
	fileName: string;

	constructor(obj: { data?: Array<T>; columnKeys?: string[]; fileName: string }) {
		this.data = obj.data ?? [];
		this.columnKeys = obj.columnKeys ?? [];
		this.fileName = obj.fileName;
	}
}
