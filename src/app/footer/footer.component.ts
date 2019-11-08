import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private CI;
  private adds = []; // array used for store address
  private link;
  private links = []; //array used for store quick links
  private CU;
  private msg;
  private CP;
  private site;

  constructor() { 
    this.CI = "CONTACT INFORMATION";
    this.adds.push('Delicious.com', 'delicious@gmail.com', '9659421348');
    this.link = "LINKS";
    this.links.push('Home', 'Recipies', 'Categories');
    this.CU = "CONTACT US";
    this.msg = "SEND US MESSAGE";
    this.CP = "© 2019 Copyright:";
    this.site = "Delicious.com";
  }

  ngOnInit() {
  }
}
