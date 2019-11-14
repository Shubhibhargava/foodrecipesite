import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
/**
 * 
 * @author:shubhangi
 * 
 */
export class UploadService {

SERVER_URL: string = "http://localhost/php";
constructor(private httpClient: HttpClient) { }

public uploadFile(data) {
let uploadURL = `${this.SERVER_URL}/imageupload.php`; //url of script
return this.httpClient.post<any>(uploadURL, data);//sending http request to script
}
}