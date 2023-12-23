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
		requiredPermissions: [
			"Order.manage",
			"Order.create",
			"Order.view",
			"Order.update",
			"Order.delete",
			"Order.update-many",
			"Order.delete-many"
		],
		link: "/orders",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Order List",
				requiredPermissions: [
					"Order.manage",
					"Order.create",
					"Order.view",
					"Order.update",
					"Order.delete",
					"Order.update-many",
					"Order.delete-many"
				],
				link: "/orders"
			},
			{
				title: "Add Order",
				requiredPermissions: ["Order.manage", "Order.create"],
				link: "/orders/add"
			}
		]
	},
	{
		title: "Products",
		icon: "material-symbols:package-outline-rounded",
		requiredPermissions: [
			"Product.manage",
			"Product.create",
			"Product.view",
			"Product.update",
			"Product.delete",
			"Product.update-many",
			"Product.delete-many",
			"ProductCategory.manage",
			"ProductCategory.create",
			"ProductCategory.view",
			"ProductCategory.update",
			"ProductCategory.delete",
			"ProductCategory.update-many",
			"ProductCategory.delete-many"
		],
		link: "/products",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Product List",
				requiredPermissions: [
					"Product.manage",
					"Product.create",
					"Product.view",
					"Product.update",
					"Product.delete",
					"Product.update-many",
					"Product.delete-many"
				],
				link: "/products",
				regexp: new RegExp("^/products$")
			},
			{
				title: "Add Product",
				requiredPermissions: ["Product.manage", "Product.create"],
				link: "/products/add"
			},
			{
				title: "Categories",
				requiredPermissions: [
					"ProductCategory.manage",
					"ProductCategory.create",
					"ProductCategory.view",
					"ProductCategory.update",
					"ProductCategory.delete",
					"ProductCategory.update-many",
					"ProductCategory.delete-many"
				],
				link: "/products/categories"
			}
		]
	},
	{
		title: "Services",
		icon: "material-symbols:business-center-outline-rounded",
		requiredPermissions: [
			"Service.manage",
			"Service.create",
			"Service.view",
			"Service.update",
			"Service.delete",
			"Service.update-many",
			"Service.delete-many"
		],
		link: "/services",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Service  List",
				requiredPermissions: [
					"Service.manage",
					"Service.create",
					"Service.view",
					"Service.update",
					"Service.delete",
					"Service.update-many",
					"Service.delete-many"
				],
				link: "/services"
			},
			{
				title: "Add Service",
				requiredPermissions: ["Service.manage", "Service.create"],
				link: "/services/add"
			},
			{
				title: "Categories",
				requiredPermissions: [
					"ServiceCategory.manage",
					"ServiceCategory.create",
					"ServiceCategory.view",
					"ServiceCategory.update",
					"ServiceCategory.delete",
					"ServiceCategory.update-many",
					"ServiceCategory.delete-many"
				],
				link: "/services/categories"
			}
		]
	},
	{
		title: "Promotions",
		icon: "material-symbols:shopping-basket-outline",
		requiredPermissions: [
			"Promotion.manage",
			"Promotion.create",
			"Promotion.view",
			"Promotion.update",
			"Promotion.delete",
			"Promotion.update-many",
			"Promotion.delete-many"
		],
		link: "/promotions",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Promotion List",
				requiredPermissions: [
					"Promotion.manage",
					"Promotion.create",
					"Promotion.view",
					"Promotion.update",
					"Promotion.delete",
					"Promotion.update-many",
					"Promotion.delete-many"
				],
				link: "/promotions"
			},
			{
				title: "Add Promotion",
				requiredPermissions: ["Promotion.manage", "Promotion.create"],
				link: "/promotions/add"
			}
		]
	},
	{
		title: "Users",
		icon: "material-symbols:person-outline-rounded",
		requiredPermissions: [
			"User.manage",
			"User.create",
			"User.view",
			"User.update",
			"User.delete",
			"User.update-many",
			"User.delete-many"
		],
		link: "/users",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "User List",
				requiredPermissions: [
					"User.manage",
					"User.create",
					"User.view",
					"User.update",
					"User.delete",
					"User.update-many",
					"User.delete-many"
				],
				link: "/users"
			},
			{
				title: "Add User",
				requiredPermissions: ["User.manage", "User.create"],
				link: "/users/add"
			}
		]
	},
	{
		title: "Organizations",
		icon: "material-symbols:groups-outline-rounded",
		requiredPermissions: [
			"Organization.manage",
			"Organization.create",
			"Organization.view",
			"Organization.update",
			"Organization.delete",
			"Organization.update-many",
			"Organization.delete-many"
		],
		link: "/organizations",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Organization List",
				requiredPermissions: [
					"Organization.manage",
					"Organization.create",
					"Organization.view",
					"Organization.update",
					"Organization.delete",
					"Organization.update-many",
					"Organization.delete-many"
				],
				link: "/organizations"
			},
			{
				title: "Add Organization",
				requiredPermissions: ["Organization.manage", "Organization.create"],
				link: "/organizations/add"
			},
			{
				title: "Organization Types",
				requiredPermissions: [
					"OrganizationType.manage",
					"OrganizationType.create",
					"OrganizationType.view",
					"OrganizationType.update",
					"OrganizationType.delete",
					"OrganizationType.update-many",
					"OrganizationType.delete-many"
				],
				link: "/organizations/types"
			}
		]
	},
	{
		title: "Leads",
		icon: "material-symbols:account-box-outline",
		requiredPermissions: [
			"Lead.manage",
			"Lead.create",
			"Lead.view",
			"Lead.update",
			"Lead.delete",
			"Lead.update-many",
			"Lead.delete-many"
		],
		link: "/leads",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Lead List",
				requiredPermissions: [
					"Lead.manage",
					"Lead.create",
					"Lead.view",
					"Lead.update",
					"Lead.delete",
					"Lead.update-many",
					"Lead.delete-many"
				],
				link: "/leads"
			},
			{
				title: "Add Lead",
				requiredPermissions: ["Lead.manage", "Lead.create"],
				link: "/leads/add"
			}
		]
	},

	{
		title: "Shops/Stores",
		icon: "material-symbols:store-outline-rounded",
		requiredPermissions: [
			"Shop.manage",
			"Shop.create",
			"Shop.view",
			"Shop.update",
			"Shop.delete",
			"Shop.update-many",
			"Shop.delete-many"
		],
		link: "/shops",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Shop List",
				requiredPermissions: [
					"Shop.manage",
					"Shop.create",
					"Shop.view",
					"Shop.update",
					"Shop.delete",
					"Shop.update-many",
					"Shop.delete-many"
				],
				link: "/shops"
			},
			{
				title: "Add Shop",
				requiredPermissions: ["Shop.manage", "Shop.create"],
				link: "/shops/add"
			}
		]
	},
	{
		title: "Warehouse",
		icon: "material-symbols:warehouse-outline-rounded",
		requiredPermissions: [
			"Warehouse.manage",
			"Warehouse.create",
			"Warehouse.view",
			"Warehouse.update",
			"Warehouse.delete",
			"Warehouse.update-many",
			"Warehouse.delete-many"
		],
		link: "/warehouses",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Warehouse List",
				requiredPermissions: [
					"Warehouse.manage",
					"Warehouse.create",
					"Warehouse.view",
					"Warehouse.update",
					"Warehouse.delete",
					"Warehouse.update-many",
					"Warehouse.delete-many"
				],
				link: "/warehouses"
			},
			{
				title: "Add Warehouse",
				requiredPermissions: ["Warehouse.manage", "Warehouse.create"],
				link: "/warehouses/add"
			}
		]
	},
	{
		title: "Suppliers",
		icon: "material-symbols:factory-outline-rounded",
		requiredPermissions: [
			"Supplier.manage",
			"Supplier.create",
			"Supplier.view",
			"Supplier.update",
			"Supplier.delete",
			"Supplier.update-many",
			"Supplier.delete-many"
		],
		link: "/suppliers",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Suppliers List",
				requiredPermissions: [
					"Supplier.manage",
					"Supplier.create",
					"Supplier.view",
					"Supplier.update",
					"Supplier.delete",
					"Supplier.update-many",
					"Supplier.delete-many"
				],
				link: "/suppliers"
			},
			{
				title: "Add Suppliers",
				requiredPermissions: ["Supplier.manage", "Supplier.create"],
				link: "/suppliers/add"
			}
		]
	},
	{
		title: "Purchase Orders",
		icon: "material-symbols:local-shipping-outline-rounded",
		requiredPermissions: [
			"PurchaseOrder.manage",
			"PurchaseOrder.create",
			"PurchaseOrder.view",
			"PurchaseOrder.update",
			"PurchaseOrder.delete",
			"PurchaseOrder.update-many",
			"PurchaseOrder.delete-many"
		],
		link: "/purchase-orders",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Purchase Orders List",
				requiredPermissions: [
					"PurchaseOrder.manage",
					"PurchaseOrder.create",
					"PurchaseOrder.view",
					"PurchaseOrder.update",
					"PurchaseOrder.delete",
					"PurchaseOrder.update-many",
					"PurchaseOrder.delete-many"
				],
				link: "/purchase-orders"
			},
			{
				title: "Add Purchase Orders",
				requiredPermissions: ["PurchaseOrder.manage", "PurchaseOrder.create", "PurchaseOrder.view"],
				link: "/purchase-orders/add"
			}
		]
	},
	{
		title: "Reports",
		icon: "material-symbols:table-chart-view-outline-rounded",
		requiredPermissions: [
			"Report.manage",
			"Report.create",
			"Report.view",
			"Report.update",
			"Report.delete",
			"Report.update-many",
			"Report.delete-many"
		],
		link: "/reports",
		isParent: true,
		isOpen: atom(false),
		items: [
			{
				title: "Sales Report",
				requiredPermissions: [
					"ReportSales.manage",
					"ReportSales.create",
					"ReportSales.view",
					"ReportSales.update",
					"ReportSales.delete",
					"ReportSales.update-many",
					"ReportSales.delete-many"
				],
				link: "/reports/sales"
			},
			{
				title: "Finance",
				requiredPermissions: [
					"ReportFinance.manage",
					"ReportFinance.create",
					"ReportFinance.view",
					"ReportFinance.update",
					"ReportFinance.delete",
					"ReportFinance.update-many",
					"ReportFinance.delete-many"
				],
				link: "/reports/finance"
			}
		]
	},
	{
		title: "Customer Support",
		icon: "material-symbols:headphones-outline-rounded",
		requiredPermissions: ["CustomerSupport.manage"],
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
		requiredPermissions: [
			"Staff.manage",
			"Staff.create",
			"Staff.view",
			"Staff.update",
			"Staff.delete",
			"Staff.update-many",
			"Staff.delete-many"
		],
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
		requiredPermissions: ["Logs.view"],
		link: "/logs",
		isParent: true
	}
];
