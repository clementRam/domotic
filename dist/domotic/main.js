(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main container\">\n  <router-outlet></router-outlet>\n</div>\n<app-notification></app-notification>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.main {\n  padding-top: 75px;\n  position: relative; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'domotic';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../http-interceptor */ "./src/http-interceptor/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var src_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/dashboard/dashboard.module */ "./src/dashboard/dashboard.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes/routes */ "./src/routes/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_routes_routes__WEBPACK_IMPORTED_MODULE_7__["appRoutes"]),
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                src_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__["DashboardModule"]
            ],
            providers: [_http_interceptor__WEBPACK_IMPORTED_MODULE_2__["httpInterceptorProviders"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/dashboard/components/device/device.component.html":
/*!***************************************************************!*\
  !*** ./src/dashboard/components/device/device.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" [class.off]=\"device.SubType === 'Switch' && device.Status === 'Off'\" (click)=\"handleClick()\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <img src=\"assets/images/{{device.TypeImg}}.png\" class=\"device-img\" alt=\"device icon\">\n      </div>\n    </div>\n    <div class=\"row mt-3\">\n      <div class=\"col\">\n        <span *ngIf=\"!(devicesEditable$ | async); else editName\">\n          {{ device.Name }}\n        </span>\n        <ng-template #editName>\n          <input type=\"text\" class=\"form-control\" value=\"{{device.Name}}\" (focusout)=\"handleFocusOutName($event)\">\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col font-weight-light\">\n        {{ device.Data }}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/dashboard/components/device/device.component.scss":
/*!***************************************************************!*\
  !*** ./src/dashboard/components/device/device.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.card {\n  cursor: pointer;\n  border-radius: 5px; }\n  div.card.off {\n    background-color: rgba(255, 255, 255, 0.6); }\n  div.card img.device-img {\n    height: 30px; }\n  div.card .form-control {\n    background-image: linear-gradient(0deg, #3f51b5 2px, rgba(63, 81, 181, 0) 0), linear-gradient(0deg, rgba(0, 0, 0, 0.26) 1px, transparent 0);\n    font-size: .875rem; }\n  div.card .form-control:focus {\n      box-shadow: none; }\n"

/***/ }),

/***/ "./src/dashboard/components/device/device.component.ts":
/*!*************************************************************!*\
  !*** ./src/dashboard/components/device/device.component.ts ***!
  \*************************************************************/
/*! exports provided: DeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceComponent", function() { return DeviceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_dashboard_services_device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/dashboard/services/device.service */ "./src/dashboard/services/device.service.ts");
/* harmony import */ var src_store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/store/store */ "./src/store/store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeviceComponent = /** @class */ (function () {
    function DeviceComponent(deviceService, store) {
        this.deviceService = deviceService;
        this.store = store;
    }
    DeviceComponent.prototype.ngOnInit = function () {
        console.log(this.device);
        this.devicesEditable$ = this.store.select(src_store_store__WEBPACK_IMPORTED_MODULE_2__["DefaultStoreDataNames"].DEVICES_EDITABLE);
    };
    DeviceComponent.prototype.handleClick = function () {
        if (this.deviceService.isSwitchType(this.device))
            this.deviceService.switchState(this.device).subscribe();
    };
    DeviceComponent.prototype.handleFocusOutName = function (event) {
        this.deviceService.updateName(this.device, event.target.value).subscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DeviceComponent.prototype, "device", void 0);
    DeviceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device',
            template: __webpack_require__(/*! ./device.component.html */ "./src/dashboard/components/device/device.component.html"),
            styles: [__webpack_require__(/*! ./device.component.scss */ "./src/dashboard/components/device/device.component.scss")]
        }),
        __metadata("design:paramtypes", [src_dashboard_services_device_service__WEBPACK_IMPORTED_MODULE_1__["DeviceService"], src_store_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], DeviceComponent);
    return DeviceComponent;
}());



/***/ }),

/***/ "./src/dashboard/components/devices/devices.component.html":
/*!*****************************************************************!*\
  !*** ./src/dashboard/components/devices/devices.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"devices$ | async; let devices\" class=\"row\">\n  <div *ngFor=\"let device of devices.result\" class=\"col-6 col-md-4 col-lg-3 mt-4\">\n    <app-device [device]=\"device\"></app-device>\n  </div>\n</div>"

/***/ }),

/***/ "./src/dashboard/components/devices/devices.component.scss":
/*!*****************************************************************!*\
  !*** ./src/dashboard/components/devices/devices.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n"

/***/ }),

/***/ "./src/dashboard/components/devices/devices.component.ts":
/*!***************************************************************!*\
  !*** ./src/dashboard/components/devices/devices.component.ts ***!
  \***************************************************************/
/*! exports provided: DevicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesComponent", function() { return DevicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/store */ "./src/store/store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DevicesComponent = /** @class */ (function () {
    function DevicesComponent(store) {
        this.store = store;
    }
    DevicesComponent.prototype.ngOnInit = function () {
        this.devices$ = this.store.select(src_store_store__WEBPACK_IMPORTED_MODULE_1__["DefaultStoreDataNames"].DEVICES);
    };
    DevicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-devices',
            template: __webpack_require__(/*! ./devices.component.html */ "./src/dashboard/components/devices/devices.component.html"),
            styles: [__webpack_require__(/*! ./devices.component.scss */ "./src/dashboard/components/devices/devices.component.scss")]
        }),
        __metadata("design:paramtypes", [src_store_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ }),

/***/ "./src/dashboard/components/settings/settings.component.html":
/*!*******************************************************************!*\
  !*** ./src/dashboard/components/settings/settings.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"settings\">\n    <a *ngIf=\"!(devicesEditable$ | async); else saveBtn\" class=\"btn btn-secondary btn-edit mr-3\" (click)=\"handleClickEdit()\">Modifier</a>\n    <ng-template #saveBtn>\n      <a class=\"btn btn-secondary btn-edit mr-3\" (click)=\"handleClickSave()\">Ok</a>\n    </ng-template>\n    <a href=\"http://raspberry:8080/#/Hardware\" class=\"btn btn-secondary btn-add\">+</a>\n</div>"

/***/ }),

/***/ "./src/dashboard/components/settings/settings.component.scss":
/*!*******************************************************************!*\
  !*** ./src/dashboard/components/settings/settings.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.settings {\n  position: absolute;\n  right: 10px;\n  top: 10px; }\n  div.settings a {\n    background-color: rgba(0, 0, 0, 0.4);\n    color: #eeeeee;\n    font-weight: 100;\n    text-transform: none; }\n  div.settings a.btn-add {\n      border-radius: 100%;\n      font-size: 22px;\n      padding: 0px 10px; }\n  div.settings a.btn-edit {\n      font-size: 16px;\n      border-radius: 20px;\n      padding: 2px 16px; }\n"

/***/ }),

/***/ "./src/dashboard/components/settings/settings.component.ts":
/*!*****************************************************************!*\
  !*** ./src/dashboard/components/settings/settings.component.ts ***!
  \*****************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/store */ "./src/store/store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(store) {
        this.store = store;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.devicesEditable$ = this.store.select(src_store_store__WEBPACK_IMPORTED_MODULE_1__["DefaultStoreDataNames"].DEVICES_EDITABLE);
    };
    SettingsComponent.prototype.handleClickEdit = function () {
        this.store.set(src_store_store__WEBPACK_IMPORTED_MODULE_1__["DefaultStoreDataNames"].DEVICES_EDITABLE, true);
    };
    SettingsComponent.prototype.handleClickSave = function () {
        this.store.set(src_store_store__WEBPACK_IMPORTED_MODULE_1__["DefaultStoreDataNames"].DEVICES_EDITABLE, false);
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/dashboard/components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/dashboard/components/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [src_store_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/dashboard/container/dashboard-view/dashboard-view.component.html":
/*!******************************************************************************!*\
  !*** ./src/dashboard/container/dashboard-view/dashboard-view.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-settings></app-settings>\n<app-devices></app-devices>"

/***/ }),

/***/ "./src/dashboard/container/dashboard-view/dashboard-view.component.scss":
/*!******************************************************************************!*\
  !*** ./src/dashboard/container/dashboard-view/dashboard-view.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/dashboard/container/dashboard-view/dashboard-view.component.ts":
/*!****************************************************************************!*\
  !*** ./src/dashboard/container/dashboard-view/dashboard-view.component.ts ***!
  \****************************************************************************/
/*! exports provided: DashboardViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardViewComponent", function() { return DashboardViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_dashboard_services_device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/dashboard/services/device.service */ "./src/dashboard/services/device.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardViewComponent = /** @class */ (function () {
    function DashboardViewComponent(deviceService) {
        this.deviceService = deviceService;
    }
    DashboardViewComponent.prototype.ngOnInit = function () {
        this.deviceService.getDevices().subscribe();
    };
    DashboardViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-view',
            template: __webpack_require__(/*! ./dashboard-view.component.html */ "./src/dashboard/container/dashboard-view/dashboard-view.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-view.component.scss */ "./src/dashboard/container/dashboard-view/dashboard-view.component.scss")]
        }),
        __metadata("design:paramtypes", [src_dashboard_services_device_service__WEBPACK_IMPORTED_MODULE_1__["DeviceService"]])
    ], DashboardViewComponent);
    return DashboardViewComponent;
}());



/***/ }),

/***/ "./src/dashboard/dashboard.module.ts":
/*!*******************************************!*\
  !*** ./src/dashboard/dashboard.module.ts ***!
  \*******************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _container_dashboard_view_dashboard_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/dashboard-view/dashboard-view.component */ "./src/dashboard/container/dashboard-view/dashboard-view.component.ts");
/* harmony import */ var _components_devices_devices_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/devices/devices.component */ "./src/dashboard/components/devices/devices.component.ts");
/* harmony import */ var _components_device_device_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/device/device.component */ "./src/dashboard/components/device/device.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/dashboard/components/settings/settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"]
            ],
            declarations: [_container_dashboard_view_dashboard_view_component__WEBPACK_IMPORTED_MODULE_2__["DashboardViewComponent"], _components_devices_devices_component__WEBPACK_IMPORTED_MODULE_3__["DevicesComponent"], _components_device_device_component__WEBPACK_IMPORTED_MODULE_4__["DeviceComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/dashboard/services/device.service.ts":
/*!**************************************************!*\
  !*** ./src/dashboard/services/device.service.ts ***!
  \**************************************************/
/*! exports provided: DeviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceService", function() { return DeviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/store/store */ "./src/store/store.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/services/notification.service */ "./src/shared/services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DeviceService = /** @class */ (function () {
    function DeviceService(http, store, notificationService) {
        this.http = http;
        this.store = store;
        this.notificationService = notificationService;
    }
    DeviceService.prototype.getDevices = function () {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('type', 'devices')
            .append('favorite', '1')
            .append('filter', 'all')
            .append('used', 'true');
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, {
            params: params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (devices) {
            _this.store.set(src_store_store__WEBPACK_IMPORTED_MODULE_3__["DefaultStoreDataNames"].DEVICES, devices);
            return devices;
        }));
    };
    DeviceService.prototype.getDevice = function (idx) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('rid', idx)
            .append('type', 'devices');
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, { params: params });
    };
    DeviceService.prototype.switchState = function (device) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('type', 'command')
            .append('param', 'switchlight')
            .append('idx', device.idx)
            .append('switchcmd', 'Toggle');
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, { params: params, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            if (response.body.status === 'OK') {
                _this.getDevices().subscribe();
            }
            else {
                _this.notificationService.sendNotificationTemp(response.body.status + ': ' + response.body.title, 'danger');
            }
            return response.body;
        }));
    };
    DeviceService.prototype.updateName = function (device, newName) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('type', 'setused')
            .append('idx', device.idx)
            .append('name', newName)
            .append('used', 'true');
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, { params: params, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            if (response.body.status === 'OK') {
                _this.getDevices().subscribe();
            }
            else {
                _this.notificationService.sendNotificationTemp(response.body.status + ': ' + response.body.title, 'danger');
            }
            return response.body;
        }));
    };
    DeviceService.prototype.isSwitchType = function (device) {
        return device.SwitchType === "On/Off" || device.SwitchType === "Dimmer";
    };
    DeviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], src_store_store__WEBPACK_IMPORTED_MODULE_3__["Store"], src_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], DeviceService);
    return DeviceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://raspberry:8080/json.htm'
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

/***/ "./src/http-interceptor/index.ts":
/*!***************************************!*\
  !*** ./src/http-interceptor/index.ts ***!
  \***************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _noop_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noop-interceptor */ "./src/http-interceptor/noop-interceptor.ts");


var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _noop_interceptor__WEBPACK_IMPORTED_MODULE_1__["NoopInterceptor"], multi: true },
];


/***/ }),

/***/ "./src/http-interceptor/noop-interceptor.ts":
/*!**************************************************!*\
  !*** ./src/http-interceptor/noop-interceptor.ts ***!
  \**************************************************/
/*! exports provided: NoopInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopInterceptor", function() { return NoopInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/notification.service */ "./src/shared/services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoopInterceptor = /** @class */ (function () {
    function NoopInterceptor(notificationService) {
        this.notificationService = notificationService;
    }
    NoopInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error, caught) {
            console.warn(error);
            if (error.error instanceof ErrorEvent) {
                _this.notificationService.sendNotificationTemp("Error " + error.status + ": " + error.error.error, "danger");
            }
            else if (error.error && error.error.message) {
                _this.notificationService.sendNotificationTemp("Error " + error.status + ": " + error.error.message, "danger");
            }
            else {
                _this.notificationService.sendNotificationTemp("Error " + error.status + ": " + error.error, "danger");
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(error);
        }));
    };
    NoopInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [src_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
    ], NoopInterceptor);
    return NoopInterceptor;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/routes/routes.ts":
/*!******************************!*\
  !*** ./src/routes/routes.ts ***!
  \******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var src_dashboard_container_dashboard_view_dashboard_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/dashboard/container/dashboard-view/dashboard-view.component */ "./src/dashboard/container/dashboard-view/dashboard-view.component.ts");

var appRoutes = [
    { path: "", component: src_dashboard_container_dashboard_view_dashboard_view_component__WEBPACK_IMPORTED_MODULE_0__["DashboardViewComponent"] },
    { path: "**", redirectTo: "" }
];


/***/ }),

/***/ "./src/shared/models/notification.model.ts":
/*!*************************************************!*\
  !*** ./src/shared/models/notification.model.ts ***!
  \*************************************************/
/*! exports provided: Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
var Notification = /** @class */ (function () {
    function Notification(message, type) {
        this.message = message;
        this.type = type;
        this.displayed = true;
    }
    return Notification;
}());



/***/ }),

/***/ "./src/shared/notification/notification.component.html":
/*!*************************************************************!*\
  !*** ./src/shared/notification/notification.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"notification?.displayed\" class=\"notification alert fixed-bottom m-4 alert-{{notification?.type}}\"\n  role=\"alert\">\n  <div class=\"container\">\n    {{notification?.message}}\n  </div>\n</div>"

/***/ }),

/***/ "./src/shared/notification/notification.component.scss":
/*!*************************************************************!*\
  !*** ./src/shared/notification/notification.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notification {\n  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2); }\n"

/***/ }),

/***/ "./src/shared/notification/notification.component.ts":
/*!***********************************************************!*\
  !*** ./src/shared/notification/notification.component.ts ***!
  \***********************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/notification.service */ "./src/shared/services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(notificationService) {
        this.notificationService = notificationService;
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notificationService.notificationSubject.subscribe(function (notification) { return _this.notification = notification; });
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/shared/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/shared/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/shared/services/notification.service.ts":
/*!*****************************************************!*\
  !*** ./src/shared/services/notification.service.ts ***!
  \*****************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_shared_models_notification_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/models/notification.model */ "./src/shared/models/notification.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this.notificationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    NotificationService.prototype.sendNotificationTemp = function (message, type) {
        var _this = this;
        this.notification = new src_shared_models_notification_model__WEBPACK_IMPORTED_MODULE_2__["Notification"](message, type);
        this.emitNotificationSubject();
        setTimeout(function () {
            _this.notification.displayed = false;
        }, 4000);
    };
    NotificationService.prototype.emitNotificationSubject = function () {
        this.notificationSubject.next(this.notification);
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/shared/shared.module.ts":
/*!*************************************!*\
  !*** ./src/shared/shared.module.ts ***!
  \*************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification/notification.component */ "./src/shared/notification/notification.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/store/store */ "./src/store/store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [
                src_store_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
            ],
            declarations: [_notification_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"]],
            exports: [
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! exports provided: DefaultStoreDataNames, Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultStoreDataNames", function() { return DefaultStoreDataNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var initState = {
    devices: undefined,
    devicesEditable: false
};
var DefaultStoreDataNames;
(function (DefaultStoreDataNames) {
    DefaultStoreDataNames["DEVICES"] = "devices";
    DefaultStoreDataNames["DEVICES_EDITABLE"] = "devicesEditable";
})(DefaultStoreDataNames || (DefaultStoreDataNames = {}));
var Store = /** @class */ (function () {
    function Store() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](initState);
        this.store = this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
    }
    Object.defineProperty(Store.prototype, "value", {
        get: function () {
            return this.subject.value;
        },
        enumerable: true,
        configurable: true
    });
    Store.prototype.select = function (name) {
        return this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])(name));
    };
    Store.prototype.set = function (name, state) {
        var _a;
        this.subject.next(__assign({}, this.value, (_a = {}, _a[name] = state, _a)));
    };
    return Store;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/clementramondou/Workspace/domotic/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map