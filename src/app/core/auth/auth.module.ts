import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './auth.service';
import {HttpService} from './http.service';
import {AuthGuard} from './auth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    HttpService
  ],
  declarations: []
})
export class AuthModule {
}
