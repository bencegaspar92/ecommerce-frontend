import { AuthComponent } from './auth.component';
import {NgModule} from '@angular/core';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../shared';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent
  ],
})
export class AuthModule {}
