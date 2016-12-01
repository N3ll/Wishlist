import { Wishes } from '../../../both/collections/wishes.collection';
import { Wish } from '../../../both/models/wish.model';
import { Meteor } from 'meteor/meteor'

export function loadWishes() {
    if (Wishes.find().cursor.count() === 0) {
        console.log("In wishes "+JSON.stringify(Meteor.users.findOne()._id));
        const wishes:Wish[] = [{
            name: 'Chocolate',
            owner: Meteor.users.findOne()._id
        }, {
            name: 'Candy',
            owner: Meteor.users.findOne()._id
        }, {
            name: 'Ant farm',
            owner: Meteor.users.findOne()._id
        }];
        wishes.forEach((wish:Wish) => Wishes.insert(wish));
    }
}