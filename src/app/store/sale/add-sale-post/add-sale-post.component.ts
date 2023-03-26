import { Component, OnInit } from '@angular/core';
import {PhotoService} from "../../../core/services/photo.service";
import {PokemonService} from "../../../core/services/pokemon.service";
import {PokemonItemReferenceModel} from "../../../core/models/pokemon-item-reference.model";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-add-sale-post',
  templateUrl: './add-sale-post.component.html',
  styleUrls: ['./add-sale-post.component.scss'],
})
export class AddSalePostComponent implements OnInit {

  constructor(public photoService: PhotoService, private pokemonService:PokemonService, private route:ActivatedRoute) { }

  reference$!: Observable<PokemonItemReferenceModel>

  ngOnInit() {
    this.reference$ = this.pokemonService.GetReferenceById(this.route.snapshot.params['id'])
  }

  addPhotoToGallery(){
    this.photoService.addNewToGallery();
  }
}
