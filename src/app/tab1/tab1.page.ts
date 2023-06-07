import { Component } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../service/data.service';
import { Router, NavigationExtras } from '@angular/router';
import { FormDataService } from '../service/form-data.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  resumeFile!: File;
  formData: any;
  constructor(private navCtrl: NavController, private dataService: DataService,private router: Router,private formDataService: FormDataService) { }
  name: string = '';
  email: string = '';
  contact: string = '';
  rollNo: string = '';
  hscCollege: string = '';
  hscYear: string = '';
  hscTotal: number = 0;
  hscOutOf: number = 0;
  sscCollege: string = '';
  sscYear: string = '';
  sscTotal: number = 0;
  sscOutOf: number = 0;
  sem1Marks: number = 0;
  sem2Marks: number = 0;
  sem3Marks: number = 0;
  sem4Marks: number = 0;
  sem5Marks: number = 0;
  additionalCourses: string = '';

  isFormSubmitted: boolean = false;
  isError: boolean = false;
  errorMessage: string = '';

  resumeFileName: string = '';
  uploadedResume: any = null;
  @ViewChild('resumeInput') resumeInput: any;
  submitForm() {
    this.isFormSubmitted = true;
  
    if (this.validateForm()) {
      this.isError = false;
      this.errorMessage = '';
  
      const formData = {
        name: this.name,
        email: this.email,
        contact: this.contact,
        rollNo: this.rollNo,
        hscCollege: this.hscCollege,
        hscYear: this.hscYear,
        hscTotal: this.hscTotal,
        hscOutOf: this.hscOutOf,
        sscCollege: this.sscCollege,
        sscYear: this.sscYear,
        sscTotal: this.sscTotal,
        sscOutOf: this.sscOutOf,
        sem1Marks: this.sem1Marks,
        sem2Marks: this.sem2Marks,
        sem3Marks: this.sem3Marks,
        sem4Marks: this.sem4Marks,
        sem5Marks: this.sem5Marks,
        additionalCourses: this.additionalCourses,
        resumeFileName: this.resumeFileName,
      };
  
      this.router.navigate(['/tabs/tab3'], {
        queryParams: {
          formData: JSON.stringify(formData)
        }
      });
    } else {
      this.isError = true;
      this.errorMessage = 'Please fill in all required fields properly.';
    }
  }


// ...


  isValidName(): boolean {
    const nameRegex = /^[a-zA-Z\s]*$/;
    return nameRegex.test(this.name.trim());
  }

  isValidEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email.trim());
  }

  isValidContact(): boolean {
    const contactRegex = /^[0-9]{10}$/;
    return contactRegex.test(this.contact.trim());
  }

  validateForm(): boolean {
    const nameRegex = /^[a-zA-Z\s]*$/; // Regular expression to allow only letters and spaces
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression to validate email format
    const contactRegex = /^[0-9]{10}$/; // Regular expression to validate contact number format

    if (
      this.name.trim() === '' ||
      !nameRegex.test(this.name) ||
      this.email.trim() === '' ||
      !emailRegex.test(this.email) ||
      this.contact.trim() === '' ||
      !contactRegex.test(this.contact) ||
      this.rollNo.trim() === '' ||
      this.hscCollege.trim() === '' ||
      this.hscYear.trim() === '' ||
      this.hscTotal <= 0 ||
      this.hscOutOf <= 0 ||
      this.sscCollege.trim() === '' ||
      this.sscYear.trim() === '' ||
      this.sscTotal <= 0 ||
      this.sscOutOf <= 0 ||
      this.sem1Marks < 0 ||
      this.sem1Marks > 10 ||
      this.sem2Marks < 0 ||
      this.sem2Marks > 10 ||
      this.sem3Marks < 0 ||
      this.sem3Marks > 10 ||
      this.sem4Marks < 0 ||
      this.sem4Marks > 10 ||
      this.sem5Marks < 0 ||
      this.sem5Marks > 10 ||
      this.additionalCourses.trim() === ''
    ) {
      return false;
    }

    return true;
  }

  handleResumeUpload(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      this.resumeFileName = file.name;
      this.uploadedResume = file;
    }
  }
  saveData() {
    // Existing code

    const userData = {
      name: this.name,
      email: this.email,
      contact: this.contact,
      rollNo: this.rollNo,
      hscCollege: this.hscCollege,
      hscYear: this.hscYear,
      hscTotal: this.hscTotal,
      hscOutOf: this.hscOutOf,
      sscCollege: this.sscCollege,
      sscYear: this.sscYear,
      sscTotal: this.sscTotal,
      sscOutOf: this.sscOutOf,
      sem1Marks: this.sem1Marks,
      sem2Marks: this.sem2Marks,
      sem3Marks: this.sem3Marks,
      sem4Marks: this.sem4Marks,
      sem5Marks: this.sem5Marks,
      additionalCourses: this.additionalCourses,
      resumeFileName: this.resumeFileName
    };

    this.dataService.setUserData(userData);
  }





  // /////////////////////////////////////////////////

  viewUploadedResume() {
    if (this.resumeFile) {
      const fileURL = URL.createObjectURL(this.resumeFile);
      window.open(fileURL);
    }
  }
  

}
