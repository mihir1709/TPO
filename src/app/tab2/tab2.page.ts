import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  companies: Company[] = [
    {
      name: 'Morgan Stanley',
      location: 'Mumbai',
      salaryRange: '$1000 - $1500',
      shortProfile: 'Morgan Stanley is an American multinational investment bank and financial services company headquartered at 1585 Broadway in Midtown Manhattan, New York City. With offices in 41 countries and more than 75,000 employees, the firm'
    },
    {
      name: 'J.P. Morgan',
      location: 'Thane',
      salaryRange: '$800 - $1200',
      shortProfile: 'J.P. Morgan is a software development company focused on creating innovative solutions for various industries. Our team is passionate about leveraging technology to drive business growth.'
    },
    {
      name: 'XYZ Company',
      location: 'City ABC',
      salaryRange: '$800 - $1200',
      shortProfile: 'XYZ Company is a software development company focused on creating innovative solutions for various industries. Our team is passionate about leveraging technology to drive business growth.'
    },
    {
      name: 'XYZ Company',
      location: 'City ABC',
      salaryRange: '$800 - $1200',
      shortProfile: 'XYZ Company is a software development company focused on creating innovative solutions for various industries. Our team is passionate about leveraging technology to drive business growth.'
    },
    {
      name: 'XYZ Company',
      location: 'City ABC',
      salaryRange: '$800 - $1200',
      shortProfile: 'XYZ Company is a software development company focused on creating innovative solutions for various industries. Our team is passionate about leveraging technology to drive business growth.'
    },
    // Add more company objects as needed
  ];

  constructor() { }
}

interface Company {
  name: string;
  location: string;
  salaryRange: string;
  shortProfile: string;
}
