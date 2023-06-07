import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit() {
       console.log("je peux passer là ouuu")
      const idSalePost = this.route.snapshot.queryParamMap.get("idSalePost")
      console.log(idSalePost)
  }
}
