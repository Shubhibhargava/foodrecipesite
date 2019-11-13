import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  {path : '', redirectTo: '/home', pathMatch: 'full'},
    {path : 'home', component: HomeComponent},
    {path : 'categories', component: CategoriesComponent},
    {path : 'recipes', component: RecipelistComponent},
    {path : 'recipe/:id', component: RecipesComponent},
    {path : 'search', component: SearchresultComponent},
    {path : 'contact', component: ContactusComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
