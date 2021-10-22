import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCpfComponent } from './form-cpf.components';

describe('FormCpfComponent', () => {
  let component: FormCpfComponent;
  let fixture: ComponentFixture<FormCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCpfComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
