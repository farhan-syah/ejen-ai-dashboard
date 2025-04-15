<script lang="ts">
	import { atom } from "nanostores";
	import type { HTMLInputTypeAttribute } from "svelte/elements";
	import Icon from "../../icons/Icon.svelte";
	import { FormControl } from "../controller/form-control";
	import TextField from "./TextField.svelte";
	let {
		controller = new FormControl(),
		label,
		showErrorCount,
		disabled
	}: {
		controller: FormControl;
		label?: string;
		showErrorCount?: number;
		disabled?: boolean;
	} = $props();

	const type = atom<HTMLInputTypeAttribute | undefined | null>("password");
	const icon = atom("carbon:view-off");

	function togglePassword() {
		if ($type === "password") {
			type.set("text");
			icon.set("carbon:view");
		} else {
			type.set("password");
			icon.set("carbon:view-off");
		}
	}
</script>

<TextField {controller} {label} type={$type} {showErrorCount} {disabled}>
	<div slot="postfix" class=" m-0.5">
		<Icon
			icon={$icon}
			class="text-lg rounded-lg overflow-clip  hover:text-blue-500 "
			onClick={togglePassword}
			iconClass="flex p-1.5 "
			buttonClass="pointer-blue-light"
		/>
	</div>
</TextField>
