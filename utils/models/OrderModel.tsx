import { LineItemModel } from "./LineItemModel";

export interface OrderModel {
  lineItems: LineItemModel[];
  totalCost: number;
}
