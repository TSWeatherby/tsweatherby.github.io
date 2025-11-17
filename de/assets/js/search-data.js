
const currentUrl = window.location.href;
const siteUrl = "https://TSWeatherby.github.io"; 
let updatedUrl = currentUrl.replace("https://TSWeatherby.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("de".length > 0) {
  updatedUrl = updatedUrl.replace("/de", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-über-mich",
    title: "Über mich",
    section: "Navigationsmenü",
    handler: () => {
      window.location.href = "/de/";
    },
  },{id: "nav-veröffentlichungen",
          title: "Veröffentlichungen",
          description: "Veröffentlichungen nach Kategorien in umgekehrter chronologischer Reihenfolge. Erstellt mit jekyll-scholar.",
          section: "Navigationsmenü",
          handler: () => {
            window.location.href = "/de/publications/";
          },
        },{id: "nav-projekten",
          title: "Projekten",
          description: "Forschungsprojekte",
          section: "Navigationsmenü",
          handler: () => {
            window.location.href = "/de/projects/";
          },
        },{id: "nav-repositorys",
          title: "Repositorys",
          description: "Mein GitHub-Profil und andere Repositorys.",
          section: "Navigationsmenü",
          handler: () => {
            window.location.href = "/de/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigationsmenü",
          handler: () => {
            window.location.href = "/de/cv/";
          },
        },{id: "nav-lehre",
          title: "Lehre",
          description: "Lehrmaterialien für verschiedene Kurse.",
          section: "Navigationsmenü",
          handler: () => {
            window.location.href = "/de/teaching/";
          },
        },{id: "nav-apps",
          title: "Apps",
          description: "My eduational applications published under the Department for Physics Education at Frankfurt University.",
          section: "Navigationsmenü",
          handler: () => {
            window.location.href = "/de/apps/";
          },
        },{id: "apps-theoretische-physik-1-für-das-gymnasiale-lehramt",
          title: 'Theoretische Physik 1 für das gymnasiale Lehramt',
          description: "Begleitworkshop zur Newtonschen und Lagrange-Mechanik.",
          section: "",handler: () => {
              window.location.href = "/de/apps/de/Theo1.html";
            },},{id: "apps-theoretische-physik-2-für-das-gymnasiale-lehramt",
          title: 'Theoretische Physik 2 für das gymnasiale Lehramt',
          description: "Begleitworkshop zur Elektrodynamik.",
          section: "",handler: () => {
              window.location.href = "/de/apps/de/Theo2.html";
            },},{id: "apps-theoretische-physik-3-für-das-gymnasiale-lehramt",
          title: 'Theoretische Physik 3 für das gymnasiale Lehramt',
          description: "Begleitworkshop zur Spezielle Relativitätstheorie und Quantenmechanik.",
          section: "",handler: () => {
              window.location.href = "/de/apps/de/Theo3.html";
            },},{id: "apps-simulation-of-electrical-properties",
          title: 'Simulation of Electrical Properties',
          description: "Simulation visualising potential in different ways",
          section: "",handler: () => {
              window.location.href = "/de/apps/en/Circuits.html";
            },},{id: "projects-denkey-concepts",
          title: 'DenKey Concepts',
          description: "Placeholder iVoltage Project Description",
          section: "Projekte",handler: () => {
              window.location.href = "/de/projects/de/denkey.html";
            },},{id: "projects-ivoltage",
          title: 'iVoltage',
          description: "Platzhalter iVoltage Project",
          section: "Projekte",handler: () => {
              window.location.href = "/de/projects/de/ivoltage.html";
            },},{id: "projects-talking-circuits",
          title: 'Talking Circuits',
          description: "Placeholder Talking Circuits Project Description",
          section: "Projekte",handler: () => {
              window.location.href = "/de/projects/de/talkingcircuits.html";
            },},{id: "teaching-elektrizität-und-magnetismus-für-die-grundschule",
          title: 'Elektrizität und Magnetismus für die Grundschule',
          description: "Integrierte Fach- und Didaktikinhalte zum Thema Elektromagnetismus für die Grundschule.",
          section: "",handler: () => {
              window.location.href = "/de/teaching/de/L1ELehre.html";
            },},{
        id: 'social-email',
        title: 'E-Mail senden',
        section: 'Soziale Netzwerke',
        handler: () => {
          window.open("mailto:%77%65%61%74%68%65%72%62%79@%70%68%79%73%69%6B.%75%6E%69-%66%72%61%6E%6B%66%75%72%74.%64%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Soziale Netzwerke',
        handler: () => {
          window.open("https://github.com/TSWeatherby", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Soziale Netzwerke',
        handler: () => {
          window.open("https://orcid.org/0000-0002-6819-1347", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Soziale Netzwerke',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Thomas-Weatherby/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Soziale Netzwerke',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Soziale Netzwerke',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=h21H-gYAAAAJ", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Soziale Netzwerke',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/2095863307", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Soziale Netzwerke',
        handler: () => {
          window.open("https://twitter.com/TSWeatherby", "_blank");
        },
      },{
          id: 'lang-en',
          title: 'en',
          section: 'Sprachen',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
          id: 'lang-jp',
          title: 'jp',
          section: 'Sprachen',
          handler: () => {
            window.location.href = "/jp" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Helles Design aktivieren',
      description: 'Wechselt das Website-Design auf hell',
      section: 'Design',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Dunkles Design aktivieren',
      description: 'Wechselt das Website-Design auf dunkel',
      section: 'Design',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Systemdesign verwenden',
      description: 'Verwendet das Standard-Design des Systems',
      section: 'Design',
      handler: () => {
        setThemeSetting("system");
      },
    },];
