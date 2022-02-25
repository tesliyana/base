var $localize=Object.assign(void 0===$localize?{}:$localize,{locale:"sr"});
"use strict";(function(global){global.ng=global.ng||{};global.ng.common=global.ng.common||{};global.ng.common.locales=global.ng.common.locales||{};const u=undefined;function plural(val){const n=val,i=Math.floor(Math.abs(val)),v=val.toString().replace(/^[^.]*\.?/,"").length,f=parseInt(val.toString().replace(/^[^.]*\.?/,""),10)||0;if(v===0&&i%10===1&&!(i%100===11)||f%10===1&&!(f%100===11))return 1;if(v===0&&i%10===Math.floor(i%10)&&i%10>=2&&i%10<=4&&!(i%100>=12&&i%100<=14)||f%10===Math.floor(f%10)&&f%10>=2&&f%10<=4&&!(f%100>=12&&f%100<=14))return 3;return 5}global.ng.common.locales["sr"]=["sr",[["a","p"],["\u043F\u0440\u0435 \u043F\u043E\u0434\u043D\u0435","\u043F\u043E \u043F\u043E\u0434\u043D\u0435"],u],[["\u043F\u0440\u0435 \u043F\u043E\u0434\u043D\u0435","\u043F\u043E \u043F\u043E\u0434\u043D\u0435"],u,u],[["\u043D","\u043F","\u0443","\u0441","\u0447","\u043F","\u0441"],["\u043D\u0435\u0434","\u043F\u043E\u043D","\u0443\u0442\u043E","\u0441\u0440\u0435","\u0447\u0435\u0442","\u043F\u0435\u0442","\u0441\u0443\u0431"],["\u043D\u0435\u0434\u0435\u0459\u0430","\u043F\u043E\u043D\u0435\u0434\u0435\u0459\u0430\u043A","\u0443\u0442\u043E\u0440\u0430\u043A","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043A","\u043F\u0435\u0442\u0430\u043A","\u0441\u0443\u0431\u043E\u0442\u0430"],["\u043D\u0435","\u043F\u043E","\u0443\u0442","\u0441\u0440","\u0447\u0435","\u043F\u0435","\u0441\u0443"]],u,[["\u0458","\u0444","\u043C","\u0430","\u043C","\u0458","\u0458","\u0430","\u0441","\u043E","\u043D","\u0434"],["\u0458\u0430\u043D","\u0444\u0435\u0431","\u043C\u0430\u0440","\u0430\u043F\u0440","\u043C\u0430\u0458","\u0458\u0443\u043D","\u0458\u0443\u043B","\u0430\u0432\u0433","\u0441\u0435\u043F","\u043E\u043A\u0442","\u043D\u043E\u0432","\u0434\u0435\u0446"],["\u0458\u0430\u043D\u0443\u0430\u0440","\u0444\u0435\u0431\u0440\u0443\u0430\u0440","\u043C\u0430\u0440\u0442","\u0430\u043F\u0440\u0438\u043B","\u043C\u0430\u0458","\u0458\u0443\u043D","\u0458\u0443\u043B","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043F\u0442\u0435\u043C\u0431\u0430\u0440","\u043E\u043A\u0442\u043E\u0431\u0430\u0440","\u043D\u043E\u0432\u0435\u043C\u0431\u0430\u0440","\u0434\u0435\u0446\u0435\u043C\u0431\u0430\u0440"]],u,[["\u043F.\u043D.\u0435.","\u043D.\u0435."],["\u043F. \u043D. \u0435.","\u043D. \u0435."],["\u043F\u0440\u0435 \u043D\u043E\u0432\u0435 \u0435\u0440\u0435","\u043D\u043E\u0432\u0435 \u0435\u0440\u0435"]],1,[6,0],["d.M.yy.","dd.MM.y.","dd. MMMM y.","EEEE, dd. MMMM y."],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1} {0}",u,u,u],[",",".",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","#,##0.00\xA0\xA4","#E0"],"RSD","RSD","\u0421\u0440\u043F\u0441\u043A\u0438 \u0434\u0438\u043D\u0430\u0440",{"AUD":[u,"$"],"BAM":["\u041A\u041C","KM"],"GEL":[u,"\u10DA"],"KRW":[u,"\u20A9"],"NZD":[u,"$"],"PHP":[u,"\u20B1"],"TWD":["NT$"],"USD":["US$","$"],"VND":[u,"\u20AB"]},"ltr",plural,[[["\u043F\u043E\u043D\u043E\u045B","\u043F\u043E\u0434\u043D\u0435","\u0443\u0458\u0443\u0442\u0440\u0443","\u043F\u043E \u043F\u043E\u0434\u043D\u0435","\u0443\u0432\u0435\u0447\u0435","\u043D\u043E\u045B\u0443"],["\u043F\u043E\u043D\u043E\u045B","\u043F\u043E\u0434\u043D\u0435","\u0443\u0458\u0443\u0442\u0440\u043E","\u043F\u043E \u043F\u043E\u0434\u043D\u0435","\u0443\u0432\u0435\u0447\u0435","\u043D\u043E\u045B\u0443"],u],[["\u043F\u043E\u043D\u043E\u045B","\u043F\u043E\u0434\u043D\u0435","\u0458\u0443\u0442\u0440\u043E","\u043F\u043E\u043F\u043E\u0434\u043D\u0435","\u0432\u0435\u0447\u0435","\u043D\u043E\u045B"],u,u],["00:00","12:00",["06:00","12:00"],["12:00","18:00"],["18:00","21:00"],["21:00","06:00"]]]]})(typeof globalThis!=="undefined"&&globalThis||typeof global!=="undefined"&&global||typeof window!=="undefined"&&window);;
"use strict";
(self["webpackChunktesla"] = self["webpackChunktesla"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_auth_guard_pages_auth_guard_pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/auth-guard-pages/auth-guard-pages.component */ 9061);
/* harmony import */ var _components_terminal_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/terminal/terminal/terminal.component */ 4172);
/* harmony import */ var _components_terminal_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/terminal/welcome/welcome.component */ 2599);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    // {
    // 	path: '*',
    // 	redirectTo: '/home',
    // 	pathMatch: 'full'
    // },
    {
        path: 'welcome',
        component: _components_terminal_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__.WelcomeComponent
    },
    {
        path: 'home',
        component: _components_terminal_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_1__.TerminalComponent
    },
    // {
    // 	path: '',
    // 	component: AuthGuardPagesComponent,
    // 	// children: AuthGuardRoutes,
    // 	// canActivate: [AuthGuard],
    // 	data: { title: 'Auth Guard Pages' }
    // },
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _components_auth_guard_pages_auth_guard_pages_component__WEBPACK_IMPORTED_MODULE_0__.AuthGuardPagesComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
                paramsInheritanceStrategy: 'always',
                // enableTracing: true
            })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
    constructor() {
        this.title = 'Tesla';
        this.isOpen = true;
    }
    toggle() {
        this.isOpen = !this.isOpen;
    }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 43, vars: 1, consts: [["role", "banner", "routerLink", "/home", 1, "toolbar"], [1, "spacer"], ["aria-label", "Tesla on Instagra", "target", "_blank", "rel", "noopener", "href", "https://www.instagram.com/tesla.nikola.reincarnation", "title", "Instagram"], ["id", "instagram-logo", "xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "width", "24", "height", "24", "viewBox", "0 0 24 24", 2, "fill", "#fff"], ["d", "M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"], ["aria-label", "Tesla on YouTube", "target", "_blank", "rel", "noopener", "href", "https://www.youtube.com/c/TESLIYANACIVILIZATIONRTV", "title", "YouTube"], ["id", "youtube-logo", "height", "24", "width", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "#fff"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"], ["role", "main", 1, "content"], ["routerLink", "/welcome", "routerLinkActive", "active", 1, "card", "highlight-card", "card-small"], ["id", "rocket", "xmlns", "http://www.w3.org/2000/svg", "width", "101.678", "height", "101.678", "viewBox", "0 0 101.678 101.678"], ["id", "Group_83", "data-name", "Group 83", "transform", "translate(-141 -696)"], ["id", "Ellipse_8", "data-name", "Ellipse 8", "cx", "50.839", "cy", "50.839", "r", "50.839", "transform", "translate(141 696)", "fill", "#4582a9"], ["id", "Group_47", "data-name", "Group 47", "transform", "translate(165.185 720.185)"], ["id", "Path_33", "data-name", "Path 33", "d", "M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z", "transform", "translate(0.371 3.363)", "fill", "#fff"], ["id", "Path_34", "data-name", "Path 34", "d", "M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z", "transform", "translate(0 0.005)", "fill", "#fff"], ["id", "clouds", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#afd0e369"], [1, "card-container"], ["title", "Find a Local Meetup", "href", "https://www.meetup.com/find/?keywords=Tesla&source=EVENTS&location=mk--Ohrid", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24.607", "height", "23.447", "viewBox", "0 0 24.607 23.447"], ["id", "logo--mSwarm", "d", "M21.221,14.95A4.393,4.393,0,0,1,17.6,19.281a4.452,4.452,0,0,1-.8.069c-.09,0-.125.035-.154.117a2.939,2.939,0,0,1-2.506,2.091,2.868,2.868,0,0,1-2.248-.624.168.168,0,0,0-.245-.005,3.926,3.926,0,0,1-2.589.741,4.015,4.015,0,0,1-3.7-3.347,2.7,2.7,0,0,1-.043-.38c0-.106-.042-.146-.143-.166a3.524,3.524,0,0,1-1.516-.69A3.623,3.623,0,0,1,2.23,14.557a3.66,3.66,0,0,1,1.077-3.085.138.138,0,0,0,.026-.2,3.348,3.348,0,0,1-.451-1.821,3.46,3.46,0,0,1,2.749-3.28.44.44,0,0,0,.355-.281,5.072,5.072,0,0,1,3.863-3,5.028,5.028,0,0,1,3.555.666.31.31,0,0,0,.271.03A4.5,4.5,0,0,1,18.3,4.7a4.4,4.4,0,0,1,1.334,2.751,3.658,3.658,0,0,1,.022.706.131.131,0,0,0,.1.157,2.432,2.432,0,0,1,1.574,1.645,2.464,2.464,0,0,1-.7,2.616c-.065.064-.051.1-.014.166A4.321,4.321,0,0,1,21.221,14.95ZM13.4,14.607a2.09,2.09,0,0,0,1.409,1.982,4.7,4.7,0,0,0,1.275.221,1.807,1.807,0,0,0,.9-.151.542.542,0,0,0,.321-.545.558.558,0,0,0-.359-.534,1.2,1.2,0,0,0-.254-.078c-.262-.047-.526-.086-.787-.138a.674.674,0,0,1-.617-.75,3.394,3.394,0,0,1,.218-1.109c.217-.658.509-1.286.79-1.918a15.609,15.609,0,0,0,.745-1.86,1.95,1.95,0,0,0,.06-1.073,1.286,1.286,0,0,0-1.051-1.033,1.977,1.977,0,0,0-1.521.2.339.339,0,0,1-.446-.042c-.1-.092-.2-.189-.307-.284a1.214,1.214,0,0,0-1.643-.061,7.563,7.563,0,0,1-.614.512A.588.588,0,0,1,10.883,8c-.215-.115-.437-.215-.659-.316a2.153,2.153,0,0,0-.695-.248A2.091,2.091,0,0,0,7.541,8.562a9.915,9.915,0,0,0-.405.986c-.559,1.545-1.015,3.123-1.487,4.7a1.528,1.528,0,0,0,.634,1.777,1.755,1.755,0,0,0,1.5.211,1.35,1.35,0,0,0,.824-.858c.543-1.281,1.032-2.584,1.55-3.875.142-.355.28-.712.432-1.064a.548.548,0,0,1,.851-.24.622.622,0,0,1,.185.539,2.161,2.161,0,0,1-.181.621c-.337.852-.68,1.7-1.018,2.552a2.564,2.564,0,0,0-.173.528.624.624,0,0,0,.333.71,1.073,1.073,0,0,0,.814.034,1.22,1.22,0,0,0,.657-.655q.758-1.488,1.511-2.978.35-.687.709-1.37a1.073,1.073,0,0,1,.357-.434.43.43,0,0,1,.463-.016.373.373,0,0,1,.153.387.7.7,0,0,1-.057.236c-.065.157-.127.316-.2.469-.42.883-.846,1.763-1.262,2.648A2.463,2.463,0,0,0,13.4,14.607Zm5.888,6.508a1.09,1.09,0,0,0-2.179.006,1.09,1.09,0,0,0,2.179-.006ZM1.028,12.139a1.038,1.038,0,1,0,.01-2.075,1.038,1.038,0,0,0-.01,2.075ZM13.782.528a1.027,1.027,0,1,0-.011,2.055A1.027,1.027,0,0,0,13.782.528ZM22.21,6.95a.882.882,0,0,0-1.763.011A.882.882,0,0,0,22.21,6.95ZM4.153,4.439a.785.785,0,1,0,.787-.78A.766.766,0,0,0,4.153,4.439Zm8.221,18.22a.676.676,0,1,0-.677.666A.671.671,0,0,0,12.374,22.658ZM22.872,12.2a.674.674,0,0,0-.665.665.656.656,0,0,0,.655.643.634.634,0,0,0,.655-.644A.654.654,0,0,0,22.872,12.2ZM7.171-.123A.546.546,0,0,0,6.613.43a.553.553,0,1,0,1.106,0A.539.539,0,0,0,7.171-.123ZM24.119,9.234a.507.507,0,0,0-.493.488.494.494,0,0,0,.494.494.48.48,0,0,0,.487-.483A.491.491,0,0,0,24.119,9.234Zm-19.454,9.7a.5.5,0,0,0-.488-.488.491.491,0,0,0-.487.5.483.483,0,0,0,.491.479A.49.49,0,0,0,4.665,18.936Z", "transform", "translate(0 0.123)", "fill", "#f64060"], ["title", "Chat directly with Nikola Tesla", "href", "https://premium.chat/NikolaTesla", "target", "_blank", "rel", "noopener", 1, "circle-link", "a-premium-chat"], ["src", "./assets/premium-chat.svg", "alt", "Premium Chat"], ["href", "https://www.youtube.com/watch?v=UxHPMJn4V9c&t=9s", "target", "_blank", "rel", "noopener"], [1, "github-star-badge"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "material-icons"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z", "fill", "#283d49"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Rocket Ship");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "circle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Gray Clouds Background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Want to learn more? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Watch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome to the ", ctx.title, " app!");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  background-color: #283d49;\n  color: white;\n  font-weight: 600;\n  background-image: url('tesla.webp');\n  background-position: left;\n  background-repeat: no-repeat;\n  background-size: 193px;\n}\n\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #instagram-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 8px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #instagram-logo[_ngcontent-%COMP%]:hover, .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  fill: #4582a9;\n}\n\n.circle-link[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background: #3c4f5a !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: 1s ease-out;\n}\n\n.circle-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\n\n.a-premium-chat[_ngcontent-%COMP%] {\n  width: 196px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxOZzEzJTIwMjAyMiUyMFByb2plY3RzXFx0ZXNsYVxcc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNDRDs7QURLQTtFQUNDLGNBQUE7QUNGRDs7QURLQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0FDRkQ7O0FES0E7RUFDQyxZQUFBO0VBQ0EsY0FBQTtBQ0ZEOztBREtBOztFQUVDLFlBQUE7RUFDQSxhQUFBO0FDRkQ7O0FES0E7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUVBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBRUEsdUJBQUE7QUNMRDs7QURRQTtFQUNDLCtCQUFBO0VBQ0EsMkNBQUE7QUNMRDs7QURRQTtFQUNDLHVCQUFBO0FDTEQiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHRoZWlnaHQ6IDgwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyODNkNDk7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy90ZXNsYS53ZWJwKTtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiAxOTNweDtcclxuXHQvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzRweDtcclxuXHQvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC01MHB4O1xyXG5cdC8vIGJhY2tncm91bmQtc2l6ZTogMjY0cHg7XHJcbn1cclxuXHJcbi50b29sYmFyIGltZyB7XHJcblx0bWFyZ2luOiAwIDE2cHg7XHJcbn1cclxuXHJcbi50b29sYmFyICNpbnN0YWdyYW0tbG9nbyB7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdG1hcmdpbjogMCA4cHg7XHJcbn1cclxuXHJcbi50b29sYmFyICN5b3V0dWJlLWxvZ28ge1xyXG5cdGhlaWdodDogNDBweDtcclxuXHRtYXJnaW46IDAgMTZweDtcclxufVxyXG5cclxuLnRvb2xiYXIgI2luc3RhZ3JhbS1sb2dvOmhvdmVyLFxyXG4udG9vbGJhciAjeW91dHViZS1sb2dvOmhvdmVyIHtcclxuXHRvcGFjaXR5OiAwLjg7XHJcblx0ZmlsbDogcmdiKDY5LCAxMzAsIDE2OSk7XHJcbn1cclxuXHJcbi5jaXJjbGUtbGluayB7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdHdpZHRoOiA0MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcblx0bWFyZ2luOiA4cHg7XHJcblx0Ly8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0YmFja2dyb3VuZDogIzNjNGY1YSAhaW1wb3J0YW50O1xyXG5cdC8vIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHQvLyBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcblx0dHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5jaXJjbGUtbGluazpob3ZlciB7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcclxuXHRib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uYS1wcmVtaXVtLWNoYXQge1xyXG5cdHdpZHRoOiAxOTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iLCIudG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzZDQ5O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvdGVzbGEud2VicCk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTkzcHg7XG59XG5cbi50b29sYmFyIGltZyB7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG4udG9vbGJhciAjaW5zdGFncmFtLWxvZ28ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi50b29sYmFyICN5b3V0dWJlLWxvZ28ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG4udG9vbGJhciAjaW5zdGFncmFtLWxvZ286aG92ZXIsXG4udG9vbGJhciAjeW91dHViZS1sb2dvOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xuICBmaWxsOiAjNDU4MmE5O1xufVxuXG4uY2lyY2xlLWxpbmsge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBtYXJnaW46IDhweDtcbiAgYmFja2dyb3VuZDogIzNjNGY1YSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcbn1cblxuLmNpcmNsZS1saW5rOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmEtcHJlbWl1bS1jaGF0IHtcbiAgd2lkdGg6IDE5NnB4ICFpbXBvcnRhbnQ7XG59Il19 */", "[_nghost-%COMP%] {\n\t\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\t\tfont-size: 14px;\n\t\tcolor: #333;\n\t\tbox-sizing: border-box;\n\t\t-webkit-font-smoothing: antialiased;\n\t\t-moz-osx-font-smoothing: grayscale;\n\t}\n\n\t.spacer[_ngcontent-%COMP%] {\n\t\tflex: 1;\n\t}\n\n\tsvg.material-icons[_ngcontent-%COMP%] {\n\t\theight: 24px;\n\t\twidth: auto;\n\t}\n\n\tsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n\t\tmargin-right: 8px;\n\t}\n\n\t.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n\t\tfill: #888;\n\t}\n\n\tsvg#rocket[_ngcontent-%COMP%] {\n\t\twidth: 80px;\n\t\tposition: absolute;\n\t\tleft: -10px;\n\t\ttop: -24px;\n\t}\n\n\tsvg#rocket-smoke[_ngcontent-%COMP%] {\n\t\theight: calc(100vh - 95px);\n\t\tposition: absolute;\n\t\ttop: 10px;\n\t\tright: 180px;\n\t\tz-index: -10;\n\t}\n\n\ta[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n\t\tcolor: #283d49;\n\t\ttext-decoration: none;\n\t}\n\n\ta[_ngcontent-%COMP%]:hover {\n\t\tcolor: #125699;\n\t}\n\n\tfooter[_ngcontent-%COMP%] {\n\t\tmargin-top: 8px;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tline-height: 20px;\n\t\t\n\t\tposition: relative;\n\t\tpadding-bottom: 5px;\n\t}\n\n\tfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t.github-star-badge[_ngcontent-%COMP%] {\n\t\tcolor: #24292e;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tfont-size: 12px;\n\t\tpadding: 3px 10px;\n\t\tborder: 1px solid rgba(27, 31, 35, .2);\n\t\tborder-radius: 3px;\n\t\tbackground-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n\t\tmargin-left: 4px;\n\t\tfont-weight: 600;\n\t}\n\n\t.github-star-badge[_ngcontent-%COMP%]:hover {\n\t\tbackground-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n\t\tborder-color: rgba(27, 31, 35, .35);\n\t\tbackground-position: -.5em;\n\t}\n\n\t.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n\t\theight: 16px;\n\t\twidth: 16px;\n\t\tmargin-right: 4px;\n\t}\n\n\tsvg#clouds[_ngcontent-%COMP%] {\n\t\tposition: fixed;\n\t\tbottom: -160px;\n\t\tleft: -230px;\n\t\tz-index: -10;\n\t\twidth: 1920px;\n\t}\n\n\n\t\n\t@media screen and (max-width: 767px) {\n\n\t\t.card-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t.card[_ngcontent-%COMP%]:not(.highlight-card) {\n\t\t\theight: 16px;\n\t\t\tmargin: 8px 0;\n\t\t}\n\n\t\t.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n\t\t\tmargin-left: 72px;\n\t\t}\n\n\t\tsvg#rocket-smoke[_ngcontent-%COMP%] {\n\t\t\tright: 120px;\n\t\t\ttransform: rotate(-5deg);\n\t\t}\n\t}\n\n\t@media screen and (max-width: 575px) {\n\t\tsvg#rocket-smoke[_ngcontent-%COMP%] {\n\t\t\tdisplay: none;\n\t\t\tvisibility: hidden;\n\t\t}\n\t}"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.module */ 3806);
/* harmony import */ var _components_terminal_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/terminal/terminal/terminal.component */ 4172);
/* harmony import */ var _components_terminal_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/terminal/welcome/welcome.component */ 2599);
/* harmony import */ var _components_auth_guard_pages_auth_guard_pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/auth-guard-pages/auth-guard-pages.component */ 9061);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.NoopAnimationsModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_terminal_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_3__.TerminalComponent, _components_terminal_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__.WelcomeComponent, _components_auth_guard_pages_auth_guard_pages_component__WEBPACK_IMPORTED_MODULE_5__.AuthGuardPagesComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.NoopAnimationsModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule] }); })();


/***/ }),

/***/ 9061:
/*!***************************************************************************!*\
  !*** ./src/app/components/auth-guard-pages/auth-guard-pages.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardPagesComponent": () => (/* binding */ AuthGuardPagesComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



const languages = ['mk', 'sr'];
class AuthGuardPagesComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        const url = this.router.url;
        if (url === '/') {
            this.router.navigate(['home']);
        }
        else if (url.startsWith('/#')) {
            this.router.navigate([url.replace('#', '')]);
        }
        else if (url.split('/' + url.slice(1, 3) + '/')[0] == '') {
            const lang = url.slice(1, 3);
            let redirectTo = window.document.location.origin + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseFeUrl + url.slice(1, 3);
            //  if (url.startsWith('/mk') && url.indexOf('#') == -1) {
            if (languages.indexOf(lang) != -1 && url.indexOf('#') == -1) {
                if (!!url.split('/' + lang + '/')[1]) {
                    redirectTo += '#' + url.split('/' + lang + '/')[1];
                }
                console.log('Redirect to:', redirectTo);
                window.document.location.href = redirectTo;
            }
        }
        else {
            console.log('Rarely reachable ELSE');
        }
    }
}
AuthGuardPagesComponent.ɵfac = function AuthGuardPagesComponent_Factory(t) { return new (t || AuthGuardPagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuardPagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthGuardPagesComponent, selectors: [["app-auth-guard-pages"]], decls: 1, vars: 0, template: function AuthGuardPagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["[_nghost-%COMP%] {\n  min-width: 906px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtZ3VhcmQtcGFnZXMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxOZzEzJTIwMjAyMiUyMFByb2plY3RzXFx0ZXNsYVxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXGF1dGgtZ3VhcmQtcGFnZXNcXGF1dGgtZ3VhcmQtcGFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBQTtBQ0NEIiwiZmlsZSI6ImF1dGgtZ3VhcmQtcGFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0bWluLXdpZHRoOiA5MDZweDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIG1pbi13aWR0aDogOTA2cHg7XG59Il19 */"] });


/***/ }),

/***/ 4172:
/*!********************************************************************!*\
  !*** ./src/app/components/terminal/terminal/terminal.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerminalComponent": () => (/* binding */ TerminalComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);





function TerminalComponent_pre_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\t\t\tWe are discovering again that we live in a deeply mysterious world, full of sudden coincidences and synchronistic encounters that seem destined.\t\n\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TerminalComponent_pre_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\t\t\tAs more of us awaken to this mystery, we will create a completely new worldview - redefining the universe as energetic and sacred.\t\n\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TerminalComponent_pre_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\t\t\tWe will discover that everything around us, all matter, consists of and stems from a divine energy that we are beginning to see and understand.\n\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TerminalComponent_pre_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\t\t\tFrom this perspective, we can see that humans have always felt insecure and disconnected from this sacred source, and have tried to take energy by dominating each other. This struggle is responsible for all human conflict.\n\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TerminalComponent_pre_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\t\t\tThe only solution is to cultivate a personal reconnection with the divine, a mystical transformation that fills us with unlimited energy and love, extends our perceptions of beauty, and lifts us into a Higher-Self Awareness.\n\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TerminalComponent_pre_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\t\t\tIn this awareness, we can release our own pattern of controlling, and discover a specific truth, a mission we are here to share that helps evolve humanity toward this new level of reality.\n\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TerminalComponent_pre_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\t\t\tIn pursuit of this mission, we can discover an inner intuition that shows us where to go and what to do, and if we make only positive interpretations, brings a flow of coincidences that opens the doors for our mission to unfold. \n\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TerminalComponent_pre_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\t\t\tWhen enough of us enter this evolutionary flow, always giving energy to the higher-self of everyone we meet, we will build a new culture where our bodies evolve to ever higher levels of energy and perception. \n\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TerminalComponent_pre_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\t\t\tIn this way, we participate in the long journey of evolution from the Big Bang to life's ultimate goal: to energize our bodies, generation by generation until we walk into a heaven we can finally see.\n\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TerminalComponent {
    constructor() {
        this.selection = 1;
        this.play = true;
        this.isOpen = true;
    }
    ngOnInit() {
        this.timer = window.setInterval(() => {
            if (this.play) {
                this.next();
            }
        }, 6000);
    }
    back() {
        if (this.selection > 1)
            this.selection = this.selection - 1;
    }
    next() {
        if (this.selection < 9) {
            this.selection = this.selection + 1;
        }
        else {
            clearInterval(this.timer);
        }
    }
}
TerminalComponent.ɵfac = function TerminalComponent_Factory(t) { return new (t || TerminalComponent)(); };
TerminalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TerminalComponent, selectors: [["app-terminal"]], decls: 29, vars: 11, consts: [[1, "terminal-title"], [1, "card-container"], ["mat-stroked-button", "", "tabindex", "0", 3, "click"], ["aria-hidden", "false", "aria-label", "visibility icon"], ["mat-stroked-button", "", "tabindex", "1", 1, "card-small"], [2, "padding-left", "10px"], ["mat-stroked-button", "", "tabindex", "2", 1, "card-small", 3, "click"], [1, "terminal", 3, "ngSwitch", "mouseover", "mouseout"], [4, "ngSwitchCase"]], template: function TerminalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "The");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Celestine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Insights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TerminalComponent_Template_button_click_8_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TerminalComponent_Template_button_click_16_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "arrow_forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function TerminalComponent_Template_div_mouseover_19_listener() { return ctx.play = false; })("mouseout", function TerminalComponent_Template_div_mouseout_19_listener() { return ctx.play = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TerminalComponent_pre_20_Template, 5, 0, "pre", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TerminalComponent_pre_21_Template, 5, 0, "pre", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TerminalComponent_pre_22_Template, 5, 0, "pre", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TerminalComponent_pre_23_Template, 5, 0, "pre", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TerminalComponent_pre_24_Template, 5, 0, "pre", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TerminalComponent_pre_25_Template, 5, 0, "pre", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TerminalComponent_pre_26_Template, 5, 0, "pre", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TerminalComponent_pre_27_Template, 5, 0, "pre", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TerminalComponent_pre_28_Template, 5, 0, "pre", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.selection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 9);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n  padding-top: 69px;\n}\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n.terminal[_ngcontent-%COMP%]::before {\n  content: \"\u2022\u2022\u2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n  white-space: normal;\n}\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  border-bottom: solid white 1px;\n  width: 42px;\n  margin-bottom: 9px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n.terminal-title[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\n  margin: -12px 0 !important;\n  text-align: center;\n}\n.card-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  height: 50px;\n  flex: 1;\n}\n.card-container[_ngcontent-%COMP%] {\n  width: 80% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxOZzEzJTIwMjAyMiUyMFByb2plY3RzXFx0ZXNsYVxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRlcm1pbmFsXFx0ZXJtaW5hbFxcdGVybWluYWwuY29tcG9uZW50LnNjc3MiLCJ0ZXJtaW5hbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDQyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FERUQ7QUNBQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FER0Q7QUNBQTtFQUNDLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBREdEO0FDQUE7RUFDQyx3RUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBREdEO0FDRkM7RUFDQyw4QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRElGO0FDQUE7OztFQUdDLDBCQUFBO0VBQ0Esa0JBQUE7QURHRDtBQ0FBO0VBQ0MsWUFBQTtFQUVBLE9BQUE7QURFRDtBQ0NBO0VBQ0MscUJBQUE7QURFRCIsImZpbGUiOiJ0ZXJtaW5hbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgbWFyZ2luOiAwIDhweCAxNnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nLXRvcDogNjlweDtcbn1cblxuLnRlcm1pbmFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nLXRvcDogNDVweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYwZjEwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXJtaW5hbDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLigKLigKLigKJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjM2EzYTNhO1xuICBjb2xvcjogI2MyYzNjNDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDE0cHggMDtcbiAgdGV4dC1pbmRlbnQ6IDRweDtcbn1cblxuLnRlcm1pbmFsIHByZSB7XG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhciwgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgTWVubG8sIG1vbm9zcGFjZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcbiAgbWFyZ2luOiAwO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuLnRlcm1pbmFsIHByZSBoMyB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIHdoaXRlIDFweDtcbiAgd2lkdGg6IDQycHg7XG4gIG1hcmdpbi1ib3R0b206IDlweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGVybWluYWwtdGl0bGUgPiBoMSxcbmgyLFxuaDUge1xuICBtYXJnaW46IC0xMnB4IDAgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC1jb250YWluZXIgPiBidXR0b24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZsZXg6IDE7XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbn0iLCI6aG9zdCB7XHJcblx0bWFyZ2luOiAwIDhweCAxNnB4O1xyXG5cdHBhZGRpbmc6IDE2cHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcblx0bGluZS1oZWlnaHQ6IDI0cHg7XHJcblx0cGFkZGluZy10b3A6IDY5cHg7XHJcbn1cclxuLnRlcm1pbmFsIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWF4LXdpZHRoOiA2MDBweDtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0cGFkZGluZy10b3A6IDQ1cHg7XHJcblx0bWFyZ2luLXRvcDogOHB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTYpO1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdG1hcmdpbi1yaWdodDogYXV0bztcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXJtaW5hbDo6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFwyMDIyIFxcMjAyMiBcXDIwMjInO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRoZWlnaHQ6IDRweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XHJcblx0Y29sb3I6ICNjMmMzYzQ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAwO1xyXG5cdHBhZGRpbmc6IDE0cHggMDtcclxuXHR0ZXh0LWluZGVudDogNHB4O1xyXG59XHJcblxyXG4udGVybWluYWwgcHJlIHtcclxuXHRmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsIENvbnNvbGFzLCBMaWJlcmF0aW9uIE1vbm8sIE1lbmxvLCBtb25vc3BhY2U7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xyXG5cdG1hcmdpbjogMDtcclxuXHR3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG5cdGgzIHtcclxuXHRcdGJvcmRlci1ib3R0b206IHNvbGlkIHdoaXRlIDFweDtcclxuXHRcdHdpZHRoOiA0MnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogOXB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG59XHJcblxyXG4udGVybWluYWwtdGl0bGUgPiBoMSxcclxuaDIsXHJcbmg1IHtcclxuXHRtYXJnaW46IC0xMnB4IDAgIWltcG9ydGFudDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciA+IGJ1dHRvbiB7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdC8vIHBhZGRpbmc6IDBweCA1MHB4O1xyXG5cdGZsZXg6IDE7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcblx0d2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('visibility', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('show', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                    opacity: 1
                    // backgroundColor: 'yellow'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                    opacity: 0.69
                    // backgroundColor: 'blue'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('show => hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('2s')]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('hidden => show', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('1s')])
                // transition('hidden => show', [animate('0.5s')])
            ])
        ] } });


/***/ }),

/***/ 2599:
/*!******************************************************************!*\
  !*** ./src/app/components/terminal/welcome/welcome.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeComponent": () => (/* binding */ WelcomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 2, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5348462650197353919$$SRC_APP_COMPONENTS_TERMINAL_WELCOME_WELCOME_COMPONENT_TS_1 = goog.getMsg("PLEASE TRANSLATE THIS");
        i18n_0 = MSG_EXTERNAL_5348462650197353919$$SRC_APP_COMPONENTS_TERMINAL_WELCOME_WELCOME_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\u0421\u0440\u043F\u0441\u043A\u0438 \u043F\u0440\u0435\u0432\u043E\u0434";
    } return [i18n_0]; }, template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);





class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    baseFeUrl: '/base/'
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map