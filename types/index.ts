type Metadata = {
  userId: string;
  orderId: string;
  phone: string;
  name: string;
  country: string;
  state: string;
  city: string;
  address: string;
  apartment: string;
  zipcode: string;
  product: any;
  cancel_action: string;
  callback_url: string;
};

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Products {
  id: string;
  category: Category;
  name: string;
  price: string;
  description: string;
  quantity: number;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}
