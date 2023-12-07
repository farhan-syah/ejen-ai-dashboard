export type Token = {
	accessToken: string;
	refreshToken: string;
};

export type ReceivedToken = Token & { cookie?: string[] };
export type DecodedToken = {
	sub: string;
	email: string;
	exp: number;
};
