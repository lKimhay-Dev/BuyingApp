import { Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { postcode } from 'src/assets/js/postcode.js';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.page.html',
  styleUrls: ['./search-location.page.scss'],
})
export class SearchLocationPage implements OnInit {

  @ViewChild('daum_popup', { read: ElementRef, static: true }) popup: ElementRef;

  constructor(private renderer: Renderer2,
              private router: Router, 
              private ngZone: NgZone) { }

  ngOnInit() {
    postcode(this.renderer, this.popup.nativeElement, data => this.ngZone.run(() => {
      let navigationExtras: NavigationExtras = {
        state: {
          data: data.address
        }
      };
      this.router.navigate(['/register-retailer'],navigationExtras);
    }));
  }

}
