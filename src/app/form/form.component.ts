import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get fname() {
    return this.myForm.get('fname');
  }

  get lname() {
    return this.myForm.get('lname');
  }

  get email() {
    return this.myForm.get('email');
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log('Form Submitted!', this.myForm.value);
    } else {
      console.log('Form not valid');
    }
  }
}
