import {NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatRippleModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  exports: [
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule {
}
