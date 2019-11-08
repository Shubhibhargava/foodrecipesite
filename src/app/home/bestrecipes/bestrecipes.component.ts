import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
@Component({
  selector: 'app-bestrecipes',
  templateUrl: './bestrecipes.component.html',
  styleUrls: ['./bestrecipes.component.css']
})
export class BestrecipesComponent implements OnInit {
  
  products = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getNews().subscribe((data: any[])=>{
      this.products = data;
      const map = Object.keys(this.products).map(key => ({type: key, value: this.products[key]}));
      this.products=map[0].value;
      console.log(map[0]['value']);
      console.log(this.products);
     
      
    });
    
    }
  setUrl(id) {
    console.log(id);
    this.apiService.setUrl(id);
  }

}
