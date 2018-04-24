webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/afterlogin/afterlogin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n  .main{\n        margin: 20px auto 20px auto;\n        width: 70%;\n        min-height: 300px;\n        border-top: 4px solid ;\n        border-top-color: SteelBlue;\n        border-bottom: 4px solid ;\n        border-bottom-color: SteelBlue;\n        padding: 5px;\n        text-align:center;\n        position: relative;\n\n\n      }\n\n.tr{\n    text-align:center;\n}\n\n.td{\n    text-align:center;\n}\n\n.navbar{\nmargin-left: -50%}\n\n.logoutbar{\n  float: right;\n}\n\n.send{\n  text-align:center;\n\n}\n\n.left{\n  float: left;\n  margin-left: auto;\n  width: 70%;\n\n}\n\n.left{\n  float: right;\n  margin-right: inherit;\n  width: 70%;\n\n}\n\n.navbar{\nmargin-left: -35%\n\n}\n\n.btn-basic{\n  width: 150px;\n  font-weight: bold;\n}\n\n.btn-primary{\n  width: 150px;\n  font-weight: bold;\n\n}\n\n.main2{\n  white-space: nowrap;\n}\n\n.main2 *{\n  display: inline;\n\n}\n\ninput[type=\"text\"] {\n  height: 45px;\n}\n\ninput[type=\"email\"] {\n  height: 45px;\n}\n\n.btn-success{\n  padding: 12px 20px;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/afterlogin/afterlogin.component.html":
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n  <script>\n$(document).ready(function(){\n    $('[data-toggle=\"tooltip\"]').tooltip();\n});\n</script>\n<br/><div class =\"navbar\">\n\n<button  class =\"btn btn-basic\"(click)=\"gototodoapp()\">TodoApp</button>\n<button class=\"btn btn-primary\" (click)=\"gotosendlist()\">Send your list</button>\n<button class =\"btn btn-basic\"(click)=\"gotohelp()\">Help</button>\n\n</div>\n\n\n\n<div class=\"main\">\n\n<br>\n  <div class =\"main2\" >\n\n               <label for=\"username\">Send list via phone</label>\n               <h4><input [(ngModel)]=\"username\" type=\"text\" placeholder = \"Add phone number\" required/></h4>\n               <p style=\"color:red\">{{regUserNameSmall}}</p>\n\n             <button class=\"btn btn-success\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Click to send list by phone\" (click)=\"register()\">Send</button>\n</div>\n <h4>or</h4>\n<div class =\"main2\">\n               <label for=\"username\">Send list via email</label>\n               <h4><input [(ngModel)]=\"email\" type=\"email\" placeholder = \"Add email\" required/></h4>\n               <p style=\"color:red\">{{regValidEmail}}</p>\n\n               <button  class =\"btn btn-success\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Click to send list by email\" (click)=\"registeremail()\">Send</button>\n\n\n\n </div>\n\n\n\n</div>\n\n<p>You are now logged in..</p>\n<button class=\"btn btn-primary\"(click)=\"logout()\"  title=\"Click to Logout\">Logout</button>\n"

/***/ }),

/***/ "../../../../../src/app/afterlogin/afterlogin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfterloginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AfterloginComponent = /** @class */ (function () {
    function AfterloginComponent(router) {
        this.router = router;
        this.regtodoText = "";
        this.regCheck = true;
        this.currentEditCounter = -1;
        this.username = "";
        this.regUserNameSmall = "";
        this.email = "";
        this.regEmailSmall = "";
        this.regValidEmail = "";
    }
    AfterloginComponent.prototype.ngOnInit = function () {
    };
    AfterloginComponent.prototype.logout = function () {
        alert("You are now Logging out!");
        this.router.navigate(['/loginview']);
    };
    AfterloginComponent.prototype.validateRegister = function () {
        this.regUserNameSmall = "";
        this.regCheck = true;
        if (this.username.length != 10) {
            this.regCheck = false;
            this.regUserNameSmall = "Please enter 10 digit phone number";
        }
        return this.regCheck;
    };
    AfterloginComponent.prototype.register = function () {
        if (this.validateRegister()) {
            alert("Your list has been sent");
            this.username = "";
        }
    };
    AfterloginComponent.prototype.gototodoapp = function () {
        this.router.navigate(['/todoApp']);
    };
    AfterloginComponent.prototype.gotosendlist = function () {
        this.router.navigate(['/afterlogin']);
    };
    AfterloginComponent.prototype.gotohelp = function () {
        this.router.navigate(['/helppage']);
    };
    AfterloginComponent.prototype.validateemail = function () {
        this.regValidEmail = "";
        this.regCheck = true;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(this.email)) {
            this.regCheck = false;
            this.regValidEmail = "Please enter a valid email address";
        }
        return this.regCheck;
    };
    AfterloginComponent.prototype.registeremail = function () {
        if (this.validateemail()) {
            alert("Your list has been sent");
            this.email = "";
        }
    };
    AfterloginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-afterlogin',
            template: __webpack_require__("../../../../../src/app/afterlogin/afterlogin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/afterlogin/afterlogin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AfterloginComponent);
    return AfterloginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app{\n  text-align:center;\n  font-family: sans-serif;\n}\n\n.nav{\n  font-family: sans-serif;\n  font-size: 20px;\n\n}\n\n.maincontent{\n  margin: 20px auto 20px auto;\n  width: 70%;\n  min-height: 100%;\n  border-top: 10px solid ;\n  border-top-color: SteelBlue;\n  border-bottom: 10px solid ;\n  border-bottom-color: SteelBlue;\n  padding: 35px;\n\n\n}\n\n#head{\nmargin-left: 15%}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n  <script>\n$(document).ready(function(){\n    $('[data-toggle=\"tooltip\"]').tooltip();\n});\n</script>\n<div class =\"nav\" >\n<br />\n<h1 id =\"head\">&#10004;TODOLIST</h1>\n\n\n</div>\n\n<div class =\"app\">\n\n\n    <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'TODOLIST';
    }
    AppComponent.prototype.ngOnInit = function () {
        // <app-loginview></app-loginview>
        this.router.navigate(['/loginview']);
        // this.router.navigate(['/todoApp']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todoadd_todoadd_component__ = __webpack_require__("../../../../../src/app/todoadd/todoadd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loginview_loginview_component__ = __webpack_require__("../../../../../src/app/loginview/loginview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__afterlogin_afterlogin_component__ = __webpack_require__("../../../../../src/app/afterlogin/afterlogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__helppage_helppage_component__ = __webpack_require__("../../../../../src/app/helppage/helppage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__todoadd_todoadd_component__["a" /* TodoaddComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__loginview_loginview_component__["a" /* LoginviewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__afterlogin_afterlogin_component__["a" /* AfterloginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__helppage_helppage_component__["a" /* HelppageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */].forRoot([
                    { path: 'loginview', component: __WEBPACK_IMPORTED_MODULE_8__loginview_loginview_component__["a" /* LoginviewComponent */] },
                    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */] },
                    { path: 'afterlogin', component: __WEBPACK_IMPORTED_MODULE_9__afterlogin_afterlogin_component__["a" /* AfterloginComponent */] },
                    { path: 'todoApp', component: __WEBPACK_IMPORTED_MODULE_4__todoadd_todoadd_component__["a" /* TodoaddComponent */] },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
                    { path: 'helppage', component: __WEBPACK_IMPORTED_MODULE_10__helppage_helppage_component__["a" /* HelppageComponent */] }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/helppage/helppage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.navbar{\nmargin-left: -50%}\n\n\n.main{\n      margin: 20px auto 20px auto;\n      width: 70%;\n      min-height: 300px;\n      border-top: 4px solid ;\n      border-top-color: SteelBlue;\n      border-bottom: 4px solid ;\n      border-bottom-color: SteelBlue;\n      padding: 5px;\n      text-align: left;\n\n\n    }\n\n\n.main h3{\n  text-align: center;\n\n}\n\n\n.table{\n  text-align: left;\n}\n\n\n.navbar{\nmargin-left: -35%\n\n}\n\n\n.btn-basic{\n  width: 150px;\n  font-weight: bold;\n}\n\n\n.btn-primary{\n  width: 150px;\n  font-weight: bold;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/helppage/helppage.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n  <script>\n$(document).ready(function(){\n    $('[data-toggle=\"tooltip\"]').tooltip();\n});\n</script>\n\n<br/>\n<div class =\"navbar\">\n\n<button class =\"btn btn-basic\"(click)=\"gototodoapp()\">TodoApp</button>\n<button class =\"btn btn-basic\"(click)=\"gotosendlist()\">Send your list</button>\n<button class=\"btn btn-primary\" (click)=\"gotohelp()\">Help</button>\n</div>\n<div class =\"main\">\n<br>\n  <table style=\"width:100%\" text-align=\"center\">\n  <tr>\n    <th>To Add item</th>\n    <td>type task into \"Add item\" box and click \"ADD\" button</td>\n  </tr>\n\n  <tr>\n    <td></td>\n    <td>You will not be able to \"ADD\" if the input task is empty</td>\n  </tr>\n<br>\n    <tr>\n      <th>To Edit item</th>\n      <td>click EDIT button on the right side of added task. Then, changed the text in \"Add item\" box and click \"ADD\" button</td>\n    </tr>\n<br>\n    <tr>\n      <th>To Delete item</th>\n      <td>click DELETE button on the right side of added task to remove each item</td>\n    </tr>\n<br>\n    <tr>\n      <th>To Mark item as completed</th>\n      <td>Click on &#9744; checkbox on the left side of each task to cross it off</td>\n    </tr>\n<br>\n    <tr>\n      <th>To Forward the list</th>\n      <td>Phone- type 10 digit number into \"Add phone number\" box and click SEND button</td>\n    </tr>\n    <tr>\n      <td></td>\n      <td>Email- type a valid email address into \"Add email\" box and click SEND button</td>\n    </tr>\n\n\n  </table>\n\n\n</div>\n\n<p>You are now logged in..</p>\n<button class=\"btn btn-primary\"(click)=\"logout()\"  title=\"Click to Logout\">Logout</button>\n"

/***/ }),

/***/ "../../../../../src/app/helppage/helppage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelppageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelppageComponent = /** @class */ (function () {
    function HelppageComponent(router) {
        this.router = router;
    }
    HelppageComponent.prototype.ngOnInit = function () {
    };
    HelppageComponent.prototype.gototodoapp = function () {
        this.router.navigate(['/todoApp']);
    };
    HelppageComponent.prototype.logout = function () {
        alert("You are now Logging out!");
        this.router.navigate(['/loginview']);
    };
    HelppageComponent.prototype.gotosendlist = function () {
        this.router.navigate(['/afterlogin']);
    };
    HelppageComponent.prototype.gotohelp = function () {
        this.router.navigate(['/helppage']);
    };
    HelppageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-helppage',
            template: __webpack_require__("../../../../../src/app/helppage/helppage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/helppage/helppage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], HelppageComponent);
    return HelppageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "    .tooltip {\n        position: relative;\n        display: inline-block;\n        border-bottom: 1px dotted black;\n    }\n\n\n    .tooltip .tooltiptext {\n        visibility: hidden;\n        width: 120px;\n        background-color: black;\n        color: #fff;\n        text-align: center;\n        padding: 5px 0;\n        border-radius: 6px;\n\n\n        position: absolute;\n        z-index: 1;\n    }\n\n\n    .tooltip:hover .tooltiptext {\n        visibility: visible;\n    }\n\n\n    h1{\n      text-align:center;\n      padding: 10px 0px;\n      margin-top: 0px;\n    }\n\n\n    h3{\n      text-align:left;\n    }\n\n\n    ul{\n      list-style:none;\n      /* font-size:20px; */\n      color:black;\n      /* margin-left: -40px; */\n      /* margin-bottom:0px; */\n    }\n\n\n    #lblAddError{\n  background-color:red;\n}\n\n\n    .navbar{\nmargin-left: -25%}\n\n\n    input[type=checkbox] {\n    -webkit-transform: scale(1.75);\n            transform: scale(1.75);\n  }\n\n\n    .btn-success{\n    padding: 12px 20px;\n\n  }\n\n\n    input[type=\"text\"] {\n    height: 45px;\n  }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n  <script>\n$(document).ready(function(){\n    $('[data-toggle=\"tooltip\"]').tooltip();\n});\n</script>\n\n\n\n\n<div class =\"main\">\n\n  <input [(ngModel)]=\"todoText\" placeholder = \"Add Item\" required [(ngModel)]=\"newItem\" size=\"40\"\n  input type=\"text\" ><button class=\"btn btn-success\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Click to add item to the list\" (click)=\"addTodo()\">ADD</button><br /> <font style=\"color:red\">{{itemAddError}}</font>\n\n\n\n  <br>\n  <br>\n\n\n\n\n\n\n  <ul style=\"list-style:none\">\n\n        <li *ngFor = \"let task of todoadd; let i=index\">\n            <div class=\"panel panel-default\"  >\n                <div class=\"panel-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-1\">\n                            <input type =\"checkbox\"  (click)=\"checkBoxClicked(i)\" >\n                        </div>\n                        <div class=\"col-md-9\" *ngIf=\"checkedIndices[i]==true\" style=\"text-align:center;color:LightGrey;font-size: large;font-weight: bold;font-size: 22px;\">\n                            <span class=\"check\" > <s >{{task.text}}</s> </span>\n                          </div>\n                          <div class=\"col-md-9\" *ngIf=\"!(checkedIndices[i])==true\" style=\"text-align:center;font-size: large;font-weight: bold;font-size: 22px;\">\n                               <span class=\"check\" >{{task.text}}</span>\n                            </div>\n\n\n                  <div class=\"col-md-2\">\n                      <button  class=\"btn btn-warning\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Click to edit item\"id =\"update\"(click)=\"edit(i)\">Edit</button>\n                    <button class=\"btn btn-danger\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Click to delete item\" id =\"update\"(click)=\"delete(i)\">Delete</button>\n\n                    </div>\n                  </div>\n                </div>\n\n\n\n\n          </div>\n          </li>\n\n\n    <!-- <br/> -->\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.todoText = "";
        this.regtodoText = "";
        this.regCheck = true;
        this.currentEditCounter = -1;
        this.username = "";
        this.regUserNameSmall = "";
        this.checkedIndices = [];
        this.itemAddError = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.todoadd = [];
    };
    LoginComponent.prototype.addTodo = function () {
        this.itemAddError = "";
        if (this.todoText === "") {
            this.itemAddError = "Item should not be empty. Please add an item.";
            return;
        }
        var task = { text: this.todoText };
        if (this.currentEditCounter != -1) {
            this.todoadd.splice(this.currentEditCounter, 1);
            this.currentEditCounter = -1;
        }
        this.todoadd.push(task);
        this.todoText = "";
    };
    LoginComponent.prototype.delete = function (i) {
        this.todoadd.splice(i, 1);
    };
    LoginComponent.prototype.edit = function (i) {
        this.todoText = this.todoadd[i].text;
        this.currentEditCounter = i;
    };
    LoginComponent.prototype.checkBoxClicked = function (i) {
        var value = this.checkedIndices[i];
        if (value == false || value == undefined) {
            this.checkedIndices[i] = true;
        }
        if (value == true) {
            this.checkedIndices[i] = false;
        }
    };
    LoginComponent.prototype.gototodoapp = function () {
        this.router.navigate(['/todoApp']);
    };
    LoginComponent.prototype.gotosendlist = function () {
        this.router.navigate(['/afterlogin']);
    };
    LoginComponent.prototype.gotohelp = function () {
        this.router.navigate(['/helppage']);
    };
    LoginComponent.prototype.logout = function () {
        alert("You are now Logging out!");
        this.router.navigate(['/loginview']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/loginview/loginview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n.main{\n      margin: 20px auto 20px auto;\n      width: 70%;\n      min-height: 100%;\n      border-top: 4px solid ;\n      border-top-color: SteelBlue;\n      border-bottom: 4px solid ;\n      border-bottom-color: SteelBlue;\n      padding: 35px;\n\n\n    }\n\n\n.table{\n  text-align: center;\n}\n\n\n.navbar{\nmargin-left: -25%}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loginview/loginview.component.html":
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n  <script>\n$(document).ready(function(){\n    $('[data-toggle=\"tooltip\"]').tooltip();\n});\n</script>\n\n<div class=\"main\" >\n<div *ngIf=\"loginScreen\" >\n\n    <div>\n        <table class=\"table-hover\" align=\"center\">\n\n            <tr>\n                <td style=\"width:100px\" >\n                    <h4><label for=\"username\" >  Username  </label></h4>\n                </td>\n                <td>\n                    <input [(ngModel)]=\"username\" type=\"text\" />\n                    <br>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"width:100px\">\n                        <h4><label for=\"password\">  Password  </label></h4>\n                </td>\n                <td>\n                    <input [(ngModel)]=\"password\" type=\"password\" />\n                </td>\n            </tr>\n<br/>\n        </table>\n        <button class=\"btn btn-primary\" (click)=\"login()\">Login</button>\n\n        <button class=\"btn btn-primary\" (click)='registerLinkClick()'>Don't have an account</button>\n\n    </div>\n\n    <label style=\"color:red\">{{error}}</label>\n    <label style=\"color:green\">{{registerSuc}}</label>\n</div>\n\n<div *ngIf=\"registerScreen\" align=\"center\" >\n\n        <table class=\"table-hover\" >\n            <tr>\n                    <td style=\"width:100px\"><h4><label for=\"username\">Username</label></h4></td>\n                    <td><h4><input [(ngModel)]=\"username\" type=\"text\" required/></h4></td>\n                    <td><p style=\"color:red\">{{regUserNameSmall}}</p></td>\n\n            </tr>\n            <tr>\n                    <td style=\"width:100px\"><h4><label for=\"password\">Password</label></h4></td>\n                    <td><h4><input [(ngModel)]=\"password\" type=\"password\" required /></h4></td>\n                    <td><p style=\"color:red\">{{regPassSmall}}</p></td>\n\n            </tr>\n            <tr>\n                    <td style=\"width:100px\"><h4><label for=\"email\">Email</label></h4></td>\n                    <td><h4><input [(ngModel)]=\"email\" type=\"email\"  required/></h4></td>\n                    <td><p style=\"color:red\">{{regValidEmail}}</p></td>\n\n            </tr>\n\n\n\n<br/>\n            </table>\n            <button class=\"btn btn-primary\" (click)=\"register()\">Register</button>\n            <button class=\"btn btn-primary\" (click)=\"cancelLinkClick() \">Cancel</button>\n\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/loginview/loginview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginviewComponent = /** @class */ (function () {
    function LoginviewComponent(router) {
        this.router = router;
        this.temporaryUsers = [];
        this.afterLogin = true;
        this.username = "";
        this.password = "";
        this.email = "";
        this.error = "";
        this.registerScreen = false;
        this.loginScreen = true;
        this.regCheck = true;
        this.regUserNameSmall = "";
        this.regPassSmall = "";
        this.regValidEmail = "";
        this.registerSuc = "";
    }
    LoginviewComponent.prototype.ngOnInit = function () {
        this.temporaryUsers.push({ username: "id1", password: "id1", email: "" });
        this.temporaryUsers.push({ username: "id2", password: "id2", email: "" });
        this.temporaryUsers.push({ username: "id3", password: "id3", email: "" });
    };
    LoginviewComponent.prototype.login = function () {
        this.error = "";
        if (!this.validate() || !this.authenticate()) {
            this.error = "Username or password is incorrect";
        }
        else {
            this.router.navigate(['/todoApp']);
        }
    };
    LoginviewComponent.prototype.validate = function () {
        if (this.username === '')
            return false;
        else
            return true;
    };
    LoginviewComponent.prototype.authenticate = function () {
        for (var _i = 0, _a = this.temporaryUsers; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.username === this.username && user.password === this.password)
                return true;
        }
        return false;
    };
    LoginviewComponent.prototype.validateRegister = function () {
        this.regUserNameSmall = "";
        this.regPassSmall = "";
        this.regValidEmail = "";
        this.registerSuc = "";
        this.regCheck = true;
        if (this.username.length < 8) {
            this.regCheck = false;
            this.regUserNameSmall = "Minimum 8 characters are required";
        }
        if (this.password.length < 8) {
            this.regCheck = false;
            this.regPassSmall = "Minimum 8 characters are required";
        }
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(this.email)) {
            this.regCheck = false;
            this.regValidEmail = "Not a Valid Email. Email has to have a @ symbol";
        }
        return this.regCheck;
    };
    LoginviewComponent.prototype.register = function () {
        var user = { username: this.username, password: this.password, email: this.email };
        if (this.validateRegister()) {
            this.temporaryUsers.push(user);
            this.loginLinkClick();
        }
    };
    LoginviewComponent.prototype.loginLinkClick = function () {
        this.username = '';
        this.password = '';
        this.registerSuc = "User Successfully Registered";
        this.registerScreen = false;
        this.loginScreen = true;
    };
    LoginviewComponent.prototype.registerLinkClick = function () {
        this.registerScreen = true;
        this.loginScreen = false;
        this.error = "";
    };
    LoginviewComponent.prototype.cancelLinkClick = function () {
        this.registerScreen = false;
        this.loginScreen = true;
    };
    LoginviewComponent.prototype.resetVariables = function () {
    };
    LoginviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loginview',
            template: __webpack_require__("../../../../../src/app/loginview/loginview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loginview/loginview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginviewComponent);
    return LoginviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.navbar{\nmargin-left: -25%}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n  <script>\n$(document).ready(function(){\n    $('[data-toggle=\"tooltip\"]').tooltip();\n});\n</script>\n<div class=\"main\">\n    <table>\n        <tr>\n            <td> <label for=\"username\">Username</label></td>\n            <td> <input type=\"text\" /></td>\n        </tr>\n        <tr>\n                <td> <label for=\"password\">Password</label></td>\n                <td> <input type=\"password\"  /></td>\n        </tr>\n        <tr>\n                <td> <label for=\"email\">Email</label></td>\n                <td> <input type=\"email\"  /></td>\n        </tr>\n\n        </table>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
        this.text = "You have been registered";
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/todoadd/todoadd.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".left {\n      width: 200px;\n      float: left;\n  }\n.right\n  {\n      margin-left: 200px;\n  }\n.clear {\n      clear: both;\n    }\n.main{\n      margin: 20px auto 20px auto;\n      width: 70%;\n      min-height: 300px;\n      border-top: 4px solid ;\n      border-top-color: SteelBlue;\n      border-bottom: 4px solid ;\n      border-bottom-color: SteelBlue;\n      padding: 20px;\n\n\n    }\n.tooltip {\n        position: relative;\n        display: inline-block;\n        border-bottom: 1px dotted black;\n    }\n.tooltip .tooltiptext {\n        visibility: hidden;\n        width: 120px;\n        background-color: black;\n        color: #fff;\n        text-align: center;\n        padding: 5px 0;\n        border-radius: 6px;\n\n\n        position: absolute;\n        z-index: 1;\n    }\n.tooltip:hover .tooltiptext {\n        visibility: visible;\n    }\nh1{\n      text-align:center;\n      padding: 10px 0px;\n      margin-top: 0px;\n    }\nh3{\n      text-align:left;\n    }\n.howto{\n      text-align: left;\n      margin: 20px auto 20px auto;\n      width: 70%;\n\n    }\n.addItem{\n      position: center;\n      height: 30px;\n\n    }\n.addText{\n      width: 40%;\n      height: 30px;\n      font-size:20px;\n    }\n.main addItem button{\n      height:45px;\n      width: 50px;\n    }\nul{\n      list-style:none;\n      font-size:20px;\n      color:black;\n      margin-left: -40px;\n      margin-bottom:0px;\n    }\nli{\n      border-bottom: 1px solid ;\n      background-color: white;\n      padding: 10px 0px;\n      margin-botton: 5px;\n      border-top:  2px solid ;\n    }\ninput[type=\"checkbox\"] {\n    width: 150px;\n    display: block;\n    margin-bottom: 10px;\n    background-color: yellow;\n}\n.main span{\n      cursor:pointer;\n      position:relative;\n      float:right;\n      margin-right: 10px;\n\n    }\n.check {\n        margin:0 auto;\n        width: 700px;\n        text-align: center;\n        float:left;\n        margin-left: 10px;\n    }\n#lblAddError{\n  background-color:red;\n}\n.navbar{\nmargin-left: -35%\n\n}\n.btn-basic{\n  width: 150px;\n  font-weight: bold;\n}\n.btn-primary{\n  width: 150px;\n  font-weight: bold;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todoadd/todoadd.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n  <script>\n$(document).ready(function(){\n    $('[data-toggle=\"tooltip\"]').tooltip();\n});\n</script>\n\n<br/>\n<div class =\"navbar\">\n\n<button class=\"btn btn-primary\" (click)=\"gototodoapp()\">TodoApp</button>\n<button class =\"btn btn-basic\"(click)=\"gotosendlist()\">Send your list</button>\n<button class =\"btn btn-basic\"(click)=\"gotohelp()\">Help</button>\n</div>\n\n<div class=\"main\">\n\n<app-login></app-login>\n\n</div>\n\n<div class =\"end\">\n  <p>You are now logged in..</p>\n<button class=\"btn btn-primary\"(click)=\"logout()\"  title=\"Click to Logout\">Logout</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/todoadd/todoadd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoaddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoaddComponent = /** @class */ (function () {
    function TodoaddComponent(router) {
        this.router = router;
    }
    TodoaddComponent.prototype.ngOnInit = function () {
    };
    TodoaddComponent.prototype.gototodoapp = function () {
        this.router.navigate(['/todoApp']);
    };
    TodoaddComponent.prototype.gotosendlist = function () {
        this.router.navigate(['/afterlogin']);
    };
    TodoaddComponent.prototype.gotohelp = function () {
        this.router.navigate(['/helppage']);
    };
    TodoaddComponent.prototype.logout = function () {
        alert("You are now Logging out!");
        this.router.navigate(['/loginview']);
    };
    TodoaddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todoadd',
            template: __webpack_require__("../../../../../src/app/todoadd/todoadd.component.html"),
            styles: [__webpack_require__("../../../../../src/app/todoadd/todoadd.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], TodoaddComponent);
    return TodoaddComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map