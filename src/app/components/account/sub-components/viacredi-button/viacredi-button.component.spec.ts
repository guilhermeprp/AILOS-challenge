import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViacrediButtonComponent } from './viacredi-button.component';

describe('ViacrediButtonComponent', () => {
  let component: ViacrediButtonComponent;
  let fixture: ComponentFixture<ViacrediButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViacrediButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViacrediButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
