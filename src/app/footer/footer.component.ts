import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
/**
 * @author:shubhangi
 */
export class FooterComponent implements OnInit {
  
  private links = []; //array used for store quick links
 
  private CP;
  private site;

  constructor() { 
    
    this.links.push('home', 'categories','contact');
    
    this.CP = "© 2019 Copyright:";
    this.site = "Delicious.com";
  }

  ngOnInit() {
  }
}
