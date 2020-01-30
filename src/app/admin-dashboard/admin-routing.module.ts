import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RecipesComponent } from './admin-dashboard/recipes/recipes.component';
import { EditrecipeComponent } from './admin-dashboard/editrecipe/editrecipe.component';
import { HomeComponent } from './admin-dashboard/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent
  },
  {
    path: 'edit',
    component: EditrecipeComponent
  },
  {
    path: 'home2',
    component: HomeComponent
  },
 
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }