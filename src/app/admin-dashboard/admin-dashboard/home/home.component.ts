import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
/**
 * @author:ranosys
 */
export class HomeComponent implements OnInit {
  queries :any;
  users:any;
  recipes :any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    //fetching no.of queries
    this.httpClient.get(`http://192.168.18.135:8000/api/countquery`).subscribe((param: any[]) => {
     
       this.queries = param;
       
       
      
       console.log( this.queries);

     });
     //fetching no.of users
     this.httpClient.get(`http://192.168.18.135:8000/api/countuser`).subscribe((param: any[]) => {
     
       this.users = param;
       
       
      
       console.log( this.queries);

     });
     //fetching no.of recipes
     this.httpClient.get(`http://192.168.18.135:8000/api/countrecipe`).subscribe((param: any[]) => {
     
       this.recipes = param;
       
       
      
       console.log( this.queries);

     });
  }

}
