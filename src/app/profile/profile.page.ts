import { Component, OnInit } from '@angular/core';
import {HomePage} from "../home/home.page";
import {UserService} from "../core/services/UserService/user.service";
import {Router} from "@angular/router";
import {UserModel} from "../core/models/user.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  component = HomePage;
  isLogged = false;
  currentUser : UserModel | null
  constructor(private userService : UserService, private router : Router) {
    this.currentUser = new UserModel()
  }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe((user) => {
      this.currentUser = user
    })
    this.userService.isLogged().subscribe((logged) => {
      this.isLogged = logged
    })
  }

  logout(){
    this.userService.Logout()
  }

}
