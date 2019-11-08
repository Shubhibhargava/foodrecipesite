import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  localUrl: any;
  receivedFilter: EventEmitter<any>;
  recievedID: EventEmitter<any>;
  constructor(private httpClient: HttpClient) { 
    this.receivedFilter = new EventEmitter<any>();
    this.recievedID = new EventEmitter<any>();
   
  }
  public getNews(){
    return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=`);
  }
  public setUrl(id :any) {
    this.localUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id;
    return this.httpClient.get(this.localUrl);
    }
  public getCategories(){
      return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    }
  public getCategoryrecipe(id){
    this.localUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='+id;
    this.receivedFilter.emit(this.localUrl);
    console.log(this.localUrl);
      //return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`);
    }

    getSearch(searchText:any){
      this.localUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+searchText;
    this.receivedFilter.emit(this.localUrl);
    console.log(this.localUrl);

    }

}
