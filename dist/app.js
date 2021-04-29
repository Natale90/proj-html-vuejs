/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

function initVue() {
  new Vue({
    el: '#app',
    data: {
      pointerActive: 'pointer',
      active: 0,
      navbar: ['Home', 'About', 'Service', 'Blog', 'Contact', 'Portfolio', 'Sign In'],
      whatDoweDo: [{
        img: 'img/Group-247.png',
        title: 'Data Analysis',
        prph: 'When while the lovely valley teems with vapour around meand the meridian sun strikes the upper'
      }, {
        img: 'img/Group-538.png',
        title: 'SEO Optimization',
        prph: 'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper'
      }, {
        img: 'img/Group-566.png',
        title: 'Security Data',
        prph: 'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper'
      }, {
        img: 'img/Group-567.png',
        title: 'Branding Strategy',
        prph: 'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper'
      }],
      slider: [[{
        img: 'img/8wa60okr-1-790x576.jpg',
        slideTitle: 'Bastket of Flower on table',
        slideSub: 'Brand Strategy'
      }, {
        img: 'img/DRY-1-790x576.jpg',
        slideTitle: 'Purinky Products',
        slideSub: 'Digital Experience'
      }, {
        img: 'img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
        slideTitle: 'Satisfy Poster',
        slideSub: 'Branding Strategy'
      }], [{
        img: 'img/DRY-1-790x576.jpg',
        slideTitle: 'Purinky Products',
        slideSub: 'Digital Experience'
      }, {
        img: 'img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
        slideTitle: 'Satisfy Poster',
        slideSub: 'Branding Strategy'
      }, {
        img: 'img/84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg',
        slideTitle: 'Mock-up Template',
        slideSub: 'Ecommerce'
      }], [{
        img: 'img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
        slideTitle: 'Satisfy Poster',
        slideSub: 'Branding Strategy'
      }, {
        img: 'img/84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg',
        slideTitle: 'Mock-up Template',
        slideSub: 'Ecommerce'
      }, {
        img: 'img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
        slideTitle: 'Landing Page',
        slideSub: 'Digital Experience'
      }], [{
        img: 'img/84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg',
        slideTitle: 'Mock-up Template',
        slideSub: 'Ecommerce'
      }, {
        img: 'img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
        slideTitle: 'Landing Page',
        slideSub: 'Digital Experience'
      }, {
        img: 'img/8wa60okr-1-790x576.jpg',
        slideTitle: 'Bastket of Flower on table',
        slideSub: 'Brand Strategy'
      }], [{
        img: 'img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
        slideTitle: 'Landing Page',
        slideSub: 'Digital Experience'
      }, {
        img: 'img/8wa60okr-1-790x576.jpg',
        slideTitle: 'Bastket of Flower on table',
        slideSub: 'Brand Strategy'
      }, {
        img: 'img/DRY-1-790x576.jpg',
        slideTitle: 'Purinky Products',
        slideSub: 'Digital Experience'
      }]],
      posterList: [{
        liLeft: 'Creative ',
        liRight: ' Design Enabled'
      }, {
        liLeft: 'Vibrant ',
        liRight: ' Color Usage'
      }, {
        liLeft: 'Eye ',
        liRight: ' Catching Design'
      }, {
        liLeft: 'Extreme ',
        liRight: ' Typography'
      }, {
        liLeft: 'Exceptional ',
        liRight: ' Design'
      }],
      testimonials: [{
        photo: 'img/szabo-viktor-1266895-unsplash-1024x1024.png',
        vote: 3,
        reviwe: 'When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand.',
        name: 'Michkel Angel',
        role: 'Marketing Management'
      }, {
        photo: 'img/philipe-cavalcante-539505-unsplash-1024x1024.png',
        vote: 4,
        reviwe: 'When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand.',
        name: 'Anghel Mikel',
        role: 'Sale Strategis'
      }, {
        photo: 'img/fabio-spinelli-695744-unsplash-1024x1024.png',
        vote: 2,
        reviwe: 'When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand.',
        name: 'Gennara Bitondo',
        role: 'Panettiere'
      }],
      clients: ['img/client-1-1.png', 'img/client-5.png', 'img/clienty-2.png', 'img/clienty-3.png', 'img/clienty-4.png'],
      quickLinks: ['Service', 'Contact', 'Blog'],
      resources: ['Art design', 'Computer', 'IT news', 'NetWorking', 'Web Security']
    },
    //end of Data
    methods: {
      slideNext: function slideNext() {
        if (this.active === this.slider.length - 1) {
          this.active = 0;
        } else {
          this.active++;
        }
      },
      slidePrev: function slidePrev() {
        if (this.active === 0) {
          this.active = this.slider.length - 1;
        } else {
          this.active--;
        }
      } // getLink: function(links){
      //   const newLinks = [];
      //
      //   for(let i =0;i<links.length;i++){
      //
      //     let oneLink = links[i];
      //     newLinks.push(oneLink);
      //   }
      //   return newLinks;
      // },

    }
  });
}

function init() {
  initVue();
}

document.addEventListener('DOMContentLoaded', init);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n  ╷\n3 │ @import 'partials/sectionOne-sectiontwo';\r\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  src\\style.scss 3:9  root stylesheet\n    at processResult (C:\\dev\\github\\APRILE\\proj-html-vuejs\\node_modules\\webpack\\lib\\NormalModule.js:676:19)\n    at C:\\dev\\github\\APRILE\\proj-html-vuejs\\node_modules\\webpack\\lib\\NormalModule.js:778:5\n    at C:\\dev\\github\\APRILE\\proj-html-vuejs\\node_modules\\loader-runner\\lib\\LoaderRunner.js:399:11\n    at C:\\dev\\github\\APRILE\\proj-html-vuejs\\node_modules\\loader-runner\\lib\\LoaderRunner.js:251:18\n    at context.callback (C:\\dev\\github\\APRILE\\proj-html-vuejs\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at C:\\dev\\github\\APRILE\\proj-html-vuejs\\node_modules\\sass-loader\\dist\\index.js:54:7\n    at Function.call$2 (C:\\dev\\github\\APRILE\\proj-html-vuejs\\node_modules\\sass\\sass.dart.js:92571:16)\n    at _render_closure1.call$2 (C:\\dev\\github\\APRILE\\proj-html-vuejs\\node_modules\\sass\\sass.dart.js:81074:12)\n    at _RootZone.runBinary$3$3 (C:\\dev\\github\\APRILE\\proj-html-vuejs\\node_modules\\sass\\sass.dart.js:27256:18)\n    at _FutureListener.handleError$1 (C:\\dev\\github\\APRILE\\proj-html-vuejs\\node_modules\\sass\\sass.dart.js:25812:19)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/style.scss"]();
/******/ 	
/******/ })()
;