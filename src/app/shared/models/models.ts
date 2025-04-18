export type Character = {
    id: number;
    name: string;
    image: string;
};

export type Info = {
    next: string;
}

export type Response = {
    results: Character[];
    info: Info
};

export type EpisodesResponse = {
    results: Episode[]
};

export type Episode = {
    air_date: string;
    name: string;
}