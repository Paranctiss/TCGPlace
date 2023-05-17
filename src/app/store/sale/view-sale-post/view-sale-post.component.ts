import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../../core/services/PokemonService/pokemon.service";
import {ActivatedRoute, Router} from "@angular/router";
import {filter, map, Observable, of, tap} from "rxjs";
import {PokemonItemReferenceModel} from "../../../core/models/pokemon-item-reference.model";
import {SalePostModel} from "../../../core/models/sale-post.model";
import {UserService} from "../../../core/services/UserService/user.service";
import {ToastService} from "../../../core/services/toast.service";
import { AddSearchPostService } from 'src/app/add-post/services/add-search-post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalePostService } from '../services/salePost.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-sale-post',
  templateUrl: './view-sale-post.component.html',
  styleUrls: ['./view-sale-post.component.css']
})
export class ViewSalePostComponent {
  SalePost$:Observable<SalePostModel | null> = of(new SalePostModel())
  UserSearchPost$:Observable<SalePostModel[] | null> = of([])
  loading: boolean = true;
  constructor(private salePostService:SalePostService,
              private route:ActivatedRoute,
              private userService:UserService) {
  }

  reference$!: Observable<PokemonItemReferenceModel>
  ionicForm!: FormGroup;
  isDisabled:boolean = true;
  salePost!: SalePostModel | null;



  ngOnInit() {
    this.SalePost$ = this.salePostService.getSingleSalePost(this.route.snapshot.params['id']).pipe(
      filter((value) => value !== null),
      tap(_ => this.loading = false),
      map(response => response.body),
    )
    this.SalePost$.subscribe((salePost) => {
      console.log(salePost);
      this.salePost = salePost;
    });
  }

  getSingleSalePost(id: any) {

  }
  //this.salePost$ = this.salePostService.getSingleSalePost(id
    // this.salePostService.getSingleSalePost(id).subscribe((response) => {
    //   if (response.body) {
    //     this.salePost = response.body;
    //     console.log(response.body)
    //     console.log(this.salePost)
    //     console.log(this.salePost)
    //   }
    // });
  getFormData(){

  }
}
