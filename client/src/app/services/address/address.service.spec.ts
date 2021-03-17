import { TestBed } from '@angular/core/testing';
import { AddressService } from 'src/app/services/address/address.service';

describe('SearchAddressService', () => {
    let service: AddressService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AddressService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
