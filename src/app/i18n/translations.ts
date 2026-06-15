import { Lang } from '../models/language.model';
import { Job } from '../models/job.model';

export interface TranslationContent {
  nav: {
    about: string;
    experience: string;
    languages: string;
    projects: string;
    contact: string;
    toggleMenu: string;
    selectLanguage: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  about: {
    label: string;
    heading: string;
    subtitle: string;
    text1: string;
    text2: string;
    downloadCv: string;
    imageAlt: string;
    stats: { value: string; label: string }[];
    highlights: { icon: string; title: string; description: string }[];
  };
  experience: {
    label: string;
    heading: string;
    subtitle: string;
  };
  tech: {
    label: string;
    heading: string;
    subtitle: string;
  };
  contact: {
    label: string;
    heading: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
  };
  footer: string;
  jobs: Job[];
}

export const translations: Record<Lang, TranslationContent> = {
  es: {
    nav: {
      about: 'Acerca de',
      experience: 'Experiencia',
      languages: 'Lenguajes',
      projects: 'Proyectos',
      contact: 'Contacto',
      toggleMenu: 'Abrir menú',
      selectLanguage: 'Idioma'
    },
    hero: {
      title: '¡Bienvenido a mi portfolio!',
      subtitle: 'Soy José Maria Ortiz, desarrollador Frontend.'
    },
    about: {
      label: 'Acerca de',
      heading: 'Desarrollador Full Stack con pasión por crear',
      subtitle: 'Frontend · Mobile · Backend',
      text1:
        'Soy un apasionado programador Full Stack con experiencia en desarrollo web y aplicaciones. Mi trayectoria profesional me ha permitido explorar diferentes tecnologías y frameworks, desde el front-end hasta el back-end.',
      text2:
        'Me especializo en crear soluciones robustas y escalables que satisfagan las necesidades de mis clientes y usuarios finales. Me encanta enfrentar desafíos complejos y encontrar soluciones creativas para resolver problemas.',
      downloadCv: 'Descargar CV',
      imageAlt: 'José María Ortiz trabajando',
      stats: [
        { value: '4+', label: 'Años de experiencia' },
        { value: '5', label: 'Empresas' },
        { value: '10+', label: 'Tecnologías' }
      ],
      highlights: [
        {
          icon: '01',
          title: 'Desarrollo Frontend',
          description:
            'Angular, TypeScript, Web Components y diseño responsive.'
        },
        {
          icon: '02',
          title: 'Aplicaciones móviles',
          description: 'Ionic y Capacitor para despliegue en iOS y Android.'
        },
        {
          icon: '03',
          title: 'Calidad de código',
          description:
            'Sonar, pruebas unitarias y buenas prácticas de desarrollo.'
        }
      ]
    },
    experience: {
      label: 'Trayectoria',
      heading: 'Experiencia profesional',
      subtitle: 'Empresas en las que he trabajado'
    },
    tech: {
      label: 'Stack',
      heading: 'Tecnologías',
      subtitle: 'Herramientas y lenguajes que domino'
    },
    contact: {
      label: 'Hablemos',
      heading: 'Contacto',
      subtitle: '¿Tienes un proyecto en mente? Escríbeme',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      messagePlaceholder: 'Cuéntame sobre tu proyecto...',
      submit: 'Enviar mensaje'
    },
    footer: 'José María Ortiz Lopez © 2024',
    jobs: [
      {
        name: 'Seeketing',
        date: 'Abr 2021 - Jun 2021',
        description:
          'Becario - Desarrollo front, usando las tecnologías Angular, HTML5, CSS3, PHP.'
      },
      {
        name: 'Unisys',
        date: 'Oct 2021 - Feb 2022',
        description: 'Formación en lenguaje ABAP/SAP.'
      },
      {
        name: 'Atos',
        date: 'Feb 2022 - Sept 2023',
        description:
          'Desarrollo aplicación móvil para iOS y Android con el framework Angular 13 usando Ionic 6 y Capacitor 4. Mejoras de código mediante la aplicación SONAR. Cobertura de servicios REST mediante pruebas jUnit. Desarrollo de publicaciones para el proyecto ESIOS QH (Cliente Red Eléctrica), mediante consultas a base de datos usando JAVA.'
      },
      {
        name: 'Exaccta',
        date: 'Abr 2024 - Abr 2025',
        description:
          'ESIOSQH - Desarrollo aplicación móvil para iOS y Android con el framework Angular 13 usando Ionic 6 y Capacitor 4. Mejoras de código mediante la aplicación SONAR. Cobertura de servicios REST mediante pruebas jUnit. Desarrollo de publicaciones para el proyecto ESIOS QH (Cliente Red Eléctrica), mediante consultas a base de datos usando JAVA.'
      },
      {
        name: 'Capgemini',
        date: 'Abr 2025 - actualidad',
        description:
          'SGAD - Front end developer, trabajando con Angular 19, Typescript 5, HTML5, CSS3, web components.'
      }
    ]
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      languages: 'Languages',
      projects: 'Projects',
      contact: 'Contact',
      toggleMenu: 'Toggle navigation',
      selectLanguage: 'Language'
    },
    hero: {
      title: 'Welcome to my portfolio!',
      subtitle: "I'm José Maria Ortiz, Frontend developer."
    },
    about: {
      label: 'About me',
      heading: 'Full Stack Developer passionate about building',
      subtitle: 'Frontend · Mobile · Backend',
      text1:
        'I am a passionate Full Stack developer with experience in web and application development. My professional journey has allowed me to explore different technologies and frameworks, from front-end to back-end.',
      text2:
        'I specialize in creating robust and scalable solutions that meet the needs of my clients and end users. I love tackling complex challenges and finding creative solutions to solve problems.',
      downloadCv: 'Download CV',
      imageAlt: 'José María Ortiz working',
      stats: [
        { value: '4+', label: 'Years of experience' },
        { value: '5', label: 'Companies' },
        { value: '10+', label: 'Technologies' }
      ],
      highlights: [
        {
          icon: '01',
          title: 'Frontend Development',
          description: 'Angular, TypeScript, Web Components and responsive design.'
        },
        {
          icon: '02',
          title: 'Mobile Applications',
          description: 'Ionic and Capacitor for iOS and Android deployment.'
        },
        {
          icon: '03',
          title: 'Code Quality',
          description: 'Sonar, unit testing and development best practices.'
        }
      ]
    },
    experience: {
      label: 'Career',
      heading: 'Professional experience',
      subtitle: 'Companies I have worked for'
    },
    tech: {
      label: 'Stack',
      heading: 'Technologies',
      subtitle: 'Tools and languages I work with'
    },
    contact: {
      label: "Let's talk",
      heading: 'Contact',
      subtitle: 'Have a project in mind? Write to me',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@email.com',
      messagePlaceholder: 'Tell me about your project...',
      submit: 'Send message'
    },
    footer: 'José María Ortiz Lopez © 2024',
    jobs: [
      {
        name: 'Seeketing',
        date: 'Apr 2021 - Jun 2021',
        description:
          'Intern - Front-end development using Angular, HTML5, CSS3, and PHP.'
      },
      {
        name: 'Unisys',
        date: 'Oct 2021 - Feb 2022',
        description: 'Training in ABAP/SAP language.'
      },
      {
        name: 'Atos',
        date: 'Feb 2022 - Sept 2023',
        description:
          'Mobile app development for iOS and Android with Angular 13, Ionic 6 and Capacitor 4. Code improvements using SONAR. REST service coverage with jUnit tests. ESIOS QH publication development (Red Eléctrica client) using JAVA database queries.'
      },
      {
        name: 'Exaccta',
        date: 'Apr 2024 - Apr 2025',
        description:
          'ESIOSQH - Mobile app development for iOS and Android with Angular 13, Ionic 6 and Capacitor 4. Code improvements using SONAR. REST service coverage with jUnit tests. ESIOS QH publication development (Red Eléctrica client) using JAVA database queries.'
      },
      {
        name: 'Capgemini',
        date: 'Apr 2025 - present',
        description:
          'SGAD - Front end developer working with Angular 19, TypeScript 5, HTML5, CSS3, and web components.'
      }
    ]
  }
};
