import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-educationand-exprence',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-educationand-exprence.component.html',
  styleUrl: './my-educationand-exprence.component.css',
})
export class MyEducationandExprenceComponent {
  education = [
    {
      period: '2021 to 2023',
      degree: 'Master In Computer Application (MCA)',
      institution:
        'INSTITUTE OF PROFESSIONAL STUDIES & RESEARCH (IPSAR), Cuttack, Odisha',
      description:
        'Completed a postgraduate degree focused on software engineering, web development, database systems, and project management. Gained hands-on experience in building scalable applications and participated in real-time academic projects.',
    },
    {
      period: '2018 to 2021',
      degree: 'Bachelor degree',
      institution: 'Adikabi Sarala Das Degree Collage, Jagatsinghpur, Odisha',
      description:
        'Engaged in self-paced learning and coding activities alongside academics. Practiced coding regularly and developed mini projects using languages like C++, Java, and Python.',
    },
  ];

  experience = [
    {
      period: 'June 2024 to Present',
      title: 'Junior Software Engineer',
      company: 'Perceptron Software Labs, Panaji, Goa',
      description:
        'Developing and maintaining web applications using Angular and .NET Core. Collaborating with cross-functional teams to deliver user-friendly interfaces, write clean code, and resolve bugs efficiently.',
    },
    {
      period: '2023',
      title: 'Internship',
      company: 'SA Intellect Solutions, Bhubaneswar, Odisha',
      description:
        'Assisted the development team in front-end tasks, performed API integration, and contributed to the UI enhancement of client projects. Gained practical experience in software development lifecycle and agile practices.',
    },
  ];

  @ViewChild('myEduExp') myEduExp!: ElementRef;

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.myEduExp.nativeElement.classList.add('animate');
          observer.disconnect();
        }
      });
    }, options);

    observer.observe(this.myEduExp.nativeElement);
  }
}
