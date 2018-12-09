import { Injectable, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { Command } from '@cqrx/core';

import * as fromContacts from '../state';
import { ContactModel } from '../models';

export interface SaveContactResponse {
  isSuccessful: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class SaveContactCommand implements Command<ContactModel, SaveContactResponse>, OnDestroy {
    
    public errors = this.store.pipe(select(fromContacts.getError));
    public pending = this.store.pipe(select(fromContacts.getPending));
    public complete = this.store.pipe(
      select(fromContacts.getSaveResponse),
      filter(p => !!p)
    );
    
    public name = 'Save Contact Command - NGRX Powered';
    
    constructor(private store: Store<fromContacts.State>) { }
    
    execute(model: ContactModel): void {
        this.store.dispatch(new fromContacts.SaveContactDetailAction(model));
    }

    public ngOnDestroy(): void { }
}