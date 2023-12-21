<script lang="ts">
	import { dev } from "$app/environment";
	import type { FormGroup } from "./form-group";
	let componentClass = "";
	type T = $$Generic<Record<string, any>>;
	export { componentClass as class };
	export let formGroup: FormGroup<T>;
	const value = formGroup.value;
</script>

{#if dev}
	<div class="whitespace-pre-wrap p-2 {componentClass} ">
		{JSON.stringify($value, null, 4)}
	</div>
{/if}
