import {SharedModule} from '../shared';
import { NgModule } from '@angular/core';
import {MatAutocompleteModule, MatButtonModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule {}
