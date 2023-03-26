import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddReferenceSalePostComponent } from './add-reference-sale-post.component';
import {HttpClientModule} from "@angular/common/http";

describe('AddReferenceSalePostComponent', () => {
  let component: AddReferenceSalePostComponent;
  let fixture: ComponentFixture<AddReferenceSalePostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReferenceSalePostComponent ],
      imports: [IonicModule.forRoot(), HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AddReferenceSalePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
