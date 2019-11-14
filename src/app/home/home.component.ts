import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
/**
 * @author:shubhangi
 */
export class HomeComponent implements OnInit {
  title = 'Delicious';

  constructor() { }

  ngOnInit() {
  }
  

}
