import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AddressService } from 'src/app/services/address/address.service';

@Component({
    selector: 'app-search-location',
    templateUrl: './search-location.page.html',
    styleUrls: ['./search-location.page.scss'],
})
export class SearchLocationPage implements OnInit {

    user: any;
    area: any;
    fee: any;
    mDefFee: any;

    addresses: any = [];
    address: any;
    addressSuggestions: any = [];
    textAddress: string;
    selectedAddress: string;
    roadAddressCount = 0;

    /* To show address not found message */
    isAddressNotFound = false;

    /* To hide search tip when button search was fire */
    isShowSearchTip = true;

    /* To add element input button save when result of search address was select */
    isAddressSelected = false;

    /* To hide address suggestion when address suggestion was select */
    isHideAddressNameSuggestion = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private addressService: AddressService
    ) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.area = params.area;
            this.fee = params.fee;
            this.mDefFee = params.defFee;
        });
    }

    /**
     * To hide search tip and selected address detail
     */
    private hideElement() {
        this.isShowSearchTip = false;
        this.isAddressSelected = false;
    }

    /**
     * Search address
     * Execute when button search fire
     */
    searchAddressHandler() {
        /* Hide address suggestion */
        this.isHideAddressNameSuggestion = true;

        /* Clear address suggestion */
        this.addressSuggestions = [];

        /* Clear old search addresses */
        this.addresses = [];

        /* Get address by keyword
         * Will return specific address names
         */
        this.searchAddressByKeyword(res => {
            const addresses = this.removeDuplicateAddressName(res.documents);
            this.isAddressNotFound = addresses.length < 1;
            /* Get specific of all addresses */
            addresses.forEach(address => {
                this.searchAddressByName(address.address_name);
            });
            this.hideElement();
        });
    }

    /**
     * Search address name by keyword
     */
    searchAddressByKeyword(callback) {
        this.addressService.kakaoSearchByKeyword(this.textAddress)
            .subscribe(res => callback(res));
    }

    /**
     * Search specific address name
     */
    searchAddressByName(searchText) {
        this.addressService.kakaoSearch(searchText).subscribe(res => {
            const addresses = res.documents;
            if (addresses && addresses.length > 0) {
                this.checkValidAddress(addresses)
                    .forEach(address => {
                        this.addresses.push(address);
                    });
            }
        });
    }

    /**
     * Display address names suggestion
     * Execute when input search change
     */
    addressNameSuggestionHandler() {
        /* Check address suggestion is select or not */
        this.isHideAddressNameSuggestion = this.selectedAddress === this.textAddress;

        /* If text address is input and address name suggestion not select
           do search address as keyword*/
        if (this.textAddress && !this.isHideAddressNameSuggestion) {
            this.searchAddressByKeyword(res => {
                this.addressSuggestions = this.removeDuplicateAddressName(res.documents);
            });
        } else {
            this.addressSuggestions = [];
        }
    }

    /**
     *  Check valid address.
     *  We assume address that has road_address is a valid address
     */
    checkValidAddress(addresses) {
        addresses = addresses.filter(address => {
            const roadAddress = address.road_address;
            return roadAddress !== null;
        });
        return addresses;
    }

    /**
     *  Remove duplicate address name
     */
    removeDuplicateAddressName(addresses) {
        return addresses.filter((address, index, self) =>
            index === self.findIndex(a => (
                a.address_name === address.address_name
            ))
        );
    }

    /**
     * Get a selected address name suggestion
     */
    selectAddressSuggestionHandler(address) {
        this.addresses = [];
        this.isHideAddressNameSuggestion = true;
        this.textAddress = address.address_name;
        this.selectedAddress = this.textAddress;
        this.searchAddressHandler();
        this.hideElement();
    }

    /**
     * Get a selected address
     */
    selectAddressHandler(index) {
        this.address = this.addresses[index];
        this.isAddressSelected = true;
    }

    /**
     * Forward data back to register-retailer component
     */
    async saveAddressHandler() {
        const navigationExtras: NavigationExtras = {
            state: {
                address_zone_no: this.address.road_address.zone_no,
                address_ko: ` ${this.address.address_name} ${this.address.address_detail || ''}`,
                fee: this.fee,
                area: this.area,
                mDefFee: this.mDefFee
            }
        };
        await this.router.navigate(['/register-retailer'], navigationExtras);
    }
}
