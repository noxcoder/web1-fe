import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from 'services/user.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    loginForm: FormGroup;
    constructor(private _fb: FormBuilder, private _userService: UserService, private _router: Router) { }

    ngOnInit() {
        this.setLoginForm();
    }

    setLoginForm() {
        this.loginForm = this._fb.group({
            username: ["", Validators.required],
            password: ["", Validators.required]
        });
    }

    login(form) {
        const data = new FormData();
        data.append("email", form.value.username);
        data.append("password", form.value.password);

        this._userService.login(data).subscribe(res => {
            this._router.navigate(["/profile"]);
        }, error => {
            window.alert(JSON.parse(JSON.stringify(error.error)));
        });
    }
}
