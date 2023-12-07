import { atom, type WritableAtom } from "nanostores";

export type SidebarItem = {
	title: string;
	items?: SidebarItem[];
	icon?: string;
	link: string;
	isParent?: boolean;
	requiredPermissions: string[];
	isOpen?: WritableAtom<boolean>;
};

export const sidebarItems: SidebarItem[] = [
	{
		title: "Dashboard",
		icon: "mingcute:home-3-line",
		requiredPermissions: [],
		link: "/dashboard",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Dashboard",
				icon: "mingcute:home-3-line",
				requiredPermissions: [],
				link: "/xear"
			},
			{
				title: "Dashboard",
				icon: "mingcute:home-3-line",
				requiredPermissions: [],
				link: "/dashboard"
			}
		]
	},
	{
		title: "Dashboard",
		icon: "mingcute:home-3-line",
		requiredPermissions: [],
		link: "/dd",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Dashboard",
				icon: "mingcute:home-3-line",
				requiredPermissions: [],
				link: "/11"
			},
			{
				title: "Dashboard",
				icon: "mingcute:home-3-line",
				requiredPermissions: [],
				link: "/22"
			}
		]
	},
	{
		title: "Dashboard",
		icon: "mingcute:home-3-line",
		requiredPermissions: [],
		link: "/dashboard",
		isParent: true,
		isOpen: atom(false),
		items: []
	}
];
