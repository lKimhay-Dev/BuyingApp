import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccManagementPage } from 'src/app/pages/menu/acc-management/acc-management.page';

describe('AccManagementPage', () => {
  let component: AccManagementPage;
  let fixture: ComponentFixture<AccManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccManagementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
