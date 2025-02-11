export interface IItem {
    title: string;
    'title(eng)': string
    time?: number;
    price: number;
}

export interface ISection {
    title?: string;
    'title(eng)': string
    list: boolean;
    gap?: boolean;
    time?: number;
    price?: number;
    caption?: string;
    'caption(eng)': string
    items?: IItem[];
}

export interface ICard {
    title: string;
    'title(eng)': string
    icon: string;
    sections: ISection[];
}
