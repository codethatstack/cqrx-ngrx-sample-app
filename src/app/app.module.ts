import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { MainNavComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

const ROUTES: Route[] = [
  {
    path: '',
    component: MainNavComponent,
    loadChildren: "./contacts/contacts.module#ContactsModule"
  },
];

@NgModule({
  declarations: [AppComponent, MainNavComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { initialNavigation: 'enabled' }),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Store DevTools',
      logOnly: false
    }),
    EffectsModule.forRoot([]),    
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
