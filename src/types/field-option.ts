export class FieldOption<T = any> {
	value: T;
	label?: string;
	selected?: boolean;

	constructor(option: FieldOption) {
		this.value = option.value;
		this.label = option.label;
		this.selected = option.selected;
	}
}
