import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
@Component({
  selector: 'app-allrecipes',
  templateUrl: './allrecipes.component.html',
  styleUrls: ['./allrecipes.component.css']
})
/**
 * @author:shubhangi
 */
export class AllrecipesComponent implements OnInit {
  image='assets/img/bg-img/bg4.jpg';
 
  quote='“Humor keeps us alive. Humor and food. Dont forget food. You can go a week without laughing.”';
  products = [];
  constructor(private apiService: ApiService) { }
/**
 * subscriping to the data recieved from service
 */
  ngOnInit() {
    this.apiService.getrecipes().subscribe((data: any[])=>{
      this.products = data;
      const map = Object.keys(this.products).map(key => ({type: key, value: this.products[key]}));
      this.products=map[0].value;
      console.log(map[0]['value']);
      console.log(this.products);
      console.log(this.image);
     
      
    });
    
    }
    /**
     * sending id of recipe to service
     * @param id 
     */
  setUrl(id) {
    console.log(id);
    this.apiService.setUrl(id);
  }

}
