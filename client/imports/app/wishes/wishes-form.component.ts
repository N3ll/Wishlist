import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {Wishes} from '../../../../both/collections/wishes.collection';


import template from './wishes-form.component.html';

import {InjectUser} from "angular2-meteor-accounts-ui";

@Component({
    selector: 'wishes-form',
    template
})

@InjectUser('user')
export class WishesFormComponent implements OnInit {
    addForm: FormGroup;
    user: Meteor.User;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.addForm = this.formBuilder.group({
            name: ['', Validators.required],
        });
    }

    addWish(): void {
        if (!Meteor.userId()) {
            alert('Please log in to add a wish');
            return;
        }

        if (this.addForm.valid) {
            Wishes.insert(Object.assign({}, this.addForm.value, {owner: Meteor.userId()}));

            this.addForm.reset();
        }
    }

}