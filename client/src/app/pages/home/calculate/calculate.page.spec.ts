import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalculatePage } from 'src/app/pages/home/calculate/calculate.page';

describe('CalculatePage', () => {
  let component: CalculatePage;
  let fixture: ComponentFixture<CalculatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
