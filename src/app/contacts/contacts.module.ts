import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';

import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactsComponent, ContactEditComponent, ContactFormComponent } from './components';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ContactEffects } from './state/effects';
import { reducer } from './state/reducer';

const ROUTES: Route[] = [
  { 
    path: '', 
    component: ContactsComponent,
  },
  {
    path: 'contact/:id',
    component: ContactEditComponent
  }
];


@NgModule({
  declarations: [ContactEditComponent, ContactsComponent, ContactFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('contacts', reducer),
    EffectsModule.forFeature([ContactEffects]),
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
})
export class ContactsModule {}
