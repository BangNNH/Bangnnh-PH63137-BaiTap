import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson7EditForm } from './lesson7-edit-form';

describe('Lesson7EditForm', () => {
  let component: Lesson7EditForm;
  let fixture: ComponentFixture<Lesson7EditForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson7EditForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson7EditForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
