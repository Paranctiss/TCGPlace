import {MerchPostModel} from "./merch-post-model";
import {ItemModel} from "./item.model";
import { PictureModel } from "./pictures.model";

export class SalePostModel extends MerchPostModel{
  salePostId!: number;
  itemId!: ItemModel;
  price!: number;
  isPublic!: boolean;
  remarks!: string;
  gradingId!: number;
  userId!: number;
  statePostId!: string;
  pictures!: PictureModel[];
}
