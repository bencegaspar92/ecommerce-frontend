import {CoreModule} from './core';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material';
import {HomeModule} from './home/home.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FooterComponent, HeaderComponent, NavComponent, SharedModule} from './shared';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CoreModule,
    AuthModule,
    HomeModule,
    SharedModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
