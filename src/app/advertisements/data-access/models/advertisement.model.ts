export interface Advertisement {
    item: String,
    status: string
    dateCreated: Date,    
    description: {
        title: string,
        description: string,
        category: string,
        condition: string,
        price: number
    }
}