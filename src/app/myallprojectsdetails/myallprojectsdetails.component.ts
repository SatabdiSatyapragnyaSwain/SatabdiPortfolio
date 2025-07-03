import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-myallprojectsdetails',
  standalone: true,
  imports: [],
  templateUrl: './myallprojectsdetails.component.html',
  styleUrl: './myallprojectsdetails.component.css'
})
export class MyallprojectsdetailsComponent implements AfterViewInit {
  @ViewChild('projectDetails') projectDetails!: ElementRef;

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.projectDetails.nativeElement.classList.add('animate');
          observer.disconnect();
        }
      });
    }, options);
    observer.observe(this.projectDetails.nativeElement);
  }
}
