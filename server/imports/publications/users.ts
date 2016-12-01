import {Meteor} from 'meteor/meteor';
import { Users } from '../../../both/collections/users.collection';

Meteor.publish('usersList', function () {
    var cursor = Meteor.users.find({});
    console.log("cursor "+cursor.count());
    return cursor;
});
