export interface Book {
    id?: number,
    name: string,
    earnings: string,
    description?: string
}

export type BookRequiredProps = Pick<Book, "name" | "earnings">;