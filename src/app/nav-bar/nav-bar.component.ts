import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private router: Router) {

  }

  protected Navegar = (rota: string = "") => {
    this.router.navigateByUrl(`/${rota}`);
  }

}
