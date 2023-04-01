import {MerchPostModel} from "./merch-post-model";
import {ItemModel} from "./item.model";

export class SalePostModel extends MerchPostModel{
  sale_post_id!: number;
  sale_post_item!: ItemModel;
  salePostPrice!: number;
  sale_post_grading_id!: number;
}
