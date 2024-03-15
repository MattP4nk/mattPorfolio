import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-dark fixed-top" style="background-color:#00000099;">
      <div class="container-fluid">
        <a class="navbar-brand brand-size" href="arg"
        style="padding: 0px; padding-left:10px"
          ><img class="brand-size" src="/assets/APLogo-20-20.png"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end roboto-text"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style="max-width: 30vw; min-width: 150px; padding: 10px"
        >
          <div class="offcanvas-header text-center" style="background-color: black;">
            <h3 class="offcanvas-title text-center" id="offcanvasNavbarLabel" style=" width: 100%; color: lightgrey;">
              MENU
            </h3>
          </div>
          <div class="offcanvas-body" style="background-color: black; padding=0px; position: relative;">
            <ul class="nav flex-column text-center" style="width:100%">
              <li>
                <a class="nav-link" routerLink="/" style="color: azure;"> #About Matt </a >
              </li>
              <li>
                <a class="nav-link" routerLink="/Education" style="color: azure;"> #About Education </a>
              </li>
              <li>
                <a class="nav-link" routerLink="/Jobs" style="color: azure;"> #About Jobs </a>
              </li>
              <li>
                <a class="nav-link" routerLink="/Skills" style="color: azure;"> #About Skills </a>
              </li>
              <li>
                <a class="nav-link" routerLink="/Projects" style="color: azure;"> #About Projects </a>
              </li>
            </ul>
            <ul
              class="navbar-nav list-group list-group-horizontal justify-content-center"
              style="position: absolute; bottom:0; left:0; width:100%"
            >
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.linkedin.com/in/rodrigo-luna-segovia/"
                  target="”_blank”"
                  ><img class="social-icon" src="/assets/linkedin.png"
                /></a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.instagram.com/mattp4nk/"
                  target="”_blank”"
                  style="margin-left: 10px; margin-right: 10px;"
                  ><img class="social-icon" src="/assets/instagram.png"
                /></a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://derangedink.blogspot.com/"
                  target="”_blank”"
                  ><img class="social-icon" src="/assets/blogspot.png"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
