import { Meteor } from 'meteor/meteor';

import {loadUsers} from "./imports/fixtures/users";
import './imports/publications/users'
import { loadWishes } from './imports/fixtures/wishes';
import './imports/publications/wishes';
import {Wishes} from "../both/collections/wishes.collection";



Meteor.startup(() => {
    loadUsers();
    loadWishes();
    console.log(Wishes.find().fetch());
});