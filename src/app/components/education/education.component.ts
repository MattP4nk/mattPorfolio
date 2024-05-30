import { Component, OnInit } from '@angular/core';
import { EduModel } from 'src/app/models/EduModel';
import { PetitionModel } from 'src/app/models/PetitionModel';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-education',
  template: `
    <section class="page"style="margin-top:8vh;" >
      <span class="d-flex black line"></span>
      <div class="intro-div">
        <div class="row no-pad">
          <div class="col">
            <img class="img-header" src="/assets/AboutEducation.png" />
          </div>
          <div class="col">
            <p class="roboto-text">
              About everything I leanrt.
            </p>
          </div>
        </div>
      </div>

      <span class="d-flex black line"></span>
      <div class="row row-cont">
        <div class="col-1">
          <img class="img-item" src="/assets/Academic.png" />
        </div>
        <div class="col cols-gene flex-column">
          <ul
            style="padding: 0px; margin-bottom: 0px; margin-top:10px;"
            *ngFor="let edu of formalEdus"
          >
           <span class="d-flex red line" style="height: 5px;"></span>
            <h2 class="roboto-text">{{ edu.name }}</h2>
            <p class="roboto-text" style="">{{ edu.details }}<br /></p>
          </ul>
        </div>
      </div>

      <span class="d-flex black line"></span>
      <div class="row row-cont">
        <div class="col-1">
          <img class="img-item" src="/assets/Courses.png" />
        </div>
        <div class="col cols-gene flex-column">
          <ul
            style="padding: 0px; margin-bottom: 0px; margin-top:10px;"
            *ngFor="let edu of courseEdus"
          >
            <span class="d-flex red line" style="height: 5px;"></span>
            <h2 class="roboto-text">{{ edu.name }}</h2>
            <p class="roboto-text" style="">{{ edu.details }}<br /></p>
          </ul>
        </div>
      </div>

      <span class="d-flex black line"></span>
      <div class="row row-cont">
        <div class="col-1">
          <img class="img-item" src="/assets/Hobbies.png" />
        </div>
        <div class="col cols-gene flex-column">
          <ul
            style="padding: 0px; margin-bottom: 0px; margin-top:10px;"
            *ngFor="let edu of hobbiesEdus"
          >
            <span class="d-flex red line" style="height: 5px;"></span>
            <h2 class="roboto-text">{{ edu.name }}</h2>
            <p class="roboto-text" style="">{{ edu.details }}<br /></p>
          </ul>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  constructor(private infoService: InfoService) {}

  formalEdus: Array<EduModel> = [];
  courseEdus: Array<EduModel> = [];
  hobbiesEdus: Array<EduModel> = [];

  ngOnInit(): void {
    this.getEdus();
  }

  getPetition: PetitionModel = {
    request: 'get',
    area: 'education',
    target: 'all',
    key: undefined,
  };
  getEdus() {
    this.infoService.infoManager(this.getPetition).subscribe((data) => {
      for (let edu of data.response) {
        switch (edu.type) {
          case 'Formal':
            this.formalEdus.push(edu);
            break;
          case 'Course':
            this.courseEdus.push(edu);
            break;
          case 'Hobbies':
            this.hobbiesEdus.push(edu);
            break;
        }
      }
    });
  }
}
