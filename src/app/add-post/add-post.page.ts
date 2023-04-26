import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {
  @ViewChild(IonContent) content!: IonContent;
  constructor(private router:Router) {
  }

  saleSelected = true;
  ngOnInit() {
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
}
