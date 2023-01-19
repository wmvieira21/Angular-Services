import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountComponent } from './exercise1/account/account.component';
import { NewAccountComponent } from './exercise1/new-account/new-account.component';
import { LoggingService } from './exercise1/services/logging.service';
import { DataAccountService } from './exercise1/services/dataAccount.service';
import { ActiveUsersComponent } from './exercise2/activeUsers/activeUsers.component';
import { InactiveUsersComponent } from './exercise2/InactiveUser/inactiveUsers.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoggingService, DataAccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
