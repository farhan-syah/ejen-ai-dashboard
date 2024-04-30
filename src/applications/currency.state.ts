import type { Currency } from "@prisma/client";
import { atom, type WritableAtom } from "nanostores";
import { getContext, setContext } from "svelte";

class CurrencyState {
	currencies: WritableAtom<Currency[]> = atom([]);
	defaultCurrency: WritableAtom<Currency | undefined> = atom();
}

export function createAppState() {
	return setContext("currencyState", new CurrencyState());
}

export function getAppState() {
	return getContext<CurrencyState>("currencyState");
}
