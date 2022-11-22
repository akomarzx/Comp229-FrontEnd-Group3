export interface Advertisement {
  _id: string,
  adsTitle: string,
  price: number,
  status: string
  description: {
    itemName: string,
    description: string,
    category: string,
    condition: string,
  }
  activeDate: string,
  expiryDate: string
}

export type AdvertRequiredProps = Pick<Advertisement, 'adsTitle' | 'price' | 'status' | 'description' | 'activeDate' | 'expiryDate'>;
