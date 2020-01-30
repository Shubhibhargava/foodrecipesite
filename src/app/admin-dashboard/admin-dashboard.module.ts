import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './admin-dashboard/sidebar/sidebar.component';
import { AddrecipeComponent } from './admin-dashboard/addrecipe/addrecipe.component';
import { JwmodalComponent } from './admin-dashboard/jwmodal/jwmodal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './admin-dashboard/home/home.component';
import { RecipesComponent } from './admin-dashboard/recipes/recipes.component';
import { UserlistComponent } from './admin-dashboard/userlist/userlist.component';
import { CategoriesComponent } from './admin-dashboard/categories/categories.component';
import { QueriesComponent } from './admin-dashboard/queries/queries.component';
import { DataTablesModule } from 'angular-datatables';
import { EditrecipeComponent } from './admin-dashboard/editrecipe/editrecipe.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    SidebarComponent,
    AddrecipeComponent,
    JwmodalComponent,
    HomeComponent,
    RecipesComponent,
    UserlistComponent,
    CategoriesComponent,
    QueriesComponent,
    EditrecipeComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule ,
    DataTablesModule
    
    
  ],
  exports: [
    AdminDashboardComponent,
   
  ]
  
})


export class AdminDashboardModule { }

