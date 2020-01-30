import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './helpers/auth.guard';



const routes: Routes = [
  {path : '', redirectTo: '/home', pathMatch: 'full'},
    {path : 'home', component: HomeComponent},
    {path : 'categories', component: CategoriesComponent},
    {path : 'recipes', component: RecipelistComponent},
    {path : 'recipe/:id', component: RecipesComponent},
    {path : 'search/:id', component: SearchresultComponent},
    {path : 'contact', component: ContactusComponent,canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'admin',
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(mod => mod.AdminDashboardModule),canActivate: [AuthGuard] },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
