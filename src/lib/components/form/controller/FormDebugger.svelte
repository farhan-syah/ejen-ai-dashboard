<script lang="ts">
	import type { FormGroup } from "./form-group";
	let componentClass = "";
	type T = $$Generic<Record<string, any>>;
	export { componentClass as class };
	export let formGroup: FormGroup<T>;
	const value = formGroup.value;
</script>

<div class="whitespace-pre-wrap p-2 {componentClass} ">
	{JSON.stringify($value, null, 4)}
</div>
