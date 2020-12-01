import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComprimentoPage } from './comprimento.page';

describe('ComprimentoPage', () => {
  let component: ComprimentoPage;
  let fixture: ComponentFixture<ComprimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprimentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComprimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
