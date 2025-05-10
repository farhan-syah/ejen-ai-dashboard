import { atom, type WritableAtom } from "nanostores";

export type SidebarItem = {
	title: string;
	items?: SidebarItem[];
	icon?: string;
	link: string;
	isParent?: boolean;
	requiredPermissions: string[];
	isOpen?: WritableAtom<boolean>;
	regexp?: RegExp;
};

export const commonSidebarItems: SidebarItem[] = [
	{
		title: "Chat",
		icon: "material-symbols:mark-chat-unread-outline-rounded",
		requiredPermissions: [],
		link: "/chat",
		isParent: true
	},
	{
		title: "Settings",
		icon: "material-symbols:settings-outline-rounded",
		requiredPermissions: [],
		link: "/settings",
		isParent: true,
		isOpen: atom(false),
		items: [
			{ title: "System Settings", requiredPermissions: ["All.manage"], link: "/settings/system" },
			{
				title: "Business Settings",
				requiredPermissions: [],
				link: "/settings/business"
			}
		]
	}
];

export const staffSidebarItems: SidebarItem[] = [];

export const sidebarItems: SidebarItem[] = [
	{
		title: "Agents",
		icon: "material-symbols:support-agent",
		requiredPermissions: [],
		link: "/agents",
		isParent: true,
		isOpen: atom(false),
		items: []
	},
	{
		title: "Agent Types",
		icon: "material-symbols:manage-accounts",
		requiredPermissions: ["AgentType.manage"],
		link: "/agent-types",
		isParent: true,
		isOpen: atom(false),
		items: []
	}
];
