import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
/**
 * @author:shubhangi
 */
export class SearchresultComponent implements OnInit {
  catId :any;
  recipeinfo: any;
 
  constructor(private apiService: ApiService,private httpClient: HttpClient) { }

  ngOnInit() {
   
    
    this.apiService.receivedFilter.subscribe((param: any[]) => {
     //fetching the url from service
      this.catId = param;
      //sending http request to fetched url
     this.httpClient.get(this.catId).subscribe((param: any[]) => {
     
       this.recipeinfo = param;
       const map = Object.keys(this.recipeinfo).map(key => ({type: key, value: this.recipeinfo[key]}));
       this.recipeinfo=map[0]['value'];
       console.log(map[0]['value']);
      
       console.log( this.recipeinfo);

     });
    
    });
  
  }
  
  }


