import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ApiService } from '../shared/api.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

/** Constants used to fill up our data base. */

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
/**
 * @author:shubahngi
 */
export class RecipelistComponent implements OnInit {
  recipes = [];
  name = 'Angular';
constructor(private httpClient:HttpClient){

}
  ngOnInit() {

    this.httpClient.get(`http://192.168.18.135:8000/api/recipes`).subscribe((param: any[]) => {
     
       this.recipes = param['data'];
      
      
       console.log( this.recipes);

     });


  }
  }


  
