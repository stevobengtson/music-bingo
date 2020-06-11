import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../user.service';
import { MustMatch } from '@app/shared/must-match.validator';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService
    ) {
        // redirect to home if already logged in
        if (this.userService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            nickname: [''],
            login: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            passwordConfirmation: ['', [Validators.required, Validators.minLength(6)]]
        }, {
          validator: MustMatch('password', 'passwordConfirmation')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                () => {
                    alert('Registration successful');
                    this.router.navigate(['/users/login']);
                },
                error => {
                    console.error(error);
                    alert('Unable to register user!');
                    this.loading = false;
                });
    }
}