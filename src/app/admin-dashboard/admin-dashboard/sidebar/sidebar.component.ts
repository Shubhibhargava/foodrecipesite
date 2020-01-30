import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { ChangeService } from '../../shared/change.service';
import { AuthenticationService } from 'src/app/shared/authetication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  sidename ="home";
  public isCustomLayout: boolean;
  constructor( private layoutService: LayoutService,private change: ChangeService,private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.layoutService.isCustomLayout.subscribe((value: boolean) => {
      this.isCustomLayout = value;
    });
  }


  status: boolean = false;
clickEvent(){
    this.status = !this.status;       
}

getName(name:any){
 this.sidename=name;
}
logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}

}
