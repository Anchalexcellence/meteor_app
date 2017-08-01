import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PARTIES_DECLARATIONS } from './parties';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { routes,ROUTES_PROVIDERS } from './app.routes';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
     ReactiveFormsModule,
     RouterModule.forRoot(routes),
     AccountsModule
  ],
  providers: [
    ...ROUTES_PROVIDERS
  ],
  declarations: [
    AppComponent,
    ...PARTIES_DECLARATIONS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
