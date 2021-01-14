import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'ngr-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.scss'],
})
export class FormsDemoComponent implements OnInit {
  // userForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   username: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   gender: new FormControl('', [Validators.required]),
  //   role: new FormControl('', [Validators.required]),
  //   agreeToTerms: new FormControl('', [Validators.requiredTrue]),
  // });

  userForm: FormGroup = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    username: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    gender: this.fb.control('', [Validators.required]),
    role: this.fb.control('', [Validators.required]),
    agreeToTerms: this.fb.control('', [Validators.requiredTrue]),
  });
  roles = [
    { id: 1, name: 'Admin' },
    {
      id: 2,
      name: 'User',
    },
    {
      id: 3,
      name: 'Moderator',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.userForm);
  }

  resetForm() {
    this.userForm.reset();
  }

  hasError(controlName: string, errorType: string | string[]) {
    let errorTypes = [];
    if (typeof errorType === 'string') {
      errorTypes = [errorType];
    } else {
      errorTypes = errorType;
    }
    // errors: {required: true, email: true}
    // errorTypes: ['required', 'email]

    const control = this.userForm.get(controlName);
    if (control && control.touched) {
      return errorTypes.some((e) => control.getError(e));
    }
    return false;
  }
}
