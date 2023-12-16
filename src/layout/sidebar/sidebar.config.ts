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
		title: "Calendar",
		icon: "material-symbols:calendar-today-outline-rounded",
		requiredPermissions: [],
		link: "/calendar",
		isParent: true
	},
	{
		title: "Tasks",
		icon: "mingcute:task-line",
		requiredPermissions: [],
		link: "/calendar",
		isParent: true
	}
	// {
	// 	title: "Chat",
	// 	icon: "material-symbols:mark-chat-unread-outline-rounded",
	// 	requiredPermissions: [],
	// 	link: "/chat",
	// 	isParent: true
	// }
];

export const staffSidebarItems: SidebarItem[] = [
	{
		title: "Calendar",
		icon: "material-symbols:calendar-today-outline-rounded",
		requiredPermissions: [],
		link: "/calendar",
		isParent: true
	},
	{
		title: "Tasks",
		icon: "mingcute:task-line",
		requiredPermissions: [],
		link: "/calendar",
		isParent: true
	}
	// {
	// 	title: "Chat",
	// 	icon: "material-symbols:mark-chat-unread-outline-rounded",
	// 	requiredPermissions: [],
	// 	link: "/chat",
	// 	isParent: true
	// }
];

export const sidebarItems: SidebarItem[] = [
	{
		title: "Dashboard",
		icon: "material-symbols:house-outline-rounded",
		requiredPermissions: [],
		link: "/dashboard",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Personal",
				requiredPermissions: [],
				link: "/dashboard"
			},
			{
				title: "Sales",
				requiredPermissions: [],
				link: "/dashboard/sales"
			},
			{
				title: "Analytics",
				requiredPermissions: [],
				link: "/dashboard/analytics"
			},
			{
				title: "Inventories",
				requiredPermissions: [],
				link: "/dashboard/inventories"
			},
			{
				title: "Deliveries",
				requiredPermissions: [],
				link: "/dashboard/deliveries"
			}
		]
	},

	{
		title: "Orders",
		icon: "material-symbols:package-2-outline",
		requiredPermissions: [],
		link: "/orders",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Order List",
				requiredPermissions: [],
				link: "/orders"
			},
			{
				title: "Add Order",
				requiredPermissions: [],
				link: "/orders/add"
			}
		]
	},
	{
		title: "Products",
		icon: "material-symbols:package-outline-rounded",
		requiredPermissions: [],
		link: "/products",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Product List",
				requiredPermissions: [],
				link: "/products",
				regexp: new RegExp("^/products$")
			},
			{
				title: "Add Product",
				requiredPermissions: [],
				link: "/products/add"
			},
			{
				title: "Categories",
				requiredPermissions: [],
				link: "/products/categories"
			}
		]
	},
	{
		title: "Services",
		icon: "material-symbols:business-center-outline-rounded",
		requiredPermissions: [],
		link: "/services",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Service  List",
				requiredPermissions: [],
				link: "/services"
			},
			{
				title: "Add Product",
				requiredPermissions: [],
				link: "/services/add"
			},
			{
				title: "Categories",
				requiredPermissions: [],
				link: "/services/categories"
			}
		]
	},
	{
		title: "Promotions",
		icon: "material-symbols:shopping-basket-outline",
		requiredPermissions: [],
		link: "/promotions",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Promotion List",
				requiredPermissions: [],
				link: "/promotions"
			},
			{
				title: "Add Promotion",
				requiredPermissions: [],
				link: "/promotions/add"
			}
		]
	},
	{
		title: "Users",
		icon: "material-symbols:person-outline-rounded",
		requiredPermissions: [],
		link: "/users",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "User List",
				requiredPermissions: [],
				link: "/users"
			},
			{
				title: "Add User",
				requiredPermissions: [],
				link: "/users/add"
			}
		]
	},
	{
		title: "Organizations",
		icon: "material-symbols:groups-outline-rounded",
		requiredPermissions: [],
		link: "/organizations",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Organization List",
				requiredPermissions: [],
				link: "/organizations"
			},
			{
				title: "Add Organization",
				requiredPermissions: [],
				link: "/organizations/add"
			},
			{
				title: "Organization Types",
				requiredPermissions: [],
				link: "/organizations/types"
			}
		]
	},
	{
		title: "Leads",
		icon: "material-symbols:account-box-outline",
		requiredPermissions: [],
		link: "/leads",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Lead List",
				requiredPermissions: [],
				link: "/leads"
			},
			{
				title: "Add Lead",
				requiredPermissions: [],
				link: "/leads/add"
			}
		]
	},

	{
		title: "Shops/Stores",
		icon: "material-symbols:store-outline-rounded",
		requiredPermissions: [],
		link: "/shops",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Shop List",
				requiredPermissions: [],
				link: "/shops"
			},
			{
				title: "Add Shop",
				requiredPermissions: [],
				link: "/shops/add"
			}
		]
	},
	{
		title: "Warehouse",
		icon: "material-symbols:warehouse-outline-rounded",
		requiredPermissions: [],
		link: "/warehouses",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Warehouse List",
				requiredPermissions: [],
				link: "/warehouses"
			},
			{
				title: "Add Warehouse",
				requiredPermissions: [],
				link: "/warehouses/add"
			}
		]
	},
	{
		title: "Suppliers",
		icon: "material-symbols:factory-outline-rounded",
		requiredPermissions: [],
		link: "/suppliers",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Suppliers List",
				requiredPermissions: [],
				link: "/suppliers"
			},
			{
				title: "Add Suppliers",
				requiredPermissions: [],
				link: "/suppliers/add"
			}
		]
	},
	{
		title: "Purchase Orders",
		icon: "material-symbols:local-shipping-outline-rounded",
		requiredPermissions: [],
		link: "/purchase-orders",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Purchase Orders List",
				requiredPermissions: [],
				link: "/purchase-orders"
			},
			{
				title: "Add Purchase Orders",
				requiredPermissions: [],
				link: "/purchase-orders/add"
			}
		]
	},
	{
		title: "Reports",
		icon: "material-symbols:table-chart-view-outline-rounded",
		requiredPermissions: [],
		link: "/reports",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Sales Report",
				requiredPermissions: [],
				link: "/reports/sales"
			},
			{
				title: "Finance",
				requiredPermissions: [],
				link: "/reports/finance"
			}
		]
	},
	{
		title: "Customer Support",
		icon: "material-symbols:headphones-outline-rounded",
		requiredPermissions: [],
		link: "/support",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Help Desk",
				requiredPermissions: [],
				link: "/support/help-desk"
			}
		]
	},
	{
		title: "Staffs",
		icon: "material-symbols:frame-person-outline-rounded",
		requiredPermissions: [],
		link: "/staffs",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Staff List",
				requiredPermissions: [],
				link: "/staffs"
			},
			{
				title: "Teams",
				requiredPermissions: [],
				link: "/teams"
			}
		]
	},
	{
		title: "Settings",
		icon: "material-symbols:settings-outline-rounded",
		requiredPermissions: [],
		link: "/settings",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Business Settings",
				requiredPermissions: [],
				link: "/settings/business"
			},
			{
				title: "Permissions",
				requiredPermissions: [],
				link: "/settings/permissions"
			},
			{
				title: "User Roles",
				requiredPermissions: [],
				link: "/settings/user-roles"
			},
			{
				title: "App Settings",
				requiredPermissions: [],
				link: "/settings/apps"
			},
			{
				title: "Country Settings",
				requiredPermissions: [],
				link: "/settings/countries"
			},
			{
				title: "Payment Settings",
				requiredPermissions: [],
				link: "/settings/payments"
			},
			{
				title: "Tax Settings",
				requiredPermissions: [],
				link: "/settings/tax"
			}
		]
	},
	{
		title: "Logs",
		icon: "material-symbols:nest-clock-farsight-analog-outline-rounded",
		requiredPermissions: [],
		link: "/logs",
		isParent: true
	}
];
