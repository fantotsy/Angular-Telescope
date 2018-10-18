import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkillsPageComponent} from './skills-page/skills-page.component';
import {SkillsRoutingModule} from './skills-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    SkillsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [SkillsPageComponent]
})

export class SkillsModule {
}
