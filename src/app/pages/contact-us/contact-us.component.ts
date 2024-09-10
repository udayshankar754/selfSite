import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  messageForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.messageForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      prefferdMethod: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submit() {
    if (this.messageForm.valid) {
      console.log(this.messageForm.value);
      // Handle form submission
    } else {
      this.messageForm.markAllAsTouched(); // To trigger validation messages
    }
  }

  // get formControls(): { [key: string]: AbstractControl } {
  //   return this.messageForm.controls;
  // }

  getValidationError(controlName: string, errorType: string) {
    const control = this.messageForm.get(controlName);
    return control?.touched && control?.hasError(errorType);
  }
}
