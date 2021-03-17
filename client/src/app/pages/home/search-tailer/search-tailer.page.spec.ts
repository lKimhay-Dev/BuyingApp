import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchTailerPage } from 'src/app/pages/home/search-tailer/search-tailer.page';

describe('SearchTailerPage', () => {
  let component: SearchTailerPage;
  let fixture: ComponentFixture<SearchTailerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTailerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchTailerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
