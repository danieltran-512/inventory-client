import { PartModel } from "./PartModel";

export interface LineItemModel extends PartModel {
  cost: number;
}
