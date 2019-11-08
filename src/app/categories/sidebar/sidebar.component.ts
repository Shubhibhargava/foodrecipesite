import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categories = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCategories().subscribe((data: any[])=>{
      this.categories = data;
      const map = Object.keys(this.categories).map(key => ({type: key, value: this.categories[key]}));
      this.categories=map[0].value;
      console.log(map[0]['value']);
      console.log(this.categories);
     
      
    });
    
    }
    getCategoryrecipe(id) {
      console.log(id);
      this.apiService. getCategoryrecipe(id);
    }
  

}
