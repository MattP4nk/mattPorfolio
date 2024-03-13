import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <app-navbar></app-navbar>
    <main>
      <div class="container-fluid" style="padding: 5wmin; margin-top: 5vh; ">
          <div class="row" style="width: 100%;margin: 0px;">
              <div class="col-10" style="padding: 0px;">
                  <router-outlet></router-outlet>
              </div>
              <div class="col-2" style="margin-top: 0px;margin-left: 0px;padding: 0px;">
                  <section id="ownerSide">
                    <app-muse></app-muse>
                  </section>
              </div>
          </div>
      </div>
  </main>
    
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mattPorfolio';
}
