import { faker } from "@faker-js/faker";
import {
	BillingCycle,
	DamageLocation,
	DeliveryStatus,
	InventoryLocationType,
	InventoryMovementType,
	OrderStatus,
	PromotionType,
	PublishStatus,
	PurchaseOrderStatus,
	RegionType,
	ReturnStatus,
	TaskReviewStatus,
	TaskStatus,
	TopupMethod,
	TransactionStatus,
	UserStatus,
	WalletTransactionType,
	Weekday,
	WithdrawalStatus
} from "@prisma/client";

export function fakeUser() {
	return {
		updatedAt: faker.date.anytime(),
		email: faker.internet.email(),
		verificationToken: undefined,
		verificationExpiry: undefined,
		newEmail: undefined,
		name: undefined,
		firstName: undefined,
		lastName: undefined,
		phone: undefined,
		password: faker.lorem.words(5),
		passwordChangeToken: undefined,
		passwordChangeExpiry: undefined
	};
}
export function fakeUserComplete() {
	return {
		id: faker.string.uuid(),
		status: UserStatus.Active,
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		email: faker.internet.email(),
		emailVerified: false,
		verificationToken: undefined,
		verificationExpiry: undefined,
		newEmail: undefined,
		name: undefined,
		firstName: undefined,
		lastName: undefined,
		phone: undefined,
		password: faker.lorem.words(5),
		passwordChangeToken: undefined,
		passwordChangeExpiry: undefined
	};
}
export function fakeUserSetting() {
	return {
		defaultUserRole: undefined,
		updatedAt: faker.date.anytime()
	};
}
export function fakeUserSettingComplete() {
	return {
		id: faker.string.uuid(),
		userId: faker.string.uuid(),
		defaultUserRole: undefined,
		createdAt: new Date(),
		updatedAt: faker.date.anytime()
	};
}
export function fakeUserTag() {
	return {
		name: faker.person.fullName(),
		updatedAt: faker.date.anytime()
	};
}
export function fakeUserTagComplete() {
	return {
		id: faker.string.uuid(),
		name: faker.person.fullName(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime()
	};
}
export function fakeAddress() {
	return {
		updatedAt: faker.date.anytime(),
		name: undefined,
		firstName: undefined,
		lastName: undefined,
		address1: faker.lorem.words(5),
		address2: undefined,
		city: faker.lorem.words(5),
		state: faker.lorem.words(5),
		postalCode: faker.lorem.words(5),
		country: faker.lorem.words(5),
		phone: undefined,
		email: undefined,
		latitude: undefined,
		longitude: undefined
	};
}
export function fakeAddressComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: undefined,
		firstName: undefined,
		lastName: undefined,
		address1: faker.lorem.words(5),
		address2: undefined,
		city: faker.lorem.words(5),
		state: faker.lorem.words(5),
		postalCode: faker.lorem.words(5),
		country: faker.lorem.words(5),
		phone: undefined,
		email: undefined,
		latitude: undefined,
		longitude: undefined
	};
}
export function fakeUserAddress() {
	return {
		updatedAt: faker.date.anytime()
	};
}
export function fakeUserAddressComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		userId: faker.string.uuid(),
		addressId: faker.string.uuid(),
		isDefault: false
	};
}
export function fakeSession() {
	return {
		updatedAt: faker.date.anytime(),
		hashedRt: faker.lorem.words(5),
		hashedSn: faker.lorem.words(5),
		ipAddress: undefined,
		userAgent: undefined,
		expirationDate: faker.date.anytime()
	};
}
export function fakeSessionComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		userId: undefined,
		hashedRt: faker.lorem.words(5),
		hashedSn: faker.lorem.words(5),
		ipAddress: undefined,
		userAgent: undefined,
		expirationDate: faker.date.anytime()
	};
}
export function fakeRole() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		description: undefined,
		key: faker.lorem.words(5)
	};
}
export function fakeRoleComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		description: undefined,
		key: faker.lorem.words(5),
		organizationId: faker.string.uuid()
	};
}
export function fakePermission() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		description: undefined,
		key: faker.lorem.words(5)
	};
}
export function fakePermissionComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		description: undefined,
		key: faker.lorem.words(5)
	};
}
export function fakeRolePermission() {
	return {
		updatedAt: faker.date.anytime()
	};
}
export function fakeRolePermissionComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		roleId: faker.string.uuid(),
		permissionId: faker.string.uuid()
	};
}
export function fakeOrganizationType() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName()
	};
}
export function fakeOrganizationTypeComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		ownedByOrganizationId: undefined
	};
}
export function fakeOrganization() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		description: undefined,
		isMainOrganization: undefined
	};
}
export function fakeOrganizationComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		description: undefined,
		organizationTypeId: faker.string.uuid(),
		parentOrganizationId: undefined,
		isMainOrganization: undefined
	};
}
export function fakeOrganizationTag() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName()
	};
}
export function fakeOrganizationTagComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName()
	};
}
export function fakeOrganizationAddress() {
	return {
		updatedAt: faker.date.anytime()
	};
}
export function fakeOrganizationAddressComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		organizationId: faker.string.uuid(),
		addressId: faker.string.uuid(),
		isDefault: false
	};
}
export function fakeOrganizationPermission() {
	return {
		updatedAt: faker.date.anytime()
	};
}
export function fakeOrganizationPermissionComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		organizationId: faker.string.uuid(),
		permissionId: faker.string.uuid()
	};
}
export function fakeOrder() {
	return {
		updatedAt: faker.date.anytime(),
		status: faker.helpers.arrayElement([
			OrderStatus.Open,
			OrderStatus.Pending,
			OrderStatus.PendingApproval,
			OrderStatus.Approved,
			OrderStatus.PendingAcceptence,
			OrderStatus.Accepted,
			OrderStatus.NotStarted,
			OrderStatus.Processing,
			OrderStatus.InProgress,
			OrderStatus.Incomplete,
			OrderStatus.Completed,
			OrderStatus.Cancelled,
			OrderStatus.Rejected,
			OrderStatus.Declined,
			OrderStatus.Delivered
		] as const)
	};
}
export function fakeOrderComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		status: faker.helpers.arrayElement([
			OrderStatus.Open,
			OrderStatus.Pending,
			OrderStatus.PendingApproval,
			OrderStatus.Approved,
			OrderStatus.PendingAcceptence,
			OrderStatus.Accepted,
			OrderStatus.NotStarted,
			OrderStatus.Processing,
			OrderStatus.InProgress,
			OrderStatus.Incomplete,
			OrderStatus.Completed,
			OrderStatus.Cancelled,
			OrderStatus.Rejected,
			OrderStatus.Declined,
			OrderStatus.Delivered
		] as const),
		userId: faker.string.uuid()
	};
}
export function fakeOrderReview() {
	return {
		updatedAt: faker.date.anytime(),
		feedback: undefined,
		rating: faker.number.int()
	};
}
export function fakeOrderReviewComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		feedback: undefined,
		rating: faker.number.int(),
		orderId: faker.string.uuid(),
		userId: faker.string.uuid()
	};
}
export function fakeProduct() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		status: faker.helpers.arrayElement([
			PublishStatus.Publish,
			PublishStatus.Draft,
			PublishStatus.Archived,
			PublishStatus.Disabled
		] as const),
		price: faker.number.int()
	};
}
export function fakeProductComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		status: faker.helpers.arrayElement([
			PublishStatus.Publish,
			PublishStatus.Draft,
			PublishStatus.Archived,
			PublishStatus.Disabled
		] as const),
		price: faker.number.int()
	};
}
export function fakeProductItem() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		sku: faker.lorem.words(5),
		price: faker.number.int(),
		gtin8: undefined,
		gtin12: undefined,
		gtin13: undefined,
		gtin14: undefined,
		height: undefined,
		width: undefined,
		depth: undefined,
		netWeight: undefined,
		grossWeight: undefined,
		packagingCount: undefined
	};
}
export function fakeProductItemComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		sku: faker.lorem.words(5),
		productId: faker.string.uuid(),
		price: faker.number.int(),
		gtin8: undefined,
		gtin12: undefined,
		gtin13: undefined,
		gtin14: undefined,
		height: undefined,
		width: undefined,
		depth: undefined,
		dimensionUnitId: undefined,
		netWeight: undefined,
		grossWeight: undefined,
		weightUnitId: undefined,
		packagingCount: undefined,
		packagingUnitId: undefined
	};
}
export function fakeProductCategory() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		description: undefined
	};
}
export function fakeProductCategoryComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		description: undefined
	};
}
export function fakeProductTag() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName()
	};
}
export function fakeProductTagComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName()
	};
}
export function fakeTieredPricing() {
	return {
		updatedAt: faker.date.anytime(),
		minQty: faker.number.int(),
		maxQty: undefined,
		price: faker.number.int()
	};
}
export function fakeTieredPricingComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		productItemId: faker.string.uuid(),
		minQty: faker.number.int(),
		maxQty: undefined,
		price: faker.number.int()
	};
}
export function fakeOrderProductItem() {
	return {
		updatedAt: faker.date.anytime(),
		quantity: faker.number.int(),
		unitPrice: faker.number.int(),
		totalAmount: faker.number.int(),
		discount: undefined
	};
}
export function fakeOrderProductItemComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		orderId: faker.string.uuid(),
		skuId: faker.string.uuid(),
		quantity: faker.number.int(),
		unitPrice: faker.number.int(),
		totalAmount: faker.number.int(),
		discount: undefined
	};
}
export function fakeProductReview() {
	return {
		updatedAt: faker.date.anytime(),
		feedback: undefined,
		rating: faker.number.int()
	};
}
export function fakeProductReviewComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		feedback: undefined,
		rating: faker.number.int(),
		productId: faker.string.uuid(),
		userId: faker.string.uuid()
	};
}
export function fakeService() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		code: faker.lorem.words(5),
		price: faker.number.int(),
		active: faker.datatype.boolean(),
		description: undefined
	};
}
export function fakeServiceComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		code: faker.lorem.words(5),
		price: faker.number.int(),
		active: faker.datatype.boolean(),
		description: undefined
	};
}
export function fakeServiceCategory() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		description: undefined
	};
}
export function fakeServiceCategoryComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		description: undefined
	};
}
export function fakeServiceTag() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName()
	};
}
export function fakeServiceTagComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName()
	};
}
export function fakeServiceVariation() {
	return {
		updatedAt: faker.date.anytime()
	};
}
export function fakeServiceVariationComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime()
	};
}
export function fakeOrderService() {
	return {
		updatedAt: faker.date.anytime(),
		quantity: faker.number.int(),
		unitPrice: faker.number.int(),
		totalAmount: faker.number.int(),
		discount: undefined,
		duration: undefined,
		deliverable: undefined,
		deliveryDate: undefined
	};
}
export function fakeOrderServiceComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		orderId: faker.string.uuid(),
		serviceId: faker.string.uuid(),
		quantity: faker.number.int(),
		unitPrice: faker.number.int(),
		totalAmount: faker.number.int(),
		discount: undefined,
		duration: undefined,
		deliverable: undefined,
		deliveryDate: undefined
	};
}
export function fakeBillingAddress() {
	return {
		updatedAt: faker.date.anytime()
	};
}
export function fakeBillingAddressComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		addressId: faker.string.uuid(),
		orderId: faker.string.uuid()
	};
}
export function fakeShippingAddress() {
	return {
		updatedAt: faker.date.anytime(),
		name: undefined
	};
}
export function fakeShippingAddressComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: undefined,
		addressId: faker.string.uuid(),
		orderId: faker.string.uuid()
	};
}
export function fakeDelivery() {
	return {
		updatedAt: faker.date.anytime(),
		deliveryDate: undefined,
		status: faker.helpers.arrayElement([
			DeliveryStatus.Pending,
			DeliveryStatus.InTransit,
			DeliveryStatus.Delivered,
			DeliveryStatus.Failed,
			DeliveryStatus.Returned,
			DeliveryStatus.Cancelled
		] as const),
		trackingNumber: undefined,
		carrier: undefined,
		notes: undefined
	};
}
export function fakeDeliveryComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		deliveryDate: undefined,
		status: faker.helpers.arrayElement([
			DeliveryStatus.Pending,
			DeliveryStatus.InTransit,
			DeliveryStatus.Delivered,
			DeliveryStatus.Failed,
			DeliveryStatus.Returned,
			DeliveryStatus.Cancelled
		] as const),
		trackingNumber: undefined,
		carrier: undefined,
		notes: undefined,
		orderId: faker.string.uuid()
	};
}
export function fakeDeliveryProductItem() {
	return {
		updatedAt: faker.date.anytime(),
		quantity: faker.number.int()
	};
}
export function fakeDeliveryProductItemComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		deliveryId: faker.string.uuid(),
		productItemId: faker.string.uuid(),
		quantity: faker.number.int()
	};
}
export function fakeReturn() {
	return {
		updatedAt: faker.date.anytime(),
		returnDate: faker.date.anytime(),
		status: faker.helpers.arrayElement([
			ReturnStatus.Pending,
			ReturnStatus.Received,
			ReturnStatus.Refunded,
			ReturnStatus.Rejected,
			ReturnStatus.Completed
		] as const),
		reason: undefined,
		notes: undefined
	};
}
export function fakeReturnComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		returnDate: faker.date.anytime(),
		status: faker.helpers.arrayElement([
			ReturnStatus.Pending,
			ReturnStatus.Received,
			ReturnStatus.Refunded,
			ReturnStatus.Rejected,
			ReturnStatus.Completed
		] as const),
		reason: undefined,
		notes: undefined,
		orderId: faker.string.uuid()
	};
}
export function fakeReturnProductItem() {
	return {
		updatedAt: faker.date.anytime(),
		quantity: faker.number.int()
	};
}
export function fakeReturnProductItemComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		returnId: faker.string.uuid(),
		productItemId: faker.string.uuid(),
		quantity: faker.number.int()
	};
}
export function fakeTask() {
	return {
		updatedAt: faker.date.anytime(),
		status: faker.helpers.arrayElement([
			TaskStatus.Open,
			TaskStatus.Pending,
			TaskStatus.PendingApproval,
			TaskStatus.Approved,
			TaskStatus.PendingAcceptence,
			TaskStatus.Accepted,
			TaskStatus.NotStarted,
			TaskStatus.Processing,
			TaskStatus.InProgress,
			TaskStatus.Incomplete,
			TaskStatus.Completed,
			TaskStatus.Cancelled,
			TaskStatus.Rejected,
			TaskStatus.Declined,
			TaskStatus.Delivered
		] as const),
		description: undefined,
		dueDate: undefined,
		startTime: undefined,
		endTime: undefined,
		totalDuration: undefined,
		updatedPrice: undefined
	};
}
export function fakeTaskComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		status: faker.helpers.arrayElement([
			TaskStatus.Open,
			TaskStatus.Pending,
			TaskStatus.PendingApproval,
			TaskStatus.Approved,
			TaskStatus.PendingAcceptence,
			TaskStatus.Accepted,
			TaskStatus.NotStarted,
			TaskStatus.Processing,
			TaskStatus.InProgress,
			TaskStatus.Incomplete,
			TaskStatus.Completed,
			TaskStatus.Cancelled,
			TaskStatus.Rejected,
			TaskStatus.Declined,
			TaskStatus.Delivered
		] as const),
		assignedToId: undefined,
		orderServiceId: undefined,
		description: undefined,
		dueDate: undefined,
		startTime: undefined,
		endTime: undefined,
		totalDuration: undefined,
		updatedPrice: undefined
	};
}
export function fakeTaskReview() {
	return {
		updatedAt: faker.date.anytime(),
		feedback: undefined,
		rating: faker.number.int(),
		status: faker.helpers.arrayElement([
			TaskReviewStatus.Approved,
			TaskReviewStatus.Rejected,
			TaskReviewStatus.Amended,
			TaskReviewStatus.Pending
		] as const)
	};
}
export function fakeTaskReviewComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		feedback: undefined,
		rating: faker.number.int(),
		status: faker.helpers.arrayElement([
			TaskReviewStatus.Approved,
			TaskReviewStatus.Rejected,
			TaskReviewStatus.Amended,
			TaskReviewStatus.Pending
		] as const),
		taskId: faker.string.uuid(),
		userId: faker.string.uuid()
	};
}
export function fakeTimeInterval() {
	return {
		updatedAt: faker.date.anytime(),
		startTime: faker.date.anytime(),
		endTime: faker.date.anytime()
	};
}
export function fakeTimeIntervalComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		taskId: faker.string.uuid(),
		startTime: faker.date.anytime(),
		endTime: faker.date.anytime()
	};
}
export function fakeWarehouse() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName()
	};
}
export function fakeWarehouseComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName()
	};
}
export function fakeWarehouseAddress() {
	return {
		updatedAt: faker.date.anytime()
	};
}
export function fakeWarehouseAddressComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		warehouseId: faker.string.uuid(),
		addressId: faker.string.uuid(),
		isDefault: false
	};
}
export function fakeProductItemInventory() {
	return {
		updatedAt: faker.date.anytime(),
		locationId: faker.lorem.words(5),
		locationType: faker.helpers.arrayElement([
			InventoryLocationType.Warehouse,
			InventoryLocationType.Shop
		] as const),
		stock: faker.number.int(),
		minimumStock: undefined
	};
}
export function fakeProductItemInventoryComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		productItemId: faker.string.uuid(),
		locationId: faker.lorem.words(5),
		locationType: faker.helpers.arrayElement([
			InventoryLocationType.Warehouse,
			InventoryLocationType.Shop
		] as const),
		stock: faker.number.int(),
		minimumStock: undefined
	};
}
export function fakeInventoryMovement() {
	return {
		updatedAt: faker.date.anytime(),
		type: faker.helpers.arrayElement([
			InventoryMovementType.Restock,
			InventoryMovementType.Sale,
			InventoryMovementType.Return,
			InventoryMovementType.Transfer,
			InventoryMovementType.Adjustment,
			InventoryMovementType.Damage
		] as const),
		quantity: faker.number.int(),
		notes: undefined,
		fromLocationId: undefined,
		fromLocationType: undefined,
		toLocationId: undefined,
		toLocationType: undefined,
		orderId: undefined
	};
}
export function fakeInventoryMovementComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		type: faker.helpers.arrayElement([
			InventoryMovementType.Restock,
			InventoryMovementType.Sale,
			InventoryMovementType.Return,
			InventoryMovementType.Transfer,
			InventoryMovementType.Adjustment,
			InventoryMovementType.Damage
		] as const),
		quantity: faker.number.int(),
		date: new Date(),
		notes: undefined,
		productItemId: faker.string.uuid(),
		fromLocationId: undefined,
		fromLocationType: undefined,
		toLocationId: undefined,
		toLocationType: undefined,
		orderId: undefined
	};
}
export function fakeDamagedProductItem() {
	return {
		updatedAt: faker.date.anytime(),
		quantity: faker.number.int(),
		notes: undefined,
		location: faker.helpers.arrayElement([
			DamageLocation.InStore,
			DamageLocation.DuringDelivery,
			DamageLocation.DuringTransfer,
			DamageLocation.DuringIncomingDelivery,
			DamageLocation.Other
		] as const)
	};
}
export function fakeDamagedProductItemComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		productItemId: faker.string.uuid(),
		warehouseId: faker.string.uuid(),
		deliveryId: undefined,
		inventoryMovementId: undefined,
		quantity: faker.number.int(),
		date: new Date(),
		notes: undefined,
		location: faker.helpers.arrayElement([
			DamageLocation.InStore,
			DamageLocation.DuringDelivery,
			DamageLocation.DuringTransfer,
			DamageLocation.DuringIncomingDelivery,
			DamageLocation.Other
		] as const),
		reporterId: undefined,
		incomingDeliveryId: undefined
	};
}
export function fakeShop() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName()
	};
}
export function fakeShopComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		isActive: true
	};
}
export function fakeShopAddress() {
	return {
		updatedAt: faker.date.anytime()
	};
}
export function fakeShopAddressComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		shopId: faker.string.uuid(),
		addressId: faker.string.uuid(),
		isDefault: false
	};
}
export function fakeOpeningHours() {
	return {
		updatedAt: faker.date.anytime(),
		day: faker.helpers.arrayElement([
			Weekday.Monday,
			Weekday.Tuesday,
			Weekday.Wednesday,
			Weekday.Thursday,
			Weekday.Friday,
			Weekday.Saturday,
			Weekday.Sunday
		] as const),
		openAt: faker.lorem.words(5),
		closeAt: faker.lorem.words(5)
	};
}
export function fakeOpeningHoursComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		day: faker.helpers.arrayElement([
			Weekday.Monday,
			Weekday.Tuesday,
			Weekday.Wednesday,
			Weekday.Thursday,
			Weekday.Friday,
			Weekday.Saturday,
			Weekday.Sunday
		] as const),
		openAt: faker.lorem.words(5),
		closeAt: faker.lorem.words(5),
		shopId: faker.string.uuid()
	};
}
export function fakeSupplier() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		contactName: undefined,
		phone: undefined,
		email: undefined,
		address: undefined,
		notes: undefined
	};
}
export function fakeSupplierComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		contactName: undefined,
		phone: undefined,
		email: undefined,
		address: undefined,
		notes: undefined
	};
}
export function fakeSupplierTag() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName()
	};
}
export function fakeSupplierTagComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName()
	};
}
export function fakePurchaseOrder() {
	return {
		updatedAt: faker.date.anytime(),
		expectedDate: undefined,
		status: faker.helpers.arrayElement([
			PurchaseOrderStatus.Ordered,
			PurchaseOrderStatus.PartiallyReceived,
			PurchaseOrderStatus.FullyReceived,
			PurchaseOrderStatus.Cancelled
		] as const)
	};
}
export function fakePurchaseOrderComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		supplierId: faker.string.uuid(),
		orderDate: new Date(),
		expectedDate: undefined,
		status: faker.helpers.arrayElement([
			PurchaseOrderStatus.Ordered,
			PurchaseOrderStatus.PartiallyReceived,
			PurchaseOrderStatus.FullyReceived,
			PurchaseOrderStatus.Cancelled
		] as const)
	};
}
export function fakePurchaseOrderItem() {
	return {
		updatedAt: faker.date.anytime(),
		orderedQuantity: faker.number.int(),
		unitPrice: faker.number.int()
	};
}
export function fakePurchaseOrderItemComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		purchaseOrderId: faker.string.uuid(),
		productItemId: faker.string.uuid(),
		orderedQuantity: faker.number.int(),
		receivedQuantity: 0,
		unitPrice: faker.number.int()
	};
}
export function fakeIncomingDelivery() {
	return {
		updatedAt: faker.date.anytime()
	};
}
export function fakeIncomingDeliveryComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		purchaseOrderId: faker.string.uuid(),
		warehouseId: faker.string.uuid(),
		deliveryDate: new Date()
	};
}
export function fakeIncomingDeliveryItem() {
	return {
		updatedAt: faker.date.anytime(),
		quantity: faker.number.int()
	};
}
export function fakeIncomingDeliveryItemComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		incomingDeliveryId: faker.string.uuid(),
		productItemId: faker.string.uuid(),
		quantity: faker.number.int()
	};
}
export function fakePromotion() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		description: undefined,
		type: faker.helpers.arrayElement([
			PromotionType.ProductFixedPriceDiscount,
			PromotionType.ProductFixedPrice,
			PromotionType.ProductPercentageDiscount,
			PromotionType.OrderFixedPriceDiscount,
			PromotionType.OrderPercentageDiscount,
			PromotionType.FreeGift,
			PromotionType.Bundle
		] as const),
		value: faker.number.float(),
		isUnlimited: faker.datatype.boolean(),
		maxUsage: undefined,
		startDate: undefined,
		endDate: undefined,
		couponCode: undefined
	};
}
export function fakePromotionComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		description: undefined,
		type: faker.helpers.arrayElement([
			PromotionType.ProductFixedPriceDiscount,
			PromotionType.ProductFixedPrice,
			PromotionType.ProductPercentageDiscount,
			PromotionType.OrderFixedPriceDiscount,
			PromotionType.OrderPercentageDiscount,
			PromotionType.FreeGift,
			PromotionType.Bundle
		] as const),
		value: faker.number.float(),
		isUnlimited: faker.datatype.boolean(),
		maxUsage: undefined,
		startDate: undefined,
		endDate: undefined,
		couponCode: undefined,
		bundleId: undefined
	};
}
export function fakePromotionCondition() {
	return {
		updatedAt: faker.date.anytime(),
		minOrderTotal: undefined,
		limit: undefined
	};
}
export function fakePromotionConditionComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		promotionId: faker.string.uuid(),
		minOrderTotal: undefined,
		limit: undefined,
		orderId: undefined
	};
}
export function fakePromotionUsage() {
	return {
		updatedAt: faker.date.anytime()
	};
}
export function fakePromotionUsageComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		promotionId: faker.string.uuid(),
		userId: undefined,
		organizationId: undefined,
		usageDate: new Date()
	};
}
export function fakePromotionFreeGift() {
	return {
		updatedAt: faker.date.anytime(),
		quantity: faker.number.int()
	};
}
export function fakePromotionFreeGiftComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		promotionId: faker.string.uuid(),
		quantity: faker.number.int(),
		productItemId: faker.string.uuid()
	};
}
export function fakePromotionBundle() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		price: undefined
	};
}
export function fakePromotionBundleComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		price: undefined
	};
}
export function fakePromotionBundleItem() {
	return {
		updatedAt: faker.date.anytime(),
		price: undefined,
		quantity: faker.number.int()
	};
}
export function fakePromotionBundleItemComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		bundleId: faker.string.uuid(),
		productItemId: faker.string.uuid(),
		price: undefined,
		quantity: faker.number.int()
	};
}
export function fakeLead() {
	return {
		updatedAt: faker.date.anytime(),
		name: undefined,
		firstName: undefined,
		lastName: undefined,
		email: undefined,
		phone: undefined,
		company: undefined
	};
}
export function fakeLeadComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: undefined,
		firstName: undefined,
		lastName: undefined,
		email: undefined,
		phone: undefined,
		company: undefined,
		createdByUserId: undefined
	};
}
export function fakeLeadAddress() {
	return {
		updatedAt: faker.date.anytime()
	};
}
export function fakeLeadAddressComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		leadId: faker.string.uuid(),
		addressId: faker.string.uuid(),
		isDefault: false
	};
}
export function fakeRegion() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		type: faker.helpers.arrayElement([
			RegionType.Country,
			RegionType.State,
			RegionType.City,
			RegionType.Custom
		] as const),
		description: undefined,
		boundary: undefined
	};
}
export function fakeRegionComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		type: faker.helpers.arrayElement([
			RegionType.Country,
			RegionType.State,
			RegionType.City,
			RegionType.Custom
		] as const),
		description: undefined,
		boundary: undefined,
		parentId: undefined
	};
}
export function fakeCart() {
	return {
		updatedAt: faker.date.anytime()
	};
}
export function fakeCartComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		userId: faker.string.uuid()
	};
}
export function fakeCartItem() {
	return {
		updatedAt: faker.date.anytime(),
		quantity: faker.number.int()
	};
}
export function fakeCartItemComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		cartId: faker.string.uuid(),
		productItemId: faker.string.uuid(),
		quantity: faker.number.int()
	};
}
export function fakeBank() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		countryCode: faker.lorem.words(5),
		swiftCode: faker.lorem.words(5),
		searchString: undefined
	};
}
export function fakeBankComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		countryCode: faker.lorem.words(5),
		swiftCode: faker.lorem.words(5),
		searchString: undefined
	};
}
export function fakeBankAccount() {
	return {
		updatedAt: faker.date.anytime(),
		accountNumber: faker.lorem.words(5),
		alias: faker.lorem.words(5),
		accountName: faker.lorem.words(5),
		beneficiaryId: undefined
	};
}
export function fakeBankAccountComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		accountNumber: faker.lorem.words(5),
		alias: faker.lorem.words(5),
		accountName: faker.lorem.words(5),
		beneficiaryId: undefined,
		bankId: faker.string.uuid(),
		userId: undefined,
		organizationId: undefined,
		default: false
	};
}
export function fakeWallet() {
	return {
		updatedAt: faker.date.anytime()
	};
}
export function fakeWalletComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		balance: 0,
		userId: undefined,
		organizationId: undefined
	};
}
export function fakeWalletTopup() {
	return {
		updatedAt: faker.date.anytime(),
		amount: faker.number.int(),
		date: undefined,
		ref: undefined,
		proof: undefined,
		method: faker.helpers.arrayElement([
			TopupMethod.CashDeposit,
			TopupMethod.BankTransfer,
			TopupMethod.PaymentGateway
		] as const)
	};
}
export function fakeWalletTopupComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		walletId: faker.string.uuid(),
		amount: faker.number.int(),
		userId: undefined,
		date: undefined,
		ref: undefined,
		proof: undefined,
		method: faker.helpers.arrayElement([
			TopupMethod.CashDeposit,
			TopupMethod.BankTransfer,
			TopupMethod.PaymentGateway
		] as const)
	};
}
export function fakeWalletWithdrawalRequest() {
	return {
		updatedAt: faker.date.anytime(),
		amount: faker.number.int(),
		status: faker.helpers.arrayElement([
			WithdrawalStatus.Pending,
			WithdrawalStatus.Approved,
			WithdrawalStatus.Rejected,
			WithdrawalStatus.Completed
		] as const)
	};
}
export function fakeWalletWithdrawalRequestComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		walletId: faker.string.uuid(),
		bankAccountId: faker.string.uuid(),
		amount: faker.number.int(),
		status: faker.helpers.arrayElement([
			WithdrawalStatus.Pending,
			WithdrawalStatus.Approved,
			WithdrawalStatus.Rejected,
			WithdrawalStatus.Completed
		] as const),
		userId: undefined
	};
}
export function fakeWalletTransaction() {
	return {
		updatedAt: faker.date.anytime(),
		amount: faker.number.int(),
		transactionType: faker.helpers.arrayElement([
			WalletTransactionType.Payment,
			WalletTransactionType.Topup,
			WalletTransactionType.Withdrawal,
			WalletTransactionType.Invoice
		] as const),
		status: faker.helpers.arrayElement([
			TransactionStatus.Processing,
			TransactionStatus.Success,
			TransactionStatus.Failed
		] as const)
	};
}
export function fakeWalletTransactionComplete() {
	return {
		id: faker.number.int(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		senderWalletId: undefined,
		recipientWalletId: faker.string.uuid(),
		amount: faker.number.int(),
		transactionType: faker.helpers.arrayElement([
			WalletTransactionType.Payment,
			WalletTransactionType.Topup,
			WalletTransactionType.Withdrawal,
			WalletTransactionType.Invoice
		] as const),
		status: faker.helpers.arrayElement([
			TransactionStatus.Processing,
			TransactionStatus.Success,
			TransactionStatus.Failed
		] as const),
		topupId: undefined,
		withdrawalId: undefined
	};
}
export function fakeSubscription() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		code: faker.lorem.words(5),
		price: faker.number.int(),
		active: faker.datatype.boolean(),
		description: undefined
	};
}
export function fakeSubscriptionComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		code: faker.lorem.words(5),
		price: faker.number.int(),
		active: faker.datatype.boolean(),
		description: undefined
	};
}
export function fakeSubscriptionFeature() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		description: undefined
	};
}
export function fakeSubscriptionFeatureComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		description: undefined,
		subscriptionId: faker.string.uuid()
	};
}
export function fakeUserSubscription() {
	return {
		updatedAt: faker.date.anytime(),
		userId: faker.lorem.words(5),
		endDate: undefined,
		currentStartDate: faker.date.anytime(),
		currentEndDate: faker.date.anytime(),
		active: faker.datatype.boolean(),
		billingCycle: faker.helpers.arrayElement([
			BillingCycle.Monthly,
			BillingCycle.Quarterly,
			BillingCycle.Annually,
			BillingCycle.Custom
		] as const),
		customBillingDays: undefined,
		customBillingMonths: undefined
	};
}
export function fakeUserSubscriptionComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		userId: faker.lorem.words(5),
		subscriptionId: faker.string.uuid(),
		startDate: new Date(),
		endDate: undefined,
		currentStartDate: faker.date.anytime(),
		currentEndDate: faker.date.anytime(),
		active: faker.datatype.boolean(),
		paymentMethodId: undefined,
		billingCycle: faker.helpers.arrayElement([
			BillingCycle.Monthly,
			BillingCycle.Quarterly,
			BillingCycle.Annually,
			BillingCycle.Custom
		] as const),
		customBillingDays: undefined,
		customBillingMonths: undefined
	};
}
export function fakePaymentMethod() {
	return {
		updatedAt: faker.date.anytime(),
		type: faker.lorem.words(5),
		ref: undefined,
		details: undefined
	};
}
export function fakePaymentMethodComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		type: faker.lorem.words(5),
		ref: undefined,
		details: undefined,
		userId: faker.string.uuid()
	};
}
export function fakeTaxConfiguration() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		percentage: faker.number.float(),
		description: undefined
	};
}
export function fakeTaxConfigurationComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName(),
		percentage: faker.number.float(),
		description: undefined,
		active: true
	};
}
export function fakeProductTax() {
	return {
		updatedAt: faker.date.anytime()
	};
}
export function fakeProductTaxComplete() {
	return {
		productId: faker.string.uuid(),
		taxConfigurationId: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime()
	};
}
export function fakeImage() {
	return {
		updatedAt: faker.date.anytime(),
		path: faker.lorem.words(5),
		sortOrder: undefined
	};
}
export function fakeImageComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		path: faker.lorem.words(5),
		sortOrder: undefined,
		productId: undefined,
		productItemId: undefined,
		orderProductItemId: undefined,
		serviceId: undefined,
		orderServiceId: undefined,
		warehouseId: undefined,
		damagedProductItemId: undefined,
		shopId: undefined
	};
}
export function fakeSystemSettings() {
	return {
		key: faker.lorem.words(5),
		value: faker.lorem.words(5),
		updatedAt: faker.date.anytime()
	};
}
export function fakeSystemSettingsComplete() {
	return {
		id: faker.string.uuid(),
		key: faker.lorem.words(5),
		value: faker.lorem.words(5),
		createdAt: new Date(),
		updatedAt: faker.date.anytime()
	};
}
export function fakeFiles() {
	return {
		updatedAt: faker.date.anytime(),
		resourceName: faker.lorem.words(5),
		resourceId: faker.lorem.words(5),
		filePath: faker.lorem.words(5),
		fileType: faker.lorem.words(5)
	};
}
export function fakeFilesComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		resourceName: faker.lorem.words(5),
		resourceId: faker.lorem.words(5),
		filePath: faker.lorem.words(5),
		fileType: faker.lorem.words(5)
	};
}
export function fakeDepartment() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName()
	};
}
export function fakeDepartmentComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName()
	};
}
export function fakeEstimates() {
	return {
		updatedAt: faker.date.anytime(),
		runningNumber: faker.number.int()
	};
}
export function fakeEstimatesComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		runningNumber: faker.number.int()
	};
}
export function fakeInvoice() {
	return {
		updatedAt: faker.date.anytime(),
		runningNumber: faker.number.int()
	};
}
export function fakeInvoiceComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		runningNumber: faker.number.int()
	};
}
export function fakePurchaseBill() {
	return {
		updatedAt: faker.date.anytime(),
		runningNumber: faker.number.int()
	};
}
export function fakePurchaseBillComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		runningNumber: faker.number.int()
	};
}
export function fakeAccount() {
	return {
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName()
	};
}
export function fakeAccountComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		name: faker.person.fullName()
	};
}
export function fakeCountry() {
	return {
		updatedAt: faker.date.anytime(),
		alpha2: faker.lorem.words(5),
		alpha3: faker.lorem.words(5),
		defaultLocale: faker.lorem.words(5),
		emoji: faker.lorem.words(5),
		currencyCode: faker.lorem.words(5),
		continent: faker.lorem.words(5),
		region: faker.lorem.words(5)
	};
}
export function fakeCountryComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		alpha2: faker.lorem.words(5),
		alpha3: faker.lorem.words(5),
		locales: [],
		defaultLocale: faker.lorem.words(5),
		languages: [],
		emoji: faker.lorem.words(5),
		currencyCode: faker.lorem.words(5),
		continent: faker.lorem.words(5),
		region: faker.lorem.words(5)
	};
}
export function fakeCurrency() {
	return {
		updatedAt: faker.date.anytime(),
		code: faker.lorem.words(5),
		name: faker.person.fullName(),
		symbol: faker.lorem.words(5),
		exchangeRate: faker.number.float(),
		isBaseCurrency: faker.datatype.boolean()
	};
}
export function fakeCurrencyComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		code: faker.lorem.words(5),
		name: faker.person.fullName(),
		symbol: faker.lorem.words(5),
		exchangeRate: faker.number.float(),
		isBaseCurrency: faker.datatype.boolean()
	};
}
export function fakeUnit() {
	return {
		updatedAt: faker.date.anytime(),
		code: faker.lorem.words(5),
		symbol: faker.lorem.words(5),
		type: undefined,
		description: undefined
	};
}
export function fakeUnitComplete() {
	return {
		id: faker.string.uuid(),
		createdAt: new Date(),
		updatedAt: faker.date.anytime(),
		code: faker.lorem.words(5),
		symbol: faker.lorem.words(5),
		type: undefined,
		description: undefined
	};
}
