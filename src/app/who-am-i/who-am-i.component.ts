import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-who-am-i',
  standalone: true,
  imports: [],
  templateUrl: './who-am-i.component.html',
  styleUrl: './who-am-i.component.css'
})
export class WhoAmIComponent implements AfterViewInit {
  @ViewChild('whatIdo') whatIdo!: ElementRef;

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.whatIdo.nativeElement.classList.add('animate');
          observer.disconnect();
        }
      });
    }, options);

    observer.observe(this.whatIdo.nativeElement);
  }
}
