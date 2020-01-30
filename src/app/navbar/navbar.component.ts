import { Component, OnInit } from '@angular/core';
import { navelement } from '../shared/navbar.modal';
import { ApiService } from 'src/app/shared/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from '../shared/authetication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../shared/user';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
/**
 * @author:shubhangi
 */
export class NavbarComponent implements OnInit {
  check = "false";
  searchForm = this.fb.group({
    Name: ['', [Validators.required]]
  });
  IssueArr: any = [];
  value ="";
  public navelements = [];

  

  constructor(private apiService: ApiService, private fb: FormBuilder,private titleService: Title ,private router: Router,
    private authenticationService: AuthenticationService, private route: ActivatedRoute,) 
     { 
    //options of navbar
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
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
  
  onSubmit() {
    
    this.apiService.getSearch(this.f.Name.value)
          this.router.navigate(['/search/'+this.f.Name.value]);
          
     
    console.log(this.f.Name.value);
  }
  
  
  ngOnInit() {
    if(localStorage.getItem("currentUser")!==null) {
      this.check="true";
      
     
   }
   console.log(this.check);
    
    }

    
    /**
     * 
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

    currentUser: User;

    
  
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

}
