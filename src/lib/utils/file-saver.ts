import pkg from "file-saver";
const { saveAs } = pkg;

export function saveAsFile(buffer: any, fileName: string, fileType: FileType): void {
	const data: Blob = new Blob([buffer], { type: fileType });
	saveAs(data, fileName);
}

export enum FileType {
	csv = "text/csv;charset=utf-8;",
	pdf = " application/pdf",
	excel = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
}
