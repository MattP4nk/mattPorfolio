import { Component, OnInit } from '@angular/core';
import { PetitionModel } from 'src/app/models/PetitionModel';
import { SkillModel } from 'src/app/models/SkillModel';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-skills',
  template: `
    <section class="page" style="margin-top: 8vh;">
      <span class="d-flex black-line"></span>
      <div class="intro-div">
        <div class="row no-pad">
          <div class="col">
            <img class="img-header" src="/assets/AboutSkills.png" />
          </div>
          <div class="col">
            <p class="roboto-text sub-text">About my skills.</p>
          </div>
        </div>
      </div>
      <span class="d-flex black-line"></span>
      <div class="row row-cont roboto-text" style="height: 70vh">
        <div class="col-auto skills-col text-center" style="padding: 0px;">
          <img src="/assets/Coding.png" />
          <div
            id="carousel-1"
            class="carousel slide"
            data-bs-ride="carousel"
            style="padding: 10px;"
          >
            <div class="carousel-inner" style="border-radius: 30px;">
              <div class="carousel-item">
                <div class="card">
                  <img class="card-img w-100 d-block void" />
                  <div class="card-img-overlay">
                    <h4>Languages</h4>
                    <ul>
                      <p class="roboto-text" *ngFor="let skill of codingSkills">
                        =>{{ skill.name }}<br />==>{{ skill.knowledge }}
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card">
                  <img class="card-img w-100 d-block void" />
                  <div class="card-img-overlay">
                    <h4>Path</h4>
                    <p></p>
                    <ul>
                      <p class="roboto-text" *ngFor="let skill of codingSkills">
                        =>{{ skill.name }}<br />==>{{ skill.thoughts }}
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="carousel-item active">
                <div class="card">
                  <img class="card-img w-100 d-block void" />
                  <div class="card-img-overlay">
                    <h4>[C0de]</h4>
                    <ul>
                      <p class="roboto-text" *ngFor="let skill of codingSkills">
                        =>{{ skill.name }}<br />==>{{ skill.detail }}
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a
                class="carousel-control-prev"
                href="#carousel-1"
                role="button"
                data-bs-slide="prev"
                ><span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span
                ><span class="visually-hidden">Previous</span></a
              ><a
                class="carousel-control-next"
                href="#carousel-1"
                role="button"
                data-bs-slide="next"
                ><span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span
                ><span class="visually-hidden">Next</span></a
              >
            </div>
          </div>
        </div>
        <div class="col-auto skills-col text-center" style="padding: 0px;">
          <img src="/assets/Writing.png" />
          <div
            id="carousel-2"
            class="carousel slide"
            data-bs-ride="carousel"
            style="padding: 10px;"
          >
            <div class="carousel-inner" style="border-radius: 30px;">
              <div class="carousel-item active">
                <div class="card">
                  <img class="card-img w-100 d-block void" />
                  <div class="card-img-overlay">
                    <h4>On the Page</h4>
                    <ul>
                      <p
                        class="roboto-text"
                        *ngFor="let skill of writingSkills"
                      >
                        =>{{ skill.name }}<br />==>{{ skill.knowledge }}
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card">
                  <img class="card-img w-100 d-block void" />
                  <div class="card-img-overlay">
                    <h4>Next Chapter</h4>
                    <ul>
                      <p
                        class="roboto-text"
                        *ngFor="let skill of writingSkills"
                      >
                        =>{{ skill.name }}<br />==>{{ skill.thoughts }}
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card">
                  <img class="card-img w-100 d-block void" />
                  <div class="card-img-overlay">
                    <h4>Fragments</h4>
                    <ul>
                      <p
                        class="roboto-text"
                        *ngFor="let skill of writingSkills"
                      >
                        =>{{ skill.name }}<br />==>{{ skill.detail }}
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a
                class="carousel-control-prev"
                href="#carousel-2"
                role="button"
                data-bs-slide="prev"
                ><span class="carousel-control-prev-icon"></span
                ><span class="visually-hidden">Previous</span></a
              ><a
                class="carousel-control-next"
                href="#carousel-2"
                role="button"
                data-bs-slide="next"
                ><span class="carousel-control-next-icon"></span
                ><span class="visually-hidden">Next</span></a
              >
            </div>
          </div>
        </div>
        <div class="col-auto skills-col text-center" style="padding: 0px;">
          <img src="/assets/Social.png" />
          <div
            id="carousel-3"
            class="carousel slide"
            data-bs-ride="carousel"
            style="padding: 10px;"
          >
            <div class="carousel-inner" style="border-radius: 30px;">
              <div class="carousel-item active">
                <div class="card">
                  <img class="card-img w-100 d-block void" />
                  <div class="card-img-overlay">
                    <h4>Social</h4>
                    <ul>
                      <p class="roboto-text" *ngFor="let skill of lifeSkills">
                        =>{{ skill.name }}<br />==>{{ skill.knowledge }}
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card">
                  <img class="card-img w-100 d-block void" />
                  <div class="card-img-overlay">
                    <h4>Digital</h4>
                    <ul>
                      <p class="roboto-text" *ngFor="let skill of lifeSkills">
                        =>{{ skill.name }}<br />==>{{ skill.thoughts }}
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card">
                  <img class="card-img w-100 d-block void" />
                  <div class="card-img-overlay">
                    <h4>Misc</h4>
                    <ul>
                      <p class="roboto-text" *ngFor="let skill of lifeSkills">
                        =>{{ skill.name }}<br />==>{{ skill.detail }}
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a
                class="carousel-control-prev"
                href="#carousel-3"
                role="button"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon"></span
                ><span class="visually-hidden">Previous</span></a
              ><a
                class="carousel-control-next"
                href="#carousel-3"
                role="button"
                data-bs-slide="next"
                ><span class="carousel-control-next-icon"></span
                ><span class="visually-hidden">Next</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.getSkills();
  }

  codingSkills: Array<SkillModel> = [];
  writingSkills: Array<SkillModel> = [];
  lifeSkills: Array<SkillModel> = [];

  getPetition: PetitionModel = {
    request: 'get',
    area: 'education',
    target: 'all',
    key: undefined,
  };
  getSkills() {
    this.infoService.infoManager(this.getPetition).subscribe((data) => {
      for (let edu of data.response) {
        switch (edu.type) {
          case 'Coding':
            this.codingSkills.push(edu);
            break;
          case 'Writing':
            this.writingSkills.push(edu);
            break;
          case 'Life':
            this.lifeSkills.push(edu);
            break;
        }
      }
    });
  }
}
