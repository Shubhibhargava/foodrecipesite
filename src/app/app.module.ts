import { BrowserModule , Title} from '@angular/platform-browser';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactusComponent } from './contactus/contactus.component';
import { ContactService } from './shared/contact.service';
import { UploadService } from './shared/upload.service';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

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
    SearchresultComponent,
    RecipelistComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule ,ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [ApiService,Title,ContactService,UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
