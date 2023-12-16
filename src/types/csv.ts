export class CSV<T = any> {
	columns: string[];
	data: Array<T>;
	fileName: string;

	constructor(obj: { data?: Array<T>; columns?: string[]; filename: string }) {
		this.data = obj.data ?? [];
		this.columns = obj.columns ?? [];
		this.fileName = obj.filename;
	}
}
