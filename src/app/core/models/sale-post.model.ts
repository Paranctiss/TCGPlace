export class MerchPostModel{
  merch_id!: number;
  merch_price!: number;
  merch_remarks!: string;
  merch_public!: boolean;
}


export class SalePostModel extends MerchPostModel{
  sale_post_id!: number;
  sale_post_item!: ItemModel;
  sale_post_grading_id!: number;
}

export class ItemModel {
  item_id!: number;
  item_name!: string;
  item_img!: string;
  item_extension!: string;

}
