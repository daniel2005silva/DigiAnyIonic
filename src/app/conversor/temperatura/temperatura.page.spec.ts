import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemperaturaPage } from './temperatura.page';

describe('TemperaturaPage', () => {
  let component: TemperaturaPage;
  let fixture: ComponentFixture<TemperaturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperaturaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemperaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
