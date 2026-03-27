import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
      resources: {
        pt: {
            translation: {
            nav_home: "Início",
            nav_about: "Sobre",
            nav_experience: "Experiência",
            nav_skills: "Competências",
            nav_projects: "Projetos",
            nav_form: "Formulário",
            nav_contact: "Contacto",
            download_cv: "Download CV",
            hero_subtitle: "Técnico de Informática & Sistemas",
            hero_button1: "Ver Projetos",
            hero_button2: "Contacto",
            about_title: "SOBRE MIM",
            about_desc: "Tenho 18 anos e sou finalista do curso de Técnico de Informática & Sistemas. Procuro sempre criar soluções que sejam não só funcionais, mas visualmente cativantes.",
            timeline_subtitle: "Linha do Tempo",
            experience_title: "Percurso",
            experience_data1: "2026 - Presente",
            experience_data2: "2025",
            experience_cargo1: "Estagiário de Programação",
            experience_desc1: "Focado na adaptação ao stack tecnológico da empresa e manutenção de plataformas digitais.",
            experience_desc2: "Apoio no desenvolvimento de interfaces e otimização de fluxos internos.",
            skills_title: "Competências Técnicas",
            skills_subtitle: "Ferramentas",
            skill_title: "Nível Tecnico",
            extra_educ_title: "Educação",
            extra_educ_course: "Técnico de Informática e Sistemas",
            extra_educ_course_subtitle: "Curso Profissional (Nível 4 EQF)",
            extra_educ_course_desc: "Foco em Programação, Redes e Gestão de Bases de Dados.",
            extra_leisure_title: "Lazer",
            extra_leisure_subtitle1: "Música & Freestyle",
            extra_leisure_subtitle2: "Gaming",
            extra_leisure_subtitle3: "Desporto",
            extra_leisure_subtitle4: "Leitura (Comics & Manga)",
            projects_title: "Projetos",
            project1_name: "Treino Freestyle Rap",
            project1_desc: "Um projeto realizado em Javafx no NetBeans com a implementação de uma API também realizada por mim em Java com o apoio do Spring Boot. A função deste projeto é tentar apoiar as novas pessoas ou pessoas que já estão neste mundo, para poderem melhorar.",
            form_title: "Formulário",
            form_subtitle: "Vamos conversar?",
            form_field1: "Nome",
            form_field2: "Email",
            form_field3: "Telemóvel(Opcional)",
            form_field4: "Mensagem",
            form_field4_subtitle: "Mande a sua mensagem",
            contact_title: "Contacto Direto",
            footer_text: "Construído com React e Tailwind CSS."
            }
        },
        en: {
            translation: {
            nav_home: "Home",
            nav_about: "About",
            nav_experience: "Experience",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_form: "Form",
            nav_contact: "Contact",
            download_cv: "DOWNLOAD CV",
            hero_subtitle: "Computer & Systems Technician",
            hero_button1: "View Projects",
            hero_button2: "Contact",
            about_title: "ABOUT ME",
            about_desc: "I am 18 years old and have completed a Technical Course in Computer Science & Systems. I always strive to create solutions that are not only functional, but also visually appealing.",
            timeline_subtitle: "Timeline",
            experience_title: "Journey",
            experience_data1: "2026 - Present",
            experience_data2: "2025",
            experience_cargo1: "Programming Intern",
            experience_desc1: "Focused on adapting to the company's technology stack and maintaining digital platforms.",
            experience_desc2: "Support in the development of interfaces and optimization of internal workflows.",
            skills_title: "Technical Skills",
            skills_subtitle: "Tools",
            skill_title: "Technical Level",
            extra_educ_title: "Education",
            extra_educ_course: "Computer and Systems Technician",
            extra_educ_course_subtitle: "Professional Course (Level 4 EQF)",
            extra_educ_course_desc: "Focus on Programming, Networks, and Database Management.",
            extra_leisure_title: "Leisure",
            extra_leisure_subtitle1: "Music & Freestyle",
            extra_leisure_subtitle2: "Gaming",
            extra_leisure_subtitle3: "Sport",
            extra_leisure_subtitle4: "Reading (Comics & Manga)",
            projects_title: "Projects",
            project1_name: "Freestyle Rap Training",
            project1_desc: "This is a project developed in JavaFX using NetBeans, with an API implementation also created by me in Java, supported by Spring Boot. The purpose of this project is to support newcomers or those already in this field, so they can improve their skills.",
            form_title: "Form",
            form_subtitle: "Let's talk?",
            form_field1: "Name",
            form_field2: "Email",
            form_field3: "Phone number (Optional)",
            form_field4: "Message",
            form_field4_subtitle: "Send your message",
            contact_title: "Direct contact",
            footer_text: "Built with React and Tailwind CSS."
            }
        }
    }
  });

export default i18n;