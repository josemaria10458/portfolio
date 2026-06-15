import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lang } from '../models/language.model';
import { TranslationContent, translations } from '../i18n/translations';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly storageKey = 'portfolio-lang';
  private readonly langSubject = new BehaviorSubject<Lang>(this.getInitialLang());

  readonly currentLang$ = this.langSubject.asObservable();

  get currentLang(): Lang {
    return this.langSubject.value;
  }

  get content(): TranslationContent {
    return translations[this.currentLang];
  }

  setLanguage(lang: Lang): void {
    if (lang === this.currentLang) {
      return;
    }

    this.langSubject.next(lang);
    localStorage.setItem(this.storageKey, lang);
    document.documentElement.lang = lang;
  }

  private getInitialLang(): Lang {
    const saved = localStorage.getItem(this.storageKey) as Lang | null;

    if (saved === 'es' || saved === 'en') {
      document.documentElement.lang = saved;
      return saved;
    }

    document.documentElement.lang = 'es';
    return 'es';
  }
}
