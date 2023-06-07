import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
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
  resumeFileName: string = '';
  router: any;
  resumeFile: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['formData']) {
        const formData = JSON.parse(params['formData']);
  
        this.name = formData.name;
        this.email = formData.email;
        this.contact = formData.contact;
        this.rollNo = formData.rollNo;
        this.hscCollege = formData.hscCollege;
        this.hscYear = formData.hscYear;
        this.hscTotal = formData.hscTotal;
        this.hscOutOf = formData.hscOutOf;
        this.sscCollege = formData.sscCollege;
        this.sscYear = formData.sscYear;
        this.sscTotal = formData.sscTotal;
        this.sscOutOf = formData.sscOutOf;
        this.sem1Marks = formData.sem1Marks;
        this.sem2Marks = formData.sem2Marks;
        this.sem3Marks = formData.sem3Marks;
        this.sem4Marks = formData.sem4Marks;
        this.sem5Marks = formData.sem5Marks;
        this.additionalCourses = formData.additionalCourses;
        this.resumeFileName = formData.resumeFileName;
      } else {
        // Handle the case when form data is not available
        this.router.navigateByUrl('/tabs/tab1');
      }
    });
  }
  viewUploadedResume() {
    if (this.resumeFile) {
      const fileURL = URL.createObjectURL(this.resumeFile);
      window.open(fileURL, '_blank');
    }
  }
  
}
