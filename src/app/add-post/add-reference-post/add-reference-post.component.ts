import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PokemonService} from "../../core/services/pokemon.service";
import {PokemonItemReferenceModel} from "../../core/models/pokemon-item-reference.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-reference-post',
  templateUrl: './add-reference-post.component.html',
  styleUrls: ['./add-reference-post.component.scss'],
})
export class AddReferencePostComponent implements OnInit {

  @Output() selectRef: EventEmitter<string> = new EventEmitter();

  ReferencesList$!: Observable<PokemonItemReferenceModel[]>;
  constructor(private pokemonService:PokemonService, private router:Router) {
    this.ReferencesList$ = this.pokemonService.GetAllReference()
  }

  ngOnInit(): void {
  }

  SelectReference(reference:PokemonItemReferenceModel){
    this.selectRef.emit(reference.id);
   // this.router.navigateByUrl(`/tabs/add/search/${reference._id}`);
  }

}
