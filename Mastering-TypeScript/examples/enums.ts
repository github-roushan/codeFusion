// Making enums const helps remove the namespace pollution and also 
// replace enums with actual numbers
const enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED,
}

const ord_status = OrderStatus.DELIVERED;
console.log(ord_status);