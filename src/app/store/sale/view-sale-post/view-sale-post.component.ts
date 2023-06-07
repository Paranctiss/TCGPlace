import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {filter, map, Observable, of, tap} from "rxjs";
import {PokemonItemReferenceModel} from "../../../core/models/pokemon-item-reference.model";
import {SalePostModel} from "../../../core/models/sale-post.model";
import {UserService} from "../../../core/services/UserService/user.service";
import { SalePostService } from '../services/salePost.service';
import { ModalController } from '@ionic/angular';
import { FullScreenImageComponent } from 'src/app/core/components/full-screen-image/full-screen-image.component';
import { FullScreenImageSliderComponent } from 'src/app/core/components/full-screen-image-slider/full-screen-image-slider.component';

@Component({
  selector: 'app-view-sale-post',
  templateUrl: './view-sale-post.component.html',
  styleUrls: ['./view-sale-post.component.scss']
})
export class ViewSalePostComponent {
  SalePost$:Observable<SalePostModel | null> = of(new SalePostModel())
  UserSalePost$:Observable<SalePostModel[] | null> = of([])
  loading: boolean = true;
  constructor(private salePostService:SalePostService,
              private route:ActivatedRoute,
              private modalCtrl: ModalController,
              private userService:UserService,
              private router:Router) {
  }

  reference$!: Observable<PokemonItemReferenceModel>
  isDisabled:boolean = true;
  salePost!: SalePostModel | null;

  ngOnInit() {
    this.SalePost$ = this.salePostService.getSingleSalePost(this.route.snapshot.params['id']).pipe(
      filter((value) => value !== null),
      tap(_ => this.loading = false),
      map(response => response.body),
    )

    const userID = this.userService.GetCurrentUserID()
    this.UserSalePost$ = this.salePostService.getSomeSalePostForUser(userID, 5).pipe(
      filter((value) => value !== null),
      tap(_ => this.loading = false),
      map(response => response.body),)
  }

  async openFullscreenImage(imageUrl: string) {
    const modal = await this.modalCtrl.create({
      component: FullScreenImageComponent,
      componentProps: {
        imageUrl: imageUrl
      }
      
    });

    return await modal.present();
  }

  async openFullscreenSlider(salePostPictureReference: string, salePostPictures: string[]) {
    const modal = await this.modalCtrl.create({
      component: FullScreenImageSliderComponent,
      componentProps: {
        imageReference: salePostPictureReference,
        images: salePostPictures
      }
      
    });

    return await modal.present();
  }

  redirectToPaymentModule() {
    this.router.navigateByUrl(`/payment`)
  }

  redirectToOfferPage(idSalePost: string){
    console.log(idSalePost)
    this.router.navigate(['/tabs/store/sale/offer'], { queryParams: { idSalePost: idSalePost } });    
  }

}
