export interface Book {
    id?: number,
    name: string,
    earnings: number,
    description?: string
}

export type BookRequiredProps = Pick<Book, "name" | "earnings">;