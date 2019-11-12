import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
/**
 * @author:shubhangi
 */
export class SliderComponent implements OnInit {

  
  
  private Constants;
  //images for slider
slides = [
'assets/img/bg-img/bg1.jpg',
'assets/img/bg-img/bg6.jpg',
'assets/img/bg-img/bg7.jpg',

];
constructor(ngb: NgbCarouselConfig) {
ngb.showNavigationArrows=true;
ngb.showNavigationIndicators=true;
ngb.interval = 2000;
ngb.wrap = true;
ngb.keyboard = false;
ngb.pauseOnHover = true;



}
ngOnInit() {
}



 


}
