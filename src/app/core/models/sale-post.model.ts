import {MerchPostModel} from "./merch-post-model";
import {ItemModel} from "./item.model";
import { PictureModel } from "./pictures.model";
import { GradingModel } from "./grading.model";

export class SalePostModel extends MerchPostModel{
  gradingId!: number;
  id!: number;
  itemId!: string;
  image!: string;
  isPublic!: boolean;
  name!: string;
  price!: number;
  remarks!: string;
  userId!: number;
  statePostId! : string
  createdAt! : Date
  grading!: GradingModel;
  salePicturePosts!: PictureModel[];
}
