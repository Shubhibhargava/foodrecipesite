import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-topcategories',
  templateUrl: './topcategories.component.html',
  styleUrls: ['./topcategories.component.css']
})
/**
 * @author:shubhangi
 */
export class TopcategoriesComponent implements OnInit {

  products = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getrecipes().subscribe((data: any[])=>{
      this.products = data;
      const map = Object.keys(this.products).map(key => ({type: key, value: this.products[key]}));
      this.products=map[0].value;
      console.log(map[0]['value']);
      console.log(this.products);
     
      
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
