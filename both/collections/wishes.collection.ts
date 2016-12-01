import { MongoObservable } from 'meteor-rxjs';
import { Wish } from '../models/wish.model';
import { Meteor } from 'meteor/meteor';

export const Wishes = new MongoObservable.Collection<Wish>('wishes');

function loggedIn() {
    return !!Meteor.user();
}

Wishes.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
});