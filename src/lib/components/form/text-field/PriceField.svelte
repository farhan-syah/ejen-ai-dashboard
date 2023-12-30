<script lang="ts">
	import { tryParseNum } from "$lib/utils";
	import { MaskedField } from ".";
	import { FormControl } from "..";
	export let controller: FormControl<number> = new FormControl<number>();
	export let label: string | undefined;
	export let decimalPlaces: number = 2;
	export let allowNegativeValue: boolean = false;
	export let disabled: boolean = false;
	let componentClass = "";
	export { componentClass as class };
	function handleKeydown(e: KeyboardEvent) {
		const el = controller.el as HTMLInputElement;
		const acceptedKeys: string[] = ["Delete", "Backspace", "ArrowRight", "ArrowLeft"];

		if (!acceptedKeys.includes(e.key)) {
			e.preventDefault();
			if (e.key === "." && decimalPlaces === 0) {
				return;
			} else {
				const regexPattern = allowNegativeValue
					? `^-?\\d*(\\.\\d{0,${decimalPlaces}})?$`
					: `^\\d*(\\.\\d{0,${decimalPlaces}})?$`;

				const regex: RegExp = new RegExp(regexPattern);

				const currentInput = el.value;
				const newInput = currentInput + e.key;
				const validInput = regex.test(newInput);
				if (validInput) {
					el.value = newInput;
				}
			}
		}
		const num = tryParseNum(el.value, 0);
		const newValue = +(num * Math.pow(10, decimalPlaces)).toFixed(decimalPlaces);
		controller.writableValue.set(newValue);
	}
</script>

<MaskedField
	{controller}
	{disabled}
	{label}
	class={componentClass}
	onKeydown={handleKeydown}
	onInput={() => {}}
/>
