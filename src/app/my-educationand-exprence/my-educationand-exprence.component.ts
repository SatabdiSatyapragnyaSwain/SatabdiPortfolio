import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-educationand-exprence',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-educationand-exprence.component.html',
  styleUrl: './my-educationand-exprence.component.css'
})
export class MyEducationandExprenceComponent {
  education = [
    {
      period: '2021 to 2023',
      degree: 'Master In Computer Application (MCA)',
      institution: 'INSTITUTE OF PROFESSIONAL STUDIES & RESEARCH (IPSAR)',
      description: 'Lorem ipsum indolor st amet, cmetc ur adipis locing elit, sedi dimn indolo sum indolor st alimes.'
    },
    {
      period: '2018 to 2021',
      degree: 'Batchlor Degree',
      institution: 'Adikabi Sarala Das Degree Collage',
      description: 'Lorem ipsum indolor st amet, cmetc ur adipis locing elit, sedi dimn indolo sum indolor st alimes.'
    }
  ];

  experience = [
    {
      period: 'June 2024 to Present',
      title: 'Junior Software Developer',
      company: 'Perceptron Software Labs',
      description: 'Lorem ipsum indolor st amet, cmetc ur adipis locing elit, sedi dimn indolo sum indolor st alimes.'
    },
    {
      period: '2023',
      title: 'Interen',
      company: 'Envato Studio',
      description: 'Lorem ipsum indolor st amet, cmetc ur adipis locing elit, sedi dimn indolo sum indolor st alimes.'
    }
  ];

  @ViewChild('myEduExp') myEduExp!: ElementRef;

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.myEduExp.nativeElement.classList.add('animate');
          observer.disconnect();
        }
      });
    }, options);

    observer.observe(this.myEduExp.nativeElement);
  }
}
