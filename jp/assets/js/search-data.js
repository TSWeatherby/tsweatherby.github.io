
const currentUrl = window.location.href;
const siteUrl = "https://TSWeatherby.github.io"; 
let updatedUrl = currentUrl.replace("https://TSWeatherby.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("jp".length > 0) {
  updatedUrl = updatedUrl.replace("/jp", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-プロフィール",
    title: "プロフィール",
    section: "ナビゲーションメニュー",
    handler: () => {
      window.location.href = "/jp/";
    },
  },{id: "nav-出版物",
          title: "出版物",
          description: "論文、会議発表、章、博士論文。",
          section: "ナビゲーションメニュー",
          handler: () => {
            window.location.href = "/jp/publications/";
          },
        },{id: "nav-プロジェクト",
          title: "プロジェクト",
          description: "進行中および過去の研究プロジェクト。",
          section: "ナビゲーションメニュー",
          handler: () => {
            window.location.href = "/jp/projects/";
          },
        },{id: "nav-リポジトリ",
          title: "リポジトリ",
          description: "GitHubプロフィールと関連リポジトリ。",
          section: "ナビゲーションメニュー",
          handler: () => {
            window.location.href = "/jp/repositories/";
          },
        },{id: "nav-履歴書",
          title: "履歴書",
          description: "",
          section: "ナビゲーションメニュー",
          handler: () => {
            window.location.href = "/jp/cv/";
          },
        },{id: "nav-教育",
          title: "教育",
          description: "教員養成、学校向け教材、シミュレーション。",
          section: "ナビゲーションメニュー",
          handler: () => {
            window.location.href = "/jp/teaching/";
          },
        },{id: "nav-アプリ",
          title: "アプリ",
          description: "フランクフルト・ゲーテ大学の物理教育研究所で公開している教育用アプリです。",
          section: "ナビゲーションメニュー",
          handler: () => {
            window.location.href = "/jp/apps/";
          },
        },{id: "apps-電気的量のシミュレーション",
          title: '電気的量のシミュレーション',
          description: "電位、電圧、電流を扱うインタラクティブな回路シミュレーション。",
          section: "",handler: () => {
              window.location.href = "/jp/apps/jp/Circuits.html";
            },},{id: "apps-collsim",
          title: 'CollSim',
          description: "運動量とエネルギーを扱う2次元衝突シミュレーション。",
          section: "",handler: () => {
              window.location.href = "/jp/apps/jp/CollSim.html";
            },},{id: "projects-denkey-concepts",
          title: 'DenKey Concepts',
          description: "物理教育における鍵概念と診断的理解に関する進行中のプロジェクト。",
          section: "プロジェクト",handler: () => {
              window.location.href = "/jp/projects/jp/denkey.html";
            },},{id: "projects-ivoltage",
          title: 'iVoltage',
          description: "電気回路学習のための可視化と拡張現実。",
          section: "プロジェクト",handler: () => {
              window.location.href = "/jp/projects/jp/ivoltage.html";
            },},{id: "projects-talking-circuits",
          title: 'Talking Circuits',
          description: "初歩的な電気回路学習のためのデジタル支援型協働学習。",
          section: "プロジェクト",handler: () => {
              window.location.href = "/jp/projects/jp/talkingcircuits.html";
            },},{id: "teaching-物理教育におけるデジタルツール",
          title: '物理教育におけるデジタルツール',
          description: "物理授業でコンピュータとデジタルツールを活用するための教育学セミナー。",
          section: "",handler: () => {
              window.location.href = "/jp/teaching/jp/Computereinsatz.html";
            },},{id: "teaching-初等教育教員のための電気と磁気",
          title: '初等教育教員のための電気と磁気',
          description: "初等教育向け電磁気学の内容と教授法を統合した授業。",
          section: "",handler: () => {
              window.location.href = "/jp/teaching/jp/L1ELehre.html";
            },},{id: "teaching-現代物理とその教授法",
          title: '現代物理とその教授法',
          description: "中等教育教員のための現代物理の内容と教授法を統合した授業。",
          section: "",handler: () => {
              window.location.href = "/jp/teaching/jp/ModernPhysics.html";
            },},{id: "teaching-将来の中等物理教員のための理論物理1",
          title: '将来の中等物理教員のための理論物理1',
          description: "ニュートン力学とラグランジュ力学の補助ワークショップ。",
          section: "",handler: () => {
              window.location.href = "/jp/teaching/jp/Theo1.html";
            },},{id: "teaching-将来の中等物理教員のための理論物理2",
          title: '将来の中等物理教員のための理論物理2',
          description: "電磁気学の補助ワークショップ。",
          section: "",handler: () => {
              window.location.href = "/jp/teaching/jp/Theo2.html";
            },},{id: "teaching-将来の中等物理教員のための理論物理3",
          title: '将来の中等物理教員のための理論物理3',
          description: "特殊相対論と量子力学の補助ワークショップ。",
          section: "",handler: () => {
              window.location.href = "/jp/teaching/jp/Theo3.html";
            },},{
        id: 'social-email',
        title: 'メールを送信',
        section: 'ソーシャルリンク',
        handler: () => {
          window.open("mailto:%77%65%61%74%68%65%72%62%79@%70%68%79%73%69%6B.%75%6E%69-%66%72%61%6E%6B%66%75%72%74.%64%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'ソーシャルリンク',
        handler: () => {
          window.open("https://github.com/TSWeatherby", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'ソーシャルリンク',
        handler: () => {
          window.open("https://orcid.org/0000-0002-6819-1347", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'ソーシャルリンク',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Thomas-Weatherby/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'ソーシャルリンク',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'ソーシャルリンク',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=h21H-gYAAAAJ", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'ソーシャルリンク',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/2095863307", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'ソーシャルリンク',
        handler: () => {
          window.open("https://twitter.com/TSWeatherby", "_blank");
        },
      },{
          id: 'lang-en',
          title: 'en',
          section: '言語',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
          id: 'lang-de',
          title: 'de',
          section: '言語',
          handler: () => {
            window.location.href = "/de" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'ライトテーマに変更',
      description: 'サイトのテーマをライトモードに変更',
      section: 'テーマ',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'ダークテーマに変更',
      description: 'サイトのテーマをダークモードに変更',
      section: 'テーマ',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'システム標準テーマを使用',
      description: 'システムのデフォルトテーマを使用',
      section: 'テーマ',
      handler: () => {
        setThemeSetting("system");
      },
    },];
