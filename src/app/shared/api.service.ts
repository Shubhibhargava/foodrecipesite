import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
/**
 * @author:shubhangi
 */
export class ApiService {
  activatedCategory:any ="Beef";
  localUrl: any;
  receivedFilter: EventEmitter<any>; //created an eventemitter
  recievedID: EventEmitter<any>;//created an eventemitter
  constructor(private httpClient: HttpClient) { 
    this.receivedFilter = new EventEmitter<any>();
    this.recievedID = new EventEmitter<any>();
   
  }
  /**
   * @returns data from api
   */
  public getrecipes(){
    return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=`);
  }
  /**
   * 
   * @param id 
   * @returns concatenated url
   */
  public setUrl(id :any) {
    this.localUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id;
    return this.httpClient.get(this.localUrl);
    }
    /**
   * @returns categories of recipes
   */
  public getCategories(){
      return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    }
    /**
     * 
     * @param id 
     * @returns list of recipe based on its category
     */
  public getCategoryrecipe(id){
    this.localUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='+id;
    this.receivedFilter.emit(this.localUrl);
    console.log(this.localUrl);
     
    }
/**
 * 
 * @param searchText 
 * @returns concatenated url
 */
    getSearch(searchText:any){
      this.localUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+searchText;
    this.receivedFilter.emit(this.localUrl);
    console.log(this.localUrl);

    }
    /**
     * @returns recipes
     */
    getRecipeinfo(){
      const href = 'https://www.themealdb.com/api/json/v1/1/search.php?f=f';
      
  
      return this.httpClient.get(href);
    }
    /**
     * 
     */
    getActivatedCategory() {
      return this.activatedCategory;
      }
      /**
       * 
       * @param newCategory 
       */
    setActivatedCategory(newCategory: string) {
      // console.log(this.activatedCategory);
      this.activatedCategory = newCategory;
      console.log(this.activatedCategory);
    }

}
