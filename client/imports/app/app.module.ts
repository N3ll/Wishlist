import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {routes, ROUTES_PROVIDERS} from './app.routes';
import {WISHES_DECLARATIONS} from './wishes';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from '@angular/router';
import {AccountsModule} from 'angular2-meteor-accounts-ui';
import {UsersListComponent} from "./users/users-list.component";
import {UserWishesComponent} from "./users/user-wishes.component";
import {HolidaysComponent} from "./holidays/holidays.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        AccountsModule
    ],
    declarations: [
        AppComponent,
        UsersListComponent,
        UserWishesComponent,
        HolidaysComponent,
        ...WISHES_DECLARATIONS
    ],
    providers: [
        ...ROUTES_PROVIDERS
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule {
}