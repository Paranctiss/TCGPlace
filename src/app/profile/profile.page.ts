import { Component, OnInit } from '@angular/core';
import {HomePage} from "../home/home.page";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  component = HomePage;
  constructor() { }

  ngOnInit() {
  }

}
