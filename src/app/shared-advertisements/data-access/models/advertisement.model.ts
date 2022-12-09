export interface Inquiry {
  username: string,
  question: string,
  answer: string
}

export interface Advertisement {
  _id: string,
  adsTitle: string,
  price: number,
  status: string,
  description: {
    itemName: string,
    description: string,
    category: string,
    condition: string,
  }
  activeDate: string,
  expiryDate: string,
  owner: {
    _id: string,
    username: string,
    created: string
  },
  inquiries: Inquiry[]
}

export type AdvertRequiredProps = Pick<Advertisement, 'adsTitle' | 'price' | 'status' | 'description' | 'activeDate' | 'expiryDate'>;
