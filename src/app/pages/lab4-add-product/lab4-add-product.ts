import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab4-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './lab4-add-product.html',
  styleUrl: './lab4-add-product.css',
})
export class Lab4AddProduct {
  addForm: FormGroup;
  isLoading: boolean = false;
  errorMessage: string | null = null;
  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private router: Router) {
    this.addForm = this.fb.group({
      name: ["", [Validators.required]],
      price: ["", [Validators.required, Validators.min(1)]],
      category: "",
      quantity: ["", [Validators.required, Validators.min(0)]],
    });
  }
  get name() {
    return this.addForm.get('name');
  }
  get price() {
    return this.addForm.get('price');
  }
  get quantity() {
    return this.addForm.get('quantity');
  }
  get category() {
    return this.addForm.get('category');
  }
  submitForm() {
    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    this.http
      .post('http://localhost:3000/products', this.addForm.value)
      .subscribe({
        next: () => {
          this.isLoading = false;
          alert('Thêm sản phẩm thành công!');
          this.router.navigateByUrl('/products');
        },
        error: () => {
          this.isLoading = false;
          this.errorMessage = 'Thêm sản phẩm thất bại!';
          alert('Thêm sản phẩm không thành công!');
        },
      });
  }
}
