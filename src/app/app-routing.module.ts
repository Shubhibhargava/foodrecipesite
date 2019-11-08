import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { RecipesComponent } from './recipes/recipes.component';


const routes: Routes = [
  {path : '', redirectTo: '/home', pathMatch: 'full'},
    {path : 'home', component: HomeComponent},
    {path : 'categories', component: CategoriesComponent},
    {path : 'recipes', component: RecipesComponent},
    {path : 'recipe/:id', component: RecipesComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
