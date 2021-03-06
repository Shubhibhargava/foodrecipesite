import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
/**
* @author: ranosys
* @about: Call PHP file to storeuser queries in database 
*/
export class ContactService {

SERVER_URL: string = "http://192.168.18.135/";
constructor(private httpClient: HttpClient) { }
/**
* 
* @param data 
* @about: Call Php file runnning on server
*/
public uploadData(data) {
let uploadURL = `${this.SERVER_URL}/contact.php`; //path to script
return this.httpClient.post<any>(uploadURL, data); //sending http request to script
}
}