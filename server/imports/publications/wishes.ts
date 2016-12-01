import {Meteor} from 'meteor/meteor';
import {Wishes} from '../../../both/collections/wishes.collection';

Meteor.publish('wishList', function () {
    console.log("wishlist "+this.userId);
    //return Wishes.find(buildQuery.call(this));
    return Wishes.find({});
});


//
// function buildQuery(): Object {
//     const isAvailable = {
//         $and: [{
//             owner: this.userId
//         }, {
//             owner: {
//                 $exists: true
//             }
//         }]
//     }
//
//     return isAvailable;
// }