import { Component, OnInit } from '@angular/core';
import { UserService } from 'services/user.service'
import { CookieService } from 'ngx-cookie-service';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    user: any;

    constructor(private _userService: UserService, private _cookieService: CookieService) {
        this.user = this._userService.currentUserValue;
        if (!this.user) {
            window.location.href = "/login";
        }
     }

    ngOnInit() {
        if (this.user) {
            this._userService.getFlag2().subscribe(res => {
                window.alert(JSON.stringify(res));
            });
            this._cookieService.set("currentUser", this.user.email);
        } else {
            window.location.href = "/login";
        }
    }

    flag3() {
        //TODO
        // Send a request to /flag3
        //Who has permissions?
        // Breadcrumbs?
    }

}
