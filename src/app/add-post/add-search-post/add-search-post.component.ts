import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../core/services/pokemon.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {PokemonItemReferenceModel} from "../../core/models/pokemon-item-reference.model";
import {SearchPostModel} from "../../core/models/search-post.model";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AddSearchPostService} from "../services/add-search-post.service";
import {UserService} from "../../core/services/user.service";
import {ToastService} from "../../core/services/toast.service";


@Component({
  selector: 'app-add-search-post',
  templateUrl: './add-search-post.component.html',
  styleUrls: ['./add-search-post.component.scss'],
})
export class AddSearchPostComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
    private pokemonService:PokemonService,
    private route:ActivatedRoute,
    private addSearchPostService: AddSearchPostService,
    private userService: UserService,
    private router:Router,
    private toastService:ToastService
  ) { }

  reference$!: Observable<PokemonItemReferenceModel>
  ionicForm!: FormGroup;
  loading: boolean = false;



  ngOnInit() {
    this.reference$ = this.pokemonService.GetReferenceById(this.route.snapshot.params['id'])
    this.buildIonicForm()
  }

  buildIonicForm(){
    this.ionicForm = this.formBuilder.group({
      price: ['', [Validators.required, Validators.min(0.5)]],
      grading: ['', [Validators.required]],
      remarks: ['', [Validators.required]],
      public: [true],
      refId: this.route.snapshot.params['id'],
    });
  }

  submitForm() {
    this.loading = true;
    let searchPost:SearchPostModel = this.getFormData()

    this.addSearchPostService.PostSearchPost(searchPost).subscribe({
      next: (response) => {
        if(response.status == 201){
          this.toastService.presentToastSuccess("Annonce crée")
          this.loading = false;
          this.router.navigateByUrl("/tabs/store")
        }
      }
    })
  }

  getFormData():SearchPostModel{
    let searchPost:SearchPostModel = new SearchPostModel()
    searchPost.searchPostItemId = this.ionicForm.controls['refId'].value;
    searchPost.searchPostPrice = this.ionicForm.controls['price'].value;
    searchPost.searchPostRemarks = this.ionicForm.controls['remarks'].value;
    searchPost.searchPostPublic = this.ionicForm.controls['public'].value;
    searchPost.searchPostPostStateId = "C";
    searchPost.searchPostGradingId = this.ionicForm.controls['grading'].value;
    searchPost.searchPostUserId = this.userService.GetCurrentUserID()

    return searchPost;
  }

}
