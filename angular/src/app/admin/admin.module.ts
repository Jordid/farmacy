import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';
import { AdminRoutingModule } from './admin-routing.module';
import { InitAdminPageComponent } from './pages/init-admin-page/init-admin-page.component';

@NgModule({
  declarations: [
    InitAdminPageComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule
  ],
})
export class AdminModule { }
