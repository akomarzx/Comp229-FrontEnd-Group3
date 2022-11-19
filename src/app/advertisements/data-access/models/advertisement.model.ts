export interface Advertisement {
    _id: string,
    adsTitle: string,
    price: string, 
    status: string
    description: {
        itemName: string,
        description: string,
        category: string,
        condition: string,
    }
    activeDate: Date,
    expiryDate: Date    
}