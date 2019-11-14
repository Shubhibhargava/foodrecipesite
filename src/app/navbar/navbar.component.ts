import { Component, OnInit } from '@angular/core';
import { navelement } from '../shared/navbar.modal';
import { ApiService } from 'src/app/shared/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
/**
 * @author:shubhangi
 */
export class NavbarComponent implements OnInit {
  searchForm = this.fb.group({
    Name: ['', [Validators.required]]
  });
  IssueArr: any = [];
  value ="";
  public navelements = [];
  constructor(private apiService: ApiService, private fb: FormBuilder,private titleService: Title ) { 
    //options of navbar
    this.navelements.push(new navelement('home'),
    new navelement('recipes'),
    new navelement('categories'),
    
    new navelement('contact'),
    );
  }
  /**
   * searching in navbar
   * @param value 
   */

  submitForm(value:string) {
    this.value=value;
    this.apiService.getSearch(this.value);
    console.log(this.value);
  }
  

  ngOnInit() {
    
    }
    /**
     * 
     * @param title 
     * for setting title dynamically
     */
    setDocTitle(title: string) {
      console.log('current title:::::' + this.titleService.getTitle());
      this.titleService.setTitle(title);
   }
   /**
    * for displaying error messages
    */
    get f() { return this.searchForm.controls; }

  

}
