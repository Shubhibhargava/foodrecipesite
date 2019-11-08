import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-topcategories',
  templateUrl: './topcategories.component.html',
  styleUrls: ['./topcategories.component.css']
})
export class TopcategoriesComponent implements OnInit {

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
