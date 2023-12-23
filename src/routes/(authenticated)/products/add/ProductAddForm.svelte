<script lang="ts">
	import type { ProductUncheckedCreateInput } from "$api/routes/product/product.schema";
	import { goto } from "$app/navigation";
	import { UserState, getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import {
		Button,
		FormControl,
		FormDebugger,
		FormGroup,
		NumField,
		SearchField,
		validatePermissions
	} from "$lib/components";
	import TextField from "$lib/components/form/text-field/TextField.svelte";
	import { tryParseNum } from "$lib/utils";
	import { ProductCategoryRepository, ProductRepository } from "$repositories";
	import type { ProductCategory } from "../products";

	// States

	const appState = getAppState();
	const toastState = getToastState();
	async function handleCategorySearch(input: string) {
		const selectedCategoryIds: string[] =
			productCategoryController.value?.map((category) => category.id) ?? [];
		const categories = await ProductCategoryRepository.search({
			action: "search",
			where: {
				id: {
					notIn: selectedCategoryIds
				}
			}
		});
		return categories;
	}

	// Options

	const productCategoryController = new FormControl<ProductCategory[]>();

	//  Forms

	const nameController = new FormControl({
		name: "name",
		required: true
	});

	const skuController = new FormControl({
		name: "sku",
		required: true
	});

	const retailPriceController = new FormControl<number>({
		name: "retailPrice",
		required: true
	});

	const form = new FormGroup<ProductUncheckedCreateInput>([
		nameController,
		skuController,
		retailPriceController
	]);
	const valid = form.valid;

	async function handleSaveForm() {
		try {
			appState.loading.set(true);

			const productCategory = await ProductRepository.create({
				data: form.value.get()
			});

			await goto(`/products/categories/${productCategory.id}`);

			toastState.success({
				message: "Category has been created"
			});
		} catch (error) {
			appState.error.set(error);
		} finally {
			appState.loading.set(false);
		}
	}

	// Permissions

	const hasEditPermission = validatePermissions(
		["Product.manage", "Product.update"],
		UserState.permissions.get()
	);

	function handleKeydown(e: KeyboardEvent) {
		const el = retailPriceController.el as HTMLInputElement;
		const acceptedKeys: string[] = ["Delete", "Backspace", "ArrowRight", "ArrowLeft"];

		const decimalPlaces: number = 2;
		if (!acceptedKeys.includes(e.key)) {
			console.log(e.key);
			e.preventDefault();
			const regex: RegExp = new RegExp(`^-?\\d*(\\.\\d{0,${decimalPlaces}})?$`);
			const currentInput = el.value;
			const newInput = currentInput + e.key;
			const validInput = regex.test(newInput);
			if (validInput) {
				el.value = newInput;
			}
		}
		const num = tryParseNum(el.value, 0);
		const newValue = +(num * Math.pow(10, decimalPlaces)).toFixed(decimalPlaces);
		retailPriceController.writableValue.set(newValue);
	}
</script>

<div class="grid grid-cols-6 gap-4">
	<TextField controller={nameController} label="Product Name" class="col-r1" />
	<TextField controller={skuController} label="SKU" class="col-r1" />
	<NumField
		controller={retailPriceController}
		label="Price"
		class="col-r1"
		onKeydown={handleKeydown}
		onInput={() => {}}
	/>
	<SearchField
		controller={productCategoryController}
		label="Categories"
		class="col-r1"
		onSearch={handleCategorySearch}
		transformResult={(result) => result.name}
		transformSelectedItem={(selectedItem) => selectedItem.name}
	/>
	<div class="flex gap-2 col-start-1">
		<Button valid={$valid} onClick={handleSaveForm} />
	</div>
</div>
<FormDebugger formGroup={form} />
