
export type Menu = {
    id: number;
    name: string;
    items: Food[];
};

export type Order = {
    id: number;
    customer: Customer;
    items: Food[];
    total: number;
};

export type Food = {
    id: number;
    name: string;
    price: number;
};

export type Restaurant = {
    id: number;
    name: string;
    address: string;
    city: string;
    cuisine: string;
    daysopen: string[];
    hours: string;
    menu: Menu;
};

export type Customer = {
    id: number;
    name: string;
    email: string;
};
