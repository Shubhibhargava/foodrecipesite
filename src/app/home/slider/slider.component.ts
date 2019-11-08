import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  
  private images = []; // array used for store address
 
  private quotes = []; //array used for store quick links
 

  constructor() { 
   
    this.images.push('assets/img/bg-img/bg1.jpg', 'assets/img/bg-img/bg6.jpg', 'assets/img/bg-img/bg7.jpg');
   
    this.quotes.push('I have long believed that good food, good eating, is all about risk. Whether we are  talking about unpasteurized Stilton, raw oysters or working for organized crime associates, food, for me, has always been an adventure.',
     'Laughter is brightest in the place where the food is.', 
     'One of the very nicest things about life is the way we must regularly stop whatever it is we are doing and devote our attention to eating.');
    
  }
 

  ngOnInit() {
    
    
    }
 


}
