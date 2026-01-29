/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Restaurant interface
 */
export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  reviews: number;
  deliveryTime: string;
  deliveryFee: number;
  minOrder: number;
  image: string;
  open: boolean;
}

/**
 * Menu item interface
 */
export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  customizable: boolean;
  available: boolean;
}

/**
 * Cart item interface (food order)
 */
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  restaurant: string;
  notes?: string;
  customizations?: Record<string, any>;
}

/**
 * Order interface
 */
export interface Order {
  id: string;
  restaurantId: number;
  restaurantName: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
  status:
    | "pending"
    | "confirmed"
    | "preparing"
    | "ready"
    | "delivering"
    | "delivered";
  deliveryAddress: string;
  driver?: Driver;
  createdAt: string;
  estimatedDeliveryTime: string;
}

/**
 * Driver interface
 */
export interface Driver {
  id: string;
  name: string;
  rating: number;
  phone: string;
  vehicle: string;
}

/**
 * User interface
 */
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  loyaltyPoints: number;
}

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}
