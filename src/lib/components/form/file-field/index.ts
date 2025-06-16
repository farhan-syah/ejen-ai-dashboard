import FileField from "./FileField.svelte";

export interface FileItem {
	id: string;
	path?: string;
	file?: File;
	name?: string;
	ext?: string;
	url?: string;
	icon?: string;
}

export { FileField };
