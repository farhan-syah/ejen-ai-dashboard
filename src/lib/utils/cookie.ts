export function getCookie(name: string) {
	function escape(s: string) {
		// eslint-disable-next-line no-useless-escape
		return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, "\\$1");
	}
	const match = document.cookie.match(RegExp("(?:^|;\\s*)" + escape(name) + "=([^;]*)"));
	return match ? match[1] : null;
}

function setCookie(name: string, value: string, expiry: number) {
	const d = new Date();
	d.setTime(d.getTime() + expiry);
	const expires = "expires=" + d.toUTCString();
	document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

export function clearCookie() {
	document.cookie = "sessionId= ; Path=/; expires = Thu, 01 Jan 1970 00:00:00 GMT";
}
