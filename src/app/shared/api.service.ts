import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { User } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
/**
 * @author:shubhangi
 */
export class ApiService {
  private serviceUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
  activatedCategory:any ="Beef";
  localUrl: any;
  receivedFilter: EventEmitter<any>; //created an eventemitter
  recievedID: EventEmitter<any>;//created an eventemitter
  constructor(private httpClient: HttpClient) { 
    this.receivedFilter = new EventEmitter<any>();
    this.recievedID = new EventEmitter<any>();
   
  }
  getUser(): Observable<User[]> {
    console.log(this.httpClient.get<User[]>(this.serviceUrl));
    return this.httpClient.get<User[]>(this.serviceUrl);
  }
  /**
   * @returns all recipes from api
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
     * @returns recipe detaials
     */
    getRecipeinfo(){
      const href = 'https://www.themealdb.com/api/json/v1/1/search.php?f=f';
      
  
      return this.httpClient.get(href);
    }
    /**
     * get the  name of the caterogy clicked
     */
    getActivatedCategory() {
      return this.activatedCategory;
      }
      /**
       * set the clicked category
       * @param newCategory 
       */
    setActivatedCategory(newCategory: string) {
      // console.log(this.activatedCategory);
      this.activatedCategory = newCategory;
      console.log(this.activatedCategory);
    }

}
