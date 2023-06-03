import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
})
export class SaleComponent implements OnInit {

  @Input() idReference: string | undefined

  constructor(private router:Router) { }
  routeUrl:string = this.router.url;

  ngOnInit() {

  }

}
