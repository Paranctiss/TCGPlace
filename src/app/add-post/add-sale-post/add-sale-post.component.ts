import { Component, OnInit } from '@angular/core';
import {PhotoService} from "../../core/services/photo.service";
import {PokemonService} from "../../core/services/PokemonService/pokemon.service";
import {PokemonItemReferenceModel} from "../../core/models/pokemon-item-reference.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalePostModel } from 'src/app/core/models/sale-post.model';
import { AddSalePostService } from '../services/add-sale-post.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/UserService/user.service';

@Component({
  selector: 'app-add-sale-post',
  templateUrl: './add-sale-post.component.html',
  styleUrls: ['./add-sale-post.component.scss'],
})
export class AddSalePostComponent implements OnInit {

  constructor(public photoService: PhotoService, 
              private pokemonService:PokemonService,
              private addSalePostService: AddSalePostService,
              private toastService:ToastService, 
              private router:Router,
              public formBuilder: FormBuilder,
              private userService: UserService,
              private route:ActivatedRoute) { }

  reference$!: Observable<PokemonItemReferenceModel>
  ionicForm!: FormGroup;
  loading: boolean = false;

  ngOnInit() {
    this.reference$ = this.pokemonService.GetReferenceById(this.route.snapshot.params['id'])
    this.buildIonicForm()
  }

  addPhotoToGallery(){
    this.photoService.addNewToGallery();
  }

  buildIonicForm(){
    this.ionicForm = this.formBuilder.group({
      price: ['', [Validators.required, Validators.min(0.5)]],
      grading: ['', [Validators.required]],
      remarks: ['', [Validators.required]],
      public: [true],
      refId: this.route.snapshot.params['id']
    });
  }

  async submitForm() {
    this.loading = true;
    let salePost:SalePostModel = this.getFormData()
    let lesPictures = await this.photoService.CreatePicture()
    salePost.pictures = lesPictures;
    this.addSalePostService.PostSalePost(salePost).subscribe({
      next: (response) => {
        if(response.status == 201){
          this.toastService.presentToastSuccess("Annonce crée")
          this.loading = false;
          this.router.navigateByUrl("/tabs/store")
        }
      }
    })
  }

  getFormData():SalePostModel{
    let salePost:SalePostModel = new SalePostModel()
    salePost.itemId = this.ionicForm.controls['refId'].value;
    salePost.price = this.ionicForm.controls['price'].value;
    salePost.isPublic = this.ionicForm.controls['public'].value;
    salePost.remarks = this.ionicForm.controls['remarks'].value;
    salePost.gradingId = this.ionicForm.controls['grading'].value;
    salePost.statePostId = "C";
    salePost.userId = this.userService.GetCurrentUserID()
    return salePost;
  }

}
