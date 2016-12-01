import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {MeteorObservable} from 'meteor-rxjs';
import {Users} from '../../../../both/collections/users.collection';
import {Wishes} from '../../../../both/collections/wishes.collection';
import {Wish} from '../../../../both/models/wish.model'

import template from './user-wishes.component.html';
import style from './user-wishes.component.scss';
import {InjectUser} from "angular2-meteor-accounts-ui";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
    selector: 'user-wishes',
    template,
    styles: [style]
})

@InjectUser('user')
export class UserWishesComponent implements OnInit, OnDestroy {
    userWishing;
    userId: String;
    paramsSub: Subscription;
    wishes: Observable<Wish[]>;
    wishesSub: Subscription;
    present:Wish;
    length:number;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {

        this.wishesSub = MeteorObservable.subscribe('wishList').subscribe();

        this.paramsSub = this.route.params
            .map(params => params['userId'])
            .subscribe(userId => {
                this.userId = userId;
                console.log("params userid " + this.userId);
                this.userWishing = Users.findOne(this.userId);
            });

        this.wishes = Wishes.find({owner: this.userId}).zone();
        this.length=Wishes.find({owner: this.userId}).fetch().length;
        console.log(Wishes.find({owner: this.userId}).fetch().length);
    }


    markPresent(wish_id: String) {
        console.log("markPresent");
        this.present = Wishes.findOne({_id: wish_id});
        Wishes.update({_id: wish_id}, {$set: {crossed: !this.present.crossed}});
        console.log(Wishes.find().fetch());
    }


    ngOnDestroy() {
        // this.paramsSub.unsubscribe();
    }
}