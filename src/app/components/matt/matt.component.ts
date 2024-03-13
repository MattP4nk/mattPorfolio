import { Component, OnInit } from '@angular/core';
import { AbmModel } from 'src/Models/AbmModel';
import { PetitionModel } from 'src/app/models/PetitionModel';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-matt',
  template: `
    <div class="card banner" style="margin-left: 15px; margin-top:8vh">
      <div class="card-header banner-title">
        <h5 id="abm-b" class="mb-0" style="font-size: 3vmin;">
          {{ abm.first_name }} {{ abm.last_name }} // MATT
        </h5>
      </div>
      <div class="card-body banner-body roboto-text">
        <p></p>
        <img
          class="rounded-circle img-fluid mugshot-size profile"
          style="float: left;"
          [src]="abm.picture"
        />
        <div class="roboto-text">
          <div class="xl-col-6" style="background-color:#fff5; border-radius: 10px;">
            <p>
              My name is Rodrigo Luna Segovia, I'm a university student in the
              UTN.
            </p>
          </div>
          <div class="xl-col-6" style="background-color:#fff5; border-radius: 10px;">
            <p>
              I'm currently living in San Juan, Argentina, and looking for my
              first IT job.
            </p>
          </div>
          <div class="xl-col-6" style="background-color:#fff5;border-radius: 10px;">
            <p>
              Contact Info:<br>
              Phone number => {{ abm.phone_number }}<br>
              Mail => {{ abm.email }}
            </p>
          </div>
          <div class="xl-col-6" style="background-color:#fff5;border-radius: 10px;">
            <p>
              I made this site as a Porfolio for everything I do, you can use
              the menu or the little chat bot to check it out!
            </p>
          </div>
        </div>
        <div class="container" style="padding: 5vmin;">
          <p class="roboto-text" style="text-align: left;">
            {{ abm.personal_info }}
          </p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./matt.component.css'],
})
export class MattComponent implements OnInit {
  constructor(private infoService: InfoService) {}
  abm: AbmModel = new AbmModel();
  petition: PetitionModel = {
    request: 'get',
    area: 'matt',
    target: 'matt',
    key: undefined,
  };

  ngOnInit(): void {
    this.getMatt();
  }
  getMatt() {
    this.infoService.infoManager(this.petition).subscribe((data) => {
      this.abm = data.response;
    });
  }
}
