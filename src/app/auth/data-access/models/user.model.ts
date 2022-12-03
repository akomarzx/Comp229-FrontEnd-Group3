export interface User {
  firstName: string,
  lastName: string,
  email: string,
  _id: string,
  username: string
}

export type UserProfile = Pick<User, 'firstName' | 'lastName' | 'email' | 'username'>
