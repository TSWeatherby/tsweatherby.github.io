
const currentUrl = window.location.href;
const siteUrl = "https://TSWeatherby.github.io"; 
let updatedUrl = currentUrl.replace("https://TSWeatherby.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Journal articles, conference papers, book chapters, and doctoral thesis.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A place to view my past and ongoing research projects.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "My GitHub profile and other repositories.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Undergraduate, School Resources and Simulations.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-apps",
          title: "Apps",
          description: "My educational applications published under the Department for Physics Education at Frankfurt University.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/apps/";
          },
        },{id: "apps-simulation-of-electrical-properties",
          title: 'Simulation of Electrical Properties',
          description: "Interactive circuit simulation for potential, voltage, and current.",
          section: "",handler: () => {
              window.location.href = "/apps/en/Circuits.html";
            },},{id: "apps-collsim",
          title: 'CollSim',
          description: "2D collision simulation for momentum and energy.",
          section: "",handler: () => {
              window.location.href = "/apps/en/CollSim.html";
            },},{id: "projects-denkey-concepts",
          title: 'DenKey Concepts',
          description: "Work-in-progress project on key concepts and diagnostic understanding in physics education.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en/denkey.html";
            },},{id: "projects-ivoltage",
          title: 'iVoltage',
          description: "Visualisations and augmented reality for learning electric circuits.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en/ivoltage.html";
            },},{id: "projects-talking-circuits",
          title: 'Talking Circuits',
          description: "Digitally scaffolded collaborative learning for introductory electrical circuits.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en/talkingcircuits.html";
            },},{id: "teaching-digital-tools-in-physics-education",
          title: 'Digital Tools in Physics Education',
          description: "Pedagogy seminar on using computers and digital tools in physics lessons.",
          section: "",handler: () => {
              window.location.href = "/teaching/en/Computereinsatz.html";
            },},{id: "teaching-electromagnetism-for-primary-school-teachers",
          title: 'Electromagnetism for Primary School Teachers',
          description: "Integrated content and pedagogy of electromagnetism for primary school.",
          section: "",handler: () => {
              window.location.href = "/teaching/en/L1ELehre.html";
            },},{id: "teaching-modern-physics-and-its-pedagogy",
          title: 'Modern Physics and its Pedagogy',
          description: "Integrated Subject and Pedagogy course on modern physics for secondary school teachers.",
          section: "",handler: () => {
              window.location.href = "/teaching/en/ModernPhysics.html";
            },},{id: "teaching-theoretical-physics-for-future-secondary-physics-teachers-1",
          title: 'Theoretical Physics for Future Secondary Physics Teachers 1',
          description: "Companion workshop on Newtonian and Lagrangian Mechanics.",
          section: "",handler: () => {
              window.location.href = "/teaching/en/Theo1.html";
            },},{id: "teaching-theoretical-physics-for-future-secondary-physics-teachers-2",
          title: 'Theoretical Physics for Future Secondary Physics Teachers 2',
          description: "Companion workshop on Electrodynamics.",
          section: "",handler: () => {
              window.location.href = "/teaching/en/Theo2.html";
            },},{id: "teaching-theoretical-physics-for-future-secondary-physics-teachers-3",
          title: 'Theoretical Physics for Future Secondary Physics Teachers 3',
          description: "Companion workshop on Special Relativity and Quantum Mechanics.",
          section: "",handler: () => {
              window.location.href = "/teaching/en/Theo3.html";
            },},{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%65%61%74%68%65%72%62%79@%70%68%79%73%69%6B.%75%6E%69-%66%72%61%6E%6B%66%75%72%74.%64%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/TSWeatherby", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-6819-1347", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Thomas-Weatherby/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=h21H-gYAAAAJ", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/2095863307", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/TSWeatherby", "_blank");
        },
      },{
          id: 'lang-de',
          title: 'de',
          section: 'Languages',
          handler: () => {
            window.location.href = "/de" + updatedUrl;
          },
        },{
          id: 'lang-jp',
          title: 'jp',
          section: 'Languages',
          handler: () => {
            window.location.href = "/jp" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
