import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExpLaboralComponent } from './exp-laboral/exp-laboral.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactComponent } from './contact/contact.component';
import { BanerComponent } from './baner/baner.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    InfoPersonalComponent,
    EducacionComponent,
    ExpLaboralComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ContactComponent,
    BanerComponent,
    PersonalInformationComponent,
    EducationComponent,
    WorkExperienceComponent,
    SkillsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
