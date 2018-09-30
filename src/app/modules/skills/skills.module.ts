import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkillsPageComponent} from './skills-page/skills-page.component';
import {SkillsRoutingModule} from './skills-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SkillsRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SkillsPageComponent]
})

export class SkillsModule {
}
