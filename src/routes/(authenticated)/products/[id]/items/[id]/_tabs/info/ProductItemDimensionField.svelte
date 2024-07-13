<script lang="ts">
	import { FormControl, SelectField } from "$lib/components";
	import TextField from "$lib/components/form/text-field/TextField.svelte";
	import { UnitRepository } from "$repositories/unit.repository";
	import type { FieldOption } from "$types";
	import { UnitType, type Unit } from "@prisma/client";
	import { onMount } from "svelte";
	import { writable } from "svelte/store";

	const unitOptions = writable<FieldOption[]>([]);

	// Forms

	const unitController = new FormControl<Unit>({
		name: "status",
		required: true
	});

	onMount(async () => {
		const units = await UnitRepository.search({ where: { type: UnitType.Length } });
		const _unitOptions: FieldOption[] = units.map((unit) => {
			return { value: unit, label: unit.symbol };
		});
		unitOptions.set(_unitOptions);
	});
</script>

<div class="grid grid-cols-3 gap-4">
	<div class=" col-span-full mx-auto">
		<img src="/images/box-dimension.webp" alt="BoxDimension" class=" h-40" />
	</div>
	<div class=" col-span-full grid grid-cols-4 gap-4">
		<TextField label="Length" />
		<TextField label="Width" />
		<TextField label="Height" />
		<SelectField
			label="Unit"
			controller={unitController}
			options={$unitOptions}
			valueTransform={(unit) => unit?.symbol}
		/>
	</div>
</div>
