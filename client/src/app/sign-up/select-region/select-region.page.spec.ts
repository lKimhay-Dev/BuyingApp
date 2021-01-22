import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectRegionPage } from './select-region.page';

describe('SelectRegionPage', () => {
  let component: SelectRegionPage;
  let fixture: ComponentFixture<SelectRegionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRegionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectRegionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});