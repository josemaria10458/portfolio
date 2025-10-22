import { Component, HostListener, OnInit } from '@angular/core';
import { Job } from './models/job.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';


  jobs: Job[] = [
    {
      name: 'Seeketing',
      date: 'Abr 2021 - Jun 2021',
      description: 'Becario - Desarrollo front, usando las tecnologías Angular, HTML5, CSS3, PHP.'
    },
    {
      name: 'Unisys',
      date: 'Oct 2021 - Feb 2022',
      description: 'Formación en lenguaje ABAP/SAP.'
    },
    {
      name: 'Atos',
      date: 'Feb 2022 - Sept 2023',
      description: 'Desarrollo aplicación móvil para iOS y Android con el framework Angular 13 usando Ionic 6 y Capacitor 4. Mejoras de código mediante la aplicación SONAR. Cobertura de servicios REST mediante pruebas jUnit. Desarrollo de publicaciones para el proyecto ESIOS QH (Cliente Red Eléctrica), mediante consultas a base de datos usando JAVA.'
    },
    {
      name: 'Exaccta',
      date: 'Abr 2024 - Abr 2025',
      description: 'ESIOSQH - Desarrollo aplicación móvil para iOS y Android con el framework Angular 13 usando Ionic 6 y Capacitor 4. Mejoras de código mediante la aplicación SONAR. Cobertura de servicios REST mediante pruebas jUnit. Desarrollo de publicaciones para el proyecto ESIOS QH (Cliente Red Eléctrica), mediante consultas a base de datos usando JAVA.'
    },
    {
      name: 'Capgemini',
      date: 'Abr 2025 - actualidad',
      description: 'SGAD - Front end developer, trabajando con Angular 19, Typescript 5, HTML5, CSS3, web components.'
    }
  ];

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    message: new FormControl('')
  });

  ngOnInit() {
    // Inicializar el navbar
    this.updateNavbar();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateNavbar();
  }

  private updateNavbar() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }
}
