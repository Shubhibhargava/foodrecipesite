import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  private showSuccess;
  contactForm = this.fb.group({
    Name: ['', [Validators.required, Validators.minLength(4)]],
    Email: ['',[Validators.required, Validators.email]],
    Message: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,private upload: ContactService) { }

  ngOnInit() {
  }
  onSubmit() {
    const formData = new FormData();
    // console.log(this.contactForm.get('Name').value);
    formData.append('Name', this.contactForm.get('Name').value);
    formData.append('Email', this.contactForm.get('Email').value);
    formData.append('Message', this.contactForm.get('Message').value);
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
    
    }

}
