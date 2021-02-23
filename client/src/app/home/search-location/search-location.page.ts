import { Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { postcode } from 'src/assets/js/postcode.js';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.page.html',
  styleUrls: ['./search-location.page.scss'],
})
export class SearchLocationPage implements OnInit {

  user: any;
  area: any;
  fee: any;

  @ViewChild('daum_popup', { read: ElementRef, static: true }) popup: ElementRef;

  constructor(private renderer: Renderer2,
              private router: Router, 
              private route: ActivatedRoute,
              private ngZone: NgZone) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.area = params["area"];
      this.fee = params["fee"]
    });
    postcode(this.renderer, this.popup.nativeElement, data => this.ngZone.run(() => {
      let navigationExtras: NavigationExtras = {
        state: {
          data: data.address,
          fee: this.fee,
          area: this.area
        }
      };
      this.router.navigate(['/register-retailer'],navigationExtras);
    }));
  }

}
