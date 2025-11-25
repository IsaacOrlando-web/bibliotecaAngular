// book.model.ts
export interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
    isRead: boolean;
    rating: number;
    coverImage?: string;
    addedDate: Date;
    img: string;
}