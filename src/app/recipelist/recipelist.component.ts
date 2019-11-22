import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ApiService } from '../shared/api.service';

/** Constants used to fill up our data base. */

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
/**
 * @author:shubahngi
 */
export class RecipelistComponent implements OnInit {
  products = [];
  name = 'Angular';
constructor(private apiService: ApiService){

}
  ngOnInit() {

    this.apiService.getrecipes().subscribe((data: any[])=>{
      //hiding loader when data is loaded
     
      //mapping the recieved data
      this.products = data;
      const map = Object.keys(this.products).map(key => ({type: key, value: this.products[key]}));
      this.products=map[0].value;
      console.log(map[0]['value']);
      console.log(this.products);
     
      
    });
    


    let table = $('#example').DataTable({
      drawCallback: () => {
        $('.paginate_button.next').on('click', () => {
            this.nextButtonClickEvent();
          });
      }
    });
  }

  buttonInRowClick(event: any): void {
    event.stopPropagation();
    console.log('Button in the row clicked.');
  }

  wholeRowClick(): void {
    console.log('Whole row clicked.');
  }

  nextButtonClickEvent(): void {
    //do next particular records like  101 - 200 rows.
    //we are calling to api

    console.log('next clicked')
  }
  previousButtonClickEvent(): void {
    //do previous particular the records like  0 - 100 rows.
    //we are calling to API
  }

  }


  
