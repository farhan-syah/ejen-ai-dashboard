import type { Item } from "svelte-dnd-action";
import ImageField from "./ImageField.svelte";

export type ImageItem = {
	id: any;
	image: string | undefined;
	path?: string;
	key?: string;
	file?: File;
	fileName?: string;
	ext?: string;
} & Item;

export { ImageField };
