import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-allrecipies',
  templateUrl: './allrecipies.component.html',
  styleUrls: ['./allrecipies.component.css']
})
export class AllrecipiesComponent implements OnInit {
  catId :any;
  recipeinfo: any;
  val:String ="false";
 
  constructor(private apiService: ApiService,private httpClient: HttpClient) { }

  ngOnInit() {
    if(this.val=="false"){
      this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`).subscribe((param: any[]) => {
        
         this.recipeinfo = param;
         const map = Object.keys(this.recipeinfo).map(key => ({type: key, value: this.recipeinfo[key]}));
         this.recipeinfo=map[0]['value'];
         console.log(map[0]['value']);
        
         console.log( this.recipeinfo);
  
       });
    }
    
    this.apiService.receivedFilter.subscribe((param: any[]) => {
     
      this.catId = param;
     this.httpClient.get(this.catId).subscribe((param: any[]) => {
      this.val="true";
       this.recipeinfo = param;
       const map = Object.keys(this.recipeinfo).map(key => ({type: key, value: this.recipeinfo[key]}));
       this.recipeinfo=map[0]['value'];
       console.log(map[0]['value']);
      
       console.log( this.recipeinfo);

     });
    
    });
  
  }
  


}
