export type Token = {
	accessToken: string;
	refreshToken: string;
};

export type DecodedToken = {
	sub: number;
	email: string;
	exp: number;
};
