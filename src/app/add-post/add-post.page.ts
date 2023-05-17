import { Component, ViewChild, OnDestroy } from '@angular/core';
import {IonContent} from "@ionic/angular";
import {Router} from "@angular/router";
import {PokemonItemReferenceModel} from "../core/models/pokemon-item-reference.model";
import {debounceTime, distinctUntilChanged, map, Observable, startWith, Subject, switchMap, takeUntil, tap} from "rxjs";
import {SearchReferenceComponent} from "./add-reference-post/search-reference/search-reference.component";
import {SearchService} from "../core/services/SearchService/search.service";
import {ItemSearchResponseModel} from "../core/models/item-search-response.model";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnDestroy {
  @ViewChild(IonContent) content!: IonContent;
  @ViewChild(SearchReferenceComponent) searchComponent!: SearchReferenceComponent;
  private unsubscribe$ = new Subject<void>();
  public loading: boolean = true;
  constructor(private router:Router, private searchService:SearchService) {
  }
public searchResults$!: Observable<PokemonItemReferenceModel[]>
  saleSelected = true;
  ngOnInit() {
  }

  ngAfterViewInit() {
     this.searchResults$ = this.searchComponent.valueSubject.asObservable().pipe(
      takeUntil(this.unsubscribe$),
      startWith(''),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.loading = true),
      switchMap(value => this.searchService.SearchReference(value)),
      tap(() => this.loading = false)
     )
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }

  redirectToAddPost($event: string) {
    if(!this.saleSelected){
      this.router.navigateByUrl(`/tabs/add/search/${$event}`)
    }
    else{
      this.router.navigateByUrl(`/tabs/add/sale/${$event}`)
    }
  }

  changeResults($event: Observable<PokemonItemReferenceModel[]>) {
      console.log($event)
  }
}
