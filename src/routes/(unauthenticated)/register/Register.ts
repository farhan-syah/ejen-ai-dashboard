import { atom } from "nanostores";
import { getContext, setContext } from "svelte";

export enum RegistrationStatus {
	PENDING = "PENDING",
	SUCCESS = "SUCCESS"
}

class RegistrationState {
	status = atom(RegistrationStatus.PENDING);

	markAsSuccessful() {
		this.status.set(RegistrationStatus.SUCCESS);
	}
}

export function createRegistrationState() {
	return setContext("registrationState", new RegistrationState());
}

export function getRegistrationState() {
	return getContext<RegistrationState>("registrationState");
}
