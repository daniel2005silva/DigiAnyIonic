import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MassaPage } from './massa.page';

describe('MassaPage', () => {
  let component: MassaPage;
  let fixture: ComponentFixture<MassaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MassaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
