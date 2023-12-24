import Tab from "./Tab.svelte";
import VerticalTab from "./VerticalTab.svelte";

export { Tab, VerticalTab };

export interface TabItem {
	label: string;
	key?: any;
}
