import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyPage } from 'src/app/pages/home/buy/buy.page';

describe('BuyPage', () => {
  let component: BuyPage;
  let fixture: ComponentFixture<BuyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
