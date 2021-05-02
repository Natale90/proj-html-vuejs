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
      // css classes
      sentMessage: 'sent_message',
      recievedMessage: 'recieved_message',
      pointerActive: 'pointer',
      active: 0,
      chat: false,
      form: false,
      conversation: false,
      myLastMessage: '',
      navbar: [{
        url: '#',
        name: 'Home'
      }, {
        url: '#',
        name: 'About'
      }, {
        url: '#',
        name: 'Service'
      }, {
        url: '#',
        name: 'Blog'
      }, {
        url: '#',
        name: 'Contact'
      }, {
        url: '#',
        name: 'Portfolio'
      }, {
        url: '#',
        name: 'Sign In'
      }],
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
      quickLinks: [{
        url: '#',
        name: 'Service'
      }, {
        url: '#',
        name: 'Contact'
      }, {
        url: '#',
        name: 'Blog'
      }],
      resources: [{
        url: '#',
        name: 'Art design'
      }, {
        url: '#',
        name: 'Computer'
      }, {
        url: '#',
        name: 'IT news'
      }, {
        url: '#',
        name: 'NetWorking'
      }, {
        url: '#',
        name: 'Web Security'
      }],
      //chatWindow's Data
      people: ['img/philipe-cavalcante-539505-unsplash-1024x1024.png', 'img/fabio-spinelli-695744-unsplash-1024x1024.png', 'img/szabo-viktor-1266895-unsplash-1024x1024.png', 'img/philipe-cavalcante-539505-unsplash-1024x1024.png', 'img/fabio-spinelli-695744-unsplash-1024x1024.png', 'img/szabo-viktor-1266895-unsplash-1024x1024.png'],
      currentCoversation: [{
        name: 'Phlox',
        text: 'Hi, how can i help you?',
        status: 'recieved'
      }]
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
      },
      showChat: function showChat() {
        this.chat = !this.chat;
      },
      showForm: function showForm() {
        this.form = true;
      },
      backArrow: function backArrow() {
        this.form = false;
        this.conversation = false;
      },
      showConversation: function showConversation() {
        this.conversation = true;
      },
      talkInChat: function talkInChat() {
        var myText = {
          name: 'you',
          text: this.myLastMessage,
          status: 'sent'
        };

        if (this.myLastMessage.length > 0) {
          this.currentCoversation.push(myText);
          this.myLastMessage = '';
        }
      }
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;