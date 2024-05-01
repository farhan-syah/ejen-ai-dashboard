import type { Currency } from "@prisma/client";
import { atom, type WritableAtom } from "nanostores";
import { getContext, setContext } from "svelte";

class CurrencyState {
	currencies: WritableAtom<Currency[]> = atom([]);
	defaultCurrency: WritableAtom<Currency | undefined> = atom();
}

export function createCurrencyState() {
	return setContext("currencyState", new CurrencyState());
}

export function getCurrencyState() {
	return getContext<CurrencyState>("currencyState");
}
