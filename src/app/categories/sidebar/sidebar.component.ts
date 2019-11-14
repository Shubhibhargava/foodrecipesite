import { Component, OnInit, Renderer } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
/**
 * @author: shubhangi
 */
export class SidebarComponent implements OnInit {
 
  categories = [];
   actCat;

  constructor(private apiService: ApiService,private renderer: Renderer) {
    this.actCat = this.apiService.getActivatedCategory(); //selecting a category initially
    
   }
/**
 * fetching data from api
 */
  ngOnInit() {
    
    this.apiService.getCategories().subscribe((data: any[])=>{
      this.categories = data;
      const map = Object.keys(this.categories).map(key => ({type: key, value: this.categories[key]}));
      this.categories=map[0].value;
      console.log(map[0]['value']);
      console.log(this.categories);
     
      
    });
    
    }
    /**
     * sending id  of recipe to service
     * @param id 
     */
    getCategoryrecipe(id) {
      console.log(id);
      this.apiService. getCategoryrecipe(id);
    }
    /**
     * 
     * @param cat 
     * update the selected category on click
     */
    updateCategory(cat:string){
      this.apiService.setActivatedCategory(cat);
      this.actCat = this.apiService.getActivatedCategory();
      console.log(this.actCat);
    }
   
  
  }
  
  


