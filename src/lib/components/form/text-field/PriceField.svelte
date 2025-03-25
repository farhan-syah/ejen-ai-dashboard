<script lang="ts">
	import { tryParseNum } from "$lib/utils";
	import { type FullAutoFill } from "svelte/elements";
	import { MaskedField } from ".";
	import { FormControl } from "..";
	export let controller: FormControl<number> = new FormControl<number>();
	export let label: string | undefined;
	export let decimalPlaces: number = 2;
	export let allowNegativeValue: boolean = false;
	export let disabled: boolean = false;
	export let autocomplete: FullAutoFill | null | undefined = "off";
	let componentClass = "";
	export { componentClass as class };

	function handleKeydown(e: KeyboardEvent) {
		const el = controller.el as HTMLInputElement;
		const acceptedKeys: string[] = [
			"Delete",
			"Backspace",
			"ArrowRight",
			"ArrowLeft",
			"End",
			"Home"
		];

		if (!acceptedKeys.includes(e.key)) {
			e.preventDefault();

			const selectionStart = el.selectionStart || 0;
			const selectionEnd = el.selectionEnd || 0;
			const selectedText = el.value.substring(selectionStart, selectionEnd);
			const hasSelection = selectionStart !== selectionEnd;

			const currentInput = el.value;
			let newInput: string;

			if (e.key === ".") {
				if (currentInput.includes(".")) {
					// Do nothing if there's already a decimal point
					return;
				} else if (decimalPlaces > 0) {
					// Insert the decimal point at the cursor position if allowed
					if (hasSelection) {
						newInput =
							currentInput.substring(0, selectionStart) +
							"." +
							currentInput.substring(selectionEnd);
					} else {
						newInput =
							currentInput.substring(0, selectionStart) +
							"." +
							currentInput.substring(selectionStart);
					}
					// Validate the new decimal Input before setting the value
					const regexPattern = allowNegativeValue
						? `^-?\\d*(\\.\\d{0,${decimalPlaces}})?$`
						: `^\\d*(\\.\\d{0,${decimalPlaces}})?$`;

					const regex: RegExp = new RegExp(regexPattern);
					const validInput = regex.test(newInput);

					if (validInput) {
						el.value = newInput;

						requestAnimationFrame(() => {
							el.selectionStart = selectionStart + 1;
							el.selectionEnd = selectionStart + 1;
						});
						requestAnimationFrame(() => {
							const updatedValue = el.value;
							const num = tryParseNum(updatedValue, 0);
							const newValue = +(num * Math.pow(10, decimalPlaces)).toFixed(decimalPlaces);
							controller.writableValue.set(newValue);
						});
					}

					return; // Important: exit the function after handling the decimal point
				} else {
					// Decimal places are 0 and user try to insert a decimal, so we return as the original requirement
					return;
				}
			} else {
				const regexPattern = allowNegativeValue
					? `^-?\\d*(\\.\\d{0,${decimalPlaces}})?$`
					: `^\\d*(\\.\\d{0,${decimalPlaces}})?$`;

				const regex: RegExp = new RegExp(regexPattern);

				if (hasSelection) {
					// Replace the selected text with the new key
					newInput =
						currentInput.substring(0, selectionStart) +
						e.key +
						currentInput.substring(selectionEnd);
				} else {
					// Append the new key
					newInput =
						currentInput.substring(0, selectionStart) +
						e.key +
						currentInput.substring(selectionStart);
				}

				const validInput = regex.test(newInput);
				if (validInput) {
					el.value = newInput;

					// Move the cursor after the newly inserted character
					requestAnimationFrame(() => {
						el.selectionStart = selectionStart + 1;
						el.selectionEnd = selectionStart + 1;
					});
				}
			}
		}

		// Delay reading the updated value until after the input is processed
		requestAnimationFrame(() => {
			const updatedValue = el.value;
			const num = tryParseNum(updatedValue, 0);
			const newValue = +(num * Math.pow(10, decimalPlaces)).toFixed(decimalPlaces);
			controller.writableValue.set(newValue);
		});
	}
</script>

<MaskedField
	{controller}
	{disabled}
	{label}
	class={componentClass}
	onKeydown={handleKeydown}
	onInput={() => {}}
	{autocomplete}
/>
