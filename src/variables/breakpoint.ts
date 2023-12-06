/**Breakpoint enumerators */
export const Breakpoint = {
	/**Phone */
	sm: 640,
	/**Tablet */
	md: 768,
	/**Small monitor */
	lg: 1024,
	/**Large monitor */
	xl: 1280,
	/**Even larger monitor */
	xxl: 1536
};

export type Breakpoint = keyof typeof Breakpoint;
