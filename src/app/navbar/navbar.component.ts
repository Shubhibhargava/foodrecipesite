import { Component, OnInit } from '@angular/core';
import { navelement } from '../shared/navbar.modal';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
/**
 * @author:shubhangi
 */
export class NavbarComponent implements OnInit {
 
  IssueArr: any = [];
  value ="";
  public navelements = [];
  constructor(private apiService: ApiService,  ) { 
    //options of navbar
    this.navelements.push(new navelement('home'),
    new navelement('recipes'),
    new navelement('categories'),
    
    new navelement('contact'),
    );
  }
  /**
   * searchbar in navbar
   * @param value 
   */

  submitForm(value:string) {
    this.value=value;
    this.apiService.getSearch(this.value);
    console.log(this.value);
  }
  

  ngOnInit() {
    
    }

  

}
