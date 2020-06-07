(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./client/app/app-routing.module.ts":
/*!******************************************!*\
  !*** ./client/app/app-routing.module.ts ***!
  \******************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./client/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./client/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/register-page/register-page.component */ "./client/app/pages/register-page/register-page.component.ts");
/* harmony import */ var _forums_forums_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forums/forums.component */ "./client/app/forums/forums.component.ts");
/* harmony import */ var _my_zone_my_zone_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-zone/my-zone.component */ "./client/app/my-zone/my-zone.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./posts/posts.component */ "./client/app/posts/posts.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/users.component */ "./client/app/users/users.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./statistics/statistics.component */ "./client/app/statistics/statistics.component.ts");
/* harmony import */ var _forums_forums_create_forums_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forums/forums-create/forums-create.component */ "./client/app/forums/forums-create/forums-create.component.ts");
/* harmony import */ var _forums_forums_update_forums_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forums/forums-update/forums-update.component */ "./client/app/forums/forums-update/forums-update.component.ts");
/* harmony import */ var _posts_posts_create_posts_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./posts/posts-create/posts-create.component */ "./client/app/posts/posts-create/posts-create.component.ts");
/* harmony import */ var _posts_posts_update_posts_update_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./posts/posts-update/posts-update.component */ "./client/app/posts/posts-update/posts-update.component.ts");
/* harmony import */ var _meet_place_meet_place_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./meet-place/meet-place.component */ "./client/app/meet-place/meet-place.component.ts");
/* harmony import */ var _meet_place_meet_place_create_meet_place_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./meet-place/meet-place-create/meet-place-create.component */ "./client/app/meet-place/meet-place-create/meet-place-create.component.ts");
/* harmony import */ var _meet_place_meet_place_update_meet_place_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./meet-place/meet-place-update/meet-place-update.component */ "./client/app/meet-place/meet-place-update/meet-place-update.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/auth.guard */ "./client/app/guards/auth.guard.ts");





















const routes = [
    { path: '', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: 'login', component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"] },
    { path: 'register', component: _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_5__["RegisterPageComponent"] },
    { path: 'forums', component: _forums_forums_component__WEBPACK_IMPORTED_MODULE_6__["ForumsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'forums/create', component: _forums_forums_create_forums_create_component__WEBPACK_IMPORTED_MODULE_11__["ForumsCreateComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'forums/update', component: _forums_forums_update_forums_update_component__WEBPACK_IMPORTED_MODULE_12__["ForumsUpdateComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'posts', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__["PostsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'posts/create', component: _posts_posts_create_posts_create_component__WEBPACK_IMPORTED_MODULE_13__["PostsCreateComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'posts/update', component: _posts_posts_update_posts_update_component__WEBPACK_IMPORTED_MODULE_14__["PostsUpdateComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'myZone', component: _my_zone_my_zone_component__WEBPACK_IMPORTED_MODULE_7__["MyZoneComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'statistics', component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_10__["StatisticsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'meetPlaces', component: _meet_place_meet_place_component__WEBPACK_IMPORTED_MODULE_15__["MeetPlaceComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'meetPlaces/create', component: _meet_place_meet_place_create_meet_place_create_component__WEBPACK_IMPORTED_MODULE_16__["MeetPlaceCreateComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'meetPlaces/update', component: _meet_place_meet_place_update_meet_place_update_component__WEBPACK_IMPORTED_MODULE_17__["MeetPlaceUpdateComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/app.component.ts":
/*!*************************************!*\
  !*** ./client/app/app.component.ts ***!
  \*************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "./client/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  font-size: 14px;\r\n  color: #333;\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  margin: 8px 0;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n  margin: -8px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  background-color: #1976d2;\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin: 0 16px;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  margin: 0 16px;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  margin: 32px auto;\r\n  padding: 0 16px;\r\n  max-width: 960px;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\nsvg.material-icons[_ngcontent-%COMP%] {\r\n  height: 24px;\r\n  width: auto;\r\n}\r\n\r\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\r\n  margin-right: 8px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n  fill: #888;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  margin-top: 16px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  border: 1px solid #eee;\r\n  background-color: #fafafa;\r\n  height: 40px;\r\n  width: 200px;\r\n  margin: 0 8px 16px;\r\n  padding: 16px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-transition: all 0.2s ease-in-out;\r\n  transition: all 0.2s ease-in-out;\r\n  line-height: 24px;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\r\n  margin-right: 0;\r\n}\r\n\r\n.card.card-small[_ngcontent-%COMP%] {\r\n  height: 16px;\r\n  width: 168px;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\r\n  cursor: pointer;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\r\n  -webkit-transform: translateY(-3px);\r\n          transform: translateY(-3px);\r\n  box-shadow: 0 4px 17px rgba(black, 0.35);\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n  fill: rgb(105, 103, 103);\r\n}\r\n\r\n.card.highlight-card[_ngcontent-%COMP%] {\r\n  background-color: #1976d2;\r\n  color: white;\r\n  font-weight: 600;\r\n  border: none;\r\n  width: auto;\r\n  min-width: 30%;\r\n  position: relative;\r\n}\r\n\r\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  margin-left: 60px;\r\n}\r\n\r\nsvg#rocket[_ngcontent-%COMP%] {\r\n  width: 80px;\r\n  position: absolute;\r\n  left: -10px;\r\n  top: -24px;\r\n}\r\n\r\nsvg#rocket-smoke[_ngcontent-%COMP%] {\r\n  height: calc(100vh - 95px);\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 180px;\r\n  z-index: -10;\r\n}\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n  color: #1976d2;\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: #125699;\r\n}\r\n\r\n.terminal[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 80%;\r\n  max-width: 600px;\r\n  border-radius: 6px;\r\n  padding-top: 45px;\r\n  margin-top: 8px;\r\n  overflow: hidden;\r\n  background-color: rgb(15, 15, 16);\r\n}\r\n\r\n.terminal[_ngcontent-%COMP%]::before {\r\n  content: \"\\2022 \\2022 \\2022\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 4px;\r\n  background: rgb(58, 58, 58);\r\n  color: #c2c3c4;\r\n  width: 100%;\r\n  font-size: 2rem;\r\n  line-height: 0;\r\n  padding: 14px 0;\r\n  text-indent: 4px;\r\n}\r\n\r\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\r\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\r\n  color: white;\r\n  padding: 0 1rem 1rem;\r\n  margin: 0;\r\n}\r\n\r\n.circle-link[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  width: 40px;\r\n  border-radius: 40px;\r\n  margin: 8px;\r\n  background-color: white;\r\n  border: 1px solid #eeeeee;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  cursor: pointer;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  -webkit-transition: 1s ease-out;\r\n  transition: 1s ease-out;\r\n}\r\n\r\n.circle-link[_ngcontent-%COMP%]:hover {\r\n  -webkit-transform: translateY(-0.25rem);\r\n          transform: translateY(-0.25rem);\r\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  line-height: 20px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.github-star-badge[_ngcontent-%COMP%] {\r\n  color: #24292e;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  font-size: 12px;\r\n  padding: 3px 10px;\r\n  border: 1px solid rgba(27,31,35,.2);\r\n  border-radius: 3px;\r\n  background-image: -webkit-gradient(linear,left top, left bottom,from(#fafbfc),color-stop(90%, #eff3f6));\r\n  background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\r\n  margin-left: 4px;\r\n  font-weight: 600;\r\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\r\n}\r\n\r\n.github-star-badge[_ngcontent-%COMP%]:hover {\r\n  background-image: -webkit-gradient(linear,left top, left bottom,from(#f0f3f6),color-stop(90%, #e6ebf1));\r\n  background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\r\n  border-color: rgba(27,31,35,.35);\r\n  background-position: -.5em;\r\n}\r\n\r\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\n  height: 16px;\r\n  width: 16px;\r\n  margin-right: 4px;\r\n}\r\n\r\nsvg#clouds[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: -160px;\r\n  left: -230px;\r\n  z-index: -10;\r\n  width: 1920px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 767px) {\r\n\r\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\r\n    height: 16px;\r\n    margin: 8px 0;\r\n  }\r\n\r\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    margin-left: 72px;\r\n  }\r\n\r\n  svg#rocket-smoke[_ngcontent-%COMP%] {\r\n    right: 120px;\r\n    -webkit-transform: rotate(-5deg);\r\n            transform: rotate(-5deg);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 575px) {\r\n  svg#rocket-smoke[_ngcontent-%COMP%] {\r\n    display: none;\r\n    visibility: hidden;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwSkFBMEo7RUFDMUosZUFBZTtFQUNmLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQzs7QUFFQTs7Ozs7O0VBTUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQU87VUFBUCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0NBQWdDO0VBQWhDLGdDQUFnQztFQUNoQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0VBQW9FO0VBQ3BFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix3RUFBd0U7RUFDeEUsK0JBQXVCO0VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVDQUErQjtVQUEvQiwrQkFBK0I7RUFDL0IsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQix1R0FBOEQ7RUFBOUQsOERBQThEO0VBQzlELGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0lBQWtJO0FBQ3BJOztBQUVBO0VBQ0UsdUdBQThEO0VBQTlELDhEQUE4RDtFQUM5RCxnQ0FBZ0M7RUFDaEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUdBLHNCQUFzQjs7QUFDdEI7O0VBRUU7O0lBRUUsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJjbGllbnQvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2IHtcclxuICBtYXJnaW46IDhweCAwO1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi50b29sYmFyIHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbWFyZ2luOiAtOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udG9vbGJhciBpbWcge1xyXG4gIG1hcmdpbjogMCAxNnB4O1xyXG59XHJcblxyXG4udG9vbGJhciAjdHdpdHRlci1sb2dvIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiAwIDE2cHg7XHJcbn1cclxuXHJcbi50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAzMnB4IGF1dG87XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIG1heC13aWR0aDogOTYwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5zdmcubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGhlaWdodDogMjRweDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgZmlsbDogIzg4ODtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbjogMCA4cHggMTZweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLXNtYWxsIHtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IDE2OHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKGJsYWNrLCAwLjM1KTtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XHJcbn1cclxuXHJcbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogYXV0bztcclxuICBtaW4td2lkdGg6IDMwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbn1cclxuXHJcbnN2ZyNyb2NrZXQge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtMTBweDtcclxuICB0b3A6IC0yNHB4O1xyXG59XHJcblxyXG5zdmcjcm9ja2V0LXNtb2tlIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxODBweDtcclxuICB6LWluZGV4OiAtMTA7XHJcbn1cclxuXHJcbmEsXHJcbmE6dmlzaXRlZCxcclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICMxOTc2ZDI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogIzEyNTY5OTtcclxufVxyXG5cclxuLnRlcm1pbmFsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBwYWRkaW5nLXRvcDogNDVweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XHJcbn1cclxuXHJcbi50ZXJtaW5hbDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcMjAyMiBcXDIwMjIgXFwyMDIyXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYig1OCwgNTgsIDU4KTtcclxuICBjb2xvcjogI2MyYzNjNDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgcGFkZGluZzogMTRweCAwO1xyXG4gIHRleHQtaW5kZW50OiA0cHg7XHJcbn1cclxuXHJcbi50ZXJtaW5hbCBwcmUge1xyXG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jaXJjbGUtbGluayB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcclxufVxyXG5cclxuLmNpcmNsZS1saW5rOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVyZW0pO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuZm9vdGVyIGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmdpdGh1Yi1zdGFyLWJhZGdlIHtcclxuICBjb2xvcjogIzI0MjkyZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsMzEsMzUsLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZmFmYmZjLCNlZmYzZjYgOTAlKTtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLEFwcGxlIENvbG9yIEVtb2ppLFNlZ29lIFVJIEVtb2ppLFNlZ29lIFVJIFN5bWJvbDtcclxufVxyXG5cclxuLmdpdGh1Yi1zdGFyLWJhZGdlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZjBmM2Y2LCNlNmViZjEgOTAlKTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjcsMzEsMzUsLjM1KTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtLjVlbTtcclxufVxyXG5cclxuLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcblxyXG5zdmcjY2xvdWRzIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAtMTYwcHg7XHJcbiAgbGVmdDogLTIzMHB4O1xyXG4gIHotaW5kZXg6IC0xMDtcclxuICB3aWR0aDogMTkyMHB4O1xyXG59XHJcblxyXG5cclxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHJcbiAgLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSAsXHJcbiAgLnRlcm1pbmFsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcblxyXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcycHg7XHJcbiAgfVxyXG5cclxuICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgIHJpZ2h0OiAxMjBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./client/app/app.module.ts":
/*!**********************************!*\
  !*** ./client/app/app.module.ts ***!
  \**********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nvd3 */ "./node_modules/nvd3/build/nv.d3.js");
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nvd3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ng2_nvd3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-nvd3 */ "./node_modules/ng2-nvd3/__ivy_ngcc__/build/index.js");
/* harmony import */ var ng2_nvd3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_nvd3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./client/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./client/app/navbar/navbar.component.ts");
/* harmony import */ var _forums_forums_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forums/forums.component */ "./client/app/forums/forums.component.ts");
/* harmony import */ var _my_zone_my_zone_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-zone/my-zone.component */ "./client/app/my-zone/my-zone.component.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./client/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./client/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./client/app/app-routing.module.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./posts/posts.component */ "./client/app/posts/posts.component.ts");
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/register-page/register-page.component */ "./client/app/pages/register-page/register-page.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./users/users.component */ "./client/app/users/users.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./statistics/statistics.component */ "./client/app/statistics/statistics.component.ts");
/* harmony import */ var _forums_forums_create_forums_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forums/forums-create/forums-create.component */ "./client/app/forums/forums-create/forums-create.component.ts");
/* harmony import */ var _forums_forums_update_forums_update_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forums/forums-update/forums-update.component */ "./client/app/forums/forums-update/forums-update.component.ts");
/* harmony import */ var _posts_posts_create_posts_create_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./posts/posts-create/posts-create.component */ "./client/app/posts/posts-create/posts-create.component.ts");
/* harmony import */ var _posts_posts_update_posts_update_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./posts/posts-update/posts-update.component */ "./client/app/posts/posts-update/posts-update.component.ts");
/* harmony import */ var _meet_place_meet_place_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./meet-place/meet-place.component */ "./client/app/meet-place/meet-place.component.ts");
/* harmony import */ var _meet_place_meet_place_create_meet_place_create_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./meet-place/meet-place-create/meet-place-create.component */ "./client/app/meet-place/meet-place-create/meet-place-create.component.ts");
/* harmony import */ var _meet_place_meet_place_update_meet_place_update_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./meet-place/meet-place-update/meet-place-update.component */ "./client/app/meet-place/meet-place-update/meet-place-update.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _statistics_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./statistics/pie-chart/pie-chart.component */ "./client/app/statistics/pie-chart/pie-chart.component.ts");
/* harmony import */ var _statistics_discrete_bar_chart_discrete_bar_chart_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./statistics/discrete-bar-chart/discrete-bar-chart.component */ "./client/app/statistics/discrete-bar-chart/discrete-bar-chart.component.ts");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ng2_nvd3__WEBPACK_IMPORTED_MODULE_6__["NvD3Module"],
            _agm_core__WEBPACK_IMPORTED_MODULE_25__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyAZZ9aZlzB6HrnlFffFzRGGTFJBSetevpk'
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
        _forums_forums_component__WEBPACK_IMPORTED_MODULE_9__["ForumsComponent"],
        _my_zone_my_zone_component__WEBPACK_IMPORTED_MODULE_10__["MyZoneComponent"],
        _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__["HomePageComponent"],
        _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_12__["LoginPageComponent"],
        _posts_posts_component__WEBPACK_IMPORTED_MODULE_14__["PostsComponent"],
        _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_15__["RegisterPageComponent"],
        _users_users_component__WEBPACK_IMPORTED_MODULE_16__["UsersComponent"],
        _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_17__["StatisticsComponent"],
        _forums_forums_create_forums_create_component__WEBPACK_IMPORTED_MODULE_18__["ForumsCreateComponent"],
        _forums_forums_update_forums_update_component__WEBPACK_IMPORTED_MODULE_19__["ForumsUpdateComponent"],
        _posts_posts_create_posts_create_component__WEBPACK_IMPORTED_MODULE_20__["PostsCreateComponent"],
        _posts_posts_update_posts_update_component__WEBPACK_IMPORTED_MODULE_21__["PostsUpdateComponent"],
        _meet_place_meet_place_component__WEBPACK_IMPORTED_MODULE_22__["MeetPlaceComponent"],
        _meet_place_meet_place_create_meet_place_create_component__WEBPACK_IMPORTED_MODULE_23__["MeetPlaceCreateComponent"],
        _meet_place_meet_place_update_meet_place_update_component__WEBPACK_IMPORTED_MODULE_24__["MeetPlaceUpdateComponent"],
        _statistics_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_26__["PieChartComponent"],
        _statistics_discrete_bar_chart_discrete_bar_chart_component__WEBPACK_IMPORTED_MODULE_27__["DiscreteBarChartComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ng2_nvd3__WEBPACK_IMPORTED_MODULE_6__["NvD3Module"], _agm_core__WEBPACK_IMPORTED_MODULE_25__["AgmCoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                    _forums_forums_component__WEBPACK_IMPORTED_MODULE_9__["ForumsComponent"],
                    _my_zone_my_zone_component__WEBPACK_IMPORTED_MODULE_10__["MyZoneComponent"],
                    _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__["HomePageComponent"],
                    _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_12__["LoginPageComponent"],
                    _posts_posts_component__WEBPACK_IMPORTED_MODULE_14__["PostsComponent"],
                    _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_15__["RegisterPageComponent"],
                    _users_users_component__WEBPACK_IMPORTED_MODULE_16__["UsersComponent"],
                    _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_17__["StatisticsComponent"],
                    _forums_forums_create_forums_create_component__WEBPACK_IMPORTED_MODULE_18__["ForumsCreateComponent"],
                    _forums_forums_update_forums_update_component__WEBPACK_IMPORTED_MODULE_19__["ForumsUpdateComponent"],
                    _posts_posts_create_posts_create_component__WEBPACK_IMPORTED_MODULE_20__["PostsCreateComponent"],
                    _posts_posts_update_posts_update_component__WEBPACK_IMPORTED_MODULE_21__["PostsUpdateComponent"],
                    _meet_place_meet_place_component__WEBPACK_IMPORTED_MODULE_22__["MeetPlaceComponent"],
                    _meet_place_meet_place_create_meet_place_create_component__WEBPACK_IMPORTED_MODULE_23__["MeetPlaceCreateComponent"],
                    _meet_place_meet_place_update_meet_place_update_component__WEBPACK_IMPORTED_MODULE_24__["MeetPlaceUpdateComponent"],
                    _statistics_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_26__["PieChartComponent"],
                    _statistics_discrete_bar_chart_discrete_bar_chart_component__WEBPACK_IMPORTED_MODULE_27__["DiscreteBarChartComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    ng2_nvd3__WEBPACK_IMPORTED_MODULE_6__["NvD3Module"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_25__["AgmCoreModule"].forRoot({
                        apiKey: 'AIzaSyAZZ9aZlzB6HrnlFffFzRGGTFJBSetevpk'
                    })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/forums/forums-create/forums-create.component.ts":
/*!********************************************************************!*\
  !*** ./client/app/forums/forums-create/forums-create.component.ts ***!
  \********************************************************************/
/*! exports provided: ForumsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumsCreateComponent", function() { return ForumsCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _services_forum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/forum.service */ "./client/app/services/forum.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function ForumsCreateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForumsCreateComponent_div_0_Template_form_ngSubmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _r34.form.valid && ctx_r35.createForum(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "New Forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Forum Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForumsCreateComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.forum.forumName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r31.forum.forumName);
} }
const _c0 = function () { return { color: "red", textAlign: "center" }; };
function ForumsCreateComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Not Logged In! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function ForumsCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " You are not an admin! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class ForumsCreateComponent {
    constructor(auth, forumSer, router, route) {
        this.auth = auth;
        this.forumSer = forumSer;
        this.router = router;
        this.route = route;
        this.forum = {
            forumName: '',
            forumId: ''
        };
    }
    ngOnInit() {
        this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/forums';
    }
    createForum() {
        this.forumSer.createForum(this.forum.forumName).subscribe(data => {
            if (data['message'] === false) {
                // if invalid login, reset the form
                this.forum.forumName = '';
            }
            else {
                // if we get here, there is no error, the return is valid
                // Let's first save the info into local storage for later use. We can parse this back
                // into an object later
                localStorage.setItem('currentForum', JSON.stringify(data));
                // route user to the return URL
                this.router.navigateByUrl(this.returnURL);
            }
        });
    }
}
ForumsCreateComponent.ɵfac = function ForumsCreateComponent_Factory(t) { return new (t || ForumsCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_forum_service__WEBPACK_IMPORTED_MODULE_2__["ForumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ForumsCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForumsCreateComponent, selectors: [["app-forums-create"]], decls: 3, vars: 3, consts: [["class", "form-container", 4, "ngIf"], [4, "ngIf"], [1, "form-container"], ["name", "form", "novalidate", "", 1, "loginForm", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["type", "text", "name", "forumName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "login"], ["routerLink", "/forums", 1, "btn", "login"], [1, "display-4", 3, "ngStyle"]], template: function ForumsCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ForumsCreateComponent_div_0_Template, 16, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForumsCreateComponent_div_1_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForumsCreateComponent_div_2_Template, 4, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn() && ctx.auth.isUserAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn() && !ctx.auth.isUserAdmin());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["[_nghost-%COMP%] {\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n.form-container[_ngcontent-%COMP%] {\r\n  margin: 50px;\r\n  height: 300px;\r\n  width: 350px;\r\n}\r\ninput[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  width:100%;\r\n  border: thin solid lightgrey;\r\n  padding: 8px 4px;\r\n}\r\n.form-group[_ngcontent-%COMP%] {\r\n  padding: 0 1em;\r\n}\r\n.loginForm[_ngcontent-%COMP%] {\r\n  border: thin solid lightgrey;\r\n  height: inherit;\r\n  display: grid;\r\n  grid-template-rows: auto auto auto auto;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: rgb(59, 49, 192); \r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvZm9ydW1zL2ZvcnVtcy1jcmVhdGUvZm9ydW1zLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFVBQVU7RUFDViw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGFBQWE7RUFDYix1Q0FBdUM7QUFDekM7QUFFQTtFQUNFLGtDQUFrQyxFQUFFLFVBQVU7RUFDOUMsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQiIsImZpbGUiOiJjbGllbnQvYXBwL2ZvcnVtcy9mb3J1bXMtY3JlYXRlL2ZvcnVtcy1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiA1MHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG59XHJcbmlucHV0LCBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuaW5wdXQge1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgYm9yZGVyOiB0aGluIHNvbGlkIGxpZ2h0Z3JleTtcclxuICBwYWRkaW5nOiA4cHggNHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuXHJcbi5sb2dpbkZvcm0ge1xyXG4gIGJvcmRlcjogdGhpbiBzb2xpZCBsaWdodGdyZXk7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDQ5LCAxOTIpOyAvKiBHcmVlbiAqL1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForumsCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forums-create',
                templateUrl: './forums-create.component.html',
                styleUrls: ['./forums-create.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services_forum_service__WEBPACK_IMPORTED_MODULE_2__["ForumService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./client/app/forums/forums-update/forums-update.component.ts":
/*!********************************************************************!*\
  !*** ./client/app/forums/forums-update/forums-update.component.ts ***!
  \********************************************************************/
/*! exports provided: ForumsUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumsUpdateComponent", function() { return ForumsUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _services_forum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/forum.service */ "./client/app/services/forum.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function ForumsUpdateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForumsUpdateComponent_div_0_Template_form_ngSubmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _r41.form.valid && ctx_r42.EditForum(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit Forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Forum Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForumsUpdateComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.forum.forumName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Forum Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForumsUpdateComponent_div_0_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.forum.forumId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.forum.forumName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.forum.forumId);
} }
const _c0 = function () { return { color: "red", textAlign: "center" }; };
function ForumsUpdateComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Not Logged In! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function ForumsUpdateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " You're not an admin, can't edit forum! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class ForumsUpdateComponent {
    constructor(auth, forumSer, router, route) {
        this.auth = auth;
        this.forumSer = forumSer;
        this.router = router;
        this.route = route;
        this.forum = {
            forumName: '',
            forumId: ''
        };
    }
    ngOnInit() {
        this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/forums';
        this.forum.forumName = JSON.parse(localStorage['currentForum'])['forumName'];
        console.log(this.forum.forumName);
        this.forum.forumId = JSON.parse(localStorage['currentForum'])['forumId'];
        console.log(this.forum.forumId);
    }
    EditForum() {
        this.forumSer.editForum(this.forum.forumName, this.forum.forumId).subscribe(data => {
            if (data['message'] === false) {
                // if invalid login, reset the form
                this.forum.forumName = '';
                this.forumSer.deactivateForum();
            }
            else {
                // if we get here, there is no error, the return is valid
                // Let's first save the info into local storage for later use. We can parse this back
                // into an object later
                console.log("new currentForum is: " + JSON.stringify(data));
                this.forumSer.deactivateForum();
                // route user to the return URL
                this.router.navigateByUrl(this.returnURL);
            }
        });
    }
}
ForumsUpdateComponent.ɵfac = function ForumsUpdateComponent_Factory(t) { return new (t || ForumsUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_forum_service__WEBPACK_IMPORTED_MODULE_2__["ForumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ForumsUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForumsUpdateComponent, selectors: [["app-forums-update"]], decls: 3, vars: 3, consts: [["class", "form-container", 4, "ngIf"], [4, "ngIf"], [1, "form-container"], ["name", "form", "novalidate", "", 1, "loginForm", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["type", "text", "name", "forumName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "forumId", "required", "", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "login"], ["routerLink", "/forums", 1, "btn", "login"], [1, "display-4", 3, "ngStyle"]], template: function ForumsUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ForumsUpdateComponent_div_0_Template, 20, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForumsUpdateComponent_div_1_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForumsUpdateComponent_div_2_Template, 4, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn() && ctx.auth.isUserAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isUserAdmin());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["[_nghost-%COMP%] {\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n.form-container[_ngcontent-%COMP%] {\r\n  margin: 50px;\r\n  height: 300px;\r\n  width: 350px;\r\n}\r\ninput[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  width:100%;\r\n  border: thin solid lightgrey;\r\n  padding: 8px 4px;\r\n}\r\n.form-group[_ngcontent-%COMP%] {\r\n  padding: 0 1em;\r\n}\r\n.loginForm[_ngcontent-%COMP%] {\r\n  border: thin solid lightgrey;\r\n  height: inherit;\r\n  display: grid;\r\n  grid-template-rows: auto auto auto auto;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: rgb(59, 49, 192); \r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvZm9ydW1zL2ZvcnVtcy11cGRhdGUvZm9ydW1zLXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFVBQVU7RUFDViw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGFBQWE7RUFDYix1Q0FBdUM7QUFDekM7QUFFQTtFQUNFLGtDQUFrQyxFQUFFLFVBQVU7RUFDOUMsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQiIsImZpbGUiOiJjbGllbnQvYXBwL2ZvcnVtcy9mb3J1bXMtdXBkYXRlL2ZvcnVtcy11cGRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiA1MHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG59XHJcbmlucHV0LCBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuaW5wdXQge1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgYm9yZGVyOiB0aGluIHNvbGlkIGxpZ2h0Z3JleTtcclxuICBwYWRkaW5nOiA4cHggNHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuXHJcbi5sb2dpbkZvcm0ge1xyXG4gIGJvcmRlcjogdGhpbiBzb2xpZCBsaWdodGdyZXk7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDQ5LCAxOTIpOyAvKiBHcmVlbiAqL1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForumsUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forums-update',
                templateUrl: './forums-update.component.html',
                styleUrls: ['./forums-update.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services_forum_service__WEBPACK_IMPORTED_MODULE_2__["ForumService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./client/app/forums/forums.component.ts":
/*!***********************************************!*\
  !*** ./client/app/forums/forums.component.ts ***!
  \***********************************************/
/*! exports provided: ForumsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumsComponent", function() { return ForumsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _services_forum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/forum.service */ "./client/app/services/forum.service.ts");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/posts.service */ "./client/app/services/posts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ForumsComponent_div_0_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " New Forum ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { textAlign: "center" }; };
function ForumsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForumsComponent_div_0_button_1_Template, 2, 0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Full Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Forum Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Number Of Posts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Number of Times Watched ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "tbody", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.auth.isUserAdmin());
} }
const _c1 = function () { return { color: "red", textAlign: "center" }; };
function ForumsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Not Logged In! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
class NumOfPosts {
}
class ForumsComponent {
    constructor(auth, forumSer, postsSer, router, route) {
        this.auth = auth;
        this.forumSer = forumSer;
        this.postsSer = postsSer;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.numOfRows = 1;
        this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.postsSer.groupByForumIdAndCount().subscribe(data => {
            this.forumSer.getAllForums().subscribe(forums => {
                forums.forEach(forum => {
                    console.log(data);
                    var numOfPosts = this.getNumOfPosts(forum.forumId, data);
                    this.addRow(forum.forumName, forum.forumId, numOfPosts, forum.numTimesWatched);
                    var currentRow = this.numOfRows;
                    var router = this.router;
                    var forumSer = this.forumSer;
                    //adding listeners for "edit btns"
                    document.getElementById('editBtn_' + currentRow).addEventListener('click', function () {
                        var table = document.getElementById("myTableForums");
                        var rows = table.rows;
                        var forumId = rows[currentRow].cells[1].innerText;
                        console.log(forumId);
                        var forumName = rows[currentRow].cells[0].innerText;
                        console.log(forumName);
                        var forumNumTimesWatched = rows[currentRow].cells[3].innerText;
                        console.log(forumNumTimesWatched);
                        var activeForum = {
                            forumName: forumName,
                            forumId: forumId,
                            numTimesWatched: parseInt(forumNumTimesWatched)
                        };
                        console.log(JSON.stringify(activeForum));
                        forumSer.setActiveForum(activeForum);
                        router.navigate(['/forums/update']);
                    });
                    //adding listeners for "activate btns"
                    document.getElementById('activateBtn_' + currentRow).addEventListener('click', function () {
                        var table = document.getElementById("myTableForums");
                        var rows = table.rows;
                        var forumId = rows[currentRow].cells[1].innerText;
                        console.log(forumId);
                        var forumName = rows[currentRow].cells[0].innerText;
                        console.log(forumName);
                        var forumNumTimesWatched = rows[currentRow].cells[3].innerText;
                        console.log(forumNumTimesWatched);
                        var activeForum = {
                            forumName: forumName,
                            forumId: forumId,
                            numTimesWatched: parseInt(forumNumTimesWatched)
                        };
                        console.log(JSON.stringify(activeForum));
                        forumSer.setActiveForum(activeForum);
                        forumSer.incNumTimesWatched(forumId, forumName).subscribe(data => {
                            if (data['message'] === true) {
                                console.log("incremented");
                                var numTimesWatched = data["numTimesWatched"];
                            }
                            else {
                                console.log("err");
                            }
                        });
                        router.navigate(['/posts']);
                    });
                    this.numOfRows += 1;
                });
            });
        });
    }
    getNumOfPosts(currentForumId, numOfPostsArr) {
        for (var i = 0; i < numOfPostsArr.length; i++) {
            if (numOfPostsArr[i]._id === currentForumId) {
                return numOfPostsArr[i].numOfPosts;
            }
        }
        return 0;
    }
    addRow(forumsName, forumId, numberOfPosts, numTimesWatched) {
        var table = document.getElementById("myTableForums");
        var newRow = table.insertRow(this.numOfRows);
        var newCell_0 = newRow.insertCell(0);
        var newCell_1 = newRow.insertCell(1);
        var newCell_2 = newRow.insertCell(2);
        var newCell_3 = newRow.insertCell(3);
        var newCell_4 = newRow.insertCell(4);
        newCell_0.innerText = forumsName;
        newCell_1.innerText = forumId;
        newCell_2.innerText = numberOfPosts;
        newCell_3.innerText = numTimesWatched;
        var editBtnId = 'editBtn_' + this.numOfRows;
        var activateBtnId = 'activateBtn_' + this.numOfRows;
        var isEnabled = this.auth.isUserAdmin();
        if (isEnabled) {
            var newCell_innerHtml = "<button class='btn btn-primary' id=" + editBtnId + "> Edit Forum </button> " +
                "<button class='btn btn-primary' id=" + activateBtnId + "> Go to Forum </button>";
        }
        else {
            var newCell_innerHtml = "<button class='btn btn-primary' id=" + editBtnId + " disabled> Edit Forum </button> " +
                "<button class='btn btn-primary' id=" + activateBtnId + "> Go to Forum </button>";
        }
        newCell_4.innerHTML = newCell_innerHtml;
    }
}
ForumsComponent.ɵfac = function ForumsComponent_Factory(t) { return new (t || ForumsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_forum_service__WEBPACK_IMPORTED_MODULE_2__["ForumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
ForumsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForumsComponent, selectors: [["app-forums"]], decls: 2, vars: 2, consts: [["class", "myTable rounded-lg", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], [1, "myTable", "rounded-lg", 3, "ngStyle"], ["class", "btn btn-primary", "id", "createForumBtn", "routerLink", "/forums/create", 4, "ngIf"], ["id", "myTableForums", 1, "table", "table-hover", "shadow-lg", "rounded-lg"], [1, "thead-dark"], [1, "width-sm"], ["id", "myTableForumsD"], ["id", "createForumBtn", "routerLink", "/forums/create", 1, "btn", "btn-primary"], [1, "display-4", 3, "ngStyle"]], template: function ForumsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ForumsComponent_div_0_Template, 18, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForumsComponent_div_1_Template, 4, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".myTable[_ngcontent-%COMP%] {\r\n  padding: 2vw;\r\n  margin-top: 2vw;\r\n  margin-bottom: 2vw;\r\n  margin-left: 15vw !important;\r\n  margin-right: 15vw !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvZm9ydW1zL2ZvcnVtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJjbGllbnQvYXBwL2ZvcnVtcy9mb3J1bXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teVRhYmxlIHtcclxuICBwYWRkaW5nOiAydnc7XHJcbiAgbWFyZ2luLXRvcDogMnZ3O1xyXG4gIG1hcmdpbi1ib3R0b206IDJ2dztcclxuICBtYXJnaW4tbGVmdDogMTV2dyAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogMTV2dyAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForumsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forums',
                templateUrl: './forums.component.html',
                styleUrls: ['./forums.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services_forum_service__WEBPACK_IMPORTED_MODULE_2__["ForumService"] }, { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./client/app/guards/auth.guard.ts":
/*!*****************************************!*\
  !*** ./client/app/guards/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        // Check if a 'currentUser' exists in the localStorage object
        // this will return undefined || false if there isn't
        if (localStorage['currentUsr']) {
            // User is logged in, let's let them through
            return true;
        }
        else {
            // user is not logged in, let's route them to the login page.
            // We will import the Router from @angular/router and assign it in the consructor
            // then we route the user to the login page and pass parameters with the returnURL
            // So we can return to the requested page after login.
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./client/app/meet-place/meet-place-create/meet-place-create.component.ts":
/*!********************************************************************************!*\
  !*** ./client/app/meet-place/meet-place-create/meet-place-create.component.ts ***!
  \********************************************************************************/
/*! exports provided: MeetPlaceCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetPlaceCreateComponent", function() { return MeetPlaceCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _services_meet_place_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/meet-place.service */ "./client/app/services/meet-place.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function MeetPlaceCreateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MeetPlaceCreateComponent_div_0_Template_form_ngSubmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86); const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _r84.form.valid && ctx_r85.createMeetPlace(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "New Meet Place");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Meet Place Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MeetPlaceCreateComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.meetPlace.meetPlaceName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Meet Place Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MeetPlaceCreateComponent_div_0_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.meetPlace.meetPlaceType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Meet Place Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MeetPlaceCreateComponent_div_0_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.meetPlace.meetPlaceLocation = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r82.meetPlace.meetPlaceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r82.meetPlace.meetPlaceType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r82.meetPlace.meetPlaceLocation);
} }
const _c0 = function () { return { color: "red", textAlign: "center" }; };
function MeetPlaceCreateComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Not Logged In! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class MeetPlaceCreateComponent {
    constructor(auth, meetPlaceSer, router, route) {
        this.auth = auth;
        this.meetPlaceSer = meetPlaceSer;
        this.router = router;
        this.route = route;
        this.meetPlace = {
            meetPlaceName: '',
            meetPlaceType: '',
            meetPlaceLocation: ''
        };
    }
    ngOnInit() {
        this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/meetPlaces';
    }
    createMeetPlace() {
        this.meetPlaceSer.createMeetPlace(this.meetPlace.meetPlaceName, this.meetPlace.meetPlaceType, this.meetPlace.meetPlaceLocation).subscribe(data => {
            if (data['message'] === false) {
                // if invalid login, reset the form
                this.meetPlace.meetPlaceName = '';
                this.meetPlace.meetPlaceType = '';
                this.meetPlace.meetPlaceLocation = '';
            }
            else {
                localStorage.setItem('currentMeetPlace', JSON.stringify(data));
                // route user to the return URL
                this.router.navigateByUrl(this.returnURL);
            }
        });
    }
}
MeetPlaceCreateComponent.ɵfac = function MeetPlaceCreateComponent_Factory(t) { return new (t || MeetPlaceCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_meet_place_service__WEBPACK_IMPORTED_MODULE_2__["MeetPlaceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
MeetPlaceCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeetPlaceCreateComponent, selectors: [["app-meet-place-create"]], decls: 2, vars: 2, consts: [["class", "form-container", 4, "ngIf"], [4, "ngIf"], [1, "form-container"], ["name", "form", "novalidate", "", 1, "loginForm", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["type", "text", "name", "meetPlaceName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "meetPlaceType", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "meetPlaceLocation", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "login"], ["routerLink", "/meetPlaces", 1, "btn", "login"], [1, "display-4", 3, "ngStyle"]], template: function MeetPlaceCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MeetPlaceCreateComponent_div_0_Template, 24, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MeetPlaceCreateComponent_div_1_Template, 4, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["[_nghost-%COMP%] {\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n.form-container[_ngcontent-%COMP%] {\r\n  margin: 50px;\r\n  width: 350px;\r\n}\r\ninput[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  width:100%;\r\n  border: thin solid lightgrey;\r\n  padding: 8px 4px;\r\n}\r\n.form-group[_ngcontent-%COMP%] {\r\n  padding: 0 1em;\r\n}\r\n.loginForm[_ngcontent-%COMP%] {\r\n  border: thin solid lightgrey;\r\n  height: inherit;\r\n  display: grid;\r\n  grid-template-rows: auto auto auto auto;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: rgb(59, 49, 192); \r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbWVldC1wbGFjZS9tZWV0LXBsYWNlLWNyZWF0ZS9tZWV0LXBsYWNlLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVDQUF1QztBQUN6QztBQUVBO0VBQ0Usa0NBQWtDLEVBQUUsVUFBVTtFQUM5QyxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCIiwiZmlsZSI6ImNsaWVudC9hcHAvbWVldC1wbGFjZS9tZWV0LXBsYWNlLWNyZWF0ZS9tZWV0LXBsYWNlLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICBtYXJnaW46IDUwcHg7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG59XHJcbmlucHV0LCBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuaW5wdXQge1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgYm9yZGVyOiB0aGluIHNvbGlkIGxpZ2h0Z3JleTtcclxuICBwYWRkaW5nOiA4cHggNHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuXHJcbi5sb2dpbkZvcm0ge1xyXG4gIGJvcmRlcjogdGhpbiBzb2xpZCBsaWdodGdyZXk7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDQ5LCAxOTIpOyAvKiBHcmVlbiAqL1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetPlaceCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meet-place-create',
                templateUrl: './meet-place-create.component.html',
                styleUrls: ['./meet-place-create.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services_meet_place_service__WEBPACK_IMPORTED_MODULE_2__["MeetPlaceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./client/app/meet-place/meet-place-update/meet-place-update.component.ts":
/*!********************************************************************************!*\
  !*** ./client/app/meet-place/meet-place-update/meet-place-update.component.ts ***!
  \********************************************************************************/
/*! exports provided: MeetPlaceUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetPlaceUpdateComponent", function() { return MeetPlaceUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _services_meet_place_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/meet-place.service */ "./client/app/services/meet-place.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function MeetPlaceUpdateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MeetPlaceUpdateComponent_div_0_Template_form_ngSubmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _r92.form.valid && ctx_r93.EditMeetPlace(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit Meet Place");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Meet Place Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MeetPlaceUpdateComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r95.meetPlace.meetPlaceName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Meet Place Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MeetPlaceUpdateComponent_div_0_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r96.meetPlace.meetPlaceType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Meet Place Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MeetPlaceUpdateComponent_div_0_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.meetPlace.meetPlaceLocation = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r90.meetPlace.meetPlaceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r90.meetPlace.meetPlaceType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r90.meetPlace.meetPlaceLocation);
} }
const _c0 = function () { return { color: "red", textAlign: "center" }; };
function MeetPlaceUpdateComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Not Logged In! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class MeetPlaceUpdateComponent {
    constructor(auth, meetPlacesSer, router, route) {
        this.auth = auth;
        this.meetPlacesSer = meetPlacesSer;
        this.router = router;
        this.route = route;
        this.meetPlace = {
            meetPlaceName: '',
            meetPlaceType: '',
            meetPlaceLocation: ''
        };
    }
    ngOnInit() {
        this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/meetPlaces';
        this.meetPlace.meetPlaceName = JSON.parse(localStorage['currentMeetPlace'])['meetPlaceName'];
        console.log(this.meetPlace.meetPlaceName);
        this.meetPlace.meetPlaceType = JSON.parse(localStorage['currentMeetPlace'])['meetPlaceType'];
        console.log(this.meetPlace.meetPlaceType);
        this.meetPlace.meetPlaceLocation = JSON.parse(localStorage['currentMeetPlace'])['meetPlaceLocation'];
        console.log(this.meetPlace.meetPlaceLocation);
    }
    EditMeetPlace() {
        this.meetPlacesSer.editMeetPlace(this.meetPlace.meetPlaceName, this.meetPlace.meetPlaceType, this.meetPlace.meetPlaceLocation).subscribe(data => {
            if (data['message'] === false) {
                // if invalid login, reset the form
                this.meetPlace.meetPlaceName = '';
                this.meetPlace.meetPlaceType = '';
                this.meetPlace.meetPlaceLocation = '';
                this.meetPlace.deactivateForum();
            }
            else {
                this.meetPlacesSer.deactivateMeetPlace();
                // route user to the return URL
                this.router.navigateByUrl(this.returnURL);
            }
        });
    }
}
MeetPlaceUpdateComponent.ɵfac = function MeetPlaceUpdateComponent_Factory(t) { return new (t || MeetPlaceUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_meet_place_service__WEBPACK_IMPORTED_MODULE_2__["MeetPlaceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
MeetPlaceUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeetPlaceUpdateComponent, selectors: [["app-meet-place-update"]], decls: 2, vars: 2, consts: [["class", "form-container", 4, "ngIf"], [4, "ngIf"], [1, "form-container"], ["name", "form", "novalidate", "", 1, "loginForm", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["type", "text", "name", "meetPlaceName", "required", "", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "meetPlaceType", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "meetPlaceLocation", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "login"], ["routerLink", "/meetPlaces", 1, "btn", "login"], [1, "display-4", 3, "ngStyle"]], template: function MeetPlaceUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MeetPlaceUpdateComponent_div_0_Template, 24, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MeetPlaceUpdateComponent_div_1_Template, 4, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["[_nghost-%COMP%] {\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n.form-container[_ngcontent-%COMP%] {\r\n  margin: 50px;\r\n  width: 350px;\r\n}\r\ninput[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  width:100%;\r\n  border: thin solid lightgrey;\r\n  padding: 8px 4px;\r\n}\r\n.form-group[_ngcontent-%COMP%] {\r\n  padding: 0 1em;\r\n}\r\n.loginForm[_ngcontent-%COMP%] {\r\n  border: thin solid lightgrey;\r\n  height: inherit;\r\n  display: grid;\r\n  grid-template-rows: auto auto auto auto;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: rgb(59, 49, 192); \r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbWVldC1wbGFjZS9tZWV0LXBsYWNlLXVwZGF0ZS9tZWV0LXBsYWNlLXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVDQUF1QztBQUN6QztBQUVBO0VBQ0Usa0NBQWtDLEVBQUUsVUFBVTtFQUM5QyxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCIiwiZmlsZSI6ImNsaWVudC9hcHAvbWVldC1wbGFjZS9tZWV0LXBsYWNlLXVwZGF0ZS9tZWV0LXBsYWNlLXVwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICBtYXJnaW46IDUwcHg7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG59XHJcbmlucHV0LCBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuaW5wdXQge1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgYm9yZGVyOiB0aGluIHNvbGlkIGxpZ2h0Z3JleTtcclxuICBwYWRkaW5nOiA4cHggNHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuXHJcbi5sb2dpbkZvcm0ge1xyXG4gIGJvcmRlcjogdGhpbiBzb2xpZCBsaWdodGdyZXk7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDQ5LCAxOTIpOyAvKiBHcmVlbiAqL1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetPlaceUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meet-place-update',
                templateUrl: './meet-place-update.component.html',
                styleUrls: ['./meet-place-update.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services_meet_place_service__WEBPACK_IMPORTED_MODULE_2__["MeetPlaceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./client/app/meet-place/meet-place.component.ts":
/*!*******************************************************!*\
  !*** ./client/app/meet-place/meet-place.component.ts ***!
  \*******************************************************/
/*! exports provided: MeetPlaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetPlaceComponent", function() { return MeetPlaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _services_meet_place_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/meet-place.service */ "./client/app/services/meet-place.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");









const _c0 = function () { return { textAlign: "center", width: "350px" }; };
const _c1 = function () { return { color: "red" }; };
function MeetPlaceComponent_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MeetPlaceComponent_div_1_div_12_Template_form_ngSubmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r70.searchMeetPlace(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Meet Place Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MeetPlaceComponent_div_1_div_12_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r72.meetPlace.meetPlaceName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Meet Place Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MeetPlaceComponent_div_1_div_12_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r73.meetPlace.meetPlaceType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Meet Place Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MeetPlaceComponent_div_1_div_12_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r74.meetPlace.meetPlaceLocation = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MeetPlaceComponent_div_1_div_12_Template_button_click_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r75.cancelSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r68.meetPlace.meetPlaceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r68.meetPlace.meetPlaceType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r68.meetPlace.meetPlaceLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r68.errorMessage, "");
} }
const _c2 = function () { return { textAlign: "center" }; };
function MeetPlaceComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " New Meet Place ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MeetPlaceComponent_div_1_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.showSearchFormFunc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Search Meet Places ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MeetPlaceComponent_div_1_div_12_Template, 22, 8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "thead", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Meet Place Mame ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Meet Place Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Meet Place Location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "tbody", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r65.showSearchForm);
} }
function MeetPlaceComponent_div_2_agm_marker_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "agm-marker", 27);
} if (rf & 2) {
    const position_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", position_r79.latitude)("longitude", position_r79.longitude);
} }
function MeetPlaceComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "agm-map", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapClick", function MeetPlaceComponent_div_2_Template_agm_map_mapClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.onChooseLocation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MeetPlaceComponent_div_2_agm_marker_2_Template, 1, 2, "agm-marker", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx_r66.latitude)("longitude", ctx_r66.longitude);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r66.positions);
} }
const _c3 = function () { return { color: "red", textAlign: "center" }; };
function MeetPlaceComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Not Logged In! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
} }
class Position {
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
class MeetPlaceComponent {
    constructor(auth, meetPlaceSer, router, route, http) {
        this.auth = auth;
        this.meetPlaceSer = meetPlaceSer;
        this.router = router;
        this.route = route;
        this.http = http;
        this.positions = [new Position(51.017467, 10.233982)]; // static point for debug
        this.meetPlace = {
            meetPlaceName: '',
            meetPlaceType: '',
            meetPlaceLocation: ''
        };
        this.errorMessage = '';
        // GOOGLE MAPS
        this.latitude = 32.074109;
        this.longitude = 34.782827;
    }
    ngOnInit() {
        this.showSearchForm = false;
        this.numOfRows = 1;
        this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.drawTable();
        this.getPositions();
    }
    getPositions() {
        this.meetPlaceSer.getAllMeetPlaces().subscribe(data => {
            data.forEach(meetPlace => {
                var meetPlaceLocation = meetPlace.meetPlaceLocation;
                console.log("meetPlaceLocation: " + meetPlaceLocation);
                this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURI(meetPlaceLocation) + '&key=AIzaSyCQPe2NpmzkQ5Ox2UNUBPMVzX3ds-psSVQ').subscribe(data => {
                    var latitude = data['results'][0]['geometry']['location']['lat'];
                    var longitude = data['results'][0]['geometry']['location']['lng'];
                    console.log("latitude is: " + latitude);
                    console.log("longitude is: " + longitude);
                    this.positions.push(new Position(latitude, longitude));
                });
            });
            console.log(this.positions);
        });
    }
    drawTable() {
        this.meetPlaceSer.getAllMeetPlaces().subscribe(data => {
            data.forEach(meetPlace => {
                this.addRow(meetPlace.meetPlaceName, meetPlace.meetPlaceType, meetPlace.meetPlaceLocation);
                var currentRow = this.numOfRows;
                var router = this.router;
                var meetPlaceSer = this.meetPlaceSer;
                //adding listeners for "edit btns"
                document.getElementById('editBtn_' + currentRow).addEventListener('click', function () {
                    var table = document.getElementById("myMeetPlacesTable");
                    var rows = table.rows;
                    var meetPlaceName = rows[currentRow].cells[0].innerText;
                    console.log(meetPlaceName);
                    var meetPlaceType = rows[currentRow].cells[1].innerText;
                    console.log(meetPlaceType);
                    var meetPlaceLocation = rows[currentRow].cells[2].innerText;
                    console.log(meetPlaceLocation);
                    var activeMeetPlace = {
                        meetPlaceName: meetPlaceName,
                        meetPlaceType: meetPlaceType,
                        meetPlaceLocation: meetPlaceLocation,
                    };
                    console.log(JSON.stringify(activeMeetPlace));
                    meetPlaceSer.setActiveMeetPlace(activeMeetPlace);
                    router.navigate(['/meetPlaces/update']);
                });
                this.numOfRows += 1;
            });
        });
    }
    searchMeetPlace() {
        if (this.meetPlace.meetPlaceName === '' && this.meetPlace.meetPlaceType === '' && this.meetPlace.meetPlaceLocation === '') {
            this.errorMessage = "All Rows are Empty";
        }
        else {
            this.meetPlaceSer.searchMeetPlace(this.meetPlace.meetPlaceName, this.meetPlace.meetPlaceType, this.meetPlace.meetPlaceLocation).subscribe(data => {
                this.deleteTable();
                this.errorMessage = '';
                data.forEach(meetPlace => {
                    this.addRow(meetPlace.meetPlaceName, meetPlace.meetPlaceType, meetPlace.meetPlaceLocation);
                });
            });
        }
    }
    showSearchFormFunc() {
        this.showSearchForm = !this.showSearchForm;
        if (this.showSearchForm === false) {
            this.errorMessage = "";
        }
    }
    cancelSearch() {
        this.showSearchForm = false;
        this.errorMessage = "";
        this.deleteTable();
        this.drawTable();
    }
    deleteTable() {
        var table = document.getElementById("myMeetPlacesTable");
        while (table.rows.length > 1) {
            table.deleteRow(-1);
        }
        this.numOfRows = 1;
    }
    addRow(meetPlaceName, meetPlaceType, meetPlaceLocation) {
        var table = document.getElementById("myMeetPlacesTable");
        var newRow = table.insertRow(this.numOfRows);
        var newCell_0 = newRow.insertCell(0);
        var newCell_1 = newRow.insertCell(1);
        var newCell_2 = newRow.insertCell(2);
        var newCell_3 = newRow.insertCell(3);
        newCell_0.innerText = meetPlaceName;
        newCell_1.innerText = meetPlaceType;
        newCell_2.innerText = meetPlaceLocation;
        var editBtnId = 'editBtn_' + this.numOfRows;
        var newCell_innerHtml = "<button class='btn btn-primary' id=" + editBtnId + "> Edit Meet Place </button> ";
        newCell_3.innerHTML = newCell_innerHtml;
    }
    onChooseLocation(event) {
        this.latitude = event.coords.lat;
        this.longitude = event.coords.lng;
    }
}
MeetPlaceComponent.ɵfac = function MeetPlaceComponent_Factory(t) { return new (t || MeetPlaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_meet_place_service__WEBPACK_IMPORTED_MODULE_2__["MeetPlaceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
MeetPlaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeetPlaceComponent, selectors: [["app-meet-place"]], decls: 4, vars: 3, consts: [[1, "row"], ["class", "col-sm-9", 4, "ngIf"], ["class", "col-sm-3", "id", "mapDiv", 4, "ngIf"], [4, "ngIf"], [1, "col-sm-9"], [1, "myTable", "rounded-lg", 3, "ngStyle"], ["id", "createMeetPlaceBtn", "routerLink", "/meetPlaces/create", 1, "btn", "btn-primary"], ["id", "openSearchMeetPlacesBtn", 1, "btn", "btn-primary", 3, "click"], [1, "col-sm-4", "offset-sm-4"], ["id", "searchForm", 3, "ngStyle", 4, "ngIf"], ["id", "myMeetPlacesTable", 1, "table", "table-hover", "shadow-lg", "rounded-lg"], [1, "thead-dark"], [1, "width-sm"], ["id", "myTableForumsD"], ["id", "searchForm", 3, "ngStyle"], ["name", "form", "novalidate", "", 1, "loginForm", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["type", "text", "name", "meetPlaceName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "meetPlaceType", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "meetPlaceLocation", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngStyle"], ["type", "submit", 1, "btn", "btn-primary"], [1, "btn", "btn-primary", 3, "click"], ["id", "mapDiv", 1, "col-sm-3"], ["id", "agmMap", 3, "latitude", "longitude", "mapClick"], [3, "latitude", "longitude", 4, "ngFor", "ngForOf"], [3, "latitude", "longitude"], [1, "display-4", 3, "ngStyle"]], template: function MeetPlaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MeetPlaceComponent_div_1_Template, 27, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MeetPlaceComponent_div_2_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MeetPlaceComponent_div_3_Template, 4, 2, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmMarker"]], styles: [".myTable[_ngcontent-%COMP%] {\r\n  padding: 2vw;\r\n  margin-top: 2vw;\r\n  margin-bottom: 2vw;\r\n  margin-left: 15vw !important;\r\n}\r\n\r\n#searchForm[_ngcontent-%COMP%] {\r\n  border: thin solid lightgrey !important;\r\n  margin-left: 40px;\r\n  padding: 20px;\r\n}\r\n\r\n#agmMap[_ngcontent-%COMP%] {\r\n  height: 700px !important;\r\n  width: 400px !important;\r\n}\r\n\r\n#mapDiv[_ngcontent-%COMP%] {\r\n  margin-top: 12vw;\r\n  margin-right: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbWVldC1wbGFjZS9tZWV0LXBsYWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQiIsImZpbGUiOiJjbGllbnQvYXBwL21lZXQtcGxhY2UvbWVldC1wbGFjZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15VGFibGUge1xyXG4gIHBhZGRpbmc6IDJ2dztcclxuICBtYXJnaW4tdG9wOiAydnc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnZ3O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXZ3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNzZWFyY2hGb3JtIHtcclxuICBib3JkZXI6IHRoaW4gc29saWQgbGlnaHRncmV5ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuI2FnbU1hcCB7XHJcbiAgaGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jbWFwRGl2IHtcclxuICBtYXJnaW4tdG9wOiAxMnZ3O1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetPlaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meet-place',
                templateUrl: './meet-place.component.html',
                styleUrls: ['./meet-place.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services_meet_place_service__WEBPACK_IMPORTED_MODULE_2__["MeetPlaceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./client/app/my-zone/my-zone.component.ts":
/*!*************************************************!*\
  !*** ./client/app/my-zone/my-zone.component.ts ***!
  \*************************************************/
/*! exports provided: MyZoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyZoneComponent", function() { return MyZoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function () { return { textAlign: "center" }; };
function MyZoneComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " My Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " My Full Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " My Profession: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " My City: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "aside");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Don\u2019t take your Profile for granted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Make the most of your portfolio of qualifications and credentials by posting them on your profile. However, keep your information job-related and not personal, private information. With a few exceptions, most writers are private people. Thus, if you value your privacy and have no intentions of giving it up.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "canvas", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Your browser does not support the HTML5 canvas tag.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.myDetails.myEmail, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.myDetails.myFullName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.myDetails.myProfession, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.myDetails.myCity, " ");
} }
const _c1 = function () { return { color: "red", textAlign: "center" }; };
function MyZoneComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Not Logged In! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
class MyZoneComponent {
    constructor(auth) {
        this.auth = auth;
        this.myDetails = {
            myEmail: this.auth.getUserEmail(),
            myFullName: this.auth.getUserFullName(),
            myProfession: this.auth.getUserProfession(),
            myCity: this.auth.getUserCity()
        };
    }
    ngOnInit() {
    }
}
MyZoneComponent.ɵfac = function MyZoneComponent_Factory(t) { return new (t || MyZoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
MyZoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyZoneComponent, selectors: [["app-my-zone"]], decls: 2, vars: 2, consts: [["id", "myZone", "xmlns", "http://www.w3.org/1999/html", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], ["id", "myZone", "xmlns", "http://www.w3.org/1999/html", 3, "ngStyle"], [1, "display-4"], [1, "details"], ["id", "myCanvas", "width", "200", "height", "100", 2, "border", "1px solid deepskyblue"], [1, "display-4", 3, "ngStyle"]], template: function MyZoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MyZoneComponent_div_0_Template, 31, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyZoneComponent_div_1_Template, 4, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["@import url(//db.onlinewebfonts.com/c/460e8698563db983434874f8f371a7d1?family=Museo);\r\n\r\n#myZone[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n}\r\n\r\n.details[_ngcontent-%COMP%] {\r\n  font-family: Museo;\r\n  font-size: large;\r\n}\r\n\r\naside[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n  padding-left: .5rem;\r\n  margin-left: .5rem;\r\n  float: right;\r\n  box-shadow: inset 5px 0 5px -5px #29627e;\r\n  font-style: italic;\r\n  color: #29627e;\r\n}\r\n\r\naside[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n  margin: .5rem;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-family: 'Fira Sans', sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbXktem9uZS9teS16b25lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0ZBQW9GOztBQUVwRjtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDIiwiZmlsZSI6ImNsaWVudC9hcHAvbXktem9uZS9teS16b25lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS9jLzQ2MGU4Njk4NTYzZGI5ODM0MzQ4NzRmOGYzNzFhN2QxP2ZhbWlseT1NdXNlbyk7XHJcblxyXG4jbXlab25lIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5kZXRhaWxzIHtcclxuICBmb250LWZhbWlseTogTXVzZW87XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuYXNpZGUge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcclxuICBtYXJnaW4tbGVmdDogLjVyZW07XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDVweCAwIDVweCAtNXB4ICMyOTYyN2U7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGNvbG9yOiAjMjk2MjdlO1xyXG59XHJcblxyXG5hc2lkZSA+IHAge1xyXG4gIG1hcmdpbjogLjVyZW07XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyZoneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-zone',
                templateUrl: './my-zone.component.html',
                styleUrls: ['./my-zone.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/navbar/navbar.component.ts":
/*!***********************************************!*\
  !*** ./client/app/navbar/navbar.component.ts ***!
  \***********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function NavbarComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_29_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.auth.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome, ", ctx_r4.auth.getUserEmail(), " ");
} }
class NavbarComponent {
    constructor(auth) {
        this.auth = auth;
        this.primaryDisplayBorderTitle = 'FriendLancer';
        this.primaryDisplayBorderContent = 'Collaboration Made Easy';
        this.showHomePageEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showForumsEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showMyZoneEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], outputs: { showHomePageEmitter: "showHomePageEmitter", showForumsEmitter: "showForumsEmitter", showMyZoneEmitter: "showMyZoneEmitter" }, decls: 41, vars: 7, consts: [["id", "navbarDiv"], [1, "navbar", "navbar-expand-sm", "navbar-brown", "fixed-top"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapsibleNavbar", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["target", "_blank", "href", "https://www.booked.net/weather/tel-aviv-18414"], ["src", "https://w.bookcdn.com/weather/picture/1_18414_1_1_137AE9_160_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=124&domid=w209&anc_id=39185", "alt", "booked.net"], ["id", "collapsibleNavbar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/forums", 1, "nav-link"], ["routerLink", "/statistics", 1, "nav-link"], ["routerLink", "/meetPlaces", 1, "nav-link"], ["href", "https://www.facebook.com/FriendLancer-102130368083020", 1, "nav-link"], ["routerLink", "/myZone", 1, "nav-link"], ["class", "nav-item", 4, "ngIf"], [4, "ngIf"], ["id", "primary_jumbotron_display", 1, "jumbotron", "text-center"], ["id", "primaryDisplayBorder"], ["id", "primaryDisplayContent"], ["routerLink", "/login", 1, "nav-link"], ["routerLink", "/register", 1, "nav-link"], ["routerLink", "/users", 1, "nav-link"], [1, "nav-link", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Forums");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Meet Places");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "MyZone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NavbarComponent_li_26_Template, 3, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NavbarComponent_li_27_Template, 3, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, NavbarComponent_li_28_Template, 3, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, NavbarComponent_li_29_Template, 3, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, NavbarComponent_li_30_Template, 2, 1, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.primaryDisplayBorderTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.primaryDisplayBorderContent);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["@import url(//db.onlinewebfonts.com/c/460e8698563db983434874f8f371a7d1?family=Museo);\r\n\r\n.jumbotron[_ngcontent-%COMP%] {\r\n  height: 50vh;\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  box-shadow: 0 8px 6px -6px black;\r\n}\r\n\r\n#primary_jumbotron_display[_ngcontent-%COMP%] {\r\n  background-image: url('FriendLancer_banner.jpg');\r\n  font-family: Museo;\r\n  font-size: x-large;\r\n  background-size: cover;\r\n  align-content: center;\r\n  color: saddlebrown;\r\n  margin-bottom: 0;\r\n}\r\n\r\n#primaryDisplayContent[_ngcontent-%COMP%] {\r\n  font-size: 7ex;\r\n}\r\n\r\n#navbarDiv[_ngcontent-%COMP%]{\r\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.25);\r\n}\r\n\r\n.navbar-brown[_ngcontent-%COMP%] {\r\n  background-color: saddlebrown !important;\r\n  box-shadow: 0 8px 6px -6px black;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  box-shadow: 0 8px 6px -6px black;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%] {\r\n  font-family: Museo;\r\n  font-size: medium;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n  -webkit-transition: all 0.3s ease;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: silver;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: saddlebrown;\r\n  letter-spacing: 1.3px;\r\n  background-image: -webkit-gradient(linear, left top, right top, from(sandybrown), to(rosybrown));\r\n  background-image: linear-gradient(to right, sandybrown, rosybrown);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9GQUFvRjs7QUFFcEY7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUd2QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnREFBcUU7RUFDckUsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBR0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usd0NBQXdDO0VBR3hDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUdFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUNBQXlCO0VBQXpCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0dBQWtFO0VBQWxFLGtFQUFrRTtBQUNwRSIsImZpbGUiOiJjbGllbnQvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKC8vZGIub25saW5ld2ViZm9udHMuY29tL2MvNDYwZTg2OTg1NjNkYjk4MzQzNDg3NGY4ZjM3MWE3ZDE/ZmFtaWx5PU11c2VvKTtcclxuXHJcbi5qdW1ib3Ryb24ge1xyXG4gIGhlaWdodDogNTB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjaztcclxuICAtbW96LWJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IGJsYWNrO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IGJsYWNrO1xyXG59XHJcblxyXG4jcHJpbWFyeV9qdW1ib3Ryb25fZGlzcGxheSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdjbGllbnQvYXNzZXRzL2ltYWdlcy9GcmllbmRMYW5jZXJfYmFubmVyLmpwZycpO1xyXG4gIGZvbnQtZmFtaWx5OiBNdXNlbztcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IHNhZGRsZWJyb3duO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbiNwcmltYXJ5RGlzcGxheUNvbnRlbnQge1xyXG4gIGZvbnQtc2l6ZTogN2V4O1xyXG59XHJcblxyXG4jbmF2YmFyRGl2e1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwwLjI1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsMC4yNSk7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwwLjI1KTtcclxufVxyXG5cclxuLm5hdmJhci1icm93biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2FkZGxlYnJvd24gIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IGJsYWNrO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjaztcclxuICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjaztcclxufVxyXG5cclxuLm5hdmJhci1uYXYge1xyXG4gIGZvbnQtZmFtaWx5OiBNdXNlbztcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG5cclxuLm5hdmJhci1uYXYgPiBsaSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLm5hdmJhci1uYXYgYSB7XHJcbiAgY29sb3I6IHNpbHZlcjtcclxufVxyXG5cclxuLm5hdmJhci1uYXYgYTpob3ZlciB7XHJcbiAgY29sb3I6IHNhZGRsZWJyb3duO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxLjNweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHNhbmR5YnJvd24sIHJvc3licm93bik7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, { showHomePageEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], showForumsEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], showMyZoneEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./client/app/pages/home-page/home-page.component.ts":
/*!***********************************************************!*\
  !*** ./client/app/pages/home-page/home-page.component.ts ***!
  \***********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function () { return { textAlign: "center" }; };
class HomePageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 25, vars: 6, consts: [[3, "ngStyle"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/rb0G0Uw-2Q8", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], [1, "newspaper", 3, "ngStyle"], [1, "transition"], ["href", "mailto:someone@example.com"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " How to meet new people? Watch me! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Listen, Young Freelancer! A Freelancer's Guide To Protection From Frauds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Freelancing is an awesome way of life. That is not because it helps you gain some extra income. Once well-established, it may even help you make a living. You work according to your own schedule at home, even without leaving the bed. You describe your income rates per task. You have the chance of testing your skills that you cannot during your regular working hours. It helps you build your self confidence and fight stress. As this easily whets your appetite, you register to a freelancing site such as freelancer.com and build a profile. You even obtain a couple of certificates and start bidding for projects. However, after a time as a fresh freelancer, you begin to feel upset, and later even frustrated. That is because, the seniors who already have established their businesses here take almost every good project. The clients are overwhelmed by their profiles including a great set of level three certificates and a horde of damn-good reviews accompanied by five stars. The remaining jobs are either taken by other freelancers, or offer too little income for too much work. No need to mention about disencouraging job posts with \u201CUS freelancers only\u201D, or \u201CNo Indians, please\u201D in the title. And then you receive a message from a client whose project you have just bidden. Gosh! Could it be your first assignment? Could it be the moment that helps you change the history? You dream of gaining income and buying more certificates, and obtaining a horde of damn-good reviews with five stars. You immediately reply the message. However, the client behaves differently than you expect. Days later, you are much more exhausted than you ever have felt. You have been abused and thrown away like a tissue. This was a swindler, and simply used your hope for gaining extra money. You realize that you have made yourself a slave for a so-called client; just as the slave owners once forced people to work on plantations and sold the crops to make money, this swindler used your appetite for money like a whiplash to sell your work. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Freelancer, Join us and meet people with the same interest like yours!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Posted by: Inbar-Nitzan Corporation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contact information: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Inbar-Nitzan@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["canvas[_ngcontent-%COMP%] { background-color: #cccccc;}\r\n\r\nh3[_ngcontent-%COMP%] {text-shadow: 0 0 3px blue; }\r\n\r\n.newspaper[_ngcontent-%COMP%] {\r\n  -webkit-column-count: 3;\r\n     -moz-column-count: 3;\r\n          column-count: 3;\r\n  -webkit-column-gap: 40px;\r\n     -moz-column-gap: 40px;\r\n          column-gap: 40px;\r\n  -webkit-column-rule: 1px solid lightblue;\r\n     -moz-column-rule: 1px solid lightblue;\r\n          column-rule: 1px solid lightblue;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] { -webkit-column-span: all; -moz-column-span: all; column-span: all;}\r\n\r\n.transition[_ngcontent-%COMP%]\r\n{\r\n  width: 100px;\r\n  height: 180px;\r\n  background: #cccccc;\r\n  border-radius: 10px 30px;\r\n  -webkit-transition: width 2s;\r\n  transition: width 2s;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]:hover {\r\n  width: 1500px;\r\n  font-family: Bitstream Vera Serif Bold;\r\n}\r\n\r\n@font-face {\r\n  font-family: Bitstream Vera Serif Bold;\r\n  src: url('https://mdn.mozillademos.org/files/2468/VeraSeBd.ttf');\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMseUJBQXlCLENBQUM7O0FBRW5DLElBQUkseUJBQXlCLEVBQUU7O0FBRy9CO0VBQ0UsdUJBQWU7S0FBZixvQkFBZTtVQUFmLGVBQWU7RUFDZix3QkFBZ0I7S0FBaEIscUJBQWdCO1VBQWhCLGdCQUFnQjtFQUNoQix3Q0FBZ0M7S0FBaEMscUNBQWdDO1VBQWhDLGdDQUFnQztBQUNsQzs7QUFFQSxLQUFLLHdCQUFnQixFQUFoQixxQkFBZ0IsRUFBaEIsZ0JBQWdCLENBQUM7O0FBR3RCOztFQUVFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4Qiw0QkFBb0I7RUFBcEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxnRUFBZ0U7RUFDaEUsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImNsaWVudC9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFzIHsgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzt9XHJcblxyXG5oMyB7dGV4dC1zaGFkb3c6IDAgMCAzcHggYmx1ZTsgfVxyXG5cclxuXHJcbi5uZXdzcGFwZXIge1xyXG4gIGNvbHVtbi1jb3VudDogMztcclxuICBjb2x1bW4tZ2FwOiA0MHB4O1xyXG4gIGNvbHVtbi1ydWxlOiAxcHggc29saWQgbGlnaHRibHVlO1xyXG59XHJcblxyXG5oMiB7IGNvbHVtbi1zcGFuOiBhbGw7fVxyXG5cclxuXHJcbi50cmFuc2l0aW9uXHJcbntcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxODBweDtcclxuICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMzBweDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAycztcclxufVxyXG5cclxuZGl2OmhvdmVyIHtcclxuICB3aWR0aDogMTUwMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBCaXRzdHJlYW0gVmVyYSBTZXJpZiBCb2xkO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogQml0c3RyZWFtIFZlcmEgU2VyaWYgQm9sZDtcclxuICBzcmM6IHVybCgnaHR0cHM6Ly9tZG4ubW96aWxsYWRlbW9zLm9yZy9maWxlcy8yNDY4L1ZlcmFTZUJkLnR0ZicpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./client/app/pages/login-page/login-page.component.ts":
/*!*************************************************************!*\
  !*** ./client/app/pages/login-page/login-page.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function () { return { color: "red", textAlign: "center" }; };
class LoginPageComponent {
    constructor(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.errorMessage = "";
        this.credentials = {
            email: '',
            pwd: ''
        };
    }
    ngOnInit() {
        this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    login() {
        // We checked for validation in HTML so our credentials should not be blank.
        this.auth.login(this.credentials.email, this.credentials.pwd).subscribe(data => {
            if (data['message'] === false) {
                // if invalid login, reset the form
                this.credentials.email = '';
                this.credentials.pwd = '';
                this.errorMessage = "User or Password are Incorrect!";
            }
            else {
                // if we get here, there is no error, the return is valid
                // Let's first save the info into local storage for later use. We can parse this back
                // into an object later
                localStorage.setItem('currentUsr', JSON.stringify(data));
                // route user to the return URL
                this.router.navigateByUrl(this.returnURL);
            }
        });
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 20, vars: 5, consts: [[1, "form-container"], ["name", "form", "novalidate", "", 1, "loginForm", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["type", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "pwd", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngStyle"], ["type", "submit", 1, "btn", "login"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r12.form.valid && ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "User Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_9_listener($event) { return ctx.credentials.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_13_listener($event) { return ctx.credentials.pwd = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.pwd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.errorMessage, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["[_nghost-%COMP%] {\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n.form-container[_ngcontent-%COMP%] {\r\n  margin: 50px;\r\n  height: 300px;\r\n  width: 350px;\r\n}\r\ninput[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  width:100%;\r\n  border: thin solid lightgrey;\r\n  padding: 8px 4px;\r\n}\r\n.form-group[_ngcontent-%COMP%] {\r\n  padding: 0 1em;\r\n}\r\n.loginForm[_ngcontent-%COMP%] {\r\n  border: thin solid lightgrey;\r\n  height: inherit;\r\n  display: grid;\r\n  grid-template-rows: auto auto auto auto;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: rgb(59, 49, 192); \r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvcGFnZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVDQUF1QztBQUN6QztBQUVBO0VBQ0Usa0NBQWtDLEVBQUUsVUFBVTtFQUM5QyxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCIiwiZmlsZSI6ImNsaWVudC9hcHAvcGFnZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIG1hcmdpbjogNTBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiAzNTBweDtcclxufVxyXG5pbnB1dCwgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmlucHV0IHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGJvcmRlcjogdGhpbiBzb2xpZCBsaWdodGdyZXk7XHJcbiAgcGFkZGluZzogOHB4IDRweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIHBhZGRpbmc6IDAgMWVtO1xyXG59XHJcblxyXG4ubG9naW5Gb3JtIHtcclxuICBib3JkZXI6IHRoaW4gc29saWQgbGlnaHRncmV5O1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0bztcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCA0OSwgMTkyKTsgLyogR3JlZW4gKi9cclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./client/app/pages/register-page/register-page.component.ts":
/*!*******************************************************************!*\
  !*** ./client/app/pages/register-page/register-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function () { return { color: "red", textAlign: "center" }; };
class RegisterPageComponent {
    constructor(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.errorMessage = '';
        this.credentials = {
            email: '',
            pwd: '',
            fullName: '',
            city: '',
            profession: '',
        };
    }
    ngOnInit() {
        this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    register() {
        if (this.credentials.fullName === "" || this.credentials.email === "" || this.credentials.pwd === "" || this.credentials.profession === "" || this.credentials.city === "") {
            this.initCredentialsToNull();
            this.errorMessage = "One Field or More is Empty!";
        }
        else if (!this.credentials.email.includes('@')) {
            this.initCredentialsToNull();
            this.errorMessage = "Invalid Email";
        }
        else {
            this.auth.register(this.credentials.email, this.credentials.pwd, this.credentials.fullName, this.credentials.city, this.credentials.profession).subscribe(data => {
                if (data['message'] === false) {
                    // if invalid login, reset the form
                    this.initCredentialsToNull();
                    this.errorMessage = "User Already Exists!";
                }
                else {
                    // if we get here, there is no error, the return is valid
                    // Let's first save the info into local storage for later use. We can parse this back
                    // into an object later
                    localStorage.setItem('currentUsr', JSON.stringify(data));
                    // route user to the return URL
                    this.router.navigateByUrl(this.returnURL);
                }
            });
        }
    }
    initCredentialsToNull() {
        this.credentials.email = '';
        this.credentials.pwd = '';
        this.credentials.fullName = '';
        this.credentials.city = '';
        this.credentials.profession = '';
    }
}
RegisterPageComponent.ɵfac = function RegisterPageComponent_Factory(t) { return new (t || RegisterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
RegisterPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterPageComponent, selectors: [["app-register-page"]], decls: 32, vars: 8, consts: [[1, "form-container"], ["name", "form", "novalidate", "", 1, "registrationForm", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["type", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "fullName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "city", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "profession", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "pwd", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngStyle"], ["type", "submit", 1, "btn", "register"]], template: function RegisterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterPageComponent_Template_form_ngSubmit_1_listener($event) { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "User Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPageComponent_Template_input_ngModelChange_9_listener($event) { return ctx.credentials.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPageComponent_Template_input_ngModelChange_13_listener($event) { return ctx.credentials.fullName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPageComponent_Template_input_ngModelChange_17_listener($event) { return ctx.credentials.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Profession");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPageComponent_Template_input_ngModelChange_21_listener($event) { return ctx.credentials.profession = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPageComponent_Template_input_ngModelChange_25_listener($event) { return ctx.credentials.pwd = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.profession);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.pwd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.errorMessage, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["[_nghost-%COMP%] {\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n.form-container[_ngcontent-%COMP%] {\r\n  margin: 50px;\r\n  height: 300px;\r\n  width: 350px;\r\n}\r\ninput[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n.form-group[_ngcontent-%COMP%] {\r\n  padding: 0 1em;\r\n}\r\n.registrationForm[_ngcontent-%COMP%] {\r\n  height: inherit;\r\n  display: grid;\r\n  grid-template-rows: auto auto auto auto;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: rgb(59, 49, 192); \r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvcGFnZXMvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYix1Q0FBdUM7QUFDekM7QUFFQTtFQUNFLGtDQUFrQyxFQUFFLFVBQVU7RUFDOUMsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQiIsImZpbGUiOiJjbGllbnQvYXBwL3BhZ2VzL3JlZ2lzdGVyLXBhZ2UvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICBtYXJnaW46IDUwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICB3aWR0aDogMzUwcHg7XHJcbn1cclxuaW5wdXQsIGxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIHBhZGRpbmc6IDAgMWVtO1xyXG59XHJcblxyXG4ucmVnaXN0cmF0aW9uRm9ybSB7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDQ5LCAxOTIpOyAvKiBHcmVlbiAqL1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register-page',
                templateUrl: './register-page.component.html',
                styleUrls: ['./register-page.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./client/app/posts/posts-create/posts-create.component.ts":
/*!*****************************************************************!*\
  !*** ./client/app/posts/posts-create/posts-create.component.ts ***!
  \*****************************************************************/
/*! exports provided: PostsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsCreateComponent", function() { return PostsCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _services_forum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/forum.service */ "./client/app/services/forum.service.ts");
/* harmony import */ var _services_meet_place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/meet-place.service */ "./client/app/services/meet-place.service.ts");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/posts.service */ "./client/app/services/posts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









const _c0 = function () { return { color: "red" }; };
function PostsCreateComponent_div_0_label_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " With Suggestion! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function PostsCreateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PostsCreateComponent_div_0_Template_form_ngSubmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _r48.form.valid && ctx_r50.createPost(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "New Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Post Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostsCreateComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.post.postTitle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Post Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "textarea", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostsCreateComponent_div_0_Template_textarea_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.post.postSubject = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Forum Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostsCreateComponent_div_0_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.post.forumName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Forum Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostsCreateComponent_div_0_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.post.forumId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Post Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PostsCreateComponent_div_0_label_25_Template, 2, 2, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostsCreateComponent_div_0_Template_select_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.post.postLocation = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r46.post.postTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r46.post.postSubject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r46.post.forumName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r46.post.forumId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.withSuggestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r46.post.postLocation);
} }
const _c1 = function () { return { color: "red", textAlign: "center" }; };
function PostsCreateComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Not Logged In! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
class PostsCreateComponent {
    constructor(auth, forumSer, meetPlaceSer, postsSer, router, route) {
        this.auth = auth;
        this.forumSer = forumSer;
        this.meetPlaceSer = meetPlaceSer;
        this.postsSer = postsSer;
        this.router = router;
        this.route = route;
        this.post = {
            postTitle: '',
            postId: '',
            postSubject: '',
            forumId: '',
            forumName: '',
            postLocation: '',
            postParticipants: new Array(),
        };
    }
    ngOnInit() {
        this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/posts';
        this.post.forumName = this.forumSer.getActiveForum()['forumName'];
        this.post.forumId = this.forumSer.getActiveForum()['forumId'];
        this.post.postParticipants.push(this.auth.getUserEmail());
        this.withSuggestion = false;
        this.initPostLocationSelect();
        this.postsSer.getAllPosts().subscribe(posts => {
            var currentUser = this.auth.getUserEmail();
            var favoriteLocations = Array();
            var favoriteLocationsCountPerUser = Array();
            posts.forEach(post => {
                var postParticipants = post.postParticipants;
                postParticipants.forEach(participant => {
                    if (participant === currentUser) {
                        //the location already exists in favoriteLocations array
                        var index = favoriteLocations.indexOf(post.postLocation);
                        if (index >= 0) {
                            favoriteLocationsCountPerUser[index]++;
                        }
                        //the location doesn't exist in favoriteLocations array
                        else {
                            favoriteLocations.push(post.postLocation);
                            favoriteLocationsCountPerUser.push(1);
                        }
                    }
                });
            });
            if (favoriteLocations.length > 0) {
                var index = 0;
                var max = favoriteLocationsCountPerUser[0];
                for (var i = 0; i < favoriteLocationsCountPerUser.length; i++) {
                    if (favoriteLocationsCountPerUser[i] > max) {
                        max = favoriteLocationsCountPerUser[i];
                        index = i;
                    }
                }
                this.post.postLocation = favoriteLocations[index];
                this.withSuggestion = true;
            }
        });
    }
    createPost() {
        var select = document.getElementById("selectPostLocation");
        this.post.postLocation = select.options[select.selectedIndex].value;
        this.postsSer.createPost(this.post.postTitle, this.post.postSubject, this.post.forumId, this.post.forumName, this.post.postLocation, this.post.postParticipants).subscribe(data => {
            if (data['message'] === false) {
                // if invalid login, reset the form
                this.post.postTitle = '';
                this.post.postId = '';
                this.post.postLocation = '';
                this.post.postParticipants = '';
                this.post.postSubject = '';
            }
            else {
                // if we get here, there is no error, the return is valid
                // Let's first save the info into local storage for later use. We can parse this back
                // into an object later
                localStorage.setItem('currentPost', JSON.stringify(data));
                // route user to the return URL
                this.router.navigateByUrl(this.returnURL);
            }
        });
        this.postsSer.sendPostToFacebook(this.post.postTitle, this.post.postSubject, this.post.forumName, this.post.postLocation).subscribe(data => {
            console.log(data);
        });
    }
    initPostLocationSelect() {
        this.meetPlaceSer.getAllMeetPlaces().subscribe(data => {
            data.forEach(meetPlace => {
                var meetPlaceName = meetPlace.meetPlaceName;
                var meetPlaceLocation = meetPlace.meetPlaceLocation;
                var newOption = meetPlaceName + " (" + meetPlaceLocation + ")";
                var select = document.getElementById("selectPostLocation");
                select.options.add(new Option(newOption, meetPlaceName));
            });
        });
    }
}
PostsCreateComponent.ɵfac = function PostsCreateComponent_Factory(t) { return new (t || PostsCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_forum_service__WEBPACK_IMPORTED_MODULE_2__["ForumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_meet_place_service__WEBPACK_IMPORTED_MODULE_3__["MeetPlaceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
PostsCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostsCreateComponent, selectors: [["app-posts-create"]], decls: 2, vars: 2, consts: [["class", "form-container", 4, "ngIf"], [4, "ngIf"], [1, "form-container"], ["name", "form", "novalidate", "", 1, "loginForm", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["type", "text", "name", "postTitle", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["cols", "40", "rows", "5", "name", "postSubject", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "forumName", "required", "", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "forumId", "required", "", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngStyle", 4, "ngIf"], ["id", "selectPostLocation", "name", "postLocation", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "login"], [3, "ngStyle"], [1, "display-4", 3, "ngStyle"]], template: function PostsCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostsCreateComponent_div_0_Template, 30, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostsCreateComponent_div_1_Template, 4, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], styles: ["[_nghost-%COMP%] {\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n.form-container[_ngcontent-%COMP%] {\r\n  margin: 50px;\r\n  width: 400px;\r\n}\r\ninput[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  width:100%;\r\n  border: thin solid lightgrey;\r\n  padding: 8px 4px;\r\n}\r\n.form-group[_ngcontent-%COMP%] {\r\n  padding: 0 1em;\r\n}\r\n.loginForm[_ngcontent-%COMP%] {\r\n  border: thin solid lightgrey;\r\n  height: inherit;\r\n  display: grid;\r\n  grid-template-rows: auto auto auto auto;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: rgb(59, 49, 192); \r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\n#selectPostLocation[_ngcontent-%COMP%] {\r\n  width: 350px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvcG9zdHMvcG9zdHMtY3JlYXRlL3Bvc3RzLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVDQUF1QztBQUN6QztBQUVBO0VBQ0Usa0NBQWtDLEVBQUUsVUFBVTtFQUM5QyxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoiY2xpZW50L2FwcC9wb3N0cy9wb3N0cy1jcmVhdGUvcG9zdHMtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIG1hcmdpbjogNTBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbn1cclxuaW5wdXQsIGxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBib3JkZXI6IHRoaW4gc29saWQgbGlnaHRncmV5O1xyXG4gIHBhZGRpbmc6IDhweCA0cHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBwYWRkaW5nOiAwIDFlbTtcclxufVxyXG5cclxuLmxvZ2luRm9ybSB7XHJcbiAgYm9yZGVyOiB0aGluIHNvbGlkIGxpZ2h0Z3JleTtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwgNDksIDE5Mik7IC8qIEdyZWVuICovXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4jc2VsZWN0UG9zdExvY2F0aW9uIHtcclxuICB3aWR0aDogMzUwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-posts-create',
                templateUrl: './posts-create.component.html',
                styleUrls: ['./posts-create.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services_forum_service__WEBPACK_IMPORTED_MODULE_2__["ForumService"] }, { type: _services_meet_place_service__WEBPACK_IMPORTED_MODULE_3__["MeetPlaceService"] }, { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./client/app/posts/posts-update/posts-update.component.ts":
/*!*****************************************************************!*\
  !*** ./client/app/posts/posts-update/posts-update.component.ts ***!
  \*****************************************************************/
/*! exports provided: PostsUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsUpdateComponent", function() { return PostsUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "./client/app/services/posts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_meet_place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/meet-place.service */ "./client/app/services/meet-place.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function PostsUpdateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PostsUpdateComponent_div_0_Template_form_ngSubmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _r59.form.valid && ctx_r60.EditPost(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit Forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Post Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostsUpdateComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.post.postTitle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Post Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "textarea", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostsUpdateComponent_div_0_Template_textarea_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.post.postSubject = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Post Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostsUpdateComponent_div_0_Template_select_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.post.postLocation = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r57.post.postTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r57.post.postSubject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r57.post.postLocation);
} }
const _c0 = function () { return { color: "red", textAlign: "center" }; };
function PostsUpdateComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Not Logged In! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class PostsUpdateComponent {
    constructor(auth, postSer, router, route, meetPlaceSer) {
        this.auth = auth;
        this.postSer = postSer;
        this.router = router;
        this.route = route;
        this.meetPlaceSer = meetPlaceSer;
        this.post = {
            postTitle: '',
            postSubject: '',
            postId: '',
            forumName: '',
            forumId: '',
            postLocation: '',
            postParticipants: new Array()
        };
    }
    ngOnInit() {
        this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/posts';
        this.post = this.postSer.getActivePost();
        this.initPostLocationSelect();
    }
    EditPost() {
        var select = document.getElementById("selectPostLocation");
        this.post.postLocation = select.options[select.selectedIndex].value;
        this.postSer.editPost(this.post.postTitle, this.post.postSubject, this.post.postId, this.post.forumId, this.post.forumName, this.post.postLocation, this.post.postParticipants).subscribe(data => {
            if (data['message'] === false) {
                // if invalid login, reset the form
                this.post.postTitle = '';
                this.post.postSubject = '';
                this.post.postLocation = '';
                this.postSer.deactivatePost();
            }
            else {
                this.postSer.deactivatePost();
                this.router.navigateByUrl(this.returnURL);
            }
        });
    }
    initPostLocationSelect() {
        this.meetPlaceSer.getAllMeetPlaces().subscribe(data => {
            data.forEach(meetPlace => {
                var meetPlaceName = meetPlace.meetPlaceName;
                var meetPlaceLocation = meetPlace.meetPlaceLocation;
                var newOption = meetPlaceName + " (" + meetPlaceLocation + ")";
                var select = document.getElementById("selectPostLocation");
                select.options.add(new Option(newOption, meetPlaceName));
            });
        });
    }
}
PostsUpdateComponent.ɵfac = function PostsUpdateComponent_Factory(t) { return new (t || PostsUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_meet_place_service__WEBPACK_IMPORTED_MODULE_4__["MeetPlaceService"])); };
PostsUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostsUpdateComponent, selectors: [["app-posts-update"]], decls: 2, vars: 2, consts: [["class", "form-container", 4, "ngIf"], [4, "ngIf"], [1, "form-container"], ["name", "form", "novalidate", "", 1, "loginForm", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["type", "text", "name", "postTitle", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["cols", "40", "rows", "5", "name", "postSubject", "required", "", 3, "ngModel", "ngModelChange"], ["id", "selectPostLocation", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "login"], ["routerLink", "/posts", 1, "btn", "login"], [1, "display-4", 3, "ngStyle"]], template: function PostsUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostsUpdateComponent_div_0_Template, 24, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostsUpdateComponent_div_1_Template, 4, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], styles: ["[_nghost-%COMP%] {\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n.form-container[_ngcontent-%COMP%] {\r\n  margin: 50px;\r\n  width: 400px;\r\n}\r\ninput[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  width:100%;\r\n  border: thin solid lightgrey;\r\n  padding: 8px 4px;\r\n}\r\n.form-group[_ngcontent-%COMP%] {\r\n  padding: 0 1em;\r\n}\r\n.loginForm[_ngcontent-%COMP%] {\r\n  border: thin solid lightgrey;\r\n  height: inherit;\r\n  display: grid;\r\n  grid-template-rows: auto auto auto auto;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: rgb(59, 49, 192); \r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvcG9zdHMvcG9zdHMtdXBkYXRlL3Bvc3RzLXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVDQUF1QztBQUN6QztBQUVBO0VBQ0Usa0NBQWtDLEVBQUUsVUFBVTtFQUM5QyxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCIiwiZmlsZSI6ImNsaWVudC9hcHAvcG9zdHMvcG9zdHMtdXBkYXRlL3Bvc3RzLXVwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICBtYXJnaW46IDUwcHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG59XHJcbmlucHV0LCBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuaW5wdXQge1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgYm9yZGVyOiB0aGluIHNvbGlkIGxpZ2h0Z3JleTtcclxuICBwYWRkaW5nOiA4cHggNHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuXHJcbi5sb2dpbkZvcm0ge1xyXG4gIGJvcmRlcjogdGhpbiBzb2xpZCBsaWdodGdyZXk7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDQ5LCAxOTIpOyAvKiBHcmVlbiAqL1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-posts-update',
                templateUrl: './posts-update.component.html',
                styleUrls: ['./posts-update.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_meet_place_service__WEBPACK_IMPORTED_MODULE_4__["MeetPlaceService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/posts/posts.component.ts":
/*!*********************************************!*\
  !*** ./client/app/posts/posts.component.ts ***!
  \*********************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/posts.service */ "./client/app/services/posts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







const _c0 = function () { return { textAlign: "center", width: "350px" }; };
const _c1 = function () { return { color: "red" }; };
function PostsComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PostsComponent_div_0_div_19_Template_form_ngSubmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.searchPost(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Post Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostsComponent_div_0_div_19_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.post.postTitle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Post Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostsComponent_div_0_div_19_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.post.postId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Post Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostsComponent_div_0_div_19_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.post.postLocation = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostsComponent_div_0_div_19_Template_button_click_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.cancelSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.post.postTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.post.postId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.post.postLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.errorMessage, "");
} }
const _c2 = function () { return { textAlign: "center" }; };
function PostsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " New Post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Back to Forums ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostsComponent_div_0_Template_button_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.showSearchFormFunc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Search Posts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PostsComponent_div_0_div_19_Template, 22, 8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "thead", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Post Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Post Subject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Post Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Forum Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Post Location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Post Participants ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "tbody", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Current Forum: ", ctx_r15.currentForumName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.showSearchForm);
} }
const _c3 = function () { return { color: "red", textAlign: "center" }; };
function PostsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Not Logged In! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
} }
class PostsComponent {
    constructor(auth, postSer, router, route) {
        this.auth = auth;
        this.postSer = postSer;
        this.router = router;
        this.route = route;
        this.post = {
            postId: '',
            postTitle: '',
            postLocation: '',
            forumName: '',
        };
        this.errorMessage = '';
    }
    ngOnInit() {
        this.self = this;
        this.showSearchForm = false;
        this.numOfRows = 1;
        this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/';
        if (localStorage['currentForum']) {
            this.isCurrentForumExists = true;
            var forumName = JSON.parse(localStorage['currentForum'])['forumName'];
            this.currentForumName = forumName;
            this.post.forumName = forumName;
        }
        else {
            this.isCurrentForumExists = false;
            this.router.navigate(['/forums']);
        }
        this.drawTable();
    }
    searchPost() {
        if (this.post.postTitle === '' && this.post.postId === '' && this.post.postLocation === '') {
            this.errorMessage = "All Rows are Empty";
        }
        else {
            this.postSer.searchPost(this.post.postTitle, this.post.postId, this.post.postLocation, this.post.forumName).subscribe(data => {
                this.deleteTable();
                this.errorMessage = '';
                data.forEach(post => {
                    this.addRow(post.postTitle, post.postSubject, post.postId, post.forumName, post.postLocation, post.postParticipants);
                });
            });
        }
    }
    showSearchFormFunc() {
        this.showSearchForm = !this.showSearchForm;
        if (this.showSearchForm === false) {
            this.errorMessage = "";
        }
    }
    cancelSearch() {
        this.showSearchForm = false;
        this.errorMessage = "";
        this.deleteTable();
        this.drawTable();
    }
    drawTable() {
        var forumId = JSON.parse(localStorage['currentForum'])['forumId'];
        this.postSer.getAllPostsByForumId(forumId).subscribe(data => {
            data.forEach(post => {
                this.addRow(post.postTitle, post.postSubject, post.postId, post.forumName, post.postLocation, post.postParticipants);
                var currentRow = this.numOfRows;
                var router = this.router;
                var postSer = this.postSer;
                var turnStringToArrayAndAddUser = this.turnStringToArrayAndAddUser;
                var authSer = this.auth;
                var that = this;
                document.getElementById('editBtn_' + currentRow).addEventListener('click', function () {
                    var table = document.getElementById("myPostsTable");
                    var rows = table.rows;
                    var postTitle = rows[currentRow].cells[0].innerText;
                    console.log(postTitle);
                    var postSubject = rows[currentRow].cells[1].innerText;
                    console.log(postSubject);
                    var postId = rows[currentRow].cells[2].innerText;
                    console.log(postId);
                    var forumName = rows[currentRow].cells[3].innerText;
                    console.log(forumName);
                    var postLocation = rows[currentRow].cells[4].innerText;
                    console.log(postLocation);
                    var postParticipantsAsString = rows[currentRow].cells[5].innerText;
                    var postParticipants = turnStringToArrayAndAddUser(postParticipantsAsString, "");
                    console.log(postParticipants);
                    var activePost = {
                        postTitle: postTitle,
                        postSubject: postSubject,
                        postId: postId,
                        forumName: forumName,
                        forumId: forumId,
                        postLocation: postLocation,
                        postParticipants: postParticipants
                    };
                    console.log(activePost);
                    postSer.setActivePost(activePost);
                    router.navigate(['/posts/update']);
                });
                document.getElementById('joinBtn_' + currentRow).addEventListener('click', function () {
                    var table = document.getElementById("myPostsTable");
                    var rows = table.rows;
                    var postId = rows[currentRow].cells[2].innerText;
                    console.log(postId);
                    var newUser = authSer.getUserEmail();
                    postSer.getPostById(postId).subscribe(data => {
                        var participants = data.postParticipants;
                        if (participants.indexOf(newUser) === -1) {
                            data.postParticipants.push(newUser);
                            postSer.editPost(data.postTitle, data.postSubject, data.postId, data.forumId, data.forumName, data.postLocation, data.postParticipants).subscribe(data => {
                                postSer.setActivePost(data);
                                rows[currentRow].cells[5].innerText = data.postParticipants.join("\n");
                            });
                        }
                    });
                });
                document.getElementById('deleteBtn_' + currentRow).addEventListener('click', function () {
                    var table = document.getElementById("myPostsTable");
                    var rows = table.rows;
                    var postId = rows[currentRow].cells[2].innerText;
                    console.log(postId);
                    postSer.deletePost(postId).subscribe(data => {
                        that.deleteTable();
                        that.drawTable();
                    });
                });
                this.numOfRows += 1;
            });
        });
    }
    turnStringToArrayAndAddUser(postParticipantsAsString, newUser) {
        var array = new Array();
        if (newUser === "") {
            console.log("split: " + postParticipantsAsString.split(","));
            return postParticipantsAsString.split(",");
        }
        else {
            array = postParticipantsAsString.split(",");
            array.push(newUser);
        }
    }
    addRow(postTitle, postSubject, postId, forumName, postLocation, postParticipants) {
        var table = document.getElementById("myPostsTable");
        var newRow = table.insertRow(this.numOfRows);
        var newCell_0 = newRow.insertCell(0);
        var newCell_1 = newRow.insertCell(1);
        var newCell_2 = newRow.insertCell(2);
        var newCell_3 = newRow.insertCell(3);
        var newCell_4 = newRow.insertCell(4);
        var newCell_5 = newRow.insertCell(5);
        var newCell_6 = newRow.insertCell(6);
        newCell_0.innerText = postTitle;
        newCell_1.innerText = postSubject;
        newCell_2.innerText = postId;
        newCell_3.innerText = forumName;
        newCell_4.innerText = postLocation;
        newCell_5.innerText = postParticipants.join("\n");
        var editBtnId = 'editBtn_' + this.numOfRows;
        var joinBtnId = 'joinBtn_' + this.numOfRows;
        var deleteBtnId = 'deleteBtn_' + this.numOfRows;
        var isEnabled = this.auth.isUserAdmin();
        if (isEnabled) {
            var newCell_innerHtml = "<button class='btn btn-primary' id=" + editBtnId + "> Edit Post </button> </br>" +
                "<button class='btn btn-primary' id=" + joinBtnId + "> Join Meeting! </button>" +
                "<button class='btn btn-primary' id=" + deleteBtnId + "> Delete Post </button>";
        }
        else {
            var newCell_innerHtml = "<button class='btn btn-primary' id=" + editBtnId + " disabled> Edit Post </button> </br>" +
                "<button class='btn btn-primary' id=" + joinBtnId + "> Join Meeting! </button>" +
                "<button class='btn btn-primary' id=" + deleteBtnId + " disabled> Delete Post </button>";
        }
        newCell_6.innerHTML = newCell_innerHtml;
    }
    deleteTable() {
        var table = document.getElementById("myPostsTable");
        while (table.rows.length > 1) {
            table.deleteRow(-1);
        }
        this.numOfRows = 1;
    }
}
PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
PostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostsComponent, selectors: [["app-posts"]], decls: 2, vars: 2, consts: [["class", "myTable rounded-lg", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], [1, "myTable", "rounded-lg", 3, "ngStyle"], [1, "display-3"], ["id", "createPostBtn", "routerLink", "/posts/create", 1, "btn", "btn-primary"], ["id", "returnToForumsBtn", "routerLink", "/forums", 1, "btn", "btn-primary"], ["id", "openSearchPostBtn", 1, "btn", "btn-primary", 3, "click"], [1, "row"], [1, "col-sm-4", "offset-sm-4"], ["id", "searchForm", 3, "ngStyle", 4, "ngIf"], ["id", "myPostsTable", 1, "table", "table-hover", "shadow-lg", "rounded-lg"], [1, "thead-dark"], [1, "width-sm"], ["id", "myTablePostsD"], ["id", "searchForm", 3, "ngStyle"], ["name", "form", "novalidate", "", 1, "loginForm", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["type", "text", "name", "postTitle", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "postId", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "postLocation", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngStyle"], ["type", "submit", 1, "btn", "btn-primary"], [1, "btn", "btn-primary", 3, "click"], [1, "display-4", 3, "ngStyle"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostsComponent_div_0_Template, 40, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostsComponent_div_1_Template, 4, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".myTable[_ngcontent-%COMP%] {\r\n  padding: 2vw;\r\n  margin-top: 2vw;\r\n  margin-bottom: 2vw;\r\n  margin-left: 15vw !important;\r\n  margin-right: 15vw !important;\r\n}\r\n\r\n#searchForm[_ngcontent-%COMP%] {\r\n  border: thin solid lightgrey !important;\r\n  margin-left: 40px;\r\n  padding: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZiIsImZpbGUiOiJjbGllbnQvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlUYWJsZSB7XHJcbiAgcGFkZGluZzogMnZ3O1xyXG4gIG1hcmdpbi10b3A6IDJ2dztcclxuICBtYXJnaW4tYm90dG9tOiAydnc7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1dncgIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1dncgIWltcG9ydGFudDtcclxufVxyXG5cclxuI3NlYXJjaEZvcm0ge1xyXG4gIGJvcmRlcjogdGhpbiBzb2xpZCBsaWdodGdyZXkgIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-posts',
                templateUrl: './posts.component.html',
                styleUrls: ['./posts.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./client/app/services/auth.service.ts":
/*!*********************************************!*\
  !*** ./client/app/services/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class Users {
}
class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(email, pwd) {
        return this.http.post('http://localhost:3000/api/users/login', {
            email: email,
            password: pwd
        });
    }
    register(email, pwd, fullName, city, profession) {
        return this.http.post('http://localhost:3000/api/users', {
            email: email,
            password: pwd,
            fullName: fullName,
            city: city,
            profession: profession
        });
    }
    deleteUser(userEmail, password) {
        this.http.post('http://localhost:3000/api/users/deleteUser', {
            email: userEmail,
            password: password
        });
        this.logout();
    }
    isLoggedIn() {
        return !!localStorage['currentUsr'];
    }
    logout() {
        localStorage['currentUsr'] = '';
    }
    getUserEmail() {
        if (localStorage['currentUsr']) {
            return JSON.parse(localStorage['currentUsr'])['email'];
        }
        else {
            return '';
        }
    }
    getUserFullName() {
        if (localStorage['currentUsr']) {
            return JSON.parse(localStorage['currentUsr'])['fullName'];
        }
        else {
            return '';
        }
    }
    getUserCity() {
        if (localStorage['currentUsr']) {
            return JSON.parse(localStorage['currentUsr'])['city'];
        }
        else {
            return '';
        }
    }
    getUserProfession() {
        if (localStorage['currentUsr']) {
            return JSON.parse(localStorage['currentUsr'])['profession'];
        }
        else {
            return '';
        }
    }
    getAllUsers() {
        return this.http.get('http://localhost:3000/api/users');
    }
    isUserAdmin() {
        if (this.isLoggedIn())
            return JSON.parse(localStorage['currentUsr'])['role'] === "admin";
        else
            return false;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./client/app/services/forum.service.ts":
/*!**********************************************!*\
  !*** ./client/app/services/forum.service.ts ***!
  \**********************************************/
/*! exports provided: ForumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumService", function() { return ForumService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class Forum {
}
class ForumService {
    constructor(http) {
        this.http = http;
    }
    createForum(forumName) {
        return this.http.post('http://localhost:3000/api/forums', {
            forumName: forumName,
            forumId: this.generateId(),
            numTimesWatched: 0,
        });
    }
    editForum(forumName, forumId) {
        return this.http.post('http://localhost:3000/api/forums/' + forumId, {
            forumId: forumId,
            forumName: forumName,
        });
    }
    incNumTimesWatched(forumId, forumName) {
        return this.http.post('http://localhost:3000/api/forums/incNumTimesWatched', {
            forumId: forumId,
            forumName: forumName
        });
    }
    getAllForums() {
        return this.http.get('http://localhost:3000/api/forums');
    }
    getForumById(forumId) {
        return this.http.get('http://localhost:3000/api/forums/' + forumId);
    }
    generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
    setActiveForum(forum) {
        localStorage.setItem('currentForum', JSON.stringify(forum));
    }
    deactivateForum() {
        localStorage['currentForum'] = '';
    }
    getActiveForum() {
        return JSON.parse(localStorage['currentForum']);
    }
}
ForumService.ɵfac = function ForumService_Factory(t) { return new (t || ForumService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ForumService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ForumService, factory: ForumService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForumService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./client/app/services/meet-place.service.ts":
/*!***************************************************!*\
  !*** ./client/app/services/meet-place.service.ts ***!
  \***************************************************/
/*! exports provided: MeetPlaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetPlaceService", function() { return MeetPlaceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class MeetPlace {
}
class MeetPlaceService {
    constructor(http) {
        this.http = http;
    }
    createMeetPlace(meetPlaceName, meetPlaceType, meetPlaceLocation) {
        return this.http.post('http://localhost:3000/api/meetPlaces', {
            meetPlaceName: meetPlaceName,
            meetPlaceType: meetPlaceType,
            meetPlaceLocation: meetPlaceLocation,
        });
    }
    editMeetPlace(meetPlaceName, meetPlaceType, meetPlaceLocation) {
        return this.http.post('http://localhost:3000/api/meetPlaces/' + meetPlaceName, {
            meetPlaceName: meetPlaceName,
            meetPlaceType: meetPlaceType,
            meetPlaceLocation: meetPlaceLocation,
        });
    }
    getAllMeetPlaces() {
        return this.http.get('http://localhost:3000/api/meetPlaces');
    }
    getMeetPlaceByName(meetPlaceName) {
        return this.http.get('http://localhost:3000/api/meetPlaces/' + meetPlaceName);
    }
    setActiveMeetPlace(meetPlace) {
        localStorage.setItem('currentMeetPlace', JSON.stringify(meetPlace));
    }
    deactivateMeetPlace() {
        localStorage['currentMeetPlace'] = '';
    }
    getActiveMeetPlace() {
        return JSON.parse(localStorage['currentMeetPlace']);
    }
    searchMeetPlace(meetPlaceName, meetPlaceType, meetPlaceLocation) {
        var query = {};
        if (meetPlaceName != '' && meetPlaceType != '' && meetPlaceLocation != '') {
            query = {
                meetPlaceName: meetPlaceName,
                meetPlaceType: meetPlaceType,
                meetPlaceLocation: meetPlaceLocation,
            };
        }
        else if (meetPlaceName != '' && meetPlaceType != '') {
            query = {
                meetPlaceName: meetPlaceName,
                meetPlaceType: meetPlaceType,
            };
        }
        else if (meetPlaceName != '' && meetPlaceLocation != '') {
            query = {
                meetPlaceName: meetPlaceName,
                meetPlaceLocation: meetPlaceLocation,
            };
        }
        else if (meetPlaceType != '' && meetPlaceLocation != '') {
            query = {
                meetPlaceType: meetPlaceType,
                meetPlaceLocation: meetPlaceLocation,
            };
        }
        else if (meetPlaceType != '') {
            query = {
                meetPlaceType: meetPlaceType,
            };
        }
        else if (meetPlaceLocation != '') {
            query = {
                meetPlaceLocation: meetPlaceLocation,
            };
        }
        else if (meetPlaceName != '') {
            query = {
                meetPlaceName: meetPlaceName,
            };
        }
        return this.http.post('http://localhost:3000/api/meetPlaces/searchMeetPlace', query);
    }
}
MeetPlaceService.ɵfac = function MeetPlaceService_Factory(t) { return new (t || MeetPlaceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MeetPlaceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MeetPlaceService, factory: MeetPlaceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetPlaceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./client/app/services/posts.service.ts":
/*!**********************************************!*\
  !*** ./client/app/services/posts.service.ts ***!
  \**********************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class Post {
}
class NumOfPosts {
}
class PostsService {
    constructor(http) {
        this.http = http;
        this.facebookPageAccessToken = "EAACwl16xoDsBACXRmYIcIYmmySAViHTtwaGquIYcVZC9m8Nte8pVywcwbsXCEZBB8shZCZCPFHJ6ZCsZAFlxI6rRNNCEuCc4CIerZCb7rGimS46BFqMRRbf8VADjHj2AlFo48istZAOBDaTvAcBz4f4hvqy1ZCokYax9GsrfVVpGOZAX5u5DEYDU6Y";
        this.facebookPageId = "102130368083020";
    }
    createPost(postTitle, postSubject, forumId, forumName, postLocation, postParticipants) {
        return this.http.post('http://localhost:3000/api/posts', {
            postTitle: postTitle,
            postSubject: postSubject,
            postLocation: postLocation,
            postId: this.generateId(),
            forumId: forumId,
            forumName: forumName,
            postParticipants: postParticipants
        });
    }
    sendPostToFacebook(postTitle, postSubject, forumName, postLocation) {
        var url = "https://graph.facebook.com/" + this.facebookPageId + "/feed?access_token=" + this.facebookPageAccessToken;
        var newPostString = "A new post has been created! | " +
            "Post Title: " + postTitle + " | " +
            "Post Subject: " + postSubject + " | " +
            "Forum Name: " + forumName + " | " +
            "Post Location: " + postLocation;
        return this.http.post(url, {
            message: newPostString
        });
    }
    editPost(postTitle, postSubject, postId, forumId, forumName, postLocation, postParticipants) {
        return this.http.post('http://localhost:3000/api/posts/' + postId, {
            postId: postId,
            postTitle: postTitle,
            postSubject: postSubject,
            forumId: forumId,
            forumName: forumName,
            postLocation: postLocation,
            postParticipants: postParticipants
        });
    }
    getAllPostsByForumId(forumId) {
        return this.http.post('http://localhost:3000/api/posts/forums', {
            forumId: forumId
        });
    }
    getAllPosts() {
        return this.http.get('http://localhost:3000/api/posts');
    }
    getPostById(postId) {
        return this.http.post('http://localhost:3000/api/posts/postId', {
            postId: postId
        });
    }
    generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
    setActivePost(post) {
        console.log("Setting currentPost: " + JSON.stringify(post));
        localStorage.setItem('currentPost', JSON.stringify(post));
    }
    deactivatePost() {
        localStorage['currentPost'] = '';
    }
    getActivePost() {
        return JSON.parse(localStorage['currentPost']);
    }
    deletePost(postId) {
        return this.http.post('http://localhost:3000/api/posts/postDelete', {
            postId: postId
        });
    }
    groupByForumIdAndCount() {
        return this.http.get('http://localhost:3000/api/posts/postsGroupBy');
    }
    groupByForumNameAndCount() {
        return this.http.get('http://localhost:3000/api/posts/postsGroupByForumName');
    }
    groupByPostLocationAndCount() {
        return this.http.get('http://localhost:3000/api/posts/postsGroupByPostLocation');
    }
    searchPost(postTitle, postId, postLocation, forumName) {
        var query = {};
        if (postTitle != '' && postId != '' && postLocation != '') {
            query = {
                postId: postId,
                postTitle: postTitle,
                postLocation: postLocation,
                forumName: forumName
            };
        }
        else if (postTitle != '' && postId != '') {
            query = {
                postId: postId,
                postTitle: postTitle,
                forumName: forumName
            };
        }
        else if (postTitle != '' && postLocation != '') {
            query = {
                postTitle: postTitle,
                postLocation: postLocation,
                forumName: forumName
            };
        }
        else if (postLocation != '' && postId != '') {
            query = {
                postId: postId,
                postLocation: postLocation,
                forumName: forumName
            };
        }
        else if (postLocation != '') {
            query = {
                postLocation: postLocation,
                forumName: forumName
            };
        }
        else if (postTitle != '') {
            query = {
                postTitle: postTitle,
                forumName: forumName
            };
        }
        else if (postId != '') {
            query = {
                postId: postId,
                forumName: forumName
            };
        }
        return this.http.post('http://localhost:3000/api/posts/postsSearch', query);
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./client/app/statistics/discrete-bar-chart/discrete-bar-chart.component.ts":
/*!**********************************************************************************!*\
  !*** ./client/app/statistics/discrete-bar-chart/discrete-bar-chart.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DiscreteBarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscreteBarChartComponent", function() { return DiscreteBarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/posts.service */ "./client/app/services/posts.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng2_nvd3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-nvd3 */ "./node_modules/ng2-nvd3/__ivy_ngcc__/build/index.js");
/* harmony import */ var ng2_nvd3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_nvd3__WEBPACK_IMPORTED_MODULE_3__);





function DiscreteBarChartComponent_nvd3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nvd3", 2);
} if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r99.options)("data", ctx_r99.data);
} }
const _c0 = function () { return { textAlign: "center" }; };
class DiscreteBarChartComponent {
    constructor(postSer) {
        this.data = [
            {
                key: "Cumulative Return",
                //{label, value}
                values: []
            }
        ];
        this.isDataLoaded = false;
        this.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function (d) { return d.label; },
                y: function (d) { return d.value + (1e-10); },
                showValues: true,
                valueFormat: function (d) {
                    return d3.format(',.4f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: -10
                }
            }
        };
        postSer.groupByPostLocationAndCount().subscribe(data => {
            var array = new Array();
            data.forEach(numOfPosts => {
                array.push({ label: numOfPosts._id, value: numOfPosts.numOfPosts });
            });
            this.data[0].values = array;
            console.log(this.data);
            this.isDataLoaded = true;
        });
    }
    ngOnInit() {
    }
}
DiscreteBarChartComponent.ɵfac = function DiscreteBarChartComponent_Factory(t) { return new (t || DiscreteBarChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"])); };
DiscreteBarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiscreteBarChartComponent, selectors: [["app-discrete-bar-chart"]], decls: 5, vars: 3, consts: [[1, "display-4", 3, "ngStyle"], [3, "options", "data", 4, "ngIf"], [3, "options", "data"]], template: function DiscreteBarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Num of Posts Per Meet Up Place: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DiscreteBarChartComponent_nvd3_4_Template, 1, 2, "nvd3", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDataLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng2_nvd3__WEBPACK_IMPORTED_MODULE_3__["NvD3Component"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL3N0YXRpc3RpY3MvZGlzY3JldGUtYmFyLWNoYXJ0L2Rpc2NyZXRlLWJhci1jaGFydC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiscreteBarChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-discrete-bar-chart',
                templateUrl: './discrete-bar-chart.component.html',
                styleUrls: ['./discrete-bar-chart.component.css']
            }]
    }], function () { return [{ type: _services_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/statistics/pie-chart/pie-chart.component.ts":
/*!****************************************************************!*\
  !*** ./client/app/statistics/pie-chart/pie-chart.component.ts ***!
  \****************************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/posts.service */ "./client/app/services/posts.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng2_nvd3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-nvd3 */ "./node_modules/ng2-nvd3/__ivy_ngcc__/build/index.js");
/* harmony import */ var ng2_nvd3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_nvd3__WEBPACK_IMPORTED_MODULE_3__);





function PieChartComponent_nvd3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nvd3", 2);
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r98.options)("data", ctx_r98.data);
} }
const _c0 = function () { return { textAlign: "center" }; };
class NumOfPosts {
}
class PieChartComponent {
    constructor(postSer) {
        this.data = [];
        this.isDataLoaded = false;
        this.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                },
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };
        this.data = new Array();
        postSer.groupByForumNameAndCount().subscribe(data => {
            data.forEach(numOfPosts => {
                console.log(numOfPosts);
                console.log({ key: numOfPosts._id, y: numOfPosts.numOfPosts });
                this.data.push({ key: numOfPosts._id, y: numOfPosts.numOfPosts });
            });
            this.isDataLoaded = true;
        });
        // this.data = [
        //   {
        //     key: "Computer Science",
        //     y: 3
        //   },
        //   {
        //     key: "QA",
        //     y: 4
        //   },
        //   {
        //     key: "Accounting",
        //     y: 5
        //   },
        // ];
    }
    ngOnInit() {
    }
}
PieChartComponent.ɵfac = function PieChartComponent_Factory(t) { return new (t || PieChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"])); };
PieChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PieChartComponent, selectors: [["app-pie-chart"]], decls: 5, vars: 3, consts: [[1, "display-4", 3, "ngStyle"], [3, "options", "data", 4, "ngIf"], [3, "options", "data"]], template: function PieChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Num of Posts Per Forum: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PieChartComponent_nvd3_4_Template, 1, 2, "nvd3", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDataLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng2_nvd3__WEBPACK_IMPORTED_MODULE_3__["NvD3Component"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL3N0YXRpc3RpY3MvcGllLWNoYXJ0L3BpZS1jaGFydC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PieChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pie-chart',
                templateUrl: './pie-chart.component.html',
                styleUrls: ['./pie-chart.component.css']
            }]
    }], function () { return [{ type: _services_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/statistics/statistics.component.ts":
/*!*******************************************************!*\
  !*** ./client/app/statistics/statistics.component.ts ***!
  \*******************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pie-chart/pie-chart.component */ "./client/app/statistics/pie-chart/pie-chart.component.ts");
/* harmony import */ var _discrete_bar_chart_discrete_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discrete-bar-chart/discrete-bar-chart.component */ "./client/app/statistics/discrete-bar-chart/discrete-bar-chart.component.ts");






function StatisticsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-pie-chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-discrete-bar-chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StatisticsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "not logged in!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StatisticsComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
}
StatisticsComponent.ɵfac = function StatisticsComponent_Factory(t) { return new (t || StatisticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
StatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatisticsComponent, selectors: [["app-statistics"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "row"], [1, "col-sm-6"]], template: function StatisticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StatisticsComponent_div_0_Template, 6, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StatisticsComponent_div_1_Template, 3, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_3__["PieChartComponent"], _discrete_bar_chart_discrete_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__["DiscreteBarChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-statistics',
                templateUrl: './statistics.component.html',
                styleUrls: ['./statistics.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/users/users.component.ts":
/*!*********************************************!*\
  !*** ./client/app/users/users.component.ts ***!
  \*********************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function UsersComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Full Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " City ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Profession ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tbody", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { color: "red", textAlign: "center" }; };
function UsersComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Not Logged In! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class UsersComponent {
    constructor(auth) {
        this.auth = auth;
        this.usersArray = [];
    }
    ngOnInit() {
        this.auth.getAllUsers().subscribe(data => {
            data.forEach(user => {
                this.addRow(user.fullName, user.email, user.city, user.profession);
            });
        });
    }
    addRow(userName, userEmail, userCity, UserProfession) {
        var table = document.getElementById("myTable");
        var newRow = table.insertRow(-1);
        var newCell_0 = newRow.insertCell(0);
        var newCell_1 = newRow.insertCell(1);
        var newCell_2 = newRow.insertCell(2);
        var newCell_3 = newRow.insertCell(3);
        newCell_0.innerText = userName;
        newCell_1.innerText = userEmail;
        newCell_2.innerText = userCity;
        newCell_3.innerText = UserProfession;
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 2, vars: 2, consts: [["class", "myTable rounded-lg", 4, "ngIf"], [4, "ngIf"], [1, "myTable", "rounded-lg"], ["id", "myTable", 1, "table", "table-hover", "shadow-lg", "rounded-lg"], [1, "thead-dark"], [1, "width-sm"], ["id", "myTableD"], [1, "display-4", 3, "ngStyle"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UsersComponent_div_0_Template, 13, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersComponent_div_1_Template, 4, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".myTable[_ngcontent-%COMP%] {\r\n  padding: 2vw;\r\n  margin: 2vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2IiLCJmaWxlIjoiY2xpZW50L2FwcC91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15VGFibGUge1xyXG4gIHBhZGRpbmc6IDJ2dztcclxuICBtYXJnaW46IDJ2dztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./client/environments/environment.ts":
/*!********************************************!*\
  !*** ./client/environments/environment.ts ***!
  \********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./client/main.ts":
/*!************************!*\
  !*** ./client/main.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./client/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./client/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./client/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Inbar\Desktop\Cloud_Computing\FriendLancer_GIT\FriendLancer\client\main.ts */"./client/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map