import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {SearchPostModel} from "../../../core/models/search-post.model";
import {BehaviorSubject, filter, map, Observable, of, switchMap, tap} from "rxjs";
import {SearchPostService} from "../services/searchPost.service";
import {ExtensionModel} from "../../../home/components/extension-card-slider/models/extension.model";
import {GradingModel} from "../../../core/models/grading.model";

@Component({
  selector: 'app-browse-search-posts',
  templateUrl: './browse-search-posts.component.html',
  styleUrls: ['./browse-search-posts.component.scss'],
})
export class BrowseSearchPostsComponent implements OnInit {
  @Input() idReference!:string | undefined
  @Input() extensions!:ExtensionModel[] | undefined
  @Input() gradings!:GradingModel[] | undefined

  loading:boolean = true;
  skeletons = [0,0,0,0]
  searchPosts$: Observable<SearchPostModel[] | null> = of([])
  private idReferenceSubject = new BehaviorSubject<string | undefined>(undefined);

  constructor(private searchPostService:SearchPostService) {
    this.searchPosts$ = this.idReferenceSubject.pipe(
      switchMap(id => this.searchPostService.getPublicSearchPosts(this.idReference, this.extensions, this.gradings)), // Exécute une nouvelle requête à chaque changement
      tap(_ => this.loading = false),
      map(response => response.body)
    );
  }

  ngOnInit() {
    this.idReferenceSubject.next(this.idReference);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['idReference'] && !changes['idReference'].isFirstChange()) {
      this.loading = true;
      this.idReferenceSubject.next(changes['idReference'].currentValue);
    }
    if (changes['extensions'] && !changes['extensions'].isFirstChange()) {
      this.loading = true;
      this.idReferenceSubject.next(changes['extensions'].currentValue);
    }
    if (changes['gradings'] && !changes['gradings'].isFirstChange()) {
      this.loading = true;
      this.idReferenceSubject.next(changes['gradings'].currentValue);
    }
  }

}
