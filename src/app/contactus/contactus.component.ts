import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { FormBuilder, Validators } from '@angular/forms';
import { UploadService } from '../shared/upload.service';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
/**
 * @author:shubhangi
 */
export class ContactusComponent implements OnInit {
  private showSuccess;
  contactForm = this.fb.group({
    Name: ['', [Validators.required, Validators.minLength(4)]],
    Email: ['',[Validators.required, Validators.email]],
    Message: ['', Validators.required],
    Image:['',Validators.required]
  });
  //variable for image upload
  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  uploadResponse: any;

  constructor(private fb: FormBuilder,private upload: ContactService,private uploadService: UploadService) { }

  ngOnInit() {
  }
  /**
   * collecting the values of form and uploading it
   */
  onSubmit() {
    const formData = new FormData();
    
    formData.append('Name', this.contactForm.get('Name').value);
    formData.append('Email', this.contactForm.get('Email').value);
    formData.append('Message', this.contactForm.get('Message').value);
    formData.append('Image', this.contactForm.get('Image').value);
    //Calling Contact Service's UploadData method
    this.upload.uploadData(formData).subscribe(
    (res) => {
    this.upload = res;
    this.showSuccess = true;
    setTimeout(()=>{
    this.showSuccess = false;
    },2500);
    this.contactForm.reset();
    },
    (err) => { 
    console.log(err);
    }
    );
     //Calling Upload Service's UploadFile method
    
    this.uploadService.uploadFile(formData).subscribe(
    (res) => {
    this.uploadResponse = res;
    console.log(res);
    alert("success");
    },
    (err) => {
    console.log(err);
    }
    );
    
    
    }
    /**
     * function for validations
     */
    get f() { return this.contactForm.controls; }


   
      

}
