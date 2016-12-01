import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {MeteorObservable} from 'meteor-rxjs';

import {Wishes} from '../../../../both/collections/wishes.collection';
import {Wish} from '../../../../both/models/wish.model';

import template from './wishes-list.component.html';
import style from './wishes-list.component.scss';
import {InjectUser} from "angular2-meteor-accounts-ui";

@Component({
    selector: 'wishes-list',
    template,
    styles: [style]
})

@InjectUser('user')
export class WishesListComponent implements OnInit, OnDestroy {
    wishes: Observable<Wish[]>;
    wishesSub: Subscription;
    user: Meteor.User;
    private isLoggedIn: boolean = false;



    ngOnInit() {
        this.wishesSub = MeteorObservable.subscribe('wishList').subscribe();
        this.wishes = Wishes.find({owner: Meteor.userId()}).zone();

        console.log("userid " + Meteor.userId());
        console.log(Wishes.find({owner: Meteor.userId()}).fetch());
    }


    removeWish(wish: Wish): void {
        Wishes.remove(wish._id);
    }

    isOwner(wish: Wish): boolean {
        return this.user && this.user._id === wish.owner;
    }


    ngOnDestroy() {
        //this.wishesSub.unsubscribe();
    }
}