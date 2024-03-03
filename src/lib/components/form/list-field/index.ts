import type { Item } from "svelte-dnd-action";
import ListField from "./ListField.svelte";

export type ListItem<T = any> = {
	id: any;
	item: T;
} & Item;
export { ListField };
