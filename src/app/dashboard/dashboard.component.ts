import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { WhoAmIComponent } from "../who-am-i/who-am-i.component";
import { MyEducationandExprenceComponent } from "../my-educationand-exprence/my-educationand-exprence.component";
import { MyallprojectsdetailsComponent } from "../myallprojectsdetails/myallprojectsdetails.component";
import { MyskillsimagesComponent } from "../myskillsimages/myskillsimages.component";
import { MycontactformComponent } from "../mycontactform/mycontactform.component";
import { MyaboutComponent } from "../myabout/myabout.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [RouterModule, CommonModule, FooterComponent, WhoAmIComponent, MyEducationandExprenceComponent, MyallprojectsdetailsComponent, MyskillsimagesComponent, MycontactformComponent, MyaboutComponent],
})
export class DashboardComponent {
  isNavbarVisible: boolean = false;
  isScrolled: boolean = false;
  isScrollToTopVisible: boolean = false;
  scrollPercentage: number = 0;
  isPopupOpen = false;


  constructor(private router: Router) { }

  toggleNavbar(): void {
    this.isNavbarVisible = !this.isNavbarVisible;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (
      this.isNavbarVisible &&
      !target.closest('.navbar') &&
      !target.closest('.hamburger')
    ) {
      this.isNavbarVisible = false;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollTop > 50;

    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollPercentage = (scrollPosition / maxScroll) * 100;
    this.isScrollToTopVisible = scrollPosition > 100;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = 'assets/SATABDI_SATYAPRAGNYA_SWAIN_resume.pdf';
    link.download = 'SATABDI_SATYAPRAGNYA_SWAIN_Resume.pdf';
    link.click();
  }

  
  // Open the popup
  openPopup() {
    this.isPopupOpen = true;
  }

  // Close the popup
  closePopup() {
    this.isPopupOpen = false;
  }
}