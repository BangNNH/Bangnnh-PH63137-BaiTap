import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-lab4-register',
  imports: [ReactiveFormsModule],
  templateUrl: './lab4-register.html',
  styleUrl: './lab4-register.css',
})
export class Lab4Register {
  registerForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    })
  }

  get username() {
    return this.registerForm.get('username')
  }
  get email() {
    return this.registerForm.get('email')
  }
  get password() {
    return this.registerForm.get('password')
  }

  submitForm() {
    console.log(this.registerForm.value)
  }
}
