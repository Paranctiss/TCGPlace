import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from "../../../core/services/pokemon.service";
import {PokemonItemReferenceModel} from "../../../core/models/pokemon-item-reference.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-reference-sale-post',
  templateUrl: './add-reference-sale-post.component.html',
  styleUrls: ['./add-reference-sale-post.component.scss'],
})
export class AddReferenceSalePostComponent implements OnInit {


  ReferencesList$!: Observable<PokemonItemReferenceModel[]>;
  constructor(private pokemonService:PokemonService, private router:Router) {
    this.ReferencesList$ = this.pokemonService.GetAllReference()
  }

  ngOnInit(): void {
  }

  SelectReference(reference:PokemonItemReferenceModel){
    this.router.navigateByUrl(`/tabs/add/${reference._id}`);
  }

}
