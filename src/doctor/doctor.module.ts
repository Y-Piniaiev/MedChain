import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { SidebarComponent } from './doctor-dashboard/sidebar/sidebar.component';
import { HeaderComponent } from './doctor-dashboard/header/header.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { UtilsModule } from 'src/utils/utils.module';
import { FormsModule } from '@angular/forms';
import { ViewRecordComponent } from './view-record/view-record.component';
import { RecordComponent } from './view-record/record/record.component';

@NgModule({
  declarations: [
    DoctorDashboardComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardHomeComponent,
    ViewRecordComponent,
    RecordComponent,
    
  ],
  imports: [CommonModule,FormsModule, DoctorRoutingModule, UtilsModule],
})
export class DoctorModule {}
