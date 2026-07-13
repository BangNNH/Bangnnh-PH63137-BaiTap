import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab4Register } from './lab4-register';

describe('Lab4Register', () => {
  let component: Lab4Register;
  let fixture: ComponentFixture<Lab4Register>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lab4Register]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lab4Register);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
