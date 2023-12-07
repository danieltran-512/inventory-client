import { LineItemModel } from "./LineItemModel";

export interface OrderModel {
  lineItems: {
    part: LineItemModel;
    cost: number;
  }[];
  totalCost: number;
}
