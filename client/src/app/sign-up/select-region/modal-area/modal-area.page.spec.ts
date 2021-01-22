import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalAreaPage } from './modal-area.page';

describe('ModalAreaPage', () => {
  let component: ModalAreaPage;
  let fixture: ComponentFixture<ModalAreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAreaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
