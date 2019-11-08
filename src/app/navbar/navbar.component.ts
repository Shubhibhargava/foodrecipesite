import { Component, OnInit } from '@angular/core';
import { navelement } from '../shared/navbar.modal';
import { ApiService } from 'src/app/shared/api.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public navelements = [];
  constructor(private apiService: ApiService) { 
    this.navelements.push(new navelement('home'),
    new navelement('recipes'),
    new navelement('categories'),
    new navelement('videos'),
    new navelement('blog'),
    new navelement('contact us'),
    );
  }
  categories = [];
  

  ngOnInit() {
    this.apiService.getCategories().subscribe((data: any[])=>{
      this.categories = data;
      const map = Object.keys(this.categories).map(key => ({type: key, value: this.categories[key]}));
      this.categories=map[0].value;
      console.log(map[0]['value']);
      console.log(this.categories);
     
      
    });
    
    }

  

}
