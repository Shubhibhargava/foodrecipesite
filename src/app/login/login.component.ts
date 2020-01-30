import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../shared/alert.service';
import { AuthenticationService } from '../shared/authetication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
    //     if(this.f.username.value == "shubhi")
    //     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
    //    else
    //    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
       
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

   
    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    if(this.f.username.value == "shubhi")
                    this.router.navigate([this.route.snapshot.queryParams['returnUrl'] || '/admin']);
                    else
                    this.router.navigate([this.route.snapshot.queryParams['returnUrl'] || '/home']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

}
