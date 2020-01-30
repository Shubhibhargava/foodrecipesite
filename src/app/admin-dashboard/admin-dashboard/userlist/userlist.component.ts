import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
users:any;
 
  dtOptions: DataTables.Settings = {};
  queries:any
  dtTrigger = new Subject();
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.dtOptions = {
    
    };
    this.httpClient.get(`http://192.168.18.135:8000/api/players`).subscribe((param: any[]) => {
     
       this.users = param['data'];
       this.dtTrigger.next();
       console.log( this.users);
     });
    

  
// Apply the filter


  }
  
 
  
  
  
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  
  

}
