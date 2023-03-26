import {MerchPostModel} from "./merch-post-model";
import {ItemModel} from "./item.model";
import {GradingModel} from "./grading.model";

export class SearchPostModel extends MerchPostModel{
  id!: number;
  gradingId!: number;
  price!: number;
  remarks!: string;
  isPublic!: boolean;
  statePostId!: string;
  userId!: number;
  name!: string;
  image!: string;
  itemId!: number;
  itemExtension!: string;
  itemNumber!: string;
  itemName!: string;
  grading!: GradingModel;
}


