import {SharedModule} from '../shared';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    MatButtonModule
  ],
  exports: [
    MatButtonModule
  ]
})
export class MaterialModule {}
