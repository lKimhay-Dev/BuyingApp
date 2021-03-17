import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangePurchaseFeePage } from 'src/app/pages/menu/change-purchase-fee/change-purchase-fee.page';

describe('ChangePurchaseFeePage', () => {
  let component: ChangePurchaseFeePage;
  let fixture: ComponentFixture<ChangePurchaseFeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePurchaseFeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangePurchaseFeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
