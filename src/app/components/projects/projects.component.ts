import { Component, OnInit } from '@angular/core';
import { PetitionModel } from 'src/app/models/PetitionModel';
import { ProjectModel } from 'src/app/models/ProjectModel';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-projects',
  template: `
    <section class="page roboto-text" style="margin-top: 8vh;">
      <div class="intro-div">
        <div class="row no-pad">
          <div class="col">
            <img class="img-header" src="/assets/AboutProjects.png" />
          </div>
          <div class="col">
            <p>About everything I made</p>
          </div>
        </div>
      </div>
      <carousel [showIndicators]="false" [isAnimated]="true">
        <slide *ngFor="let slide of projectsList">
          <div class="row carou-cont" style="padding: 25px;">
            <div class="col" style="min-width: 250px;">
              <img class="projectFace" [src]="slide.URL" />
            </div>
            <div class="col">
              <h3 style="font-size: medium;">{{ slide.name }}</h3>
              <p>{{ slide.details }}</p>
            </div>
          </div>
        </slide>
      </carousel>
    </section>
  `,
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor(private infoService: InfoService) {}
  activeSlideIndex: number = 0;
  //Projects
  projectsList: Array<ProjectModel> = [];

  ngOnInit(): void {
    this.getProjects();
  }

  getPetition: PetitionModel = {
    request: 'get',
    area: 'projects',
    target: 'all',
    key: undefined,
  };

  getProjects() {
    this.infoService.infoManager(this.getPetition).subscribe((data) => {
      console.log(data.response);
      data.response.forEach((project: ProjectModel) => {
        this.projectsList.push(project);
      });
    });
  }
}
