import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ModalService } from '../../shared/modal.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  recipes:any
  dtTrigger = new Subject();
  constructor(private httpClient:HttpClient,private modalService: ModalService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      retrieve: true,
      columnDefs: [ {

        targets: 4, /* column index */
    
        orderable: false, /* true or false */
    
     }]
    };
    this.httpClient.get(`http://192.168.18.135:8000/api/recipes`).subscribe((param: any[]) => {
     
       this.recipes = param['data'];
       this.dtTrigger.next()
       
      
       console.log( this.recipes);

     });
     

}
openModal(id: string) {
  console.log(id);
  this.modalService.open(id);
 
}
closeModal(id: string) {
  this.modalService.close(id);
 
}

delete(id: number) {
  console.log(id);
  return this.httpClient.delete(`http://192.168.18.135:8000/api/recipe/${id}`).pipe(first())
  .subscribe(() => this.ngOnInit());
}
}
