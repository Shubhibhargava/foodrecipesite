import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../shared/modal.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { DataService } from '../../shared/data.service';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../../shared/recipe.service';



@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
/**
 * @author:ranosys
 */
export class AddrecipeComponent implements OnInit {

  bodyText: string;
  recipeForm: FormGroup;
  userForm:FormGroup;
  details:any;
  ing=[];
  mea=[];
  loading = false;
  submitted = false;
  meals:any;
  content:FormArray;
  me:any;
  array2:any;
  success="false";
  success2="true";
  file:any;

  constructor(private modalService: ModalService,
     private formBuilder: FormBuilder,
     private dataService: DataService,
     private http:HttpClient,
     private recipeservice:RecipeService)  { }

  ngOnInit() {
    
    // creating a form group for recipe from api
    this.recipeForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      area: ['', Validators.required],
      imageurl: ['', Validators.required],
     
      measurements : this.formBuilder.array([
      ]),
      ingredients:this.formBuilder.array([
      ]),
      instruction: ['', [Validators.required]]
      
    });

    //creating a form for recipes from user
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      area: ['', Validators.required],
     file:['', Validators.required],
      instruction: ['', [Validators.required]],
      contents : new FormArray([this.createContents()])
    });
  }
/**
 * function for error messages
 */
get f() { return this.recipeForm.controls; }
/**
 * to get contents of form array used in userform
 */
get c() { return this.f.contents as FormArray; }

/**
 * to push value of all fields into an array
 */

ingredientList(){
  this.content = this.recipeForm.get('ingredients') as FormArray;
  this.ing.forEach(data => {
    console.log(data);
    this.content.push(this.formBuilder.group({ingredients: data}))
  })
}
/**
 * to push value of measurement into an array
 */
measurementList(){
  this.content = this.recipeForm.get('measurements') as FormArray;
  this.mea.forEach(data => {
    console.log(data);
    this.content.push(this.formBuilder.group({measurements: data}))
  })
}
/**
 * creating array for dynamic form
 */
  createContents(): any {
    return this.formBuilder.group({
    ingredients: ['',Validators.required],
    measurements: ['',Validators.required],
    });
  }
/**
 * function passed in formarray to create contents array
 */
  addContents(){
    this.content = this.userForm.get('contents') as FormArray;
    this.content.push(this.createContents());
  }
/**
 * to remove contents dynamically
 */
  removeContents(){
    this.content.removeAt(this.content.length - 1);
  }
  /**
   * 
   * @param name 
   * 
   * function to get name of recipe to serach in api
   */
            getName(name:string){
                  let array = [];
                  
                  var i,j;
                //fetching data from service
                this.dataService.getrecipedetails(name).subscribe((data: any[])=>{
                    this.meals = data["meals"];
                    console.log(this.meals);
                    //only assign value when there is data recieved from api
                    if(this.meals != null)
                    this.details = data["meals"][0];
                
                    //converting key value pair into an array  
                      for(let key in this.details){
                        if(this.details.hasOwnProperty(key)){
                          array.push(this.details[key]);
                        }
                      }
                    /**
                     * fetching details of ingredients
                     */
                    for(i=9,j=0;i<array.length;i++,j++){
                      
                      if(array[i]== '')
                        break;
                      else{
                        this.ing[j]=array[i];
                        
                      }

                    }
                  
                    this.ingredientList();

                    /**
                     * fetching details of measurements
                     */
                    for(i=29,j=0;i<array.length;i++,j++){
                      
                      if(array[i]== '')
                        break;
                        else
                        this.mea[j]=array[i];    
                    }
                    this.measurementList();
                });
              
            }
          /**
           * 
           * @param id 
           * to dispaly forms
           */
            openModal(id: string) {
              this.modalService.open(id);
            }

          /**
           * 
           * @param id 
           * 
           * to close the form
           */

          closeModal(id: string) {
              this.modalService.close(id);
              this.recipeForm.reset();
              this.userForm.reset();
              this.details={};
          }

          /**
           * 
           * @param event 
           * to get name of selected file to upload
           */
          onFileSelect(event) {
            this.file=event.target.files[0].name;
             console.log(this.file);
            this.userForm.get('file').setValue(event.target.files[0]);
            
          }
          /**
           * 
           * when a recipe is found in mealdb this function executed
           * 
           */
          onSubmit(){
            //converting key value pairs into a simple array
            const a=(this.recipeForm.get('ingredients').value);
            let result = a.map(({ ingredients }) => ingredients);
            const b=(this.recipeForm.get('measurements').value);
            let result2 = b.map(({ measurements }) => measurements);
           
            const formData = new FormData();
            //appending api data to form
            formData.append('Name', this.recipeForm.get('name').value);
            formData.append('Category', this.recipeForm.get('category').value);
            formData.append('Area', this.recipeForm.get('area').value);
            formData.append('Imageurl', this.recipeForm.get('imageurl').value);
            formData.append('ingredients', result);
            formData.append('measurements', result2);
            formData.append('instruction', this.recipeForm.get('instruction').value);
            //sending post request to api
            this.http.post('http://192.168.18.135:8000/api/recipesave', formData).subscribe(
              (response) => {
                //checking if recipe already exist.
                if(response["data"]["status"]=="error"){
                  this.success2="false"; //variable to display success message
                  this.closeModal('custom-modal-1');
                }
                else{
                  this.success="true";
                  console.log(this.success);
                  this.closeModal('custom-modal-1');
                }
                },
              (error) => console.log(error)
              )
            }
           /**
             * when user wants to add recipe of its own
             */
           onSubmituserform(){
             //converting key value pairs into a simple array
            const a=(this.userForm.value.contents);
            let result = a.map(({ ingredients }) => ingredients);
            const b=(this.userForm.value.contents);
            let result2 = b.map(({ measurements }) => measurements);
           
            const formData = new FormData();
            //appending api data to form
            formData.append('Name', this.userForm.get('name').value);
            formData.append('Category', this.userForm.get('category').value);
            formData.append('Area', this.userForm.get('area').value);
            //formData.append('imageurl',this.fileData.name);
            console.log(this.userForm.get('file').value);
            formData.append('file', this.userForm.get('file').value);
            formData.append('ingredients',result);
            formData.append('measurements',result2);
            formData.append('instruction', this.userForm.get('instruction').value);
            //sending post request to api
            this.http.post('http://192.168.18.135:8000/api/userstore', formData).subscribe(
              (response) => {
                 //checking if recipe already exist.
                if(response["data"]["status"]=="error"){
                  this.success2="false";
                  this.closeModal('custom-modal-1');
                }
                else{
                  this.success="true";
                  console.log(this.success);
                  this.closeModal('custom-modal-1');
                }
              },
              (error) => console.log(error)
            )
            }
           
           
}
