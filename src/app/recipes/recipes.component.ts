import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
/**
 * @author:shubhangi
 */
export class RecipesComponent implements OnInit {
  sampleId: any;
  catId :any;
  recipeinfo: any;
  val:String ="false";
 
  constructor(private apiService: ApiService,private httpClient: HttpClient,private route: ActivatedRoute) { }
//fetching data of each recipe based on its id
  async ngOnInit() {
    //fetchimg id from routerlink
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.sampleId = id;
   
    
    await this.apiService.setUrl(this.sampleId).subscribe((data: any[])=>{
      this.recipeinfo = data;
      const map = Object.keys(this.recipeinfo).map(key => ({type: key, value: this.recipeinfo[key]}));
      this.recipeinfo=map[0].value[0];
      console.log(map[0]['value']);
      console.log(this.recipeinfo);
    
    
    });
    
  
  }

}
