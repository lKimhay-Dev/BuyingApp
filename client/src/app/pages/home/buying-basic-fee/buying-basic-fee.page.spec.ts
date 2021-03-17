import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyingBasicFeePage } from 'src/app/pages/home/buying-basic-fee/buying-basic-fee.page';

describe('BuyingBasicFeePage', () => {
  let component: BuyingBasicFeePage;
  let fixture: ComponentFixture<BuyingBasicFeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyingBasicFeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyingBasicFeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
