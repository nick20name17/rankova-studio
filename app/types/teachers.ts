export interface Teacher {
    id: string;
    exp: string;
    name: string;
    "name(eng)": string;
    photo: Photo[];
    area: string;
    "area(eng)": string;
    teaching: string;
    "teaching(eng)": string;
    music: string;
    "music(eng)": string;
}

export interface Price {
    id: string;
    title: string;
    icon: Photo[];
    content: string;
}

export interface Photo {
    id: string;
    width: number;
    height: number;
    url: string;
    filename: string;
    size: number;
    type: string;
    thumbnails: Thumbnails;
}

export interface Thumbnails {
    small: Small;
    large: Large;
    full: Full;
}

export interface Small {
    url: string;
    width: number;
    height: number;
}

export interface Large {
    url: string;
    width: number;
    height: number;
}

export interface Full {
    url: string;
    width: number;
    height: number;
}
