import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalDeliverAreaPage } from './modal-deliver-area.page';

describe('ModalDeliverAreaPage', () => {
  let component: ModalDeliverAreaPage;
  let fixture: ComponentFixture<ModalDeliverAreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeliverAreaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDeliverAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
