import { Advertisement } from "./advertisement.model";
// TODO: imporvement if programmer use a property that doesnt exist in the response it will crash the app
export interface AdsApiResponseModel {
  success: boolean,
  message: string,
  advertisement: Advertisement
  advertisements: Advertisement[]
}
