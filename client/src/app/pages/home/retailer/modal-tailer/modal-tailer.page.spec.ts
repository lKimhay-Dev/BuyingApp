import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalTailerPage } from 'src/app/pages/home/retailer/modal-tailer/modal-tailer.page';

describe('ModalTailerPage', () => {
  let component: ModalTailerPage;
  let fixture: ComponentFixture<ModalTailerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTailerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalTailerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
