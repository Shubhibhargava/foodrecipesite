import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { FormBuilder, Validators } from '@angular/forms';
import { UploadService } from '../shared/upload.service';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../shared/authetication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
/**
 * @author:shubhangi
 */
export class ContactusComponent implements OnInit {
  success:any;
  contactForm = this.fb.group({
    Name: ['', [Validators.required, Validators.minLength(4)]],
    Email: ['',[Validators.required, Validators.email]],
    Message: ['', Validators.required],
  //  Image:['',Validators.required]
  });
  //variable for image upload
  

  constructor(private fb: FormBuilder,private upload: ContactService,private router: Router,private http:HttpClient,private authenticationService:AuthenticationService) { }

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
   
    this.http.post('http://192.168.18.135:8000/api/contactus', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    this.success="true";
    this.contactForm.reset();
    
    }
    /**
     * function for validations
     */
    get f() { return this.contactForm.controls; }


    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
      

}
