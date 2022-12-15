import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestablecerPassComponent } from './restablecer-pass.component';

describe('RestablecerPassComponent', () => {
  let component: RestablecerPassComponent;
  let fixture: ComponentFixture<RestablecerPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestablecerPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestablecerPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
