import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;

  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private router: Router) {
    this.addForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      author: "",
      views: ["", [Validators.required, Validators.min(0)]]
    });
  }
  get title() {
    return this.addForm.get('title');
  }
  get views() {
    return this.addForm.get('views');
  }
  submitForm() {
    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return;
    }

    console.log(this.addForm.value);
    this.http
      .post('http://localhost:3000/stories', this.addForm.value)
      .subscribe({
        next: () => {
          alert('Thêm truyện thành công!');
          this.router.navigateByUrl('/stories');
        },
        error: () => {
          alert('Thêm truyện thành công!');
          this.addForm.reset();
          this.router.navigateByUrl('/stories');
        },
      });
  }
}
