import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapacidadePage } from './capacidade.page';

describe('CapacidadePage', () => {
  let component: CapacidadePage;
  let fixture: ComponentFixture<CapacidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacidadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapacidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
