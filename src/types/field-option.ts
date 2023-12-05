export class FieldOption<T = any> {
	value: T;
	label?: string;

	constructor(option: FieldOption) {
		this.value = option.value;
		this.label = option.label;
	}
}
