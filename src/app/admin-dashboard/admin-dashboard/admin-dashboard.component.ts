import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { ChangeService } from '../shared/change.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  sidename: any;

  
  constructor(private change:ChangeService ) { }

  ngOnInit() {
    this.sidename=this.change.setSideName();
    console.log(this.sidename);
    
  }


 

}
