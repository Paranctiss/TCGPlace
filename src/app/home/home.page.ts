import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import {UserModel} from "../core/models/user.model";
import {Subscription} from "rxjs";
import {UserService} from "../core/services/UserService/user.service";

register();
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  currentUser: UserModel | null;

  constructor(private userService : UserService) {
    this.currentUser = new UserModel();
  }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    })
  }

}
