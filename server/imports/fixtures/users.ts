import { Meteor } from 'meteor/meteor'
import  {Accounts} from 'meteor/accounts-base'
import { Users } from '../../../both/collections/users.collection';

export function loadUsers() {
    console.log("creating users");
    console.log(Meteor.users.find().count());
    if ( Meteor.users.find().count() === 0 ) {
        Accounts.createUser({
            username: 'Clair',
            email: 'clair@js.com',
            password: '123',
            profile: {
                first_name: 'Clair',
                last_name: 'Snow'
            }
        });
        console.log("In users"+ JSON.stringify(Meteor.users.findOne()));
    }
}