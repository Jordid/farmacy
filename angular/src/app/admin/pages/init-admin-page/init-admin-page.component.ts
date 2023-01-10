import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init-admin-page',
  templateUrl: './init-admin-page.component.html',
  styleUrls: ['./init-admin-page.component.scss']
})
export class InitAdminPageComponent {

  showWellcomeMeesage: boolean = false;

  constructor(private router: Router) {
    const currentRoute = this.router.url;
    this.showWellcomeMeesage = !currentRoute?.includes('/admin/');
    setTimeout(() => {
      this.showWellcomeMeesage = false
    }, 3000);
  }
}
