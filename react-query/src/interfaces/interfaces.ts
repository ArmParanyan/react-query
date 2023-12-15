export interface IPost {
    userId: number;
    id: number |string;
    title: string;
    body: string;
}

export interface UpdatePostTitleArgs {
    id: number;
    title: string;
}