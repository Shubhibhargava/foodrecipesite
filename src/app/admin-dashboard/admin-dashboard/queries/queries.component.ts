import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
declare var $: any;
@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
/**
 * @author:ranosys
 */
export class QueriesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  queries:any
  dtTrigger = new Subject();
  constructor(private httpClient:HttpClient) { }
  count = 1;
  count2 = 0;
  url = "http://192.168.18.135:8000/api/query/getdata/";
  ngOnInit() {
    this.dtOptions = {
      retrieve: true,
      paging:   false,
      columnDefs: [ {

        targets: 3, /* column index */
    
        orderable: false, /* true or false */
    
     }]
     
    };
    this.httpClient.get(`http://192.168.18.135:8000/api/query/getdata/0`).subscribe((param: any[]) => {
     
       this.queries = param[0];
       this.dtTrigger.next()
       
      
       console.log( this.queries);

     });
    
    
  
// Apply the filter


  }
  next(){
    this.count++;
    this.count2++;
    this.httpClient.get(this.url+this.count).subscribe((param: any[]) => {
     
       this.queries = param[0];
       this.dtTrigger.next()
       
      
       console.log( this.queries);
       console.log( this.count);


     });

  }
  prev(){
    this.count--;
    this.httpClient.get(this.url+this.count).subscribe((param: any[]) => {
     
       this.queries = param[0];
       this.dtTrigger.next()
       
      
       console.log( this.queries);
       console.log( this.count);

     });

  }
  delete(id: number) {
    this.count=0;
    this.count2=0;
    console.log(id);
    return this.httpClient.delete(`http://192.168.18.135:8000/api/query/${id}`).pipe(first())
    .subscribe(() => this.ngOnInit());
  }
  
 
  
  
  
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  
  
}
