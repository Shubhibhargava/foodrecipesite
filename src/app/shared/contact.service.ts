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

SERVER_URL: string = "http://localhost/";
constructor(private httpClient: HttpClient) { }
/**
* 
* @param data 
* @about: Call Php file runnning on server
*/
public uploadData(data) {
let uploadURL = `${this.SERVER_URL}/contact.php`;
return this.httpClient.post<any>(uploadURL, data);
}
}