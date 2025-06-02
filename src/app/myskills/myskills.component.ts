import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.css']
})
export class MyskillsComponent implements AfterViewInit {
  @ViewChild('mySkills') mySkills!: ElementRef;

  skills = [
    { name: 'HTML 5', percentage: 93 },
    { name: 'CSS 3', percentage: 89 },
    { name: 'JavaScript', percentage: 75 },
    { name: 'TypeScript', percentage: 85 },
    { name: 'Bootstrap 5', percentage: 90 },
    { name: 'Angular', percentage: 89 },
    { name: 'Core UI', percentage: 70 },
    { name: 'Git', percentage: 72 },
    { name: 'C#', percentage: 82 },
    { name: 'ASP .Net Web API', percentage: 80 },
    { name: 'ASP .Net Core', percentage: 68 },
    { name: '.Net Framework', percentage: 75 },
    { name: 'Java', percentage: 65 },
    { name: 'Python', percentage: 60 },
    { name: 'SQL Server', percentage: 80 },
    { name: 'MQTT', percentage: 65 },
  ];

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.mySkills.nativeElement.classList.add('animate');
          observer.disconnect();
        }
      });
    }, options);

    observer.observe(this.mySkills.nativeElement);
  }
}