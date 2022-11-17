export interface Advertisement {
    _id: string,
    item: string,
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