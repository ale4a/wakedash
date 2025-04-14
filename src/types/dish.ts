export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  available: boolean;
}

export interface CartItem extends Dish {
  quantity: number;
}
