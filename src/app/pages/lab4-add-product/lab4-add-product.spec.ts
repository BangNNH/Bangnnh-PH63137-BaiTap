import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab4AddProduct } from './lab4-add-product';

describe('Lab4AddProduct', () => {
  let component: Lab4AddProduct;
  let fixture: ComponentFixture<Lab4AddProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lab4AddProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lab4AddProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
