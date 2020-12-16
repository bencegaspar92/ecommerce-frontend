import {SharedModule} from '../shared';
import { NgModule } from '@angular/core';
import {MatAutocompleteModule, MatButtonModule, MatInputModule, MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatAutocompleteModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule {}
