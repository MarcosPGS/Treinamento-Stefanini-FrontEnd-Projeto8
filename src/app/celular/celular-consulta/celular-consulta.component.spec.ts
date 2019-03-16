import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularConsultaComponent } from './celular-consulta.component';

describe('CelularConsultaComponent', () => {
  let component: CelularConsultaComponent;
  let fixture: ComponentFixture<CelularConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelularConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelularConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
