export type MenuType = {
    id: string;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
}[];

export type ProductType = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
};

export type OrderType = {
    id: string;
    userEmail: string;
    price: number;
    products: CartItemType[];
    status: string;
    createdAt: Date;
    intent_id?: string;
}

export type CartItemType = {
    id: string;
    title: string;
    img? : string;
    price: number;
    optionsTitle?: string;
    quantity: number;
}

export type CartType = {
    products: CartItemType[];
    totalItems: number;
    totalPrice: number;
}

export type ActionsType = {
    addtoCart: (item:CartItemType) => void;
    removeFormCart: (item:CartItemType) => void;
}