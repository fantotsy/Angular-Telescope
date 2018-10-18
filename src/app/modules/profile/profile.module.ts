import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {ProfileRoutingModule} from './profile-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [ProfilePageComponent]
})
export class ProfileModule {
}
