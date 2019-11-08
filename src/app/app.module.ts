import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { TopcategoriesComponent } from './home/topcategories/topcategories.component';
import { BestrecipesComponent } from './home/bestrecipes/bestrecipes.component';
import { AllrecipesComponent } from './home/allrecipes/allrecipes.component';
import { SmallrecipesComponent } from './home/smallrecipes/smallrecipes.component';
import { ApiService } from './shared/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { SidebarComponent } from './categories/sidebar/sidebar.component';
import { AllrecipiesComponent } from './categories/allrecipies/allrecipies.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SliderComponent,
    TopcategoriesComponent,
    BestrecipesComponent,
    AllrecipesComponent,
    SmallrecipesComponent,
    FooterComponent,
    CategoriesComponent,
    SidebarComponent,
    AllrecipiesComponent,
    RecipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
