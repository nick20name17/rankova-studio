interface IItem {
    item: string;
    time?: number;
    price: number;
}

interface ISection {
    title?: string;
    list: boolean;
    gap?: boolean;
    time?: number;
    price?: number;
    caption?: string;
    items?: IItem[];
}

export interface ICard {
    title: string;
    icon: string;
    sections: ISection[];
}
