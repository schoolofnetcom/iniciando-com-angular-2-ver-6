import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeNewComponent} from './employee-new/employee-new.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        EmployeeListComponent,
        EmployeeNewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
