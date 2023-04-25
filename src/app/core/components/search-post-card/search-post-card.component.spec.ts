import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchPostCardComponent } from './search-post-card.component';
import {SearchPostModel} from "../../models/search-post.model";
import {ItemModel} from "../../models/item.model";
import {GradingModel} from "../../models/grading.model";

describe('SearchPostCardComponent', () => {
  let component: SearchPostCardComponent;
  let fixture: ComponentFixture<SearchPostCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPostCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchPostCardComponent);
    component = fixture.componentInstance;

    const searchPost: SearchPostModel = {
      merch_remarks : "Remarks",
      merch_public : true,
      searchPostPrice : 1.0,
      merch_id : 1,
      searchPostGradingId : 1,
      searchPostItemId : 1,
      searchPostPostStateId : "C",
      searchPostId : 1,
      searchPostRemarks : "Remarks",
      searchPostPublic : true,
      searchPostUserId : 1,
      searchPostItem :  new ItemModel(
        1,
        "Test card",
        "https://www.pokepedia.fr/images/thumb/c/c2/Tiplouf-DEPS.png/1200px-Tiplouf-DEPS.png",
        "eb01",
        "01/100",
      ),
      merch_price: 1.0,
      searchPostGrading : {
        gradingId: 1,
        gradingName: "Neuf"
      }

    }
    component.searchPost = searchPost
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
