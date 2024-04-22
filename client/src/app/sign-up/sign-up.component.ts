import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators, } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
          Validators.pattern('^[0-9]+$')
        ]]
      },
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.router.navigate(['/welcome/'+this.form.value.username])
    console.log(JSON.stringify(this.form.value, null, 2));
  }
}




