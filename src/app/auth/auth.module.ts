import { AuthComponent } from './auth.component';
import {NgModule} from '@angular/core';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../shared';
import {MaterialModule} from '../material';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule {}
