import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
})
export class SaleComponent implements OnInit {

  constructor(private router:Router) { }
  routeUrl:string = this.router.url;

  ngOnInit() {
    console.log(this.router.url)
  }

}
