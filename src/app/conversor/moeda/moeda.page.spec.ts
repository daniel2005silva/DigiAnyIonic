import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoedaPage } from './moeda.page';

describe('MoedaPage', () => {
  let component: MoedaPage;
  let fixture: ComponentFixture<MoedaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoedaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoedaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
