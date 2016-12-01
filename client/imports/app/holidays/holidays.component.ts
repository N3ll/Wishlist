import template from './holidays.component.html';
import {Component} from "@angular/core";
import {InjectUser} from "angular2-meteor-accounts-ui";

@Component({
    selector: 'holidays',
    template
})
@InjectUser('user')
export class HolidaysComponent{
    user: Meteor.User;
};