<script lang="ts">
	import { dev } from "$app/environment";
	import type { FormGroup } from "./form-group";
	let componentClass = "";
	type T = $$Generic<Record<string, any>>;
	export { componentClass as class };
	export let formGroup: FormGroup<T>;
	const value = formGroup.value;

	function safeStringify(obj: any, space = 4): string {
		const seen = new WeakSet();
		return JSON.stringify(
			obj,
			(key, value) => {
				if (typeof value === "object" && value !== null) {
					if (seen.has(value)) return "[Circular]";
					seen.add(value);
				}
				return value;
			},
			space
		);
	}
</script>

{#if dev}
	<div class="whitespace-pre-wrap p-2 {componentClass} ">
		{safeStringify($value)}
	</div>
{/if}
