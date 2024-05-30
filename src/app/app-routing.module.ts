import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MattComponent } from './components/matt/matt.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
const routes: Routes = [
  {
    path: '',
    component: MattComponent
  },
  {
    path: 'Jobs',
    component: JobsComponent
  },
  {
    path: 'Education',
    component: EducationComponent
  },
  {
    path: 'Skills',
    component: SkillsComponent
  },
  {
    path: 'Projects',
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
