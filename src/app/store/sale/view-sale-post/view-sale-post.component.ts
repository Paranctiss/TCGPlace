import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {concat, filter, map, Observable, of, Subject, switchMap, take, tap} from "rxjs";
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
  userId!: number

  private userId$ = new Subject<number>();

  ngOnInit() {
    this.UserSalePost$ = this.userId$.pipe(
      switchMap(userId => this.salePostService.getSomeSalePostForUser(userId, 5)),
      filter((value) => value !== null),
      tap(_ => this.loading = false),
      map(response => response.body),
    );

    this.SalePost$ = this.salePostService.getSingleSalePost(this.route.snapshot.params['id']).pipe(
      filter((value) => value !== null),
      tap(_ => this.loading = false),
      map(response => response.body),
      tap(resp => this.userId$.next(resp!.userId))
    );

  }

  ngOnDestroy() {
    this.userId$.complete();
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

  redirectToProfile(userId: number) {
    this.router.navigateByUrl(`/tabs/profil/${userId}`)
  }
}
