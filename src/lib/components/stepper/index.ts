import { atom, type WritableAtom } from "nanostores";
import { getContext, setContext, type Component } from "svelte";
import Stepper from "./Stepper.svelte";
export interface StepperComponent {
	component: Component;
	label?: string;
	icon?: string;
	completed: WritableAtom<boolean>;
}

export class StepperComponent {
	constructor(
		component: Component,
		obj?: { label?: string; icon?: string; completed?: boolean; disabled?: boolean }
	) {
		this.component = component;
		this.label = obj?.label;
		this.icon = obj?.icon;
		this.completed = atom(obj?.completed ?? false);
	}
}
export class StepperContext {
	items: StepperComponent[];
	currentStep: WritableAtom<number> = atom(0);
	prevStep: WritableAtom<number> = atom(0);

	constructor(obj: { items: StepperComponent[] }) {
		this.items = obj.items;
	}

	handleNextClick() {
		this.prevStep.set(this._currentStep);
		this.items[this._currentStep].completed.set(true);
		if (this._currentStep < this.items.length) this.currentStep.set(this._currentStep + 1);
	}

	handleButtonClick(index: number) {
		this.prevStep.set(this._currentStep);
		if (this._currentStep < this.items.length) this.currentStep.set(index);
	}

	get _currentStep() {
		return this.currentStep.get();
	}
}

export function createStepperContext(obj: { items: StepperComponent[] }) {
	const context = new StepperContext({ items: obj.items });
	setContext("stepperContext", context);
	return context;
}

export function getStepperContext() {
	return getContext<StepperContext>("stepperContext");
}

export { Stepper };
