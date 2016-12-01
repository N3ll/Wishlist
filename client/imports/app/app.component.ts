import {Component, DoCheck} from '@angular/core';
import template from './app.component.html';
import {Meteor} from 'meteor/meteor'
import {InjectUser} from "angular2-meteor-accounts-ui";
import {Router} from "@angular/router";

@Component({
    selector: 'app',
    template
})

@InjectUser('user')
export class AppComponent implements DoCheck {
    private isLoggedIn: boolean = false;
    private user: Meteor.User;

    constructor( private router: Router ) { }
    ngDoCheck() {
        if (!this.isLoggedIn && !!this.user) {
            this.isLoggedIn = true;
            if (this.router.url === '/wish-list') {
                this.router.navigate( ['/'] );
            }
            if (this.router.url === '/friends') {
                this.router.navigate( ['/'] );
            }
        } else if (this.isLoggedIn && this.user === null) {
            this.isLoggedIn = false;
            if (this.router.url === '/friends') {
                this.router.navigate( ['/'] );
            }
        }
    }

}