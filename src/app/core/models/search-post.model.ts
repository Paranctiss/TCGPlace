import {MerchPostModel} from "./merch-post-model";
import {ItemModel} from "./item.model";

export class SearchPostModel extends MerchPostModel{
  search_post_id!: number;
  searchPostItem!: ItemModel;
  searchPostItemId!: number;
  searchPostGradingId!: number;
  searchPostPrice!: number;
  searchPostRemarks!: string;
  searchPostPublic!: boolean;
  searchPostPostStateId!: string;
  searchPostUserId!: number;
}


