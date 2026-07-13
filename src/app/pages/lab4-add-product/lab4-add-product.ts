import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-lab4-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './lab4-add-product.html',
  styleUrl: './lab4-add-product.css',
})
export class Lab4AddProduct {
  addForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      name: ["", [Validators.required]],
      price: ["", [Validators.required, Validators.min(1)]],
      category: "",
    });
  }
  get name() {
    return this.addForm.get('name');
  }
  get price() {
    return this.addForm.get('price');
  }
  submitForm() {
    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return;
    }

    console.log(this.addForm.value);
  }
}
