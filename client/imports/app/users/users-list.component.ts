import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {MeteorObservable} from 'meteor-rxjs';
import {Users} from '../../../../both/collections/users.collection';

import template from './users-list.component.html';
import style from './users-list.component.scss';
import {InjectUser} from "angular2-meteor-accounts-ui";

@Component({
    selector: 'users-list',
    template,
    styles: [style]
})

@InjectUser('user')
export class UsersListComponent implements OnInit, OnDestroy {
    usersSub: Subscription;
    users;

    ngOnInit() {

        this.usersSub = MeteorObservable.subscribe('usersList').subscribe();
        this.users = Users.find({_id: {$ne: Meteor.userId()}}).fetch();
        console.log("Users " + JSON.stringify(Meteor.user()));
    }

    ngOnDestroy() {

    }
}