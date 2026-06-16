import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TranslationContent, translations } from './i18n/translations';
import { Lang, LanguageOption } from './models/language.model';
import { Job } from './models/job.model';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio';
  t: TranslationContent = translations.es;
  langMenuOpen = false;
  navMenuOpen = false;

  readonly languages: LanguageOption[] = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' }
  ];

  technologies = [
    { name: 'Sass', icon: 'assets/images/icons8-hablar-con-descaro-a-48.png' },
    { name: 'HTML5', icon: 'assets/images/html-5.png' },
    { name: 'CSS3', icon: 'assets/images/social.png' },
    { name: 'TypeScript', icon: 'assets/images/icons8-mecanografiado-48.png' },
    { name: 'JavaScript', icon: 'assets/images/js.png' },
    { name: 'Java', icon: 'assets/images/java.png' },
    { name: 'Angular', icon: 'assets/images/icons8-angular-48.png' },
    { name: 'MySQL', icon: 'assets/images/mysql.png' },
    { name: 'Ionic', icon: 'assets/images/icons8-iónico-48.png' },
    { name: 'PHP', icon: 'assets/images/php.png' },
    { name: 'Python', icon: 'assets/images/piton.png' },
    { name: 'Git', icon: 'assets/images/icons8-sourcetree-is-a-nice-alternative-to-the-git-command-line-24.png' },
    { name: 'GitHub', icon: 'assets/images/github.png' }
  ];

  aboutStats: { value: string; label: string }[] = [];
  aboutHighlights: { icon: string; title: string; description: string }[] = [];
  jobs: Job[] = [];

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    message: new FormControl('')
  });

  private langSubscription?: Subscription;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.langSubscription = this.languageService.currentLang$.subscribe(() => {
      this.applyTranslations();
    });
    this.applyTranslations();
    this.updateNavbar();
  }

  ngOnDestroy(): void {
    this.langSubscription?.unsubscribe();
  }

  get currentLang(): Lang {
    return this.languageService.currentLang;
  }

  get currentLangLabel(): string {
    return this.languages.find((lang) => lang.code === this.currentLang)?.label ?? 'Español';
  }

  toggleNavMenu(event: Event): void {
    event.stopPropagation();
    this.navMenuOpen = !this.navMenuOpen;

    if (this.navMenuOpen) {
      this.langMenuOpen = false;
    }
  }

  closeNavMenu(): void {
    this.navMenuOpen = false;
  }

  toggleLangMenu(event: Event): void {
    event.stopPropagation();
    this.langMenuOpen = !this.langMenuOpen;
  }

  selectLanguage(lang: Lang, event: Event): void {
    event.stopPropagation();
    this.languageService.setLanguage(lang);
    this.langMenuOpen = false;
  }

  @HostListener('document:click')
  closeMenus(): void {
    this.langMenuOpen = false;
    this.navMenuOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateNavbar();
  }

  private applyTranslations(): void {
    this.t = this.languageService.content;
    this.aboutStats = this.t.about.stats;
    this.aboutHighlights = this.t.about.highlights;
    this.jobs = this.t.jobs;
  }

  private updateNavbar(): void {
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
