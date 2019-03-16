import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularFormComponent } from './celular-form.component';

describe('CelularFormComponent', () => {
  let component: CelularFormComponent;
  let fixture: ComponentFixture<CelularFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelularFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelularFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
