import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { RobotsComponent } from './robots/robots.component';
import { GitComponent } from './git/git.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        HttpClientModule
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        RobotsComponent,
        GitComponent
    ]
})
export class ExamplesModule { }
