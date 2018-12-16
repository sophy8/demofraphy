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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        this.title = 'app';
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
/* harmony import */ var _prediction_prediction_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prediction/prediction.module */ "./src/app/prediction/prediction.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _shared_component_dialog_overview_example_dialog_overview_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/component/dialog-overview-example/dialog-overview-example.component */ "./src/app/shared/component/dialog-overview-example/dialog-overview-example.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _shared_component_dialog_overview_example_dialog_overview_example_component__WEBPACK_IMPORTED_MODULE_6__["DialogOverviewExampleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _prediction_prediction_module__WEBPACK_IMPORTED_MODULE_2__["PredictionModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"], {
                    useHash: true
                })
            ],
            providers: [],
            entryComponents: [_shared_component_dialog_overview_example_dialog_overview_example_component__WEBPACK_IMPORTED_MODULE_6__["DialogOverviewExampleComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _prediction_prediction_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prediction/prediction.routing */ "./src/app/prediction/prediction.routing.ts");

var ROUTES = _prediction_prediction_routing__WEBPACK_IMPORTED_MODULE_0__["predictionRoutes"].slice();


/***/ }),

/***/ "./src/app/prediction/long-term/long-term.component.html":
/*!***************************************************************!*\
  !*** ./src/app/prediction/long-term/long-term.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"data\">\n    <div class=\"file_upload\">\n        <input  type=\"file\" style=\"display: inline-block;\" (change)=\"incomingfile($event)\" placeholder=\"Upload file\" accept=\".xlsx\">\n  <mat-form-field class=\"number\">\n      <input type=\"number\" placeholder=\"на скільки років?\" [(ngModel)]=\"year\"  matInput>\n    </mat-form-field></div>\n    <div class=\"instruction\">\n      <button (click)=\"openDialog()\">Інструкція</button>\n    </div>\n  </div>\n  <button type=\"button\" class=\"btn btn-info\" (click)=\"ordinarMethod(year)\" >Звичайний метод</button>\n  <button (click)=\"Upload(year)\">Компонентний метод</button>\n  <div class=\"component\" *ngIf=\"component\">\n    <app-method-component-long [data]=\"data_tosend\"></app-method-component-long>\n  </div>\n  <div *ngIf=\"ordinar\">\n      <button  (click)=\"Upload(year)\" class=\"prognos\">ПРОГНОЗ</button>\n      <div  class=\"result\">\n          <div id=\"chartdiv\" style=\"width: 75%; height: 600px;\"></div>\n        <div class=\"result-text\" *ngIf=\"showResult\">\n          <div *ngFor=\"let res of new_ar\">\n            <span>{{res.year}}</span> - <span>{{res.value}}</span>\n          </div>\n        </div>\n        </div>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/prediction/long-term/long-term.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/prediction/long-term/long-term.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".result {\n  display: flex;\n  justify-content: center; }\n\nbutton {\n  border: 2px solid #4EC8C1;\n  background: rgba(255, 255, 255, 0.6);\n  font-weight: bold;\n  font-size: 24px;\n  color: #4EC8C1;\n  margin-left: 20px;\n  padding: 10px;\n  border-radius: 12px; }\n\n.data {\n  display: flex;\n  margin-bottom: 30px;\n  margin-top: 20px;\n  margin-right: 10px;\n  justify-content: space-between; }\n\n.number {\n  padding: 0 30px 0 0; }\n\n::ng-deep .mat-input-element {\n  caret-color: #4EC8C1; }\n\n::ng-deep .mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper .mat-form-field-label {\n  color: #4EC8C1; }\n\n::ng-deep.mat-form-field-appearance-legacy .mat-form-field-label {\n  color: #4EC8C1; }\n\n::ng-deep .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #4EC8C1; }\n\n::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\n  color: #4EC8C1; }\n\ninput[type=\"file\"] {\n  background: rgba(255, 255, 255, 0.6);\n  font-size: 19px;\n  color: #4EC8C1;\n  margin-left: 20px;\n  padding: 16px 0 7px 0;\n  border-radius: 12px; }\n\n.prognos {\n  margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/prediction/long-term/long-term.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/prediction/long-term/long-term.component.ts ***!
  \*************************************************************/
/*! exports provided: LongTermComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongTermComponent", function() { return LongTermComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_component_dialog_overview_example_dialog_overview_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/component/dialog-overview-example/dialog-overview-example.component */ "./src/app/shared/component/dialog-overview-example/dialog-overview-example.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LongTermComponent = /** @class */ (function () {
    function LongTermComponent(dialog) {
        this.dialog = dialog;
        this.ordinar = false;
        this.showResult = false;
        this.new_ar = [];
        this.data = [];
        this.component = false;
        this.years = [
            { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: 6 }, { value: 7 }, { value: 8 }, { value: 9 }, { value: 10 }
        ];
    }
    LongTermComponent.prototype.incomingfile = function (event) {
        this.file = event.target.files[0];
    };
    LongTermComponent.prototype.ngOnInit = function () {
        this.openDialog();
    };
    LongTermComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_shared_component_dialog_overview_example_dialog_overview_example_component__WEBPACK_IMPORTED_MODULE_6__["DialogOverviewExampleComponent"], {
            width: '250px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            //  this.animal = result;
        });
    };
    LongTermComponent.prototype.componentMethod = function (year, data) {
        this.component = true;
        this.data_tosend = data;
    };
    LongTermComponent.prototype.ordinarMethod = function (year) {
        this.ordinar = true;
    };
    LongTermComponent.prototype.Upload = function (year) {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            _this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(_this.arrayBuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i)
                arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = xlsx__WEBPACK_IMPORTED_MODULE_1__["read"](bstr, { type: "binary" });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            _this.v = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_to_json(worksheet, { raw: true });
            if (_this.ordinar) {
                _this.count(year, _this.v);
            }
            else {
                _this.componentMethod(year, _this.v);
            }
            // this.ordinarMethod(year,this.v);
            _this.showResult = true;
        };
        fileReader.readAsArrayBuffer(this.file);
    };
    /* Chart code */
    // Themes begin
    LongTermComponent.prototype.count = function (year, data) {
        var new_data;
        data.forEach(function (element) {
            new_data = Object.keys(element).map(function (i) {
                return { 'year': i, 'value': element[i] };
            });
        });
        this.between = new_data[1].year - new_data[0].year;
        var decada = this.between / 10;
        for (var i_1 = 0; i_1 < new_data.length; i_1++) {
            this.new_ar.push(new_data[i_1]);
        }
        console.log(this.new_ar);
        var n = 0;
        var i = this.new_ar.length - 1;
        while (n < (this.year - 1) / this.between) {
            var o = {};
            var x = this.new_ar[i].value - this.new_ar[i - 1].value;
            this.new_ar[i].x = x;
            var y = this.new_ar[i - 1].x ? this.new_ar[i].x - this.new_ar[i - 1].x : this.new_ar[i].x - 0;
            this.new_ar[i].y = y;
            this.new_ar[i].x_aver = this.new_ar[i - 1].x ? (this.new_ar[i].x + this.new_ar[i - 1].x) / 2 : (this.new_ar[i].x) / 2;
            this.new_ar[i].y_aver = this.new_ar[i - 1].y ? (this.new_ar[i].y + this.new_ar[i - 1].y) / 2 : (this.new_ar[i].y) / 2;
            if (i === this.new_ar.length - 1) {
                o = {
                    'year': +this.new_ar[i].year + this.between + '',
                    'value': Math.round(this.new_ar[i].value + decada * this.new_ar[i].x_aver + (decada * (decada + 1) / 2) * this.new_ar[i].y_aver)
                };
                this.new_ar.push(o);
                // this.new_ar[i].average=(this.new_ar[i].value+this.new_ar[i-1].value+this.new_ar[i+1].value)/3;
                i++;
            }
            // else {
            //   this.new_ar[i].average=(this.new_ar[i].value+this.new_ar[i-1].value+this.new_ar[i+1].value)/3;
            //   i++;
            // }
            // this.new_ar[i+1].year=''+ (+this.new_ar[i].year+1);
            // this.new_ar[i+1].value=this.new_ar[i].average+1/3*(this.new_ar[i].value-this.new_ar[i-1].value)
            n++;
        }
        // this.data.push(data);
        // this.new_ar.slice(this.new_ar.length-1-10);
        this.data.push(this.new_ar);
        console.log('jjj', this.data);
        this.create();
    };
    LongTermComponent.prototype.create = function () {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__["default"]);
        // Themes end
        // Create chart instance
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("chartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        chart.paddingRight = 20;
        // Add data
        chart.data = this.new_ar;
        // Create axes
        var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.minGridDistance = 50;
        categoryAxis.renderer.grid.template.location = 0.5;
        categoryAxis.startLocation = 0.5;
        categoryAxis.endLocation = 0.5;
        // Pre zoom
        chart.events.on("datavalidated", function () {
            categoryAxis.zoomToIndexes(Math.round(chart.data.length * 0.4), Math.round(chart.data.length * 0.55));
        });
        // Create value axis
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.baseValue = 0;
        // Create series
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]());
        series.dataFields.valueY = "value";
        series.dataFields.categoryX = "year";
        series.strokeWidth = 3;
        series.tensionX = 0.8;
        var bullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CircleBullet"]());
        bullet.strokeWidth = 0;
        bullet.adapter.add("fill", function (fill, target) {
            var values = target.dataItem.values;
            return values.valueY.value >= 0
                ? _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("red")
                : fill;
        });
        var range = valueAxis.createSeriesRange(series);
        range.value = 0;
        range.endValue = 1000;
        range.contents.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#FF0000");
        range.contents.fill = range.contents.stroke;
        // Add scrollbar
        var scrollbarX = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChartScrollbar"]();
        scrollbarX.series.push(series);
        chart.scrollbarX = scrollbarX;
    };
    LongTermComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-long-term',
            template: __webpack_require__(/*! ./long-term.component.html */ "./src/app/prediction/long-term/long-term.component.html"),
            styles: [__webpack_require__(/*! ./long-term.component.scss */ "./src/app/prediction/long-term/long-term.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], LongTermComponent);
    return LongTermComponent;
}());



/***/ }),

/***/ "./src/app/prediction/prediction.component.html":
/*!******************************************************!*\
  !*** ./src/app/prediction/prediction.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n    <div class=\"bg\">\r\n            <button routerLink=\"/short-term\" mat-button>Короткотерміновий прогноз</button>\r\n            <button [routerLink] = \"['/long-term']\" routerLinkActive=\"active\" mat-button>Довготерміновий прогноз</button>\r\n            <button [routerLink] = \"['/real-value']\" routerLinkActive=\"active\" mat-button>Реальні показники</button>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/prediction/prediction.component.scss":
/*!******************************************************!*\
  !*** ./src/app/prediction/prediction.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  background-image: url('pexels-photo-842339.jpeg');\n  background-position: center;\n  background-size: cover;\n  height: 100vh; }\n  .main .bg {\n    background-color: rgba(255, 255, 255, 0.3);\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  .main .bg button {\n      border: 2px solid #4EC8C1;\n      background: rgba(255, 255, 255, 0.6);\n      font-weight: bold;\n      font-size: 24px;\n      color: #4EC8C1;\n      margin-left: 20px;\n      padding: 10px;\n      border-radius: 12px; }\n"

/***/ }),

/***/ "./src/app/prediction/prediction.component.ts":
/*!****************************************************!*\
  !*** ./src/app/prediction/prediction.component.ts ***!
  \****************************************************/
/*! exports provided: AppPredictionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPredictionComponent", function() { return AppPredictionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppPredictionComponent = /** @class */ (function () {
    function AppPredictionComponent() {
        this.title = 'app';
    }
    AppPredictionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prediction',
            template: __webpack_require__(/*! ./prediction.component.html */ "./src/app/prediction/prediction.component.html"),
            styles: [__webpack_require__(/*! ./prediction.component.scss */ "./src/app/prediction/prediction.component.scss")]
        })
    ], AppPredictionComponent);
    return AppPredictionComponent;
}());



/***/ }),

/***/ "./src/app/prediction/prediction.module.ts":
/*!*************************************************!*\
  !*** ./src/app/prediction/prediction.module.ts ***!
  \*************************************************/
/*! exports provided: PredictionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionModule", function() { return PredictionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _prediction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prediction.component */ "./src/app/prediction/prediction.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_layout_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/layout/material.module */ "./src/app/shared/layout/material.module.ts");
/* harmony import */ var _short_term_short_term_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./short-term/short-term.component */ "./src/app/prediction/short-term/short-term.component.ts");
/* harmony import */ var _long_term_long_term_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./long-term/long-term.component */ "./src/app/prediction/long-term/long-term.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_component_method_component_long_method_component_long_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/component/method-component-long/method-component-long.component */ "./src/app/shared/component/method-component-long/method-component-long.component.ts");
/* harmony import */ var _shared_component_short_method_method_component_short_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/component/short-method/method-component-short.component */ "./src/app/shared/component/short-method/method-component-short.component.ts");
/* harmony import */ var _real_values_real_values_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./real-values/real-values.component */ "./src/app/prediction/real-values/real-values.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var PredictionModule = /** @class */ (function () {
    function PredictionModule() {
    }
    PredictionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _shared_layout_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
            ],
            declarations: [_prediction_component__WEBPACK_IMPORTED_MODULE_2__["AppPredictionComponent"], _short_term_short_term_component__WEBPACK_IMPORTED_MODULE_5__["ShortTermComponent"], _long_term_long_term_component__WEBPACK_IMPORTED_MODULE_6__["LongTermComponent"], _shared_component_method_component_long_method_component_long_component__WEBPACK_IMPORTED_MODULE_9__["MethodComponentLongComponent"],
                _shared_component_short_method_method_component_short_component__WEBPACK_IMPORTED_MODULE_10__["MethodComponentShortComponent"], _real_values_real_values_component__WEBPACK_IMPORTED_MODULE_11__["RealValuesComponent"]]
        })
    ], PredictionModule);
    return PredictionModule;
}());



/***/ }),

/***/ "./src/app/prediction/prediction.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/prediction/prediction.routing.ts ***!
  \**************************************************/
/*! exports provided: predictionRoutes, appRoutingProviders, predictionRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "predictionRoutes", function() { return predictionRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "predictionRouting", function() { return predictionRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _prediction_short_term_short_term_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prediction/short-term/short-term.component */ "./src/app/prediction/short-term/short-term.component.ts");
/* harmony import */ var _prediction_long_term_long_term_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prediction/long-term/long-term.component */ "./src/app/prediction/long-term/long-term.component.ts");
/* harmony import */ var _prediction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prediction.component */ "./src/app/prediction/prediction.component.ts");
/* harmony import */ var _real_values_real_values_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./real-values/real-values.component */ "./src/app/prediction/real-values/real-values.component.ts");





var predictionRoutes = [
    { path: '',
        component: _prediction_component__WEBPACK_IMPORTED_MODULE_3__["AppPredictionComponent"] },
    {
        path: 'short-term',
        component: _prediction_short_term_short_term_component__WEBPACK_IMPORTED_MODULE_1__["ShortTermComponent"]
    },
    {
        path: 'long-term',
        component: _prediction_long_term_long_term_component__WEBPACK_IMPORTED_MODULE_2__["LongTermComponent"]
    },
    {
        path: 'real-value',
        component: _real_values_real_values_component__WEBPACK_IMPORTED_MODULE_4__["RealValuesComponent"]
    }
];
var appRoutingProviders = [];
var predictionRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(predictionRoutes);


/***/ }),

/***/ "./src/app/prediction/real-values/real-values.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/prediction/real-values/real-values.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"all-content\">\n<div class=\"main\">\n<p class=\"title\">Статева піраміда</p>\n<input  type=\"file\" style=\"display: inline-block;\" (change)=\"incomingfile($event)\" placeholder=\"Upload file\" accept=\".xlsx\">\n<button  (click)=\"Upload()\" class=\"prognos\">ПРОГНОЗ</button>\n<p class=\"title\">Навантаження віковими групами</p>\n<input  type=\"file\" style=\"display: inline-block;\" (change)=\"incomingfile2($event)\" placeholder=\"Upload file\" accept=\".xlsx\">\n<button  (click)=\"Upload2()\" class=\"prognos\">ПРОГНОЗ</button></div>\n<div class=\"instruction\">\n    <button (click)=\"openDialog()\">Інструкція</button>\n  </div>\n</div>\n<div *ngIf=\"piramida\">\n<div id=\"chartdiv\" style=\"width: 100%; height: 600px;\"></div>\n</div>\n<div *ngIf=\"diagrama\" class=\"result\">\n  <div id=\"chart\" style=\"width: 75%; height: 600px;\"></div>\n  <div class=\"results\">\n    <p>Кількість кожної вікової групи</p>\n    <div *ngFor=\"let i of array\">\n      <div>{{i.name}}</div>\n      <div>{{i.points}}</div>\n    </div>\n    <p>Частки дітей, старших та найстарших відповідно:</p>\n    <div *ngFor=\"let i of part_of_people\">\n<div> - {{i}}</div>\n    </div>\n    <p>Коефіцієнт Навантаження</p>\n    <div>pагальний {{this.generakKoeficient}}</div>\n    <div>lітьми {{this.childKoeficient}}</div>\n    <div>cтаршими {{this.oldKoeficient}}</div>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/prediction/real-values/real-values.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/prediction/real-values/real-values.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  display: flex;\n  flex-direction: column; }\n\n.all-content {\n  display: flex;\n  justify-content: space-between; }\n\n.result {\n  display: flex;\n  justify-content: center;\n  font-size: 18px; }\n\n.title {\n  text-transform: uppercase;\n  font-weight: bold; }\n\nbutton {\n  border: 2px solid #4EC8C1;\n  background: rgba(255, 255, 255, 0.6);\n  font-weight: bold;\n  font-size: 24px;\n  color: #4EC8C1;\n  margin-left: 20px;\n  padding: 10px;\n  border-radius: 12px;\n  width: 200px; }\n\n.data {\n  display: flex;\n  margin-bottom: 30px;\n  margin-top: 20px;\n  margin-right: 10px;\n  justify-content: space-between; }\n\n.number {\n  padding: 0 30px 0 0; }\n\n::ng-deep .mat-input-element {\n  caret-color: #4EC8C1; }\n\n::ng-deep .mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper .mat-form-field-label {\n  color: #4EC8C1; }\n\n::ng-deep.mat-form-field-appearance-legacy .mat-form-field-label {\n  color: #4EC8C1; }\n\n::ng-deep .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #4EC8C1; }\n\n::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\n  color: #4EC8C1; }\n\ninput[type=\"file\"] {\n  background: rgba(255, 255, 255, 0.6);\n  font-size: 19px;\n  color: #4EC8C1;\n  margin-left: 20px;\n  padding: 16px 0 7px 0;\n  border-radius: 12px; }\n\n.prognos {\n  margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/prediction/real-values/real-values.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/prediction/real-values/real-values.component.ts ***!
  \*****************************************************************/
/*! exports provided: RealValuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealValuesComponent", function() { return RealValuesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_component_dialog_overview_example_dialog_overview_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/component/dialog-overview-example/dialog-overview-example.component */ "./src/app/shared/component/dialog-overview-example/dialog-overview-example.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RealValuesComponent = /** @class */ (function () {
    function RealValuesComponent(dialog) {
        this.dialog = dialog;
        this.part_of_people = [];
        this.all_of_people = 0;
        this.array = [];
        this.piramida = false;
        this.diagrama = false;
    }
    RealValuesComponent.prototype.ngOnInit = function () {
        this.openDialog();
    };
    RealValuesComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_shared_component_dialog_overview_example_dialog_overview_example_component__WEBPACK_IMPORTED_MODULE_5__["DialogOverviewExampleComponent"], {
            width: '250px'
        });
    };
    RealValuesComponent.prototype.incomingfile = function (event) {
        this.file = event.target.files[0];
    };
    RealValuesComponent.prototype.Upload = function () {
        var _this = this;
        this.piramida = true;
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            _this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(_this.arrayBuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i)
                arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = xlsx__WEBPACK_IMPORTED_MODULE_4__["read"](bstr, { type: "binary" });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            _this.v = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].sheet_to_json(worksheet, { raw: true });
            console.log(_this.v);
            _this.count(_this.v);
            // this.ordinarMethod(year,this.v);
            //  this.showResult=true;
        };
        fileReader.readAsArrayBuffer(this.file);
    };
    RealValuesComponent.prototype.incomingfile2 = function (event) {
        this.file = event.target.files[0];
    };
    RealValuesComponent.prototype.Upload2 = function () {
        var _this = this;
        this.diagrama = true;
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            _this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(_this.arrayBuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i)
                arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = xlsx__WEBPACK_IMPORTED_MODULE_4__["read"](bstr, { type: "binary" });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            _this.v = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].sheet_to_json(worksheet, { raw: true });
            console.log(_this.v);
            _this.count2(_this.v);
            // this.ordinarMethod(year,this.v);
            //  this.showResult=true;
        };
        fileReader.readAsArrayBuffer(this.file);
    };
    RealValuesComponent.prototype.count = function (data) {
        var o = {};
        for (var i = 0; i < Object.keys(data[0]).length; i++) {
            var element = Object.keys(data[0])[i];
            o = {
                "age": element,
                "male": data[0][i],
                "female": data[1][i]
            };
            this.array.push(o);
        }
        this.create(this.array);
    };
    RealValuesComponent.prototype.count2 = function (data) {
        var _this = this;
        var o = {};
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("chart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChart"]);
        for (var i = 0; i < Object.keys(data[0]).length; i++) {
            var element = Object.keys(data[0])[i];
            o = {
                "name": element,
                "points": data[0][element],
                "color": chart.colors.next(),
                "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"
            };
            this.all_of_people = this.all_of_people + o['points'];
            this.array.push(o);
        }
        this.part_of_people = this.array.map(function (el) {
            return (el.points / _this.all_of_people) * 100;
        });
        this.generakKoeficient = (this.array[0].points + this.array[2].points) / this.array[1].points * 1000;
        this.childKoeficient = this.array[0].points / this.array[1].points * 1000;
        this.oldKoeficient = this.array[2].points / this.array[1].points * 1000;
        this.create2(this.array);
    };
    RealValuesComponent.prototype.create = function (data) {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);
        // Themes end
        var mainContainer = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("chartdiv", _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Container"]);
        mainContainer.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](100);
        mainContainer.height = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](100);
        mainContainer.layout = "horizontal";
        var usData = data;
        var maleChart = mainContainer.createChild(_amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChart"]);
        maleChart.paddingRight = 0;
        maleChart.data = JSON.parse(JSON.stringify(usData));
        // Create axes
        var maleCategoryAxis = maleChart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CategoryAxis"]());
        maleCategoryAxis.dataFields.category = "age";
        maleCategoryAxis.renderer.grid.template.location = 0;
        //maleCategoryAxis.renderer.inversed = true;
        maleCategoryAxis.renderer.minGridDistance = 15;
        var maleValueAxis = maleChart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
        maleValueAxis.renderer.inversed = true;
        maleValueAxis.min = 0;
        maleValueAxis.max = 10;
        maleValueAxis.strictMinMax = true;
        maleValueAxis.numberFormatter = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["NumberFormatter"]();
        maleValueAxis.numberFormatter.numberFormat = "#.#'%'";
        // Create series
        var maleSeries = maleChart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ColumnSeries"]());
        maleSeries.dataFields.valueX = "male";
        maleSeries.dataFields.valueXShow = "percent";
        maleSeries.calculatePercent = true;
        maleSeries.dataFields.categoryY = "age";
        maleSeries.interpolationDuration = 1000;
        maleSeries.columns.template.tooltipText = "Males, age{categoryY}: {valueX} ({valueX.percent.formatNumber('#.0')}%)";
        //maleSeries.sequencedInterpolation = true;
        var femaleChart = mainContainer.createChild(_amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChart"]);
        femaleChart.paddingLeft = 0;
        femaleChart.data = JSON.parse(JSON.stringify(usData));
        // Create axes
        var femaleCategoryAxis = femaleChart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CategoryAxis"]());
        femaleCategoryAxis.renderer.opposite = true;
        femaleCategoryAxis.dataFields.category = "age";
        femaleCategoryAxis.renderer.grid.template.location = 0;
        femaleCategoryAxis.renderer.minGridDistance = 15;
        var femaleValueAxis = femaleChart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
        femaleValueAxis.min = 0;
        femaleValueAxis.max = 10;
        femaleValueAxis.strictMinMax = true;
        femaleValueAxis.numberFormatter = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["NumberFormatter"]();
        femaleValueAxis.numberFormatter.numberFormat = "#.#'%'";
        femaleValueAxis.renderer.minLabelPosition = 0.01;
        // Create series
        var femaleSeries = femaleChart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ColumnSeries"]());
        femaleSeries.dataFields.valueX = "female";
        femaleSeries.dataFields.valueXShow = "percent";
        femaleSeries.calculatePercent = true;
        femaleSeries.fill = femaleChart.colors.getIndex(4);
        femaleSeries.stroke = femaleSeries.fill;
        //femaleSeries.sequencedInterpolation = true;
        femaleSeries.columns.template.tooltipText = "Females, age{categoryY}: {valueX} ({valueX.percent.formatNumber('#.0')}%)";
        femaleSeries.dataFields.categoryY = "age";
        femaleSeries.interpolationDuration = 1000;
    };
    RealValuesComponent.prototype.create2 = function (data) {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);
        // Themes end
        // Create chart instance
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("chart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChart"]);
        // Add data
        chart.data = data;
        // Create axes
        var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CategoryAxis"]());
        categoryAxis.dataFields.category = "name";
        categoryAxis.renderer.grid.template.disabled = true;
        categoryAxis.renderer.minGridDistance = 30;
        categoryAxis.renderer.inside = true;
        categoryAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#fff");
        categoryAxis.renderer.labels.template.fontSize = 20;
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
        valueAxis.renderer.grid.template.strokeDasharray = "4,4";
        valueAxis.renderer.labels.template.disabled = true;
        valueAxis.min = 0;
        // Do not crop bullets
        chart.maskBullets = false;
        // Remove padding
        chart.paddingBottom = 0;
        // Create series
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ColumnSeries"]());
        series.dataFields.valueY = "points";
        series.dataFields.categoryX = "name";
        series.columns.template.propertyFields.fill = "color";
        series.columns.template.propertyFields.stroke = "color";
        series.columns.template.column.cornerRadiusTopLeft = 15;
        series.columns.template.column.cornerRadiusTopRight = 15;
        series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/b]";
        // Add bullets
        var bullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["Bullet"]());
        var image = bullet.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Image"]);
        image.horizontalCenter = "middle";
        image.verticalCenter = "bottom";
        image.dy = 20;
        image.y = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](100);
        image.propertyFields.href = "bullet";
        image.tooltipText = series.columns.template.tooltipText;
        image.propertyFields.fill = "color";
        image.filters.push(new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["DropShadowFilter"]());
    };
    RealValuesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-real-values',
            template: __webpack_require__(/*! ./real-values.component.html */ "./src/app/prediction/real-values/real-values.component.html"),
            styles: [__webpack_require__(/*! ./real-values.component.scss */ "./src/app/prediction/real-values/real-values.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], RealValuesComponent);
    return RealValuesComponent;
}());



/***/ }),

/***/ "./src/app/prediction/short-term/short-term.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/prediction/short-term/short-term.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <div class=\"main\">\n<input  type=\"file\" style=\"display: inline-block;\" (change)=\"incomingfile($event)\" placeholder=\"Upload file\" accept=\".xlsx\">\n<mat-form-field>\n    <mat-select [(ngModel)]=\"year\"  placeholder=\"На скільки років\">\n      <mat-option *ngFor=\"let year of years\" [value]=\"year.value\">\n        {{year.value}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n<button type=\"button\" class=\"btn btn-info\" (click)=\"Upload(year)\" >Upload</button>\n<div class=\"result\">\n  <div id=\"chartdiv\" style=\"width: 75%; height: 600px;\"></div>\n<div class=\"result-text\" *ngIf=\"showResult\">\n  <div *ngFor=\"let res of new_ar\">\n    <span>{{res.year}}</span> - <span>{{res.value}}</span>\n  </div>\n</div>\n</div>\n</div> -->\n<div class=\"main\">\n  <div class=\"data\">\n    <div class=\"file_upload\">\n        <input  type=\"file\" style=\"display: inline-block;\" (change)=\"incomingfile($event)\" placeholder=\"Upload file\" accept=\".xlsx\">\n  <mat-form-field class=\"number\">\n      <mat-select [(ngModel)]=\"year\"  placeholder=\"На скільки років\">\n        <mat-option *ngFor=\"let year of years\" [value]=\"year.value\">\n          {{year.value}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n   </div>\n    <div class=\"instruction\">\n      <button (click)=\"openDialog()\">Інструкція</button>\n    </div>\n  </div>\n  <button type=\"button\" class=\"btn btn-info\" (click)=\"ordinarMethod(year)\" >Звичайний метод</button>\n  <button (click)=\"Upload(year)\">Компонентний метод</button>\n  \n  <div class=\"component\" *ngIf=\"componen\">\n   <app-method-component-short [data]=\"data_tosend\"></app-method-component-short> \n  </div>\n  <div *ngIf=\"ordinar\">\n      <button  (click)=\"Upload(year)\" class=\"prognos\">ПРОГНОЗ</button>\n      <div  class=\"result\">\n          <div id=\"chartdiv\" style=\"width: 75%; height: 600px;\"></div>\n        <div class=\"result-text\" *ngIf=\"showResult\">\n          <div *ngFor=\"let res of new_ar\">\n            <span>{{res.year}}</span> - <span>{{res.value}}</span>\n          </div>\n        </div>\n        </div>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/prediction/short-term/short-term.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/prediction/short-term/short-term.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".result {\n  display: flex;\n  justify-content: center; }\n\n.result {\n  display: flex;\n  justify-content: center; }\n\nbutton {\n  border: 2px solid #4EC8C1;\n  background: rgba(255, 255, 255, 0.6);\n  font-weight: bold;\n  font-size: 24px;\n  color: #4EC8C1;\n  margin-left: 20px;\n  padding: 10px;\n  border-radius: 12px; }\n\n.data {\n  display: flex;\n  margin-bottom: 30px;\n  margin-top: 20px;\n  margin-right: 10px;\n  justify-content: space-between; }\n\n.number {\n  padding: 0 30px 0 0; }\n\n::ng-deep .mat-input-element {\n  caret-color: #4EC8C1; }\n\n::ng-deep .mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper .mat-form-field-label {\n  color: #4EC8C1; }\n\n::ng-deep.mat-form-field-appearance-legacy .mat-form-field-label {\n  color: #4EC8C1; }\n\n::ng-deep .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #4EC8C1; }\n\n::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\n  color: #4EC8C1; }\n\ninput[type=\"file\"] {\n  background: rgba(255, 255, 255, 0.6);\n  font-size: 19px;\n  color: #4EC8C1;\n  margin-left: 20px;\n  padding: 16px 0 7px 0;\n  border-radius: 12px; }\n\n.prognos {\n  margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/prediction/short-term/short-term.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/prediction/short-term/short-term.component.ts ***!
  \***************************************************************/
/*! exports provided: ShortTermComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortTermComponent", function() { return ShortTermComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_component_dialog_overview_example_dialog_overview_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/component/dialog-overview-example/dialog-overview-example.component */ "./src/app/shared/component/dialog-overview-example/dialog-overview-example.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShortTermComponent = /** @class */ (function () {
    function ShortTermComponent(dialog) {
        this.dialog = dialog;
        this.showResult = false;
        this.new_ar = [];
        this.data = [];
        this.componen = false;
        this.ordinar = false;
        this.years = [
            { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: 6 }, { value: 7 }, { value: 8 }, { value: 9 }, { value: 10 }
        ];
        this.openDialog();
    }
    ShortTermComponent.prototype.incomingfile = function (event) {
        this.file = event.target.files[0];
    };
    ShortTermComponent.prototype.ngOnInit = function () {
    };
    ShortTermComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_shared_component_dialog_overview_example_dialog_overview_example_component__WEBPACK_IMPORTED_MODULE_6__["DialogOverviewExampleComponent"], {
            width: '250px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            //  this.animal = result;
        });
    };
    ShortTermComponent.prototype.componentMethod = function (year, data) {
        this.componen = true;
        this.data_tosend = data;
    };
    ShortTermComponent.prototype.ordinarMethod = function (year) {
        this.ordinar = true;
    };
    ShortTermComponent.prototype.Upload = function (year) {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            _this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(_this.arrayBuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i)
                arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = xlsx__WEBPACK_IMPORTED_MODULE_1__["read"](bstr, { type: "binary" });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            _this.v = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_to_json(worksheet, { raw: true });
            // this.count(year,this.v);    
            if (_this.ordinar) {
                _this.count(year, _this.v);
            }
            else {
                _this.componentMethod(year, _this.v);
            }
            _this.showResult = true;
        };
        fileReader.readAsArrayBuffer(this.file);
    };
    /* Chart code */
    // Themes begin
    ShortTermComponent.prototype.count = function (year, data) {
        var k;
        data.forEach(function (element) {
            k = Object.keys(element).map(function (i) {
                return { 'year': i, 'value': element[i] };
            });
        });
        this.between = k[1].year - k[0].year;
        for (var i_1 = 0; i_1 < k.length; i_1++) {
            this.new_ar.push(k[i_1]);
        }
        console.log(this.new_ar);
        var n = 0;
        var i = this.new_ar.length - 3;
        while (n < this.year + 1) {
            var o = {};
            if (i === this.new_ar.length - 2) {
                o = {
                    'year': +this.new_ar[i + 1].year + this.between + '',
                    'value': Math.round(this.new_ar[i - 1].average + 1 / 3 * (this.new_ar[i].value - this.new_ar[i - 1].value))
                };
                this.new_ar.push(o);
                this.new_ar[i].average = (this.new_ar[i].value + this.new_ar[i - 1].value + this.new_ar[i + 1].value) / 3;
                i++;
            }
            else {
                this.new_ar[i].average = (this.new_ar[i].value + this.new_ar[i - 1].value + this.new_ar[i + 1].value) / 3;
                i++;
            }
            // this.new_ar[i+1].year=''+ (+this.new_ar[i].year+1);
            // this.new_ar[i+1].value=this.new_ar[i].average+1/3*(this.new_ar[i].value-this.new_ar[i-1].value)
            n++;
        }
        // this.data.push(data);
        // this.new_ar.slice(this.new_ar.length-1-10);
        this.data.push(this.new_ar);
        console.log('jjj', this.data);
        this.create();
    };
    ShortTermComponent.prototype.create = function () {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__["default"]);
        // Themes end
        // Create chart instance
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("chartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        chart.paddingRight = 20;
        // Add data
        chart.data = this.new_ar;
        // Create axes
        var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.minGridDistance = 50;
        categoryAxis.renderer.grid.template.location = 0.5;
        categoryAxis.startLocation = 0.5;
        categoryAxis.endLocation = 0.5;
        // Pre zoom
        chart.events.on("datavalidated", function () {
            categoryAxis.zoomToIndexes(Math.round(chart.data.length * 0.4), Math.round(chart.data.length * 0.55));
        });
        // Create value axis
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.baseValue = 0;
        // Create series
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]());
        series.dataFields.valueY = "value";
        series.dataFields.categoryX = "year";
        series.strokeWidth = 3;
        series.tensionX = 0.8;
        var bullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CircleBullet"]());
        bullet.strokeWidth = 0;
        bullet.adapter.add("fill", function (fill, target) {
            var values = target.dataItem.values;
            return values.valueY.value >= 0
                ? _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("red")
                : fill;
        });
        var range = valueAxis.createSeriesRange(series);
        range.value = 0;
        range.endValue = 1000;
        range.contents.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#FF0000");
        range.contents.fill = range.contents.stroke;
        // Add scrollbar
        var scrollbarX = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChartScrollbar"]();
        scrollbarX.series.push(series);
        chart.scrollbarX = scrollbarX;
    };
    ShortTermComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-short-term',
            template: __webpack_require__(/*! ./short-term.component.html */ "./src/app/prediction/short-term/short-term.component.html"),
            styles: [__webpack_require__(/*! ./short-term.component.scss */ "./src/app/prediction/short-term/short-term.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], ShortTermComponent);
    return ShortTermComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/dialog-overview-example/dialog-overview-example.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/component/dialog-overview-example/dialog-overview-example.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"url.indexOf('long-term')>-1\">\n<h1 mat-dialog-title>Привіт, раді вітати у нашій системі! </h1>\n<h4>Ознайомтеся з інформацією, поданою нижче!</h4>\n<div mat-dialog-content>\nДана програма сприяє розробці демографічних прогнозів.\nВласне ця сторінка відповідає за довготерміновий прогноз з використанням технології - метод інкрементного росту.\nДля коректного пронозу Вам слід зроюити наступні кроки:\nА)Для ЗВИЧАЙНОГО МЕТОДУ\n<p>Завантажити файл програми Excel у вигляді як вказано на рисунку</p>\n<img width=\"100%\" src=\"../../../../assets/example.PNG\" alt=\"\">\nОБОВ'ЯЗКОВО дані мають бути в горизонтальному порядку, без назви рядків!\n<p>Вказати кількість років на які хочете робити прогноз, та натиснути кнопку  ЗВИЧАЙНИЙ МЕТОД</p>\n<p>Натиснути кнопку прогноз</p>\nБ)Для КОМПОНЕНТНОГО МЕТОДУ\n<p>Завантажити файл програми Excel у вигляді як вказано на рисунку</p>\n<img width=\"100%\" src=\"../../../../assets/migr.JPG\" alt=\"\">\n<p>Перший рядок - рік, другий - загальна кількість, третій - народжені, четвертий - померлі та п'ятий - ті що мігрували.</p>\nОБОВ'ЯЗКОВО дані мають бути в горизонтальному порядку, без назви рядків!\n<p>Вказати кількість років на які хочете робити прогноз, та натиснути кнопку  ЗВИЧАЙНИЙ МЕТОД</p>\n<p>Натиснути кнопку прогноз</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Дякую, ознайомлений/ознайомлена</button>\n  <!-- <button mat-button  cdkFocusInitial>Ok</button> -->\n <!-- // [mat-dialog-close]=\"data.animal\" -->\n</div></div>\n<div *ngIf=\"url.indexOf('real-value')>-1\">\n    <h1 mat-dialog-title>Привіт, раді вітати у нашій системі! </h1>\n    <h4>Ознайомтеся з інформацією, поданою нижче!</h4>\n    <div mat-dialog-content>\n    Дана програма сприяє розробці демографічних прогнозів.\n    Власне ця сторінка відповідає за визначення відношення кількості чоловіків \n    та жінок та визначення кількості навантаження певними групами генеральної сукупності.\n    А)Для СТАТЕВОЇ ПІРАМІДИ\n    <p>Завантажити файл програми Excel у вигляді як вказано на рисунку</p>\n    <img width=\"100%\" src=\"../../../../assets/male-female.JPG\" alt=\"\">\n    <p>Де перший рядок - це вік, другий - чоловіки, третій - жінки</p>\n    <p>Натиснути кнопку ПРОГНОЗ</p>\n    Б)Для НАВАНТАЖЕННЯ ВІКОВИМИ ГРУПАМИ\n    <p>Завантажити файл програми Excel у вигляді як вказано на рисунку</p>\n    <div class=\"navan\">    <img width=\"100%\" src=\"../../../../assets/navanta.JPG\" alt=\"\">\n    </div>\n    ОБОВ'ЯЗКОВО дані мають бути в горизонтальному порядку, без назви рядків!\n    <p>Натиснути кнопку ПРОГНОЗ</p>\n    </div>\n    <div mat-dialog-actions>\n      <button mat-button (click)=\"onNoClick()\">Дякую, ознайомлений/ознайомлена</button>\n</div></div>\n<div *ngIf=\"url.indexOf('short-term')>-1\">\n    <h1 mat-dialog-title>Привіт, раді вітати у нашій системі! </h1>\n    <h4>Ознайомтеся з інформацією, поданою нижче!</h4>\n    <div mat-dialog-content>\n    Дана програма сприяє розробці демографічних прогнозів.\n    Власне ця сторінка відповідає за короткотерміновий прогноз з використанням технології - метод ковзної середньої.\n    Для коректного пронозу Вам слід зроюити наступні кроки:\n    А)Для ЗВИЧАЙНОГО МЕТОДУ\n    <p>Завантажити файл програми Excel у вигляді як вказано на рисунку</p>\n    <img width=\"100%\" src=\"../../../../assets/example.PNG\" alt=\"\">\n    ОБОВ'ЯЗКОВО дані мають бути в горизонтальному порядку, без назви рядків!\n    <p>Вказати кількість років на які хочете робити прогноз, та натиснути кнопку  ЗВИЧАЙНИЙ МЕТОД</p>\n    <p>Натиснути кнопку прогноз</p>\n    Б)Для КОМПОНЕНТНОГО МЕТОДУ\n    <p>Завантажити файл програми Excel у вигляді як вказано на рисунку</p>\n    <img width=\"100%\" src=\"../../../../assets/migr.JPG\" alt=\"\">\n    <p>Перший рядок - рік, другий - загальна кількість, третій - народжені, четвертий - померлі та п'ятий - ті що мігрували.</p>\n    ОБОВ'ЯЗКОВО дані мають бути в горизонтальному порядку, без назви рядків!\n    <p>Вказати кількість років на які хочете робити прогноз, та натиснути кнопку  ЗВИЧАЙНИЙ МЕТОД</p>\n    <p>Натиснути кнопку прогноз</p>\n    </div>\n    <div mat-dialog-actions>\n      <button mat-button (click)=\"onNoClick()\">Дякую, ознайомлений/ознайомлена</button>\n    </div></div>"

/***/ }),

/***/ "./src/app/shared/component/dialog-overview-example/dialog-overview-example.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/component/dialog-overview-example/dialog-overview-example.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .cdk-overlay-pane {\n  width: 500px !important; }\n\n::ng-deep .mat-dialog-container {\n  height: 100vh; }\n\nbutton {\n  margin-top: 20px;\n  border: 2px solid #4EC8C1;\n  background: rgba(255, 255, 255, 0.6);\n  font-weight: bold;\n  font-size: 18px;\n  color: #4EC8C1;\n  margin-left: 43px;\n  padding: 10px;\n  border-radius: 12px; }\n\n.navan {\n  height: 126px;\n  width: 257px; }\n\n.navan img {\n    max-width: 100%;\n    max-height: 100%; }\n"

/***/ }),

/***/ "./src/app/shared/component/dialog-overview-example/dialog-overview-example.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/component/dialog-overview-example/dialog-overview-example.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DialogOverviewExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleComponent", function() { return DialogOverviewExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DialogOverviewExampleComponent = /** @class */ (function () {
    function DialogOverviewExampleComponent(router, dialogRef, data) {
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.url = this.router.url;
    }
    DialogOverviewExampleComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-overview-example',
            template: __webpack_require__(/*! ./dialog-overview-example.component.html */ "./src/app/shared/component/dialog-overview-example/dialog-overview-example.component.html"),
            styles: [__webpack_require__(/*! ./dialog-overview-example.component.scss */ "./src/app/shared/component/dialog-overview-example/dialog-overview-example.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogOverviewExampleComponent);
    return DialogOverviewExampleComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/method-component-long/method-component-long.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/component/method-component-long/method-component-long.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"prognos\" (click)=\"prediction()\">ПРОГНОЗ</button>\n<div class=\"method\">\n<div id=\"component\" style=\"width: 75%; height: 600px;\"></div>\n<div class=\"result-text\" *ngIf=\"showResult\">\n  <div *ngFor=\"let res of array\">\n    <span>{{res.year}}</span> - <span>{{res.value}}</span>\n  </div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/shared/component/method-component-long/method-component-long.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/component/method-component-long/method-component-long.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".method {\n  display: flex;\n  align-items: center;\n  justify-content: space-around; }\n\n.prognos {\n  margin-top: 30px;\n  border: 2px solid #4EC8C1;\n  background: rgba(255, 255, 255, 0.6);\n  font-weight: bold;\n  font-size: 24px;\n  color: #4EC8C1;\n  margin-left: 20px;\n  padding: 10px;\n  border-radius: 12px; }\n\n.result-text {\n  font-size: 24px;\n  color: #4EC8C1; }\n"

/***/ }),

/***/ "./src/app/shared/component/method-component-long/method-component-long.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/component/method-component-long/method-component-long.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: MethodComponentLongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MethodComponentLongComponent", function() { return MethodComponentLongComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MethodComponentLongComponent = /** @class */ (function () {
    function MethodComponentLongComponent() {
        this.migration = [];
        this.people = [];
        this.death = [];
        this.birth = [];
        this.new_ar = [];
        this.array = [];
        this.showResult = false;
    }
    MethodComponentLongComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        this.transformation();
    };
    MethodComponentLongComponent.prototype.transformation = function () {
        var _this = this;
        this.migration = Object.keys(this.data[1]).map(function (i) {
            return { 'year': i, 'value': _this.data[1][i] };
        });
        this.people = Object.keys(this.data[0]).map(function (i) {
            return { 'year': i, 'value': _this.data[0][i] };
        });
        this.birth = Object.keys(this.data[2]).map(function (i) {
            return { 'year': i, 'value': _this.data[2][i] };
        });
        this.death = Object.keys(this.data[3]).map(function (i) {
            return { 'year': i, 'value': _this.data[3][i] };
        });
    };
    MethodComponentLongComponent.prototype.count = function (data, year) {
        this.between = data[1].year - data[0].year;
        var decada = this.between / 10;
        console.log(data);
        // for(let i=0;i<data.length;i++){
        //   data.push(data[i])
        // }
        var n = 0;
        var i = data.length - 1;
        while (n < (year - 1) / this.between) {
            var o = {};
            var x = data[i].value - data[i - 1].value;
            data[i].x = x;
            var y = data[i - 1].x ? data[i].x - data[i - 1].x : data[i].x - 0;
            data[i].y = y;
            data[i].x_aver = data[i - 1].x ? (data[i].x + data[i - 1].x) / 2 : (data[i].x) / 2;
            data[i].y_aver = data[i - 1].y ? (data[i].y + data[i - 1].y) / 2 : (data[i].y) / 2;
            if (i === data.length - 1) {
                o = {
                    'year': +data[i].year + this.between + '',
                    'value': Math.round(data[i].value + decada * data[i].x_aver + (decada * (decada + 1) / 2) * data[i].y_aver)
                };
                data.push(o);
                i++;
            }
            n++;
        }
    };
    MethodComponentLongComponent.prototype.prediction = function () {
        this.count(this.people, 10);
        this.count(this.migration, 10);
        this.count(this.birth, 10);
        this.count(this.death, 10);
        this.array = [];
        for (var i = 0; i < this.people.length; i++) {
            var o = {
                'year': this.people[i].year,
                'value': this.people[i].value + this.migration[i].value + this.birth[i].value - this.death[i].value
            };
            this.array.push(o);
        }
        this.draw(this.array);
        this.showResult = true;
    };
    MethodComponentLongComponent.prototype.draw = function (data) {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);
        // Themes end
        // Create chart instance
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("component", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChart"]);
        chart.paddingRight = 20;
        // Add data
        chart.data = data;
        // Create axes
        var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CategoryAxis"]());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.minGridDistance = 50;
        categoryAxis.renderer.grid.template.location = 0.5;
        categoryAxis.startLocation = 0.5;
        categoryAxis.endLocation = 0.5;
        // Pre zoom
        chart.events.on("datavalidated", function () {
            categoryAxis.zoomToIndexes(Math.round(chart.data.length * 0.4), Math.round(chart.data.length * 0.55));
        });
        // Create value axis
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
        valueAxis.baseValue = 0;
        // Create series
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["LineSeries"]());
        series.dataFields.valueY = "value";
        series.dataFields.categoryX = "year";
        series.strokeWidth = 3;
        series.tensionX = 0.8;
        var bullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CircleBullet"]());
        bullet.strokeWidth = 0;
        bullet.adapter.add("fill", function (fill, target) {
            var values = target.dataItem.values;
            return values.valueY.value >= 0
                ? _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("red")
                : fill;
        });
        var range = valueAxis.createSeriesRange(series);
        range.value = 0;
        range.endValue = 1000;
        range.contents.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#FF0000");
        range.contents.fill = range.contents.stroke;
        // Add scrollbar
        var scrollbarX = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChartScrollbar"]();
        scrollbarX.series.push(series);
        chart.scrollbarX = scrollbarX;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MethodComponentLongComponent.prototype, "data", void 0);
    MethodComponentLongComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-method-component-long',
            template: __webpack_require__(/*! ./method-component-long.component.html */ "./src/app/shared/component/method-component-long/method-component-long.component.html"),
            styles: [__webpack_require__(/*! ./method-component-long.component.scss */ "./src/app/shared/component/method-component-long/method-component-long.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MethodComponentLongComponent);
    return MethodComponentLongComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/short-method/method-component-short.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/component/short-method/method-component-short.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"prognos\" (click)=\"prediction()\">ПРОГНОЗ</button>\r\n<div class=\"method\">\r\n<div id=\"components\" style=\"width: 75%; height: 600px;\"></div>\r\n<div class=\"result-text\" *ngIf=\"showResult\">\r\n  <div *ngFor=\"let res of array\">\r\n    <span>{{res.year}}</span> - <span>{{res.value}}</span>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/component/short-method/method-component-short.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/component/short-method/method-component-short.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".method {\n  display: flex;\n  align-items: center;\n  justify-content: space-around; }\n\n.prognos {\n  margin-top: 30px;\n  border: 2px solid #4EC8C1;\n  background: rgba(255, 255, 255, 0.6);\n  font-weight: bold;\n  font-size: 24px;\n  color: #4EC8C1;\n  margin-left: 20px;\n  padding: 10px;\n  border-radius: 12px; }\n\n.result-text {\n  font-size: 24px;\n  color: #4EC8C1; }\n"

/***/ }),

/***/ "./src/app/shared/component/short-method/method-component-short.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/component/short-method/method-component-short.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MethodComponentShortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MethodComponentShortComponent", function() { return MethodComponentShortComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MethodComponentShortComponent = /** @class */ (function () {
    function MethodComponentShortComponent() {
        this.migration = [];
        this.people = [];
        this.death = [];
        this.birth = [];
        this.new_ar = [];
        this.array = [];
        this.showResult = false;
    }
    MethodComponentShortComponent.prototype.ngOnInit = function () {
        console.log('ghh', this.data);
        this.transformation();
    };
    MethodComponentShortComponent.prototype.transformation = function () {
        var _this = this;
        this.migration = Object.keys(this.data[1]).map(function (i) {
            return { 'year': i, 'value': _this.data[1][i] };
        });
        this.people = Object.keys(this.data[0]).map(function (i) {
            return { 'year': i, 'value': _this.data[0][i] };
        });
        this.birth = Object.keys(this.data[2]).map(function (i) {
            return { 'year': i, 'value': _this.data[2][i] };
        });
        this.death = Object.keys(this.data[3]).map(function (i) {
            return { 'year': i, 'value': _this.data[3][i] };
        });
    };
    MethodComponentShortComponent.prototype.count = function (data, year) {
        this.between = data[1].year - data[0].year;
        var decada = this.between / 10;
        console.log(data);
        // for(let i=0;i<data.length;i++){
        //   data.push(data[i])
        // }
        var n = 0;
        var i = data.length - 1;
        while (n < (year - 1) / this.between) {
            var o = {};
            var x = data[i].value - data[i - 1].value;
            data[i].x = x;
            var y = data[i - 1].x ? data[i].x - data[i - 1].x : data[i].x - 0;
            data[i].y = y;
            data[i].x_aver = data[i - 1].x ? (data[i].x + data[i - 1].x) / 2 : (data[i].x) / 2;
            data[i].y_aver = data[i - 1].y ? (data[i].y + data[i - 1].y) / 2 : (data[i].y) / 2;
            if (i === data.length - 1) {
                o = {
                    'year': +data[i].year + this.between + '',
                    'value': Math.round(data[i].value + decada * data[i].x_aver + (decada * (decada + 1) / 2) * data[i].y_aver)
                };
                data.push(o);
                i++;
            }
            n++;
        }
    };
    MethodComponentShortComponent.prototype.prediction = function () {
        this.count(this.people, 10);
        this.count(this.migration, 10);
        this.count(this.birth, 10);
        this.count(this.death, 10);
        this.array = [];
        for (var i = 0; i < this.people.length; i++) {
            var o = {
                'year': this.people[i].year,
                'value': this.people[i].value + this.migration[i].value + this.birth[i].value - this.death[i].value
            };
            this.array.push(o);
        }
        this.draw(this.array);
        this.showResult = true;
    };
    MethodComponentShortComponent.prototype.draw = function (data) {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);
        // Themes end
        // Create chart instance
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("components", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChart"]);
        chart.paddingRight = 20;
        // Add data
        chart.data = data;
        // Create axes
        var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CategoryAxis"]());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.minGridDistance = 50;
        categoryAxis.renderer.grid.template.location = 0.5;
        categoryAxis.startLocation = 0.5;
        categoryAxis.endLocation = 0.5;
        // Pre zoom
        chart.events.on("datavalidated", function () {
            categoryAxis.zoomToIndexes(Math.round(chart.data.length * 0.4), Math.round(chart.data.length * 0.55));
        });
        // Create value axis
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
        valueAxis.baseValue = 0;
        // Create series
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["LineSeries"]());
        series.dataFields.valueY = "value";
        series.dataFields.categoryX = "year";
        series.strokeWidth = 3;
        series.tensionX = 0.8;
        var bullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CircleBullet"]());
        bullet.strokeWidth = 0;
        bullet.adapter.add("fill", function (fill, target) {
            var values = target.dataItem.values;
            return values.valueY.value >= 0
                ? _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("red")
                : fill;
        });
        var range = valueAxis.createSeriesRange(series);
        range.value = 0;
        range.endValue = 1000;
        range.contents.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#FF0000");
        range.contents.fill = range.contents.stroke;
        // Add scrollbar
        var scrollbarX = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChartScrollbar"]();
        scrollbarX.series.push(series);
        chart.scrollbarX = scrollbarX;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MethodComponentShortComponent.prototype, "data", void 0);
    MethodComponentShortComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-method-component-short',
            template: __webpack_require__(/*! ./method-component-short.component.html */ "./src/app/shared/component/short-method/method-component-short.component.html"),
            styles: [__webpack_require__(/*! ./method-component-short.component.scss */ "./src/app/shared/component/short-method/method-component-short.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MethodComponentShortComponent);
    return MethodComponentShortComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/material.module.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/layout/material.module.ts ***!
  \**************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\demography\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map