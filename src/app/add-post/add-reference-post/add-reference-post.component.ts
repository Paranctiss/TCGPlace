import {Component, EventEmitter, OnInit, Output } from '@angular/core';
import {PokemonService} from "../../core/services/PokemonService/pokemon.service";
import {PokemonItemReferenceModel} from "../../core/models/pokemon-item-reference.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-add-reference-post',
  templateUrl: './add-reference-post.component.html',
  styleUrls: ['./add-reference-post.component.scss'],
})
export class AddReferencePostComponent implements OnInit {

  @Output() selectRef: EventEmitter<string> = new EventEmitter();

  loading:boolean = true;

  ReferencesList$!: Observable<PokemonItemReferenceModel[]>;

  constructor(private pokemonService:PokemonService) {
    this.ReferencesList$ = this.pokemonService.GetAllReference()
  }

  ngOnInit(): void {
  }

  SelectReference(reference:PokemonItemReferenceModel){
    this.selectRef.emit(reference.idCard);
  }

}
