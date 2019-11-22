import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './admin-dashboard/sidebar/sidebar.component';
import { AddrecipeComponent } from './admin-dashboard/addrecipe/addrecipe.component';
import { JwmodalComponent } from './admin-dashboard/jwmodal/jwmodal.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AdminDashboardComponent,
    SidebarComponent,
    AddrecipeComponent,
    JwmodalComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule 
    
    
  ],
  exports: [
    AdminDashboardComponent
  ]
  
})


export class AdminDashboardModule { }

