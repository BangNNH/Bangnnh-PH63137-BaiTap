import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Story {
  id: number | string,
  title: string,
  author: string,
  views: number,
  image: string,

}
@Component({
  selector: 'app-lesson7-edit-form',
  imports: [ReactiveFormsModule],
  templateUrl: './lesson7-edit-form.html',
  styleUrl: './lesson7-edit-form.css',
})
export class Lesson7EditForm {
  editForm: FormGroup;
  id: number | string | null = null;
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private navigate: Router
  ) {
    this.editForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: '',
      views: ['', [Validators.required, Validators.min(0)]],
      image: '',
    })
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.http.get<Story[]>(`http://localhost:3000/stories/${this.id}`).subscribe({
        next: (data) => {
          this.editForm.patchValue(data)
        },
        error: () => {
          alert("KHông load được dữ liệu")
        }
      })
    }
  }

  get title() {
    return this.editForm.get('title')
  }

  get views() {
    return this.editForm.get('views');
  }

  submitForm() {
    if (this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      return
    }
    if (!this.id) return
    const data = this.editForm.value;
    this.http.put(`http://localhost:3000/stories/${this.id}`, data).subscribe({
      next: () => {
        alert("Cập nhật thành công");
        this.navigate.navigateByUrl('/stories')
      },
      error: () => {
        alert("Cập nhật thất bại");
      }
    })
  }
}
