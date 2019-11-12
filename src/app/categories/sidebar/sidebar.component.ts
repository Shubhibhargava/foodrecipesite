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
  el :any;
  categories = [];
  constructor(private apiService: ApiService,private renderer: Renderer) { }
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
    selectrecipe(event){
    
      if(this.renderer.selectRootElement('.highlight')){
        this.el =this.renderer.selectRootElement('.highlight');
        console.log(this.el);
        //this.removeclass(this.el);
        event.srcElement.classList.add("highlight");
        console.log("hii");
        console.log(event.srcElement);
         
       
      }
     
        
      
    }
    removeclass(el){
      
     el.classList.remove("highlight") ;
    }
  
  }
  
  


