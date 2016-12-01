import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import {APP_BASE_HREF} from '@angular/common';


import {UsersListComponent} from "./users/users-list.component";
import {UserWishesComponent} from "./users/user-wishes.component";
import {WishesListComponent} from "./wishes/wishes-list.component";
import {HolidaysComponent} from "./holidays/holidays.component";

export const routes: Route[] = [
    { path: '', component: HolidaysComponent },
    { path: 'wish-list', component: WishesListComponent},
    { path: 'friends', component: UsersListComponent},
    { path: 'wish/:userId', component: UserWishesComponent }
];

export const ROUTES_PROVIDERS = [{
    provide: 'canActivateForLoggedIn',
    useValue: () => !! Meteor.userId()
},
    {provide: APP_BASE_HREF, useValue : '/' }];