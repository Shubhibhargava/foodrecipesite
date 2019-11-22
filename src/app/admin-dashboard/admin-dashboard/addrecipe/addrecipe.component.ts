import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../shared/modal.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { DataService } from '../../shared/data.service';


@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {

  bodyText: string;
  recipeForm: FormGroup;
  userForm:FormGroup;
  details:any;
  ingredients=[];
  measurements=[];
  loading = false;
  submitted = false;
  meals:any;
  content:FormArray;

  constructor(private modalService: ModalService, private formBuilder: FormBuilder,private dataService: DataService)  { }

  ngOnInit() {
    
    // recieving the form data
    this.recipeForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      area: ['', Validators.required],
      ingredient: ['', Validators.required],
      measurement: ['', Validators.required],
      instruction: ['', [Validators.required]]
      
    });
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      area: ['', Validators.required],
     
      instruction: ['', [Validators.required]],
      contents : new FormArray([this.createContents()])
    });
  }
/**
 * 
 * @param name 
 */

get f() { return this.recipeForm.controls; }
get c() { return this.f.contents as FormArray; }

  createContents(): any {
    return this.formBuilder.group({
    ingredients: ['',Validators.required],
    measurements: ['',Validators.required],
    });
  }

  addContents(){
    this.content = this.userForm.get('contents') as FormArray;
    this.content.push(this.createContents());
  }

  removeContents(){
    this.content.removeAt(this.content.length - 1);
  }
  getName(name:string){
        let array = [];
        
        var i,j;
      //fetching data from service
      this.dataService.getrecipedetails(name).subscribe((data: any[])=>{
          this.meals = data["meals"];

          //only ssign value when there is data recieved from api
          if(this.meals != null)
          this.details = data["meals"][0];
       
          //converting key value pair into an array  
            for(let key in this.details){
              if(this.details.hasOwnProperty(key)){
                array.push(this.details[key]);
              }
            }
            
            // this.recipeForm.patchValue({
            //   name: this.details.strMeal,
            //   category:this.details.strCategory,
            //   area: this.details.strArea,
            //   ingredient: ,
            //   measurement: ,
            //   instruction:this.details.strInstructions 
              
            //   });
          //console.log(this.details);
      
          /**
           * fetching details of ingredients
           */
          for(i=9,j=0;i<array.length;i++,j++){
            
            if(array[i]== '')
              break;
            else
              this.ingredients[j]=array[i];
          }

          /**
           * fetching details of measurements
           */
          for(i=29,j=0;i<array.length;i++,j++){
            
            if(array[i]== '')
              break;
              else
              this.measurements[j]=array[i];    
          }
      });
  }
          /**
           * 
           * @param id 
           */
            openModal(id: string) {
              this.modalService.open(id);
            }

          /**
           * 
           * @param id 
           */

          closeModal(id: string) {
              this.modalService.close(id);
              this.recipeForm.reset();
              this.details={};
          }
          onSubmit(){
            console.log(this.userForm.value);
          }

}
