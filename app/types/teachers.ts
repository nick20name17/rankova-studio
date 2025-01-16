export interface Teacher {
    id: string;
    exp: string;
    Name: string;
    Photo: Photo[];
    area: string;
    teaching: string;
    music: string;
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
