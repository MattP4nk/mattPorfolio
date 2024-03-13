import { Component, OnInit } from '@angular/core';
import { JobModel } from 'src/app/models/JobModel';
import { PetitionModel } from 'src/app/models/PetitionModel';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-jobs',
  template: `
    <section class="page" style="margin-top:8vh;">
      <span class="d-flex black line"></span>
      <div class="intro-div">
        <div class="row no-pad">
          <div class="col">
            <img class="img-header" src="/assets/AboutJobs.png" />
          </div>
          <div class="col">
            <p class="roboto-text">
              About everything I did.
            </p>
          </div>
        </div>
      </div>

      <span class="d-flex black line"></span>
      <div class="row row-cont">
        <div class="col-1">
          <img class="img-item" src="/assets/GreatExperiences.png" />
        </div>
        <div class="col cols-gene flex-column">
          <ul
            style="padding: 0px; margin-bottom: 0px; margin-top:10px;"
            *ngFor="let job of awesomeJobs"
          >
            <h2 class="roboto-text">{{ job.name }}</h2>
            <p class="roboto-text" style="">{{ job.details }}<br /></p>
            <span class="d-flex red line" style="height: 5px;"></span>
          </ul>
        </div>
      </div>

      <span class="d-flex black line"></span>
      <div class="row row-cont">
        <div class="col-1">
          <img class="img-item" src="/assets/FoodOnTable.png" />
        </div>
        <div class="col cols-gene flex-column">
          <ul
            style="padding: 0px; margin-bottom: 0px; margin-top:10px;"
            *ngFor="let job of surviveJobs"
          >
            <h2 class="roboto-text">{{ job.name }}</h2>
            <p class="roboto-text" style="">{{ job.details }}<br /></p>
            <span class="d-flex red line" style="height: 5px;"></span>
          </ul>
        </div>
      </div>

      <span class="d-flex black line"></span>
      <div class="row row-cont">
        <div class="col-1">
          <img class="img-item" src="/assets/DreamJobs.png" />
        </div>
        <div class="col cols-gene flex-column">
          <ul
            style="padding: 0px; margin-bottom: 0px; margin-top:10px;"
            *ngFor="let job of dreamJobs"
          >
            <h2 class="roboto-text">{{ job.name }}</h2>
            <p class="roboto-text" style="">{{ job.details }}<br /></p>
            <span class="d-flex red line" style="height: 5px;"></span>
          </ul>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  constructor(private infoService: InfoService) {}
  //Job arrays
  awesomeJobs: Array<JobModel> = [];
  surviveJobs: Array<JobModel> = [];
  dreamJobs: Array<JobModel> = [];

  ngOnInit(): void {
    this.getJobs();
  }

  getPetition: PetitionModel = {
    request: 'get',
    area: 'experience',
    target: 'all',
    key: undefined,
  };
  getJobs() {
    this.infoService.infoManager(this.getPetition).subscribe((data) => {
      for (let job of data.response) {
        switch (job.type) {
          case 'Making a Living':
            this.surviveJobs.push(job);
            break;
          case 'Great Experiences':
            this.awesomeJobs.push(job);
            break;
          case 'Dream Job':
            this.dreamJobs.push(job);
            break;
        }
      }
    });
  }
}
