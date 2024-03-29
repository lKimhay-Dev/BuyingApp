(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["retailer-detail-detail-module"], {
    /***/
    "./node_modules/ion2-calendar/__ivy_ngcc__/dist/calendar.controller.js":
    /*!*****************************************************************************!*\
      !*** ./node_modules/ion2-calendar/__ivy_ngcc__/dist/calendar.controller.js ***!
      \*****************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIon2Calendar__ivy_ngcc__DistCalendarControllerJs(module, exports, __webpack_require__) {
      "use strict";

      var ɵngcc0 = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ɵngcc1 = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var __assign = this && this.__assign || function () {
        __assign = Object.assign || function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return __assign.apply(this, arguments);
      };

      var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var angular_1 = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var calendar_modal_1 = __webpack_require__(
      /*! ./components/calendar.modal */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/calendar.modal.js");

      var calendar_service_1 = __webpack_require__(
      /*! ./services/calendar.service */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/services/calendar.service.js");

      var CalendarController =
      /** @class */
      function () {
        function CalendarController(modalCtrl, calSvc) {
          this.modalCtrl = modalCtrl;
          this.calSvc = calSvc;
        }
        /**
         * @deprecated
         * @param {CalendarModalOptions} calendarOptions
         * @param {ModalOptions} modalOptions
         * @returns {any}
         */


        CalendarController.prototype.openCalendar = function (calendarOptions, modalOptions) {
          if (modalOptions === void 0) {
            modalOptions = {};
          }

          var options = this.calSvc.safeOpt(calendarOptions);
          return this.modalCtrl.create(__assign({
            component: calendar_modal_1.CalendarModal,
            componentProps: {
              options: options
            }
          }, modalOptions)).then(function (calendarModal) {
            calendarModal.present();
            return calendarModal.onDidDismiss().then(function (event) {
              return event.data ? Promise.resolve(event.data) : Promise.reject('cancelled');
            });
          });
        };

        CalendarController = __decorate([__metadata("design:paramtypes", [angular_1.ModalController, calendar_service_1.CalendarService])], CalendarController);

        CalendarController.ɵfac = function CalendarController_Factory(t) {
          return new (t || CalendarController)(ɵngcc0.ɵɵinject(ɵngcc1.ModalController), ɵngcc0.ɵɵinject(calendar_service_1.CalendarService));
        };

        CalendarController.ɵprov = ɵngcc0.ɵɵdefineInjectable({
          token: CalendarController,
          factory: function factory(t) {
            return CalendarController.ɵfac(t);
          }
        });
        /*@__PURE__*/

        (function () {
          ɵngcc0.ɵsetClassMetadata(CalendarController, [{
            type: core_1.Injectable
          }], function () {
            return [{
              type: ɵngcc1.ModalController
            }, {
              type: calendar_service_1.CalendarService
            }];
          }, null);
        })();

        return CalendarController;
      }();

      exports.CalendarController = CalendarController; //# sourceMappingURL=calendar.controller.js.map

      /***/
    },

    /***/
    "./node_modules/ion2-calendar/__ivy_ngcc__/dist/calendar.model.js":
    /*!************************************************************************!*\
      !*** ./node_modules/ion2-calendar/__ivy_ngcc__/dist/calendar.model.js ***!
      \************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIon2Calendar__ivy_ngcc__DistCalendarModelJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var CalendarMonth =
      /** @class */
      function () {
        function CalendarMonth() {}

        return CalendarMonth;
      }();

      exports.CalendarMonth = CalendarMonth;

      var CalendarResult =
      /** @class */
      function () {
        function CalendarResult() {}

        return CalendarResult;
      }();

      exports.CalendarResult = CalendarResult;

      var CalendarComponentMonthChange =
      /** @class */
      function () {
        function CalendarComponentMonthChange() {}

        return CalendarComponentMonthChange;
      }();

      exports.CalendarComponentMonthChange = CalendarComponentMonthChange; //# sourceMappingURL=calendar.model.js.map

      /***/
    },

    /***/
    "./node_modules/ion2-calendar/__ivy_ngcc__/dist/calendar.module.js":
    /*!*************************************************************************!*\
      !*** ./node_modules/ion2-calendar/__ivy_ngcc__/dist/calendar.module.js ***!
      \*************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIon2Calendar__ivy_ngcc__DistCalendarModuleJs(module, exports, __webpack_require__) {
      "use strict";

      var ɵngcc0 = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ɵngcc1 = __webpack_require__(
      /*! ./components/calendar.modal */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/calendar.modal.js");

      var ɵngcc2 = __webpack_require__(
      /*! ./components/calendar-week.component */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/calendar-week.component.js");

      var ɵngcc3 = __webpack_require__(
      /*! ./components/month.component */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/month.component.js");

      var ɵngcc4 = __webpack_require__(
      /*! ./components/calendar.component */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/calendar.component.js");

      var ɵngcc5 = __webpack_require__(
      /*! ./components/month-picker.component */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/month-picker.component.js");

      var ɵngcc6 = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var ɵngcc7 = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ɵngcc8 = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var common_1 = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var angular_1 = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var calendar_controller_1 = __webpack_require__(
      /*! ./calendar.controller */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/calendar.controller.js");

      var calendar_options_provider_1 = __webpack_require__(
      /*! ./services/calendar-options.provider */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/services/calendar-options.provider.js");

      var calendar_service_1 = __webpack_require__(
      /*! ./services/calendar.service */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/services/calendar.service.js");

      var components_1 = __webpack_require__(
      /*! ./components */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/index.js");

      function calendarController(modalCtrl, calSvc) {
        return new calendar_controller_1.CalendarController(modalCtrl, calSvc);
      }

      exports.calendarController = calendarController;

      var CalendarModule =
      /** @class */
      function () {
        function CalendarModule() {}

        CalendarModule_1 = CalendarModule;

        CalendarModule.forRoot = function (defaultOptions) {
          if (defaultOptions === void 0) {
            defaultOptions = {};
          }

          return {
            ngModule: CalendarModule_1,
            providers: [{
              provide: calendar_options_provider_1.DEFAULT_CALENDAR_OPTIONS,
              useValue: defaultOptions
            }]
          };
        };

        var CalendarModule_1;
        CalendarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({
          type: CalendarModule
        });
        CalendarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({
          factory: function CalendarModule_Factory(t) {
            return new (t || CalendarModule)();
          },
          providers: [calendar_service_1.CalendarService, {
            provide: calendar_controller_1.CalendarController,
            useFactory: calendarController,
            deps: [angular_1.ModalController, calendar_service_1.CalendarService]
          }],
          imports: [[common_1.CommonModule, angular_1.IonicModule, forms_1.FormsModule]]
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CalendarModule, {
            declarations: [ɵngcc1.CalendarModal, ɵngcc2.CalendarWeekComponent, ɵngcc3.MonthComponent, ɵngcc4.CalendarComponent, ɵngcc5.MonthPickerComponent],
            imports: [ɵngcc6.CommonModule, ɵngcc7.IonicModule, ɵngcc8.FormsModule],
            exports: [ɵngcc1.CalendarModal, ɵngcc2.CalendarWeekComponent, ɵngcc3.MonthComponent, ɵngcc4.CalendarComponent, ɵngcc5.MonthPickerComponent]
          });
        })();
        /*@__PURE__*/


        (function () {
          ɵngcc0.ɵsetClassMetadata(CalendarModule, [{
            type: core_1.NgModule,
            args: [{
              imports: [common_1.CommonModule, angular_1.IonicModule, forms_1.FormsModule],
              declarations: components_1.CALENDAR_COMPONENTS,
              exports: components_1.CALENDAR_COMPONENTS,
              entryComponents: components_1.CALENDAR_COMPONENTS,
              providers: [calendar_service_1.CalendarService, {
                provide: calendar_controller_1.CalendarController,
                useFactory: calendarController,
                deps: [angular_1.ModalController, calendar_service_1.CalendarService]
              }],
              schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
            }]
          }], function () {
            return [];
          }, null);
        })();

        return CalendarModule;
      }();

      exports.CalendarModule = CalendarModule; //# sourceMappingURL=calendar.module.js.map

      /***/
    },

    /***/
    "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/calendar-week.component.js":
    /*!********************************************************************************************!*\
      !*** ./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/calendar-week.component.js ***!
      \********************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIon2Calendar__ivy_ngcc__DistComponentsCalendarWeekComponentJs(module, exports, __webpack_require__) {
      "use strict";

      var ɵngcc0 = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ɵngcc1 = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ɵngcc2 = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function CalendarWeekComponent_li_2_Template(rf, ctx) {
        if (rf & 1) {
          ɵngcc0.ɵɵelementStart(0, "li");
          ɵngcc0.ɵɵtext(1);
          ɵngcc0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var w_r1 = ctx.$implicit;
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵtextInterpolate(w_r1);
        }
      }

      var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var config_1 = __webpack_require__(
      /*! ../config */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/config.js");

      var CalendarWeekComponent =
      /** @class */
      function () {
        function CalendarWeekComponent() {
          this._weekArray = config_1.defaults.WEEKS_FORMAT;
          this._displayWeekArray = this._weekArray;
          this._weekStart = 0;
          this.color = config_1.defaults.COLOR;
        }

        Object.defineProperty(CalendarWeekComponent.prototype, "weekArray", {
          set: function set(value) {
            if (value && value.length === 7) {
              this._weekArray = value.slice();
              this.adjustSort();
            }
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(CalendarWeekComponent.prototype, "weekStart", {
          set: function set(value) {
            if (value === 0 || value === 1) {
              this._weekStart = value;
              this.adjustSort();
            }
          },
          enumerable: true,
          configurable: true
        });

        CalendarWeekComponent.prototype.adjustSort = function () {
          if (this._weekStart === 1) {
            var cacheWeekArray = this._weekArray.slice();

            cacheWeekArray.push(cacheWeekArray.shift());
            this._displayWeekArray = cacheWeekArray.slice();
          } else if (this._weekStart === 0) {
            this._displayWeekArray = this._weekArray.slice();
          }
        };

        __decorate([core_1.Input(), __metadata("design:type", String)], CalendarWeekComponent.prototype, "color", void 0);

        __decorate([core_1.Input(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], CalendarWeekComponent.prototype, "weekArray", null);

        __decorate([core_1.Input(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], CalendarWeekComponent.prototype, "weekStart", null);

        CalendarWeekComponent = __decorate([__metadata("design:paramtypes", [])], CalendarWeekComponent);

        CalendarWeekComponent.ɵfac = function CalendarWeekComponent_Factory(t) {
          return new (t || CalendarWeekComponent)();
        };

        CalendarWeekComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({
          type: CalendarWeekComponent,
          selectors: [["ion-calendar-week"]],
          inputs: {
            color: "color",
            weekArray: "weekArray",
            weekStart: "weekStart"
          },
          decls: 3,
          vars: 5,
          consts: [["no-border-top", ""], [4, "ngFor", "ngForOf"]],
          template: function CalendarWeekComponent_Template(rf, ctx) {
            if (rf & 1) {
              ɵngcc0.ɵɵelementStart(0, "ion-toolbar", 0);
              ɵngcc0.ɵɵelementStart(1, "ul");
              ɵngcc0.ɵɵtemplate(2, CalendarWeekComponent_li_2_Template, 2, 1, "li", 1);
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementEnd();
            }

            if (rf & 2) {
              ɵngcc0.ɵɵclassMap("week-toolbar " + ctx.color);
              ɵngcc0.ɵɵadvance(1);
              ɵngcc0.ɵɵclassMap("week-title " + ctx.color);
              ɵngcc0.ɵɵadvance(1);
              ɵngcc0.ɵɵproperty("ngForOf", ctx._displayWeekArray);
            }
          },
          directives: [ɵngcc1.IonToolbar, ɵngcc2.NgForOf],
          styles: ["[_nghost-%COMP%]   .toolbar-background-md[_ngcontent-%COMP%], [_nghost-%COMP%]   .toolbar-background-ios[_ngcontent-%COMP%] {\n  background: transparent; }\n\n[_nghost-%COMP%]   .week-toolbar[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-top: 0; }\n  [_nghost-%COMP%]   .week-toolbar.primary[_ngcontent-%COMP%] {\n    --background: var(--ion-color-primary); }\n  [_nghost-%COMP%]   .week-toolbar.secondary[_ngcontent-%COMP%] {\n    --background: var(--ion-color-secondary); }\n  [_nghost-%COMP%]   .week-toolbar.danger[_ngcontent-%COMP%] {\n    --background: var(--ion-color-danger); }\n  [_nghost-%COMP%]   .week-toolbar.dark[_ngcontent-%COMP%] {\n    --background: var(--ion-color-dark); }\n  [_nghost-%COMP%]   .week-toolbar.light[_ngcontent-%COMP%] {\n    --background: var(--ion-color-light); }\n  [_nghost-%COMP%]   .week-toolbar.transparent[_ngcontent-%COMP%] {\n    --background: transparent; }\n  [_nghost-%COMP%]   .week-toolbar.toolbar-md[_ngcontent-%COMP%] {\n    min-height: 44px; }\n\n[_nghost-%COMP%]   .week-title[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 44px;\n  width: 100%;\n  padding: 15px 0;\n  color: #fff;\n  font-size: 0.9em; }\n  [_nghost-%COMP%]   .week-title.light[_ngcontent-%COMP%], [_nghost-%COMP%]   .week-title.transparent[_ngcontent-%COMP%] {\n    color: #9e9e9e; }\n  [_nghost-%COMP%]   .week-title[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style-type: none;\n    display: block;\n    float: left;\n    width: 14%;\n    text-align: center; }\n  [_nghost-%COMP%]   .week-title[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(7n), [_nghost-%COMP%]   .week-title[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(7n + 1) {\n    width: 15%; }"]
        });
        /*@__PURE__*/

        (function () {
          ɵngcc0.ɵsetClassMetadata(CalendarWeekComponent, [{
            type: core_1.Component,
            args: [{
              selector: 'ion-calendar-week',
              template: "\n    <ion-toolbar [class]=\"'week-toolbar ' + color\" no-border-top>\n      <ul [class]=\"'week-title ' + color\">\n        <li *ngFor=\"let w of _displayWeekArray\">{{ w }}</li>\n      </ul>\n    </ion-toolbar>\n  ",
              styles: [":host .toolbar-background-md,\n:host .toolbar-background-ios {\n  background: transparent; }\n\n:host .week-toolbar {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-top: 0; }\n  :host .week-toolbar.primary {\n    --background: var(--ion-color-primary); }\n  :host .week-toolbar.secondary {\n    --background: var(--ion-color-secondary); }\n  :host .week-toolbar.danger {\n    --background: var(--ion-color-danger); }\n  :host .week-toolbar.dark {\n    --background: var(--ion-color-dark); }\n  :host .week-toolbar.light {\n    --background: var(--ion-color-light); }\n  :host .week-toolbar.transparent {\n    --background: transparent; }\n  :host .week-toolbar.toolbar-md {\n    min-height: 44px; }\n\n:host .week-title {\n  margin: 0;\n  height: 44px;\n  width: 100%;\n  padding: 15px 0;\n  color: #fff;\n  font-size: 0.9em; }\n  :host .week-title.light, :host .week-title.transparent {\n    color: #9e9e9e; }\n  :host .week-title li {\n    list-style-type: none;\n    display: block;\n    float: left;\n    width: 14%;\n    text-align: center; }\n  :host .week-title li:nth-of-type(7n),\n  :host .week-title li:nth-of-type(7n + 1) {\n    width: 15%; }\n"]
            }]
          }], function () {
            return [];
          }, {
            color: [{
              type: core_1.Input
            }],
            weekArray: [{
              type: core_1.Input
            }],
            weekStart: [{
              type: core_1.Input
            }]
          });
        })();

        return CalendarWeekComponent;
      }();

      exports.CalendarWeekComponent = CalendarWeekComponent; //# sourceMappingURL=calendar-week.component.js.map

      /***/
    },

    /***/
    "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/calendar.component.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/calendar.component.js ***!
      \***************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIon2Calendar__ivy_ngcc__DistComponentsCalendarComponentJs(module, exports, __webpack_require__) {
      "use strict";

      var ɵngcc0 = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ɵngcc1 = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var ɵngcc2 = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ɵngcc3 = __webpack_require__(
      /*! ./calendar-week.component */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/calendar-week.component.js");

      var ɵngcc4 = __webpack_require__(
      /*! ./month.component */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/month.component.js");

      var ɵngcc5 = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var ɵngcc6 = __webpack_require__(
      /*! ./month-picker.component */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/month-picker.component.js");

      function CalendarComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = ɵngcc0.ɵɵgetCurrentView();

          ɵngcc0.ɵɵelementStart(0, "ion-button", 5);
          ɵngcc0.ɵɵlistener("click", function CalendarComponent_ng_template_1_Template_ion_button_click_0_listener() {
            ɵngcc0.ɵɵrestoreView(_r8);
            var ctx_r7 = ɵngcc0.ɵɵnextContext();
            return ctx_r7.switchView();
          });
          ɵngcc0.ɵɵpipe(1, "date");
          ɵngcc0.ɵɵtext(2);
          ɵngcc0.ɵɵelement(3, "ion-icon", 6);
          ɵngcc0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r0 = ɵngcc0.ɵɵnextContext();
          ɵngcc0.ɵɵattribute("aria-label", ɵngcc0.ɵɵpipeBind2(1, 3, ctx_r0.getDate(ctx_r0.monthOpt.original.time), ctx_r0.MONTH_DATE_FORMAT));
          ɵngcc0.ɵɵadvance(2);
          ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0._monthFormat(ctx_r0.monthOpt.original.time), " ");
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵproperty("name", ctx_r0._view === "days" ? ctx_r0._compatibleIcons.caretDown : ctx_r0._compatibleIcons.caretUp);
        }
      }

      function CalendarComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          ɵngcc0.ɵɵelementStart(0, "div", 7);
          ɵngcc0.ɵɵpipe(1, "date");
          ɵngcc0.ɵɵtext(2);
          ɵngcc0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r2 = ɵngcc0.ɵɵnextContext();
          ɵngcc0.ɵɵattribute("aria-label", ɵngcc0.ɵɵpipeBind2(1, 2, ctx_r2.getDate(ctx_r2.monthOpt.original.time), ctx_r2.MONTH_DATE_FORMAT));
          ɵngcc0.ɵɵadvance(2);
          ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r2._monthFormat(ctx_r2.monthOpt.original.time), " ");
        }
      }

      function CalendarComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = ɵngcc0.ɵɵgetCurrentView();

          ɵngcc0.ɵɵelementStart(0, "ion-button", 8);
          ɵngcc0.ɵɵlistener("click", function CalendarComponent_ng_template_4_Template_ion_button_click_0_listener() {
            ɵngcc0.ɵɵrestoreView(_r10);
            var ctx_r9 = ɵngcc0.ɵɵnextContext();
            return ctx_r9.prev();
          });
          ɵngcc0.ɵɵelement(1, "ion-icon", 9);
          ɵngcc0.ɵɵelementEnd();
          ɵngcc0.ɵɵelementStart(2, "ion-button", 10);
          ɵngcc0.ɵɵlistener("click", function CalendarComponent_ng_template_4_Template_ion_button_click_2_listener() {
            ɵngcc0.ɵɵrestoreView(_r10);
            var ctx_r11 = ɵngcc0.ɵɵnextContext();
            return ctx_r11.next();
          });
          ɵngcc0.ɵɵelement(3, "ion-icon", 9);
          ɵngcc0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r3 = ɵngcc0.ɵɵnextContext();
          ɵngcc0.ɵɵproperty("disabled", !ctx_r3.canBack());
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵproperty("name", ctx_r3._compatibleIcons.chevronBack);
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵproperty("disabled", !ctx_r3.canNext());
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵproperty("name", ctx_r3._compatibleIcons.chevronForward);
        }
      }

      function CalendarComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = ɵngcc0.ɵɵgetCurrentView();

          ɵngcc0.ɵɵelement(0, "ion-calendar-week", 11);
          ɵngcc0.ɵɵelementStart(1, "ion-calendar-month", 12);
          ɵngcc0.ɵɵlistener("ngModelChange", function CalendarComponent_ng_template_5_Template_ion_calendar_month_ngModelChange_1_listener($event) {
            ɵngcc0.ɵɵrestoreView(_r13);
            var ctx_r12 = ɵngcc0.ɵɵnextContext();
            return ctx_r12._calendarMonthValue = $event;
          })("change", function CalendarComponent_ng_template_5_Template_ion_calendar_month_change_1_listener($event) {
            ɵngcc0.ɵɵrestoreView(_r13);
            var ctx_r14 = ɵngcc0.ɵɵnextContext();
            return ctx_r14.onChanged($event);
          })("swipe", function CalendarComponent_ng_template_5_Template_ion_calendar_month_swipe_1_listener($event) {
            ɵngcc0.ɵɵrestoreView(_r13);
            var ctx_r15 = ɵngcc0.ɵɵnextContext();
            return ctx_r15.swipeEvent($event);
          })("select", function CalendarComponent_ng_template_5_Template_ion_calendar_month_select_1_listener($event) {
            ɵngcc0.ɵɵrestoreView(_r13);
            var ctx_r16 = ɵngcc0.ɵɵnextContext();
            return ctx_r16.select.emit($event);
          })("selectStart", function CalendarComponent_ng_template_5_Template_ion_calendar_month_selectStart_1_listener($event) {
            ɵngcc0.ɵɵrestoreView(_r13);
            var ctx_r17 = ɵngcc0.ɵɵnextContext();
            return ctx_r17.selectStart.emit($event);
          })("selectEnd", function CalendarComponent_ng_template_5_Template_ion_calendar_month_selectEnd_1_listener($event) {
            ɵngcc0.ɵɵrestoreView(_r13);
            var ctx_r18 = ɵngcc0.ɵɵnextContext();
            return ctx_r18.selectEnd.emit($event);
          });
          ɵngcc0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r4 = ɵngcc0.ɵɵnextContext();
          ɵngcc0.ɵɵproperty("weekArray", ctx_r4._d.weekdays)("weekStart", ctx_r4._d.weekStart);
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵproperty("componentMode", true)("ngModel", ctx_r4._calendarMonthValue)("month", ctx_r4.monthOpt)("readonly", ctx_r4.readonly)("pickMode", ctx_r4._d.pickMode)("color", ctx_r4._d.color);
        }
      }

      function CalendarComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = ɵngcc0.ɵɵgetCurrentView();

          ɵngcc0.ɵɵelementStart(0, "ion-calendar-month-picker", 13);
          ɵngcc0.ɵɵlistener("select", function CalendarComponent_ng_template_6_Template_ion_calendar_month_picker_select_0_listener($event) {
            ɵngcc0.ɵɵrestoreView(_r20);
            var ctx_r19 = ɵngcc0.ɵɵnextContext();
            return ctx_r19.monthOnSelect($event);
          });
          ɵngcc0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r6 = ɵngcc0.ɵɵnextContext();
          ɵngcc0.ɵɵproperty("color", ctx_r6._d.color)("monthFormat", ctx_r6._options == null ? null : ctx_r6._options.monthPickerFormat)("month", ctx_r6.monthOpt);
        }
      }

      var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var calendar_service_1 = __webpack_require__(
      /*! ../services/calendar.service */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/services/calendar.service.js");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var moment = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");

      var config_1 = __webpack_require__(
      /*! ../config */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/config.js");

      var icons_1 = __webpack_require__(
      /*! ../utils/icons */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/utils/icons.js");

      exports.ION_CAL_VALUE_ACCESSOR = {
        provide: forms_1.NG_VALUE_ACCESSOR,
        useExisting: core_1.forwardRef(function () {
          return CalendarComponent;
        }),
        multi: true
      };

      var CalendarComponent =
      /** @class */
      function () {
        function CalendarComponent(calSvc) {
          this.calSvc = calSvc;
          this._view = 'days';
          this._calendarMonthValue = [null, null];
          this._showToggleButtons = true;
          this._showMonthPicker = true;
          this.format = config_1.defaults.DATE_FORMAT;
          this.type = 'string';
          this.readonly = false;
          this.change = new core_1.EventEmitter();
          this.monthChange = new core_1.EventEmitter();
          this.select = new core_1.EventEmitter();
          this.selectStart = new core_1.EventEmitter();
          this.selectEnd = new core_1.EventEmitter();
          this.MONTH_DATE_FORMAT = 'MMMM yyyy';

          this._onChanged = function () {};

          this._onTouched = function () {};

          if (icons_1.isIonIconsV4()) {
            this._compatibleIcons = {
              caretDown: 'md-arrow-dropdown',
              caretUp: 'md-arrow-dropup',
              chevronBack: 'ios-arrow-back',
              chevronForward: 'ios-arrow-forward'
            };
          } else {
            this._compatibleIcons = {
              caretDown: 'caret-down-outline',
              caretUp: 'caret-up-outline',
              chevronBack: 'chevron-back-outline',
              chevronForward: 'chevron-forward-outline'
            };
          }
        }

        Object.defineProperty(CalendarComponent.prototype, "showToggleButtons", {
          get: function get() {
            return this._showToggleButtons;
          },
          set: function set(value) {
            this._showToggleButtons = value;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "showMonthPicker", {
          get: function get() {
            return this._showMonthPicker;
          },
          set: function set(value) {
            this._showMonthPicker = value;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "options", {
          get: function get() {
            return this._options;
          },
          set: function set(value) {
            this._options = value;
            this.initOpt();

            if (this.monthOpt && this.monthOpt.original) {
              this.monthOpt = this.createMonth(this.monthOpt.original.time);
            }
          },
          enumerable: true,
          configurable: true
        });

        CalendarComponent.prototype.ngOnInit = function () {
          this.initOpt();
          this.monthOpt = this.createMonth(new Date().getTime());
        };

        CalendarComponent.prototype.getViewDate = function () {
          return this._handleType(this.monthOpt.original.time);
        };

        CalendarComponent.prototype.getDate = function (date) {
          return new Date(date);
        };

        CalendarComponent.prototype.setViewDate = function (value) {
          this.monthOpt = this.createMonth(this._payloadToTimeNumber(value));
        };

        CalendarComponent.prototype.switchView = function () {
          this._view = this._view === 'days' ? 'month' : 'days';
        };

        CalendarComponent.prototype.prev = function () {
          if (this._view === 'days') {
            this.backMonth();
          } else {
            this.prevYear();
          }
        };

        CalendarComponent.prototype.next = function () {
          if (this._view === 'days') {
            this.nextMonth();
          } else {
            this.nextYear();
          }
        };

        CalendarComponent.prototype.prevYear = function () {
          if (moment(this.monthOpt.original.time).year() === 1970) {
            return;
          }

          var backTime = moment(this.monthOpt.original.time).subtract(1, 'year').valueOf();
          this.monthOpt = this.createMonth(backTime);
        };

        CalendarComponent.prototype.nextYear = function () {
          var nextTime = moment(this.monthOpt.original.time).add(1, 'year').valueOf();
          this.monthOpt = this.createMonth(nextTime);
        };

        CalendarComponent.prototype.nextMonth = function () {
          var nextTime = moment(this.monthOpt.original.time).add(1, 'months').valueOf();
          this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(nextTime)
          });
          this.monthOpt = this.createMonth(nextTime);
        };

        CalendarComponent.prototype.canNext = function () {
          if (!this._d.to || this._view !== 'days') {
            return true;
          }

          return this.monthOpt.original.time < moment(this._d.to).valueOf();
        };

        CalendarComponent.prototype.backMonth = function () {
          var backTime = moment(this.monthOpt.original.time).subtract(1, 'months').valueOf();
          this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(backTime)
          });
          this.monthOpt = this.createMonth(backTime);
        };

        CalendarComponent.prototype.canBack = function () {
          if (!this._d.from || this._view !== 'days') {
            return true;
          }

          return this.monthOpt.original.time > moment(this._d.from).valueOf();
        };

        CalendarComponent.prototype.monthOnSelect = function (month) {
          this._view = 'days';
          var newMonth = moment(this.monthOpt.original.time).month(month).valueOf();
          this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(newMonth)
          });
          this.monthOpt = this.createMonth(newMonth);
        };

        CalendarComponent.prototype.onChanged = function ($event) {
          switch (this._d.pickMode) {
            case config_1.pickModes.SINGLE:
              var date = this._handleType($event[0].time);

              this._onChanged(date);

              this.change.emit(date);
              break;

            case config_1.pickModes.RANGE:
              if ($event[0] && $event[1]) {
                var rangeDate = {
                  from: this._handleType($event[0].time),
                  to: this._handleType($event[1].time)
                };

                this._onChanged(rangeDate);

                this.change.emit(rangeDate);
              }

              break;

            case config_1.pickModes.MULTI:
              var dates = [];

              for (var i = 0; i < $event.length; i++) {
                if ($event[i] && $event[i].time) {
                  dates.push(this._handleType($event[i].time));
                }
              }

              this._onChanged(dates);

              this.change.emit(dates);
              break;

            default:
          }
        };

        CalendarComponent.prototype.swipeEvent = function ($event) {
          var isNext = $event.deltaX < 0;

          if (isNext && this.canNext()) {
            this.nextMonth();
          } else if (!isNext && this.canBack()) {
            this.backMonth();
          }
        };

        CalendarComponent.prototype._payloadToTimeNumber = function (value) {
          var date;

          if (this.type === 'string') {
            date = moment(value, this.format);
          } else {
            date = moment(value);
          }

          return date.valueOf();
        };

        CalendarComponent.prototype._monthFormat = function (date) {
          return moment(date).format(this._d.monthFormat.replace(/y/g, 'Y'));
        };

        CalendarComponent.prototype.initOpt = function () {
          if (this._options && typeof this._options.showToggleButtons === 'boolean') {
            this.showToggleButtons = this._options.showToggleButtons;
          }

          if (this._options && typeof this._options.showMonthPicker === 'boolean') {
            this.showMonthPicker = this._options.showMonthPicker;

            if (this._view !== 'days' && !this.showMonthPicker) {
              this._view = 'days';
            }
          }

          this._d = this.calSvc.safeOpt(this._options || {});
        };

        CalendarComponent.prototype.createMonth = function (date) {
          return this.calSvc.createMonthsByPeriod(date, 1, this._d)[0];
        };

        CalendarComponent.prototype._createCalendarDay = function (value) {
          return this.calSvc.createCalendarDay(this._payloadToTimeNumber(value), this._d);
        };

        CalendarComponent.prototype._handleType = function (value) {
          var date = moment(value);

          switch (this.type) {
            case 'string':
              return date.format(this.format);

            case 'js-date':
              return date.toDate();

            case 'moment':
              return date;

            case 'time':
              return date.valueOf();

            case 'object':
              return date.toObject();
          }

          return date;
        };

        CalendarComponent.prototype.writeValue = function (obj) {
          this._writeValue(obj);

          if (obj) {
            if (this._calendarMonthValue[0]) {
              this.monthOpt = this.createMonth(this._calendarMonthValue[0].time);
            } else {
              this.monthOpt = this.createMonth(new Date().getTime());
            }
          }
        };

        CalendarComponent.prototype.registerOnChange = function (fn) {
          this._onChanged = fn;
        };

        CalendarComponent.prototype.registerOnTouched = function (fn) {
          this._onTouched = fn;
        };

        CalendarComponent.prototype._writeValue = function (value) {
          var _this = this;

          if (!value) {
            this._calendarMonthValue = [null, null];
            return;
          }

          switch (this._d.pickMode) {
            case 'single':
              this._calendarMonthValue[0] = this._createCalendarDay(value);
              break;

            case 'range':
              if (value.from) {
                this._calendarMonthValue[0] = value.from ? this._createCalendarDay(value.from) : null;
              }

              if (value.to) {
                this._calendarMonthValue[1] = value.to ? this._createCalendarDay(value.to) : null;
              }

              break;

            case 'multi':
              if (Array.isArray(value)) {
                this._calendarMonthValue = value.map(function (e) {
                  return _this._createCalendarDay(e);
                });
              } else {
                this._calendarMonthValue = [null, null];
              }

              break;

            default:
          }
        };

        __decorate([core_1.Input(), __metadata("design:type", String)], CalendarComponent.prototype, "format", void 0);

        __decorate([core_1.Input(), __metadata("design:type", String)], CalendarComponent.prototype, "type", void 0);

        __decorate([core_1.Input(), __metadata("design:type", Object)], CalendarComponent.prototype, "readonly", void 0);

        __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], CalendarComponent.prototype, "change", void 0);

        __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], CalendarComponent.prototype, "monthChange", void 0);

        __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], CalendarComponent.prototype, "select", void 0);

        __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], CalendarComponent.prototype, "selectStart", void 0);

        __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], CalendarComponent.prototype, "selectEnd", void 0);

        __decorate([core_1.Input(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], CalendarComponent.prototype, "options", null);

        CalendarComponent = __decorate([__metadata("design:paramtypes", [calendar_service_1.CalendarService])], CalendarComponent);

        CalendarComponent.ɵfac = function CalendarComponent_Factory(t) {
          return new (t || CalendarComponent)(ɵngcc0.ɵɵdirectiveInject(calendar_service_1.CalendarService));
        };

        CalendarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({
          type: CalendarComponent,
          selectors: [["ion-calendar"]],
          inputs: {
            format: "format",
            type: "type",
            readonly: "readonly",
            options: "options"
          },
          outputs: {
            change: "change",
            monthChange: "monthChange",
            select: "select",
            selectStart: "selectStart",
            selectEnd: "selectEnd"
          },
          features: [ɵngcc0.ɵɵProvidersFeature([exports.ION_CAL_VALUE_ACCESSOR])],
          decls: 8,
          vars: 5,
          consts: [[1, "title"], [3, "ngIf", "ngIfElse"], ["title", ""], [3, "ngIf"], ["monthPicker", ""], ["type", "button", "fill", "clear", 1, "switch-btn", 3, "click"], [1, "arrow-dropdown", 3, "name"], [1, "switch-btn"], ["type", "button", "fill", "clear", 1, "back", 3, "disabled", "click"], ["slot", "icon-only", "size", "small", 3, "name"], ["type", "button", "fill", "clear", 1, "forward", 3, "disabled", "click"], ["color", "transparent", 3, "weekArray", "weekStart"], [3, "componentMode", "ngModel", "month", "readonly", "pickMode", "color", "ngModelChange", "change", "swipe", "select", "selectStart", "selectEnd"], [3, "color", "monthFormat", "month", "select"]],
          template: function CalendarComponent_Template(rf, ctx) {
            if (rf & 1) {
              ɵngcc0.ɵɵelementStart(0, "div", 0);
              ɵngcc0.ɵɵtemplate(1, CalendarComponent_ng_template_1_Template, 4, 6, "ng-template", 1);
              ɵngcc0.ɵɵtemplate(2, CalendarComponent_ng_template_2_Template, 3, 5, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
              ɵngcc0.ɵɵtemplate(4, CalendarComponent_ng_template_4_Template, 4, 4, "ng-template", 3);
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵtemplate(5, CalendarComponent_ng_template_5_Template, 2, 8, "ng-template", 1);
              ɵngcc0.ɵɵtemplate(6, CalendarComponent_ng_template_6_Template, 1, 3, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
            }

            if (rf & 2) {
              var _r1 = ɵngcc0.ɵɵreference(3);

              var _r5 = ɵngcc0.ɵɵreference(7);

              ɵngcc0.ɵɵadvance(1);
              ɵngcc0.ɵɵproperty("ngIf", ctx._showMonthPicker)("ngIfElse", _r1);
              ɵngcc0.ɵɵadvance(3);
              ɵngcc0.ɵɵproperty("ngIf", ctx._showToggleButtons);
              ɵngcc0.ɵɵadvance(1);
              ɵngcc0.ɵɵproperty("ngIf", ctx._view === "days")("ngIfElse", _r5);
            }
          },
          directives: [ɵngcc1.NgIf, ɵngcc2.IonButton, ɵngcc2.IonIcon, ɵngcc3.CalendarWeekComponent, ɵngcc4.MonthComponent, ɵngcc5.NgControlStatus, ɵngcc5.NgModel, ɵngcc6.MonthPickerComponent],
          pipes: [ɵngcc1.DatePipe],
          styles: ["[_nghost-%COMP%] {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  display: inline-block;\n  background-color: #fff;\n  width: 100%; }\n  [_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n    padding: 0 40px 0 40px;\n    overflow: hidden; }\n    [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .forward[_ngcontent-%COMP%], [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .switch-btn[_ngcontent-%COMP%] {\n      display: block;\n      position: relative;\n      float: left;\n      min-height: 32px;\n      margin: 0;\n      padding: 0;\n      --padding-start: 0;\n      --padding-end: 0;\n      font-size: 15px; }\n    [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .forward[_ngcontent-%COMP%] {\n      color: #757575; }\n    [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n      margin-left: -100%;\n      left: -40px;\n      width: 40px; }\n    [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .forward[_ngcontent-%COMP%] {\n      margin-left: -40px;\n      right: -40px;\n      width: 40px; }\n    [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .switch-btn[_ngcontent-%COMP%] {\n      --margin-top: 0;\n      --margin-bottom: 0;\n      --margin-start: auto;\n      --margin-end: auto;\n      width: 100%;\n      text-align: center;\n      line-height: 32px;\n      color: #757575; }\n      [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .switch-btn[_ngcontent-%COMP%]   .arrow-dropdown[_ngcontent-%COMP%] {\n        margin-left: 5px; }"]
        });
        /*@__PURE__*/

        (function () {
          ɵngcc0.ɵsetClassMetadata(CalendarComponent, [{
            type: core_1.Component,
            args: [{
              selector: 'ion-calendar',
              providers: [exports.ION_CAL_VALUE_ACCESSOR],
              template: "\n    <div class=\"title\">\n      <ng-template [ngIf]=\"_showMonthPicker\" [ngIfElse]=\"title\">\n        <ion-button type=\"button\"\n                    fill=\"clear\"\n                    class=\"switch-btn\"\n                    [attr.aria-label]=\"getDate(monthOpt.original.time) | date:MONTH_DATE_FORMAT\"\n                    (click)=\"switchView()\">\n          {{ _monthFormat(monthOpt.original.time) }}\n          <ion-icon class=\"arrow-dropdown\"\n                    [name]=\"_view === 'days' ? _compatibleIcons.caretDown : _compatibleIcons.caretUp\"></ion-icon>\n        </ion-button>\n      </ng-template>\n      <ng-template #title>\n        <div class=\"switch-btn\"\n             [attr.aria-label]=\"getDate(monthOpt.original.time) | date:MONTH_DATE_FORMAT\">\n          {{ _monthFormat(monthOpt.original.time) }}\n        </div>\n      </ng-template>\n      <ng-template [ngIf]=\"_showToggleButtons\">\n        <ion-button type=\"button\" fill=\"clear\" class=\"back\" [disabled]=\"!canBack()\" (click)=\"prev()\">\n          <ion-icon slot=\"icon-only\" size=\"small\" [name]=\"_compatibleIcons.chevronBack\"></ion-icon>\n        </ion-button>\n        <ion-button type=\"button\" fill=\"clear\" class=\"forward\" [disabled]=\"!canNext()\" (click)=\"next()\">\n          <ion-icon slot=\"icon-only\" size=\"small\" [name]=\"_compatibleIcons.chevronForward\"></ion-icon>\n        </ion-button>\n      </ng-template>\n    </div>\n    <ng-template [ngIf]=\"_view === 'days'\" [ngIfElse]=\"monthPicker\">\n      <ion-calendar-week color=\"transparent\"\n                         [weekArray]=\"_d.weekdays\"\n                         [weekStart]=\"_d.weekStart\">\n      </ion-calendar-week>\n\n      <ion-calendar-month [componentMode]=\"true\"\n                          [(ngModel)]=\"_calendarMonthValue\"\n                          [month]=\"monthOpt\"\n                          [readonly]=\"readonly\"\n                          (change)=\"onChanged($event)\"\n                          (swipe)=\"swipeEvent($event)\"\n                          (select)=\"select.emit($event)\"\n                          (selectStart)=\"selectStart.emit($event)\"\n                          (selectEnd)=\"selectEnd.emit($event)\"\n                          [pickMode]=\"_d.pickMode\"\n                          [color]=\"_d.color\">\n      </ion-calendar-month>\n    </ng-template>\n\n    <ng-template #monthPicker>\n      <ion-calendar-month-picker [color]=\"_d.color\"\n                                 [monthFormat]=\"_options?.monthPickerFormat\"\n                                 (select)=\"monthOnSelect($event)\"\n                                 [month]=\"monthOpt\">\n      </ion-calendar-month-picker>\n    </ng-template>\n  ",
              styles: [":host {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  display: inline-block;\n  background-color: #fff;\n  width: 100%; }\n  :host .title {\n    padding: 0 40px 0 40px;\n    overflow: hidden; }\n    :host .title .back,\n    :host .title .forward,\n    :host .title .switch-btn {\n      display: block;\n      position: relative;\n      float: left;\n      min-height: 32px;\n      margin: 0;\n      padding: 0;\n      --padding-start: 0;\n      --padding-end: 0;\n      font-size: 15px; }\n    :host .title .back,\n    :host .title .forward {\n      color: #757575; }\n    :host .title .back {\n      margin-left: -100%;\n      left: -40px;\n      width: 40px; }\n    :host .title .forward {\n      margin-left: -40px;\n      right: -40px;\n      width: 40px; }\n    :host .title .switch-btn {\n      --margin-top: 0;\n      --margin-bottom: 0;\n      --margin-start: auto;\n      --margin-end: auto;\n      width: 100%;\n      text-align: center;\n      line-height: 32px;\n      color: #757575; }\n      :host .title .switch-btn .arrow-dropdown {\n        margin-left: 5px; }\n"]
            }]
          }], function () {
            return [{
              type: calendar_service_1.CalendarService
            }];
          }, {
            format: [{
              type: core_1.Input
            }],
            type: [{
              type: core_1.Input
            }],
            readonly: [{
              type: core_1.Input
            }],
            change: [{
              type: core_1.Output
            }],
            monthChange: [{
              type: core_1.Output
            }],
            select: [{
              type: core_1.Output
            }],
            selectStart: [{
              type: core_1.Output
            }],
            selectEnd: [{
              type: core_1.Output
            }],
            options: [{
              type: core_1.Input
            }]
          });
        })();

        return CalendarComponent;
      }();

      exports.CalendarComponent = CalendarComponent; //# sourceMappingURL=calendar.component.js.map

      /***/
    },

    /***/
    "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/calendar.modal.js":
    /*!***********************************************************************************!*\
      !*** ./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/calendar.modal.js ***!
      \***********************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIon2Calendar__ivy_ngcc__DistComponentsCalendarModalJs(module, exports, __webpack_require__) {
      "use strict";

      var ɵngcc0 = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ɵngcc1 = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ɵngcc2 = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var ɵngcc3 = __webpack_require__(
      /*! ./calendar-week.component */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/calendar-week.component.js");

      var ɵngcc4 = __webpack_require__(
      /*! ./month.component */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/month.component.js");

      var ɵngcc5 = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var _c0 = ["months"];

      function CalendarModal_span_4_Template(rf, ctx) {
        if (rf & 1) {
          ɵngcc0.ɵɵelementStart(0, "span");
          ɵngcc0.ɵɵtext(1);
          ɵngcc0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r0 = ɵngcc0.ɵɵnextContext();
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵtextInterpolate(ctx_r0._d.closeLabel);
        }
      }

      function CalendarModal_ion_icon_5_Template(rf, ctx) {
        if (rf & 1) {
          ɵngcc0.ɵɵelement(0, "ion-icon", 13);
        }
      }

      function CalendarModal_ion_button_9_span_1_Template(rf, ctx) {
        if (rf & 1) {
          ɵngcc0.ɵɵelementStart(0, "span");
          ɵngcc0.ɵɵtext(1);
          ɵngcc0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵtextInterpolate(ctx_r6._d.clearLabel);
        }
      }

      function CalendarModal_ion_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = ɵngcc0.ɵɵgetCurrentView();

          ɵngcc0.ɵɵelementStart(0, "ion-button", 14);
          ɵngcc0.ɵɵlistener("click", function CalendarModal_ion_button_9_Template_ion_button_click_0_listener() {
            ɵngcc0.ɵɵrestoreView(_r8);
            var ctx_r7 = ɵngcc0.ɵɵnextContext();
            return ctx_r7.clear();
          });
          ɵngcc0.ɵɵtemplate(1, CalendarModal_ion_button_9_span_1_Template, 2, 1, "span", 3);
          ɵngcc0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r2 = ɵngcc0.ɵɵnextContext();
          ɵngcc0.ɵɵproperty("disabled", !ctx_r2.canClear());
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵproperty("ngIf", ctx_r2._d.clearLabel !== "");
        }
      }

      function CalendarModal_ion_button_10_span_1_Template(rf, ctx) {
        if (rf & 1) {
          ɵngcc0.ɵɵelementStart(0, "span");
          ɵngcc0.ɵɵtext(1);
          ɵngcc0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r9 = ɵngcc0.ɵɵnextContext(2);
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵtextInterpolate(ctx_r9._d.doneLabel);
        }
      }

      function CalendarModal_ion_button_10_ion_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          ɵngcc0.ɵɵelement(0, "ion-icon", 17);
        }
      }

      function CalendarModal_ion_button_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = ɵngcc0.ɵɵgetCurrentView();

          ɵngcc0.ɵɵelementStart(0, "ion-button", 15);
          ɵngcc0.ɵɵlistener("click", function CalendarModal_ion_button_10_Template_ion_button_click_0_listener() {
            ɵngcc0.ɵɵrestoreView(_r12);
            var ctx_r11 = ɵngcc0.ɵɵnextContext();
            return ctx_r11.done();
          });
          ɵngcc0.ɵɵtemplate(1, CalendarModal_ion_button_10_span_1_Template, 2, 1, "span", 3);
          ɵngcc0.ɵɵtemplate(2, CalendarModal_ion_button_10_ion_icon_2_Template, 1, 0, "ion-icon", 16);
          ɵngcc0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r3 = ɵngcc0.ɵɵnextContext();
          ɵngcc0.ɵɵproperty("disabled", !ctx_r3.canDone());
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵproperty("ngIf", ctx_r3._d.doneLabel !== "" && !ctx_r3._d.doneIcon);
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵproperty("ngIf", ctx_r3._d.doneIcon);
        }
      }

      function CalendarModal_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = ɵngcc0.ɵɵgetCurrentView();

          ɵngcc0.ɵɵelementStart(0, "div", 18);
          ɵngcc0.ɵɵelementStart(1, "h4", 19);
          ɵngcc0.ɵɵtext(2);
          ɵngcc0.ɵɵelementEnd();
          ɵngcc0.ɵɵelementStart(3, "ion-calendar-month", 20);
          ɵngcc0.ɵɵlistener("change", function CalendarModal_ng_template_16_Template_ion_calendar_month_change_3_listener($event) {
            ɵngcc0.ɵɵrestoreView(_r16);
            var ctx_r15 = ɵngcc0.ɵɵnextContext();
            return ctx_r15.onChange($event);
          })("ngModelChange", function CalendarModal_ng_template_16_Template_ion_calendar_month_ngModelChange_3_listener($event) {
            ɵngcc0.ɵɵrestoreView(_r16);
            var ctx_r17 = ɵngcc0.ɵɵnextContext();
            return ctx_r17.datesTemp = $event;
          });
          ɵngcc0.ɵɵelementEnd();
          ɵngcc0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var month_r13 = ctx.$implicit;
          var i_r14 = ctx.index;
          var ctx_r5 = ɵngcc0.ɵɵnextContext();
          ɵngcc0.ɵɵattribute("id", "month-" + i_r14);
          ɵngcc0.ɵɵadvance(2);
          ɵngcc0.ɵɵtextInterpolate(ctx_r5._monthFormat(month_r13.original.date));
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵproperty("month", month_r13)("pickMode", ctx_r5._d.pickMode)("isSaveHistory", ctx_r5._d.isSaveHistory)("id", ctx_r5._d.id)("color", ctx_r5._d.color)("ngModel", ctx_r5.datesTemp);
        }
      }

      var _c1 = [[["", "sub-header", ""]]];

      var _c2 = function _c2(a0) {
        return {
          "multi-selection": a0
        };
      };

      var _c3 = ["[sub-header]"];

      var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var angular_1 = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var calendar_service_1 = __webpack_require__(
      /*! ../services/calendar.service */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/services/calendar.service.js");

      var moment = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");

      var config_1 = __webpack_require__(
      /*! ../config */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/config.js");

      var NUM_OF_MONTHS_TO_CREATE = 3;

      var CalendarModal =
      /** @class */
      function () {
        function CalendarModal(_renderer, _elementRef, params, modalCtrl, ref, calSvc) {
          this._renderer = _renderer;
          this._elementRef = _elementRef;
          this.params = params;
          this.modalCtrl = modalCtrl;
          this.ref = ref;
          this.calSvc = calSvc;
          this.ionPage = true;
          this.datesTemp = [null, null];
          this._scrollLock = true;
        }

        CalendarModal.prototype.ngOnInit = function () {
          this.init();
          this.initDefaultDate();
        };

        CalendarModal.prototype.ngAfterViewInit = function () {
          this.findCssClass();
          if (this._d.canBackwardsSelected) this.backwardsMonth();
          this.scrollToDefaultDate();
        };

        CalendarModal.prototype.init = function () {
          this._d = this.calSvc.safeOpt(this.options);
          this._d.showAdjacentMonthDay = false;
          this.step = this._d.step;

          if (this.step < this.calSvc.DEFAULT_STEP) {
            this.step = this.calSvc.DEFAULT_STEP;
          }

          this.calendarMonths = this.calSvc.createMonthsByPeriod(moment(this._d.from).valueOf(), this.findInitMonthNumber(this._d.defaultScrollTo) + this.step, this._d);
        };

        CalendarModal.prototype.initDefaultDate = function () {
          var _this = this;

          var _a = this._d,
              pickMode = _a.pickMode,
              defaultDate = _a.defaultDate,
              defaultDateRange = _a.defaultDateRange,
              defaultDates = _a.defaultDates;

          switch (pickMode) {
            case config_1.pickModes.SINGLE:
              if (defaultDate) {
                this.datesTemp[0] = this.calSvc.createCalendarDay(this._getDayTime(defaultDate), this._d);
              }

              break;

            case config_1.pickModes.RANGE:
              if (defaultDateRange) {
                if (defaultDateRange.from) {
                  this.datesTemp[0] = this.calSvc.createCalendarDay(this._getDayTime(defaultDateRange.from), this._d);
                }

                if (defaultDateRange.to) {
                  this.datesTemp[1] = this.calSvc.createCalendarDay(this._getDayTime(defaultDateRange.to), this._d);
                }
              }

              break;

            case config_1.pickModes.MULTI:
              if (defaultDates && defaultDates.length) {
                this.datesTemp = defaultDates.map(function (e) {
                  return _this.calSvc.createCalendarDay(_this._getDayTime(e), _this._d);
                });
              }

              break;

            default:
              this.datesTemp = [null, null];
          }
        };

        CalendarModal.prototype.findCssClass = function () {
          var _this = this;

          var cssClass = this._d.cssClass;

          if (cssClass) {
            cssClass.split(' ').forEach(function (_class) {
              if (_class.trim() !== '') _this._renderer.addClass(_this._elementRef.nativeElement, _class);
            });
          }
        };

        CalendarModal.prototype.onChange = function (data) {
          var _a = this._d,
              pickMode = _a.pickMode,
              autoDone = _a.autoDone;
          this.datesTemp = data;
          this.ref.detectChanges();

          if (pickMode !== config_1.pickModes.MULTI && autoDone && this.canDone()) {
            this.done();
          }

          this.repaintDOM();
        };

        CalendarModal.prototype.onCancel = function () {
          this.modalCtrl.dismiss(null, 'cancel');
        };

        CalendarModal.prototype.done = function () {
          var pickMode = this._d.pickMode;
          this.modalCtrl.dismiss(this.calSvc.wrapResult(this.datesTemp, pickMode), 'done');
        };

        CalendarModal.prototype.canDone = function () {
          if (!Array.isArray(this.datesTemp)) {
            return false;
          }

          var _a = this._d,
              pickMode = _a.pickMode,
              defaultEndDateToStartDate = _a.defaultEndDateToStartDate;

          switch (pickMode) {
            case config_1.pickModes.SINGLE:
              return !!(this.datesTemp[0] && this.datesTemp[0].time);

            case config_1.pickModes.RANGE:
              if (defaultEndDateToStartDate) {
                return !!(this.datesTemp[0] && this.datesTemp[0].time);
              }

              return !!(this.datesTemp[0] && this.datesTemp[1]) && !!(this.datesTemp[0].time && this.datesTemp[1].time);

            case config_1.pickModes.MULTI:
              return this.datesTemp.length > 0 && this.datesTemp.every(function (e) {
                return !!e && !!e.time;
              });

            default:
              return false;
          }
        };

        CalendarModal.prototype.clear = function () {
          this.datesTemp = [null, null];
        };

        CalendarModal.prototype.canClear = function () {
          return !!this.datesTemp[0];
        };

        CalendarModal.prototype.nextMonth = function (event) {
          var _a;

          var len = this.calendarMonths.length;
          var _final = this.calendarMonths[len - 1];
          var nextTime = moment(_final.original.time).add(1, 'M').valueOf();
          var rangeEnd = this._d.to ? moment(this._d.to).subtract(1, 'M') : 0;

          if (len <= 0 || rangeEnd !== 0 && moment(_final.original.time).isAfter(rangeEnd)) {
            event.target.disabled = true;
            return;
          }

          (_a = this.calendarMonths).push.apply(_a, this.calSvc.createMonthsByPeriod(nextTime, NUM_OF_MONTHS_TO_CREATE, this._d));

          event.target.complete();
          this.repaintDOM();
        };

        CalendarModal.prototype.backwardsMonth = function () {
          var _a;

          var first = this.calendarMonths[0];

          if (first.original.time <= 0) {
            this._d.canBackwardsSelected = false;
            return;
          }

          var firstTime = this.actualFirstTime = moment(first.original.time).subtract(NUM_OF_MONTHS_TO_CREATE, 'M').valueOf();

          (_a = this.calendarMonths).unshift.apply(_a, this.calSvc.createMonthsByPeriod(firstTime, NUM_OF_MONTHS_TO_CREATE, this._d));

          this.ref.detectChanges();
          this.repaintDOM();
        };

        CalendarModal.prototype.scrollToDate = function (date) {
          var _this = this;

          var defaultDateIndex = this.findInitMonthNumber(date);
          var monthElement = this.monthsEle.nativeElement.children["month-" + defaultDateIndex];
          var domElemReadyWaitTime = 300;
          setTimeout(function () {
            var defaultDateMonth = monthElement ? monthElement.offsetTop : 0;

            if (defaultDateIndex !== -1 && defaultDateMonth !== 0) {
              _this.content.scrollByPoint(0, defaultDateMonth, 128);
            }
          }, domElemReadyWaitTime);
        };

        CalendarModal.prototype.scrollToDefaultDate = function () {
          this.scrollToDate(this._d.defaultScrollTo);
        };

        CalendarModal.prototype.onScroll = function ($event) {
          var _this = this;

          if (!this._d.canBackwardsSelected) return;
          var detail = $event.detail;

          if (detail.scrollTop <= 200 && detail.velocityY < 0 && this._scrollLock) {
            this.content.getScrollElement().then(function (scrollElem) {
              _this._scrollLock = !1;
              var heightBeforeMonthPrepend = scrollElem.scrollHeight;

              _this.backwardsMonth();

              setTimeout(function () {
                var heightAfterMonthPrepend = scrollElem.scrollHeight;

                _this.content.scrollByPoint(0, heightAfterMonthPrepend - heightBeforeMonthPrepend, 0).then(function () {
                  _this._scrollLock = !0;
                });
              }, 180);
            });
          }
        };
        /**
         * In some older Safari versions (observed at Mac's Safari 10.0), there is an issue where style updates to
         * shadowRoot descendants don't cause a browser repaint.
         * See for more details: https://github.com/Polymer/polymer/issues/4701
         */


        CalendarModal.prototype.repaintDOM = function () {
          var _this = this;

          return this.content.getScrollElement().then(function (scrollElem) {
            // Update scrollElem to ensure that height of the container changes as Months are appended/prepended
            scrollElem.style.zIndex = '2';
            scrollElem.style.zIndex = 'initial'; // Update monthsEle to ensure selected state is reflected when tapping on a day

            _this.monthsEle.nativeElement.style.zIndex = '2';
            _this.monthsEle.nativeElement.style.zIndex = 'initial';
          });
        };

        CalendarModal.prototype.findInitMonthNumber = function (date) {
          var startDate = this.actualFirstTime ? moment(this.actualFirstTime) : moment(this._d.from);
          var defaultScrollTo = moment(date);
          var isAfter = defaultScrollTo.isAfter(startDate);
          if (!isAfter) return -1;

          if (this.showYearPicker) {
            startDate = moment(new Date(this.year, 0, 1));
          }

          return defaultScrollTo.diff(startDate, 'month');
        };

        CalendarModal.prototype._getDayTime = function (date) {
          return moment(moment(date).format('YYYY-MM-DD')).valueOf();
        };

        CalendarModal.prototype._monthFormat = function (date) {
          return moment(date).format(this._d.monthFormat.replace(/y/g, 'Y'));
        };

        CalendarModal.prototype.trackByIndex = function (index, momentDate) {
          return momentDate.original ? momentDate.original.time : index;
        };

        __decorate([core_1.ViewChild(angular_1.IonContent), __metadata("design:type", angular_1.IonContent)], CalendarModal.prototype, "content", void 0);

        __decorate([core_1.ViewChild('months'), __metadata("design:type", core_1.ElementRef)], CalendarModal.prototype, "monthsEle", void 0);

        __decorate([core_1.HostBinding('class.ion-page'), __metadata("design:type", Object)], CalendarModal.prototype, "ionPage", void 0);

        __decorate([core_1.Input(), __metadata("design:type", Object)], CalendarModal.prototype, "options", void 0);

        CalendarModal = __decorate([__metadata("design:paramtypes", [core_1.Renderer2, core_1.ElementRef, angular_1.NavParams, angular_1.ModalController, core_1.ChangeDetectorRef, calendar_service_1.CalendarService])], CalendarModal);

        CalendarModal.ɵfac = function CalendarModal_Factory(t) {
          return new (t || CalendarModal)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NavParams), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ModalController), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(calendar_service_1.CalendarService));
        };

        CalendarModal.ɵcmp = ɵngcc0.ɵɵdefineComponent({
          type: CalendarModal,
          selectors: [["ion-calendar-modal"]],
          viewQuery: function CalendarModal_Query(rf, ctx) {
            if (rf & 1) {
              ɵngcc0.ɵɵviewQuery(angular_1.IonContent, true);
              ɵngcc0.ɵɵviewQuery(_c0, true);
            }

            if (rf & 2) {
              var _t;

              ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.content = _t.first);
              ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.monthsEle = _t.first);
            }
          },
          hostVars: 2,
          hostBindings: function CalendarModal_HostBindings(rf, ctx) {
            if (rf & 2) {
              ɵngcc0.ɵɵclassProp("ion-page", ctx.ionPage);
            }
          },
          inputs: {
            options: "options"
          },
          ngContentSelectors: _c3,
          decls: 19,
          vars: 15,
          consts: [[3, "color"], ["slot", "start"], ["type", "button", "slot", "icon-only", "fill", "clear", 3, "click"], [4, "ngIf"], ["name", "close", 4, "ngIf"], ["slot", "end"], ["type", "button", "fill", "clear", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "slot", "icon-only", "fill", "clear", 3, "disabled", "click", 4, "ngIf"], [3, "color", "weekArray", "weekStart"], [1, "calendar-page", 3, "scrollEvents", "ngClass", "ionScroll"], ["months", ""], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], ["threshold", "25%", 3, "ionInfinite"], ["name", "close"], ["type", "button", "fill", "clear", 3, "disabled", "click"], ["type", "button", "slot", "icon-only", "fill", "clear", 3, "disabled", "click"], ["name", "checkmark", 4, "ngIf"], ["name", "checkmark"], [1, "month-box"], [1, "text-center", "month-title"], [3, "month", "pickMode", "isSaveHistory", "id", "color", "ngModel", "change", "ngModelChange"]],
          template: function CalendarModal_Template(rf, ctx) {
            if (rf & 1) {
              ɵngcc0.ɵɵprojectionDef(_c1);
              ɵngcc0.ɵɵelementStart(0, "ion-header");
              ɵngcc0.ɵɵelementStart(1, "ion-toolbar", 0);
              ɵngcc0.ɵɵelementStart(2, "ion-buttons", 1);
              ɵngcc0.ɵɵelementStart(3, "ion-button", 2);
              ɵngcc0.ɵɵlistener("click", function CalendarModal_Template_ion_button_click_3_listener() {
                return ctx.onCancel();
              });
              ɵngcc0.ɵɵtemplate(4, CalendarModal_span_4_Template, 2, 1, "span", 3);
              ɵngcc0.ɵɵtemplate(5, CalendarModal_ion_icon_5_Template, 1, 0, "ion-icon", 4);
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementStart(6, "ion-title");
              ɵngcc0.ɵɵtext(7);
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementStart(8, "ion-buttons", 5);
              ɵngcc0.ɵɵtemplate(9, CalendarModal_ion_button_9_Template, 2, 2, "ion-button", 6);
              ɵngcc0.ɵɵtemplate(10, CalendarModal_ion_button_10_Template, 3, 3, "ion-button", 7);
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵprojection(11);
              ɵngcc0.ɵɵelement(12, "ion-calendar-week", 8);
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementStart(13, "ion-content", 9);
              ɵngcc0.ɵɵlistener("ionScroll", function CalendarModal_Template_ion_content_ionScroll_13_listener($event) {
                return ctx.onScroll($event);
              });
              ɵngcc0.ɵɵelementStart(14, "div", null, 10);
              ɵngcc0.ɵɵtemplate(16, CalendarModal_ng_template_16_Template, 4, 8, "ng-template", 11);
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementStart(17, "ion-infinite-scroll", 12);
              ɵngcc0.ɵɵlistener("ionInfinite", function CalendarModal_Template_ion_infinite_scroll_ionInfinite_17_listener($event) {
                return ctx.nextMonth($event);
              });
              ɵngcc0.ɵɵelement(18, "ion-infinite-scroll-content");
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementEnd();
            }

            if (rf & 2) {
              ɵngcc0.ɵɵadvance(1);
              ɵngcc0.ɵɵproperty("color", ctx._d.color);
              ɵngcc0.ɵɵadvance(3);
              ɵngcc0.ɵɵproperty("ngIf", ctx._d.closeLabel !== "" && !ctx._d.closeIcon);
              ɵngcc0.ɵɵadvance(1);
              ɵngcc0.ɵɵproperty("ngIf", ctx._d.closeIcon);
              ɵngcc0.ɵɵadvance(2);
              ɵngcc0.ɵɵtextInterpolate(ctx._d.title);
              ɵngcc0.ɵɵadvance(2);
              ɵngcc0.ɵɵproperty("ngIf", !!ctx._d.clearLabel);
              ɵngcc0.ɵɵadvance(1);
              ɵngcc0.ɵɵproperty("ngIf", !ctx._d.autoDone);
              ɵngcc0.ɵɵadvance(2);
              ɵngcc0.ɵɵproperty("color", ctx._d.color)("weekArray", ctx._d.weekdays)("weekStart", ctx._d.weekStart);
              ɵngcc0.ɵɵadvance(1);
              ɵngcc0.ɵɵproperty("scrollEvents", true)("ngClass", ɵngcc0.ɵɵpureFunction1(13, _c2, ctx._d.pickMode === "multi"));
              ɵngcc0.ɵɵadvance(3);
              ɵngcc0.ɵɵproperty("ngForOf", ctx.calendarMonths)("ngForTrackBy", ctx.trackByIndex);
            }
          },
          directives: [ɵngcc1.IonHeader, ɵngcc1.IonToolbar, ɵngcc1.IonButtons, ɵngcc1.IonButton, ɵngcc2.NgIf, ɵngcc1.IonTitle, ɵngcc3.CalendarWeekComponent, ɵngcc1.IonContent, ɵngcc2.NgClass, ɵngcc2.NgForOf, ɵngcc1.IonInfiniteScroll, ɵngcc1.IonInfiniteScrollContent, ɵngcc1.IonIcon, ɵngcc4.MonthComponent, ɵngcc5.NgControlStatus, ɵngcc5.NgModel],
          styles: ["[_nghost-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  max-width: unset; }\n  [_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%]    > .select-icon-inner[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-text[_ngcontent-%COMP%] {\n    color: #fff !important; }\n  [_nghost-%COMP%]   ion-select.select-ios[_ngcontent-%COMP%] {\n    max-width: unset; }\n\n[_nghost-%COMP%]   .calendar-page[_ngcontent-%COMP%] {\n  background-color: #fbfbfb; }\n\n[_nghost-%COMP%]   .month-box[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding-bottom: 1em;\n  border-bottom: 1px solid #f1f1f1; }\n\n[_nghost-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 1.1rem;\n  display: block;\n  text-align: center;\n  margin: 1rem 0 0;\n  color: #929292; }"]
        });
        /*@__PURE__*/

        (function () {
          ɵngcc0.ɵsetClassMetadata(CalendarModal, [{
            type: core_1.Component,
            args: [{
              selector: 'ion-calendar-modal',
              template: "\n    <ion-header>\n      <ion-toolbar [color]=\"_d.color\">\n          <ion-buttons slot=\"start\">\n              <ion-button type='button' slot=\"icon-only\" fill=\"clear\" (click)=\"onCancel()\">\n              <span *ngIf=\"_d.closeLabel !== '' && !_d.closeIcon\">{{ _d.closeLabel }}</span>\n              <ion-icon *ngIf=\"_d.closeIcon\" name=\"close\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n\n          <ion-title>{{ _d.title }}</ion-title>\n\n          <ion-buttons slot=\"end\">\n            <ion-button type='button' *ngIf=\"!!_d.clearLabel\" fill=\"clear\" [disabled]=\"!canClear()\" (click)=\"clear()\">\n              <span *ngIf=\"_d.clearLabel !== ''\">{{ _d.clearLabel }}</span>\n            </ion-button>\n            <ion-button type='button' slot=\"icon-only\" *ngIf=\"!_d.autoDone\" fill=\"clear\" [disabled]=\"!canDone()\" (click)=\"done()\">\n              <span *ngIf=\"_d.doneLabel !== '' && !_d.doneIcon\">{{ _d.doneLabel }}</span>\n              <ion-icon *ngIf=\"_d.doneIcon\" name=\"checkmark\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n      </ion-toolbar>\n\n      <ng-content select=\"[sub-header]\"></ng-content>\n\n      <ion-calendar-week\n        [color]=\"_d.color\"\n        [weekArray]=\"_d.weekdays\"\n        [weekStart]=\"_d.weekStart\">\n      </ion-calendar-week>\n\n    </ion-header>\n\n    <ion-content (ionScroll)=\"onScroll($event)\" class=\"calendar-page\" [scrollEvents]=\"true\"\n                 [ngClass]=\"{'multi-selection': _d.pickMode === 'multi'}\">\n\n      <div #months>\n        <ng-template ngFor let-month [ngForOf]=\"calendarMonths\" [ngForTrackBy]=\"trackByIndex\" let-i=\"index\">\n          <div class=\"month-box\" [attr.id]=\"'month-' + i\">\n            <h4 class=\"text-center month-title\">{{ _monthFormat(month.original.date) }}</h4>\n            <ion-calendar-month [month]=\"month\"\n                                [pickMode]=\"_d.pickMode\"\n                                [isSaveHistory]=\"_d.isSaveHistory\"\n                                [id]=\"_d.id\"\n                                [color]=\"_d.color\"\n                                (change)=\"onChange($event)\"\n                                [(ngModel)]=\"datesTemp\">\n            </ion-calendar-month>\n          </div>\n        </ng-template>\n\n      </div>\n\n      <ion-infinite-scroll threshold=\"25%\" (ionInfinite)=\"nextMonth($event)\">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n    </ion-content>\n  ",
              styles: [":host ion-select {\n  max-width: unset; }\n  :host ion-select .select-icon > .select-icon-inner,\n  :host ion-select .select-text {\n    color: #fff !important; }\n  :host ion-select.select-ios {\n    max-width: unset; }\n\n:host .calendar-page {\n  background-color: #fbfbfb; }\n\n:host .month-box {\n  display: inline-block;\n  width: 100%;\n  padding-bottom: 1em;\n  border-bottom: 1px solid #f1f1f1; }\n\n:host h4 {\n  font-weight: 400;\n  font-size: 1.1rem;\n  display: block;\n  text-align: center;\n  margin: 1rem 0 0;\n  color: #929292; }\n"]
            }]
          }], function () {
            return [{
              type: ɵngcc0.Renderer2
            }, {
              type: ɵngcc0.ElementRef
            }, {
              type: ɵngcc1.NavParams
            }, {
              type: ɵngcc1.ModalController
            }, {
              type: ɵngcc0.ChangeDetectorRef
            }, {
              type: calendar_service_1.CalendarService
            }];
          }, {
            ionPage: [{
              type: core_1.HostBinding,
              args: ['class.ion-page']
            }],
            content: [{
              type: core_1.ViewChild,
              args: [angular_1.IonContent]
            }],
            monthsEle: [{
              type: core_1.ViewChild,
              args: ['months']
            }],
            options: [{
              type: core_1.Input
            }]
          });
        })();

        return CalendarModal;
      }();

      exports.CalendarModal = CalendarModal; //# sourceMappingURL=calendar.modal.js.map

      /***/
    },

    /***/
    "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/index.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/index.js ***!
      \**************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIon2Calendar__ivy_ngcc__DistComponentsIndexJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var calendar_modal_1 = __webpack_require__(
      /*! ./calendar.modal */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/calendar.modal.js");

      var calendar_week_component_1 = __webpack_require__(
      /*! ./calendar-week.component */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/calendar-week.component.js");

      var month_component_1 = __webpack_require__(
      /*! ./month.component */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/month.component.js");

      var calendar_component_1 = __webpack_require__(
      /*! ./calendar.component */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/calendar.component.js");

      var month_picker_component_1 = __webpack_require__(
      /*! ./month-picker.component */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/month-picker.component.js");

      exports.CALENDAR_COMPONENTS = [calendar_modal_1.CalendarModal, calendar_week_component_1.CalendarWeekComponent, month_component_1.MonthComponent, calendar_component_1.CalendarComponent, month_picker_component_1.MonthPickerComponent]; //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/month-picker.component.js":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/month-picker.component.js ***!
      \*******************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIon2Calendar__ivy_ngcc__DistComponentsMonthPickerComponentJs(module, exports, __webpack_require__) {
      "use strict";

      var ɵngcc0 = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ɵngcc1 = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function MonthPickerComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = ɵngcc0.ɵɵgetCurrentView();

          ɵngcc0.ɵɵelementStart(0, "div", 1);
          ɵngcc0.ɵɵelementStart(1, "button", 2);
          ɵngcc0.ɵɵlistener("click", function MonthPickerComponent_div_1_Template_button_click_1_listener() {
            ɵngcc0.ɵɵrestoreView(_r4);
            var i_r2 = ctx.index;
            var ctx_r3 = ɵngcc0.ɵɵnextContext();
            return ctx_r3._onSelect(i_r2);
          });
          ɵngcc0.ɵɵpipe(2, "date");
          ɵngcc0.ɵɵtext(3);
          ɵngcc0.ɵɵelementEnd();
          ɵngcc0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;
          var i_r2 = ctx.index;
          var ctx_r0 = ɵngcc0.ɵɵnextContext();
          ɵngcc0.ɵɵclassProp("this-month", i_r2 === ctx_r0._thisMonth.getMonth() && ctx_r0.month.original.year === ctx_r0._thisMonth.getFullYear());
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵattribute("aria-label", ɵngcc0.ɵɵpipeBind2(2, 4, ctx_r0.getDate(i_r2), ctx_r0.MONTH_FORMAT));
          ɵngcc0.ɵɵadvance(2);
          ɵngcc0.ɵɵtextInterpolate(item_r1);
        }
      }

      var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var calendar_model_1 = __webpack_require__(
      /*! ../calendar.model */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/calendar.model.js");

      var config_1 = __webpack_require__(
      /*! ../config */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/config.js");

      var MonthPickerComponent =
      /** @class */
      function () {
        function MonthPickerComponent() {
          this.color = config_1.defaults.COLOR;
          this.select = new core_1.EventEmitter();
          this._thisMonth = new Date();
          this._monthFormat = config_1.defaults.MONTH_FORMAT;
          this.MONTH_FORMAT = 'MMMM';
        }

        Object.defineProperty(MonthPickerComponent.prototype, "monthFormat", {
          get: function get() {
            return this._monthFormat;
          },
          set: function set(value) {
            if (Array.isArray(value) && value.length === 12) {
              this._monthFormat = value;
            }
          },
          enumerable: true,
          configurable: true
        });

        MonthPickerComponent.prototype._onSelect = function (month) {
          this.select.emit(month);
        };

        MonthPickerComponent.prototype.getDate = function (month) {
          return new Date(this._thisMonth.getFullYear(), month, 1);
        };

        __decorate([core_1.Input(), __metadata("design:type", calendar_model_1.CalendarMonth)], MonthPickerComponent.prototype, "month", void 0);

        __decorate([core_1.Input(), __metadata("design:type", Object)], MonthPickerComponent.prototype, "color", void 0);

        __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], MonthPickerComponent.prototype, "select", void 0);

        __decorate([core_1.Input(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], MonthPickerComponent.prototype, "monthFormat", null);

        MonthPickerComponent = __decorate([__metadata("design:paramtypes", [])], MonthPickerComponent);

        MonthPickerComponent.ɵfac = function MonthPickerComponent_Factory(t) {
          return new (t || MonthPickerComponent)();
        };

        MonthPickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({
          type: MonthPickerComponent,
          selectors: [["ion-calendar-month-picker"]],
          inputs: {
            color: "color",
            monthFormat: "monthFormat",
            month: "month"
          },
          outputs: {
            select: "select"
          },
          decls: 2,
          vars: 3,
          consts: [["class", "month-packer-item", 3, "this-month", 4, "ngFor", "ngForOf"], [1, "month-packer-item"], ["type", "button", 3, "click"]],
          template: function MonthPickerComponent_Template(rf, ctx) {
            if (rf & 1) {
              ɵngcc0.ɵɵelementStart(0, "div");
              ɵngcc0.ɵɵtemplate(1, MonthPickerComponent_div_1_Template, 4, 7, "div", 0);
              ɵngcc0.ɵɵelementEnd();
            }

            if (rf & 2) {
              ɵngcc0.ɵɵclassMap("month-picker " + ctx.color);
              ɵngcc0.ɵɵadvance(1);
              ɵngcc0.ɵɵproperty("ngForOf", ctx._monthFormat);
            }
          },
          directives: [ɵngcc1.NgForOf],
          pipes: [ɵngcc1.DatePipe],
          styles: ["[_nghost-%COMP%]   .month-picker[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  display: inline-block;\n  width: 100%; }\n\n[_nghost-%COMP%]   .month-packer-item[_ngcontent-%COMP%] {\n  width: 25%;\n  box-sizing: border-box;\n  float: left;\n  height: 50px;\n  padding: 5px; }\n  [_nghost-%COMP%]   .month-packer-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    border-radius: 32px;\n    width: 100%;\n    height: 100%;\n    font-size: 0.9em;\n    background-color: transparent; }\n\n[_nghost-%COMP%]   .month-picker.primary[_ngcontent-%COMP%]   .month-packer-item.this-month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-primary); }\n\n[_nghost-%COMP%]   .month-picker.primary[_ngcontent-%COMP%]   .month-packer-item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-primary);\n  color: #fff; }\n\n[_nghost-%COMP%]   .month-picker.secondary[_ngcontent-%COMP%]   .month-packer-item.this-month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-secondary); }\n\n[_nghost-%COMP%]   .month-picker.secondary[_ngcontent-%COMP%]   .month-packer-item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-secondary);\n  color: #fff; }\n\n[_nghost-%COMP%]   .month-picker.danger[_ngcontent-%COMP%]   .month-packer-item.this-month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-danger); }\n\n[_nghost-%COMP%]   .month-picker.danger[_ngcontent-%COMP%]   .month-packer-item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-danger);\n  color: #fff; }\n\n[_nghost-%COMP%]   .month-picker.dark[_ngcontent-%COMP%]   .month-packer-item.this-month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-dark); }\n\n[_nghost-%COMP%]   .month-picker.dark[_ngcontent-%COMP%]   .month-packer-item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-dark);\n  color: #fff; }\n\n[_nghost-%COMP%]   .month-picker.light[_ngcontent-%COMP%]   .month-packer-item.this-month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-light); }\n\n[_nghost-%COMP%]   .month-picker.light[_ngcontent-%COMP%]   .month-packer-item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n  color: #9e9e9e; }\n\n[_nghost-%COMP%]   .month-picker.transparent[_ngcontent-%COMP%] {\n  background-color: transparent; }\n  [_nghost-%COMP%]   .month-picker.transparent[_ngcontent-%COMP%]   .month-packer-item.this-month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    border: 1px solid var(--ion-color-light); }\n  [_nghost-%COMP%]   .month-picker.transparent[_ngcontent-%COMP%]   .month-packer-item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: var(--ion-color-light);\n    color: #9e9e9e; }\n\n[_nghost-%COMP%]   .month-picker.cal-color[_ngcontent-%COMP%]   .month-packer-item.this-month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid; }\n\n[_nghost-%COMP%]   .month-picker.cal-color[_ngcontent-%COMP%]   .month-packer-item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff; }"]
        });
        /*@__PURE__*/

        (function () {
          ɵngcc0.ɵsetClassMetadata(MonthPickerComponent, [{
            type: core_1.Component,
            args: [{
              selector: 'ion-calendar-month-picker',
              template: "\n    <div [class]=\"'month-picker ' + color\">\n      <div class=\"month-packer-item\"\n           [class.this-month]=\" i === _thisMonth.getMonth() && month.original.year === _thisMonth.getFullYear()\"\n           *ngFor=\"let item of _monthFormat; let i = index\">\n        <button type=\"button\" (click)=\"_onSelect(i)\" [attr.aria-label]=\"getDate(i) | date:MONTH_FORMAT\">{{ item }}</button>\n      </div>\n    </div>\n  ",
              styles: [":host .month-picker {\n  margin: 20px 0;\n  display: inline-block;\n  width: 100%; }\n\n:host .month-packer-item {\n  width: 25%;\n  box-sizing: border-box;\n  float: left;\n  height: 50px;\n  padding: 5px; }\n  :host .month-packer-item button {\n    border-radius: 32px;\n    width: 100%;\n    height: 100%;\n    font-size: 0.9em;\n    background-color: transparent; }\n\n:host .month-picker.primary .month-packer-item.this-month button {\n  border: 1px solid var(--ion-color-primary); }\n\n:host .month-picker.primary .month-packer-item.active button {\n  background-color: var(--ion-color-primary);\n  color: #fff; }\n\n:host .month-picker.secondary .month-packer-item.this-month button {\n  border: 1px solid var(--ion-color-secondary); }\n\n:host .month-picker.secondary .month-packer-item.active button {\n  background-color: var(--ion-color-secondary);\n  color: #fff; }\n\n:host .month-picker.danger .month-packer-item.this-month button {\n  border: 1px solid var(--ion-color-danger); }\n\n:host .month-picker.danger .month-packer-item.active button {\n  background-color: var(--ion-color-danger);\n  color: #fff; }\n\n:host .month-picker.dark .month-packer-item.this-month button {\n  border: 1px solid var(--ion-color-dark); }\n\n:host .month-picker.dark .month-packer-item.active button {\n  background-color: var(--ion-color-dark);\n  color: #fff; }\n\n:host .month-picker.light .month-packer-item.this-month button {\n  border: 1px solid var(--ion-color-light); }\n\n:host .month-picker.light .month-packer-item.active button {\n  background-color: var(--ion-color-light);\n  color: #9e9e9e; }\n\n:host .month-picker.transparent {\n  background-color: transparent; }\n  :host .month-picker.transparent .month-packer-item.this-month button {\n    border: 1px solid var(--ion-color-light); }\n  :host .month-picker.transparent .month-packer-item.active button {\n    background-color: var(--ion-color-light);\n    color: #9e9e9e; }\n\n:host .month-picker.cal-color .month-packer-item.this-month button {\n  border: 1px solid; }\n\n:host .month-picker.cal-color .month-packer-item.active button {\n  color: #fff; }\n"]
            }]
          }], function () {
            return [];
          }, {
            color: [{
              type: core_1.Input
            }],
            select: [{
              type: core_1.Output
            }],
            monthFormat: [{
              type: core_1.Input
            }],
            month: [{
              type: core_1.Input
            }]
          });
        })();

        return MonthPickerComponent;
      }();

      exports.MonthPickerComponent = MonthPickerComponent; //# sourceMappingURL=month-picker.component.js.map

      /***/
    },

    /***/
    "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/month.component.js":
    /*!************************************************************************************!*\
      !*** ./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/month.component.js ***!
      \************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIon2Calendar__ivy_ngcc__DistComponentsMonthComponentJs(module, exports, __webpack_require__) {
      "use strict";

      var ɵngcc0 = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ɵngcc1 = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function MonthComponent_ng_template_1_ng_template_1_ng_container_1_small_5_Template(rf, ctx) {
        if (rf & 1) {
          ɵngcc0.ɵɵelementStart(0, "small");
          ɵngcc0.ɵɵtext(1);
          ɵngcc0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var day_r4 = ɵngcc0.ɵɵnextContext(2).$implicit;
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵtextInterpolate(day_r4 == null ? null : day_r4.subTitle);
        }
      }

      function MonthComponent_ng_template_1_ng_template_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = ɵngcc0.ɵɵgetCurrentView();

          ɵngcc0.ɵɵelementContainerStart(0);
          ɵngcc0.ɵɵelementStart(1, "button", 6);
          ɵngcc0.ɵɵlistener("click", function MonthComponent_ng_template_1_ng_template_1_ng_container_1_Template_button_click_1_listener() {
            ɵngcc0.ɵɵrestoreView(_r10);
            var day_r4 = ɵngcc0.ɵɵnextContext().$implicit;
            var ctx_r8 = ɵngcc0.ɵɵnextContext(2);
            return ctx_r8.onSelected(day_r4);
          });
          ɵngcc0.ɵɵpipe(2, "date");
          ɵngcc0.ɵɵelementStart(3, "p");
          ɵngcc0.ɵɵtext(4);
          ɵngcc0.ɵɵelementEnd();
          ɵngcc0.ɵɵtemplate(5, MonthComponent_ng_template_1_ng_template_1_ng_container_1_small_5_Template, 2, 1, "small", 5);
          ɵngcc0.ɵɵelementEnd();
          ɵngcc0.ɵɵelementContainerEnd();
        }

        if (rf & 2) {
          var day_r4 = ɵngcc0.ɵɵnextContext().$implicit;
          var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵclassMap("days-btn " + day_r4.cssClass);
          ɵngcc0.ɵɵclassProp("today", day_r4.isToday)("marked", day_r4.marked)("last-month-day", day_r4.isLastMonth)("next-month-day", day_r4.isNextMonth)("on-selected", ctx_r5.isSelected(day_r4.time));
          ɵngcc0.ɵɵproperty("disabled", day_r4.disable);
          ɵngcc0.ɵɵattribute("aria-label", ɵngcc0.ɵɵpipeBind2(2, 16, ctx_r5.getDayLabel(day_r4), ctx_r5.DAY_DATE_FORMAT));
          ɵngcc0.ɵɵadvance(3);
          ɵngcc0.ɵɵtextInterpolate(day_r4.title);
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵproperty("ngIf", day_r4.subTitle);
        }
      }

      function MonthComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          ɵngcc0.ɵɵelementStart(0, "div", 4);
          ɵngcc0.ɵɵtemplate(1, MonthComponent_ng_template_1_ng_template_1_ng_container_1_Template, 6, 19, "ng-container", 5);
          ɵngcc0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var day_r4 = ctx.$implicit;
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵproperty("ngIf", day_r4);
        }
      }

      function MonthComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          ɵngcc0.ɵɵelementStart(0, "div", 2);
          ɵngcc0.ɵɵtemplate(1, MonthComponent_ng_template_1_ng_template_1_Template, 2, 1, "ng-template", 3);
          ɵngcc0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r0 = ɵngcc0.ɵɵnextContext();
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.month.days)("ngForTrackBy", ctx_r0.trackByTime);
        }
      }

      function MonthComponent_ng_template_2_ng_template_1_ng_container_1_small_4_Template(rf, ctx) {
        if (rf & 1) {
          ɵngcc0.ɵɵelementStart(0, "small");
          ɵngcc0.ɵɵtext(1);
          ɵngcc0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var day_r13 = ɵngcc0.ɵɵnextContext(2).$implicit;
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵtextInterpolate(day_r13 == null ? null : day_r13.subTitle);
        }
      }

      function MonthComponent_ng_template_2_ng_template_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = ɵngcc0.ɵɵgetCurrentView();

          ɵngcc0.ɵɵelementContainerStart(0);
          ɵngcc0.ɵɵelementStart(1, "button", 6);
          ɵngcc0.ɵɵlistener("click", function MonthComponent_ng_template_2_ng_template_1_ng_container_1_Template_button_click_1_listener() {
            ɵngcc0.ɵɵrestoreView(_r19);
            var day_r13 = ɵngcc0.ɵɵnextContext().$implicit;
            var ctx_r17 = ɵngcc0.ɵɵnextContext(2);
            return ctx_r17.onSelected(day_r13);
          });
          ɵngcc0.ɵɵelementStart(2, "p");
          ɵngcc0.ɵɵtext(3);
          ɵngcc0.ɵɵelementEnd();
          ɵngcc0.ɵɵtemplate(4, MonthComponent_ng_template_2_ng_template_1_ng_container_1_small_4_Template, 2, 1, "small", 5);
          ɵngcc0.ɵɵelementEnd();
          ɵngcc0.ɵɵelementContainerEnd();
        }

        if (rf & 2) {
          var day_r13 = ɵngcc0.ɵɵnextContext().$implicit;
          var ctx_r14 = ɵngcc0.ɵɵnextContext(2);
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵclassMap("days-btn " + day_r13.cssClass);
          ɵngcc0.ɵɵclassProp("today", day_r13.isToday)("marked", day_r13.marked)("last-month-day", day_r13.isLastMonth)("next-month-day", day_r13.isNextMonth)("is-first", day_r13.isFirst)("is-last", day_r13.isLast)("on-selected", ctx_r14.isSelected(day_r13.time));
          ɵngcc0.ɵɵproperty("disabled", day_r13.disable);
          ɵngcc0.ɵɵadvance(2);
          ɵngcc0.ɵɵtextInterpolate(day_r13.title);
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵproperty("ngIf", day_r13.subTitle);
        }
      }

      function MonthComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          ɵngcc0.ɵɵelementStart(0, "div", 4);
          ɵngcc0.ɵɵtemplate(1, MonthComponent_ng_template_2_ng_template_1_ng_container_1_Template, 5, 19, "ng-container", 5);
          ɵngcc0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var day_r13 = ctx.$implicit;
          var ctx_r12 = ɵngcc0.ɵɵnextContext(2);
          ɵngcc0.ɵɵclassProp("startSelection", ctx_r12.isStartSelection(day_r13))("endSelection", ctx_r12.isEndSelection(day_r13))("is-first-wrap", day_r13 == null ? null : day_r13.isFirst)("is-last-wrap", day_r13 == null ? null : day_r13.isLast)("between", ctx_r12.isBetween(day_r13));
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵproperty("ngIf", day_r13);
        }
      }

      function MonthComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          ɵngcc0.ɵɵelementStart(0, "div", 2);
          ɵngcc0.ɵɵtemplate(1, MonthComponent_ng_template_2_ng_template_1_Template, 2, 11, "ng-template", 3);
          ɵngcc0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r2 = ɵngcc0.ɵɵnextContext();
          ɵngcc0.ɵɵadvance(1);
          ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.month.days)("ngForTrackBy", ctx_r2.trackByTime);
        }
      }

      var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var calendar_model_1 = __webpack_require__(
      /*! ../calendar.model */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/calendar.model.js");

      var config_1 = __webpack_require__(
      /*! ../config */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/config.js");

      exports.MONTH_VALUE_ACCESSOR = {
        provide: forms_1.NG_VALUE_ACCESSOR,
        useExisting: core_1.forwardRef(function () {
          return MonthComponent;
        }),
        multi: true
      };

      var MonthComponent =
      /** @class */
      function () {
        function MonthComponent(ref) {
          this.ref = ref;
          this.componentMode = false;
          this.readonly = false;
          this.color = config_1.defaults.COLOR;
          this.change = new core_1.EventEmitter();
          this.select = new core_1.EventEmitter();
          this.selectStart = new core_1.EventEmitter();
          this.selectEnd = new core_1.EventEmitter();
          this._date = [null, null];
          this._isInit = false;
          this.DAY_DATE_FORMAT = 'MMMM dd, yyyy';
        }

        Object.defineProperty(MonthComponent.prototype, "_isRange", {
          get: function get() {
            return this.pickMode === config_1.pickModes.RANGE;
          },
          enumerable: true,
          configurable: true
        });

        MonthComponent.prototype.ngAfterViewInit = function () {
          this._isInit = true;
        };

        Object.defineProperty(MonthComponent.prototype, "value", {
          get: function get() {
            return this._date;
          },
          enumerable: true,
          configurable: true
        });

        MonthComponent.prototype.writeValue = function (obj) {
          if (Array.isArray(obj)) {
            this._date = obj;
          }
        };

        MonthComponent.prototype.registerOnChange = function (fn) {
          this._onChanged = fn;
        };

        MonthComponent.prototype.registerOnTouched = function (fn) {
          this._onTouched = fn;
        };

        MonthComponent.prototype.trackByTime = function (index, item) {
          return item ? item.time : index;
        };

        MonthComponent.prototype.isEndSelection = function (day) {
          if (!day) return false;

          if (this.pickMode !== config_1.pickModes.RANGE || !this._isInit || this._date[1] === null) {
            return false;
          }

          return this._date[1].time === day.time;
        };

        MonthComponent.prototype.getDayLabel = function (day) {
          return new Date(day.time);
        };

        MonthComponent.prototype.isBetween = function (day) {
          if (!day) return false;

          if (this.pickMode !== config_1.pickModes.RANGE || !this._isInit) {
            return false;
          }

          if (this._date[0] === null || this._date[1] === null) {
            return false;
          }

          var start = this._date[0].time;
          var end = this._date[1].time;
          return day.time < end && day.time > start;
        };

        MonthComponent.prototype.isStartSelection = function (day) {
          if (!day) return false;

          if (this.pickMode !== config_1.pickModes.RANGE || !this._isInit || this._date[0] === null) {
            return false;
          }

          return this._date[0].time === day.time && this._date[1] !== null;
        };

        MonthComponent.prototype.isSelected = function (time) {
          if (Array.isArray(this._date)) {
            if (this.pickMode !== config_1.pickModes.MULTI) {
              if (this._date[0] !== null) {
                return time === this._date[0].time;
              }

              if (this._date[1] !== null) {
                return time === this._date[1].time;
              }
            } else {
              return this._date.findIndex(function (e) {
                return e !== null && e.time === time;
              }) !== -1;
            }
          } else {
            return false;
          }
        };

        MonthComponent.prototype.onSelected = function (item) {
          if (this.readonly) return;
          item.selected = true;
          this.select.emit(item);

          if (this.pickMode === config_1.pickModes.SINGLE) {
            this._date[0] = item;
            this.change.emit(this._date);
            return;
          }

          if (this.pickMode === config_1.pickModes.RANGE) {
            if (this._date[0] === null) {
              this._date[0] = item;
              this.selectStart.emit(item);
            } else if (this._date[1] === null) {
              if (this._date[0].time < item.time) {
                this._date[1] = item;
                this.selectEnd.emit(item);
              } else {
                this._date[1] = this._date[0];
                this.selectEnd.emit(this._date[0]);
                this._date[0] = item;
                this.selectStart.emit(item);
              }
            } else if (this._date[0].time > item.time) {
              this._date[0] = item;
              this.selectStart.emit(item);
            } else if (this._date[1].time < item.time) {
              this._date[1] = item;
              this.selectEnd.emit(item);
            } else {
              this._date[0] = item;
              this.selectStart.emit(item);
              this._date[1] = null;
            }

            this.change.emit(this._date);
            return;
          }

          if (this.pickMode === config_1.pickModes.MULTI) {
            var index = this._date.findIndex(function (e) {
              return e !== null && e.time === item.time;
            });

            if (index === -1) {
              this._date.push(item);
            } else {
              this._date.splice(index, 1);
            }

            this.change.emit(this._date.filter(function (e) {
              return e !== null;
            }));
          }
        };

        __decorate([core_1.Input(), __metadata("design:type", Object)], MonthComponent.prototype, "componentMode", void 0);

        __decorate([core_1.Input(), __metadata("design:type", calendar_model_1.CalendarMonth)], MonthComponent.prototype, "month", void 0);

        __decorate([core_1.Input(), __metadata("design:type", String)], MonthComponent.prototype, "pickMode", void 0);

        __decorate([core_1.Input(), __metadata("design:type", Boolean)], MonthComponent.prototype, "isSaveHistory", void 0);

        __decorate([core_1.Input(), __metadata("design:type", Object)], MonthComponent.prototype, "id", void 0);

        __decorate([core_1.Input(), __metadata("design:type", Object)], MonthComponent.prototype, "readonly", void 0);

        __decorate([core_1.Input(), __metadata("design:type", String)], MonthComponent.prototype, "color", void 0);

        __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], MonthComponent.prototype, "change", void 0);

        __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], MonthComponent.prototype, "select", void 0);

        __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], MonthComponent.prototype, "selectStart", void 0);

        __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], MonthComponent.prototype, "selectEnd", void 0);

        MonthComponent = __decorate([__metadata("design:paramtypes", [core_1.ChangeDetectorRef])], MonthComponent);

        MonthComponent.ɵfac = function MonthComponent_Factory(t) {
          return new (t || MonthComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef));
        };

        MonthComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({
          type: MonthComponent,
          selectors: [["ion-calendar-month"]],
          hostVars: 2,
          hostBindings: function MonthComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
              ɵngcc0.ɵɵclassProp("component-mode", ctx.componentMode);
            }
          },
          inputs: {
            componentMode: "componentMode",
            readonly: "readonly",
            color: "color",
            month: "month",
            pickMode: "pickMode",
            isSaveHistory: "isSaveHistory",
            id: "id"
          },
          outputs: {
            change: "change",
            select: "select",
            selectStart: "selectStart",
            selectEnd: "selectEnd"
          },
          features: [ɵngcc0.ɵɵProvidersFeature([exports.MONTH_VALUE_ACCESSOR])],
          decls: 4,
          vars: 4,
          consts: [[3, "ngIf", "ngIfElse"], ["rangeBox", ""], [1, "days-box"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [1, "days"], [4, "ngIf"], ["type", "button", 3, "disabled", "click"]],
          template: function MonthComponent_Template(rf, ctx) {
            if (rf & 1) {
              ɵngcc0.ɵɵelementStart(0, "div");
              ɵngcc0.ɵɵtemplate(1, MonthComponent_ng_template_1_Template, 2, 2, "ng-template", 0);
              ɵngcc0.ɵɵtemplate(2, MonthComponent_ng_template_2_Template, 2, 2, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
              ɵngcc0.ɵɵelementEnd();
            }

            if (rf & 2) {
              var _r1 = ɵngcc0.ɵɵreference(3);

              ɵngcc0.ɵɵclassMap(ctx.color);
              ɵngcc0.ɵɵadvance(1);
              ɵngcc0.ɵɵproperty("ngIf", !ctx._isRange)("ngIfElse", _r1);
            }
          },
          directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf],
          pipes: [ɵngcc1.DatePipe],
          styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  width: 100%; }\n  [_nghost-%COMP%]   .days-box[_ngcontent-%COMP%] {\n    padding: 0.5rem; }\n  [_nghost-%COMP%]   .days[_ngcontent-%COMP%]:nth-of-type(7n), [_nghost-%COMP%]   .days[_ngcontent-%COMP%]:nth-of-type(7n + 1) {\n    width: 15%; }\n  [_nghost-%COMP%]   .days[_ngcontent-%COMP%] {\n    width: 14%;\n    float: left;\n    text-align: center;\n    height: 36px;\n    margin-bottom: 5px; }\n  [_nghost-%COMP%]   .days[_ngcontent-%COMP%]   .marked[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 500; }\n  [_nghost-%COMP%]   .days[_ngcontent-%COMP%]   .on-selected[_ngcontent-%COMP%] {\n    border: none; }\n    [_nghost-%COMP%]   .days[_ngcontent-%COMP%]   .on-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      font-size: 1.3em; }\n  [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .marked[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: var(--ion-color-primary); }\n  [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 700; }\n  [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .last-month-day[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .next-month-day[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: rgba(0, 0, 0, 0.25); }\n  [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .today.on-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .marked.on-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #fff; }\n  [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .on-selected[_ngcontent-%COMP%], [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    background-color: var(--ion-color-primary);\n    color: #fff; }\n  [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%] {\n    position: relative; }\n    [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:before, [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      display: block; }\n    [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:before {\n      background-color: var(--ion-color-primary); }\n    [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:after {\n      background-color: white;\n      opacity: 0.25; }\n  [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%] {\n    position: relative; }\n    [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:before, [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block; }\n    [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:before {\n      background-color: var(--ion-color-primary); }\n    [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:after {\n      background-color: white;\n      opacity: 0.25; }\n  [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .startSelection.endSelection[_ngcontent-%COMP%]:after {\n    background-color: transparent; }\n  [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    border-radius: 50%; }\n  [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    background-color: var(--ion-color-primary);\n    width: 100%;\n    border-radius: 0;\n    position: relative; }\n    [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]:after {\n      height: 36px;\n      width: 100%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      display: block;\n      background-color: white;\n      opacity: 0.25; }\n    [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      color: #fff; }\n  [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    border-radius: 50%; }\n    [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      color: #fff; }\n  [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .on-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #fff; }\n  [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    -webkit-transition-property: background-color;\n    -moz-transition-property: background-color;\n    -ms-transition-property: background-color;\n    -o-transition-property: background-color;\n    transition-property: background-color;\n    -webkit-transition-duration: 180ms;\n    -moz-transition-duration: 180ms;\n    -ms-transition-duration: 180ms;\n    -o-transition-duration: 180ms;\n    transition-duration: 180ms;\n    -webkit-transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n    -ms-transition-timing-function: ease-out;\n    -o-transition-timing-function: ease-out;\n    transition-timing-function: ease-out; }\n  [_nghost-%COMP%]   .primary[_ngcontent-%COMP%]   .startSelection.endSelection[_ngcontent-%COMP%]::before {\n    --ion-color-primary: transparent; }\n  [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .marked[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: var(--ion-color-secondary); }\n  [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 700; }\n  [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .last-month-day[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .next-month-day[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: rgba(0, 0, 0, 0.25); }\n  [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .today.on-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .marked.on-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #fff; }\n  [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .on-selected[_ngcontent-%COMP%], [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    background-color: var(--ion-color-secondary);\n    color: #fff; }\n  [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%] {\n    position: relative; }\n    [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:before, [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      display: block; }\n    [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:before {\n      background-color: var(--ion-color-secondary); }\n    [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:after {\n      background-color: white;\n      opacity: 0.25; }\n  [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%] {\n    position: relative; }\n    [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:before, [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block; }\n    [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:before {\n      background-color: var(--ion-color-secondary); }\n    [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:after {\n      background-color: white;\n      opacity: 0.25; }\n  [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .startSelection.endSelection[_ngcontent-%COMP%]:after {\n    background-color: transparent; }\n  [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    border-radius: 50%; }\n  [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    background-color: var(--ion-color-secondary);\n    width: 100%;\n    border-radius: 0;\n    position: relative; }\n    [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]:after {\n      height: 36px;\n      width: 100%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      display: block;\n      background-color: white;\n      opacity: 0.25; }\n    [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      color: #fff; }\n  [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    border-radius: 50%; }\n    [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      color: #fff; }\n  [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .on-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #fff; }\n  [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    -webkit-transition-property: background-color;\n    -moz-transition-property: background-color;\n    -ms-transition-property: background-color;\n    -o-transition-property: background-color;\n    transition-property: background-color;\n    -webkit-transition-duration: 180ms;\n    -moz-transition-duration: 180ms;\n    -ms-transition-duration: 180ms;\n    -o-transition-duration: 180ms;\n    transition-duration: 180ms;\n    -webkit-transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n    -ms-transition-timing-function: ease-out;\n    -o-transition-timing-function: ease-out;\n    transition-timing-function: ease-out; }\n  [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]   .startSelection.endSelection[_ngcontent-%COMP%]::before {\n    --ion-color-primary: transparent; }\n  [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .marked[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: var(--ion-color-danger); }\n  [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 700; }\n  [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .last-month-day[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .next-month-day[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: rgba(0, 0, 0, 0.25); }\n  [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .today.on-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .marked.on-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #fff; }\n  [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .on-selected[_ngcontent-%COMP%], [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    background-color: var(--ion-color-danger);\n    color: #fff; }\n  [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%] {\n    position: relative; }\n    [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:before, [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      display: block; }\n    [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:before {\n      background-color: var(--ion-color-danger); }\n    [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:after {\n      background-color: white;\n      opacity: 0.25; }\n  [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%] {\n    position: relative; }\n    [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:before, [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block; }\n    [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:before {\n      background-color: var(--ion-color-danger); }\n    [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:after {\n      background-color: white;\n      opacity: 0.25; }\n  [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .startSelection.endSelection[_ngcontent-%COMP%]:after {\n    background-color: transparent; }\n  [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    border-radius: 50%; }\n  [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    background-color: var(--ion-color-danger);\n    width: 100%;\n    border-radius: 0;\n    position: relative; }\n    [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]:after {\n      height: 36px;\n      width: 100%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      display: block;\n      background-color: white;\n      opacity: 0.25; }\n    [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      color: #fff; }\n  [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    border-radius: 50%; }\n    [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      color: #fff; }\n  [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .on-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #fff; }\n  [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    -webkit-transition-property: background-color;\n    -moz-transition-property: background-color;\n    -ms-transition-property: background-color;\n    -o-transition-property: background-color;\n    transition-property: background-color;\n    -webkit-transition-duration: 180ms;\n    -moz-transition-duration: 180ms;\n    -ms-transition-duration: 180ms;\n    -o-transition-duration: 180ms;\n    transition-duration: 180ms;\n    -webkit-transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n    -ms-transition-timing-function: ease-out;\n    -o-transition-timing-function: ease-out;\n    transition-timing-function: ease-out; }\n  [_nghost-%COMP%]   .danger[_ngcontent-%COMP%]   .startSelection.endSelection[_ngcontent-%COMP%]::before {\n    --ion-color-primary: transparent; }\n  [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .marked[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: var(--ion-color-dark); }\n  [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 700; }\n  [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .last-month-day[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .next-month-day[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: rgba(0, 0, 0, 0.25); }\n  [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .today.on-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .marked.on-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #fff; }\n  [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .on-selected[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    background-color: var(--ion-color-dark);\n    color: #fff; }\n  [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%] {\n    position: relative; }\n    [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:before, [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      display: block; }\n    [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:before {\n      background-color: var(--ion-color-dark); }\n    [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:after {\n      background-color: white;\n      opacity: 0.25; }\n  [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%] {\n    position: relative; }\n    [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:before, [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block; }\n    [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:before {\n      background-color: var(--ion-color-dark); }\n    [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:after {\n      background-color: white;\n      opacity: 0.25; }\n  [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .startSelection.endSelection[_ngcontent-%COMP%]:after {\n    background-color: transparent; }\n  [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    border-radius: 50%; }\n  [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    background-color: var(--ion-color-dark);\n    width: 100%;\n    border-radius: 0;\n    position: relative; }\n    [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]:after {\n      height: 36px;\n      width: 100%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      display: block;\n      background-color: white;\n      opacity: 0.25; }\n    [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      color: #fff; }\n  [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    border-radius: 50%; }\n    [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      color: #fff; }\n  [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .on-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #fff; }\n  [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    -webkit-transition-property: background-color;\n    -moz-transition-property: background-color;\n    -ms-transition-property: background-color;\n    -o-transition-property: background-color;\n    transition-property: background-color;\n    -webkit-transition-duration: 180ms;\n    -moz-transition-duration: 180ms;\n    -ms-transition-duration: 180ms;\n    -o-transition-duration: 180ms;\n    transition-duration: 180ms;\n    -webkit-transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n    -ms-transition-timing-function: ease-out;\n    -o-transition-timing-function: ease-out;\n    transition-timing-function: ease-out; }\n  [_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   .startSelection.endSelection[_ngcontent-%COMP%]::before {\n    --ion-color-primary: transparent; }\n  [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .marked[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: var(--ion-color-light); }\n  [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 700; }\n  [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .last-month-day[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .next-month-day[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: rgba(0, 0, 0, 0.25); }\n  [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .today.on-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .marked.on-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #a0a0a0; }\n  [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .on-selected[_ngcontent-%COMP%], [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    background-color: var(--ion-color-light);\n    color: #a0a0a0; }\n  [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%] {\n    position: relative; }\n    [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:before, [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      display: block; }\n    [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:before {\n      background-color: var(--ion-color-light); }\n    [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:after {\n      background-color: white;\n      opacity: 0.25; }\n  [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%] {\n    position: relative; }\n    [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:before, [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block; }\n    [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:before {\n      background-color: var(--ion-color-light); }\n    [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:after {\n      background-color: white;\n      opacity: 0.25; }\n  [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .startSelection.endSelection[_ngcontent-%COMP%]:after {\n    background-color: transparent; }\n  [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    border-radius: 50%; }\n  [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    background-color: var(--ion-color-light);\n    width: 100%;\n    border-radius: 0;\n    position: relative; }\n    [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]:after {\n      height: 36px;\n      width: 100%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      display: block;\n      background-color: white;\n      opacity: 0.25; }\n    [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      color: #a0a0a0; }\n  [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    border-radius: 50%; }\n    [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      color: #a0a0a0; }\n  [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .on-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #a0a0a0; }\n  [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    -webkit-transition-property: background-color;\n    -moz-transition-property: background-color;\n    -ms-transition-property: background-color;\n    -o-transition-property: background-color;\n    transition-property: background-color;\n    -webkit-transition-duration: 180ms;\n    -moz-transition-duration: 180ms;\n    -ms-transition-duration: 180ms;\n    -o-transition-duration: 180ms;\n    transition-duration: 180ms;\n    -webkit-transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n    -ms-transition-timing-function: ease-out;\n    -o-transition-timing-function: ease-out;\n    transition-timing-function: ease-out; }\n  [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .startSelection.endSelection[_ngcontent-%COMP%]::before {\n    --ion-color-primary: transparent; }\n  [_nghost-%COMP%]   .light[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #565656; }\n  [_nghost-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    border-radius: 36px;\n    width: 36px;\n    display: block;\n    margin: 0 auto;\n    padding: 0;\n    height: 36px;\n    background-color: transparent;\n    position: relative;\n    z-index: 2;\n    outline: 0; }\n  [_nghost-%COMP%]   button.days-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.2em;\n    color: #333;\n    text-align: center; }\n  [_nghost-%COMP%]   button.days-btn[disabled][_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: rgba(0, 0, 0, 0.25); }\n  [_nghost-%COMP%]   button.days-btn.on-selected[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    transition: bottom 0.3s;\n    bottom: -14px; }\n  [_nghost-%COMP%]   button.days-btn[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    overflow: hidden;\n    display: block;\n    left: 0;\n    right: 0;\n    bottom: -5px;\n    position: absolute;\n    z-index: 1;\n    text-align: center;\n    font-weight: 200; }\n  [_nghost-%COMP%]   .days.startSelection[_ngcontent-%COMP%]:nth-child(7n):before, [_nghost-%COMP%]   .days.between[_ngcontent-%COMP%]:nth-child(7n)   button.days-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .days.between[_ngcontent-%COMP%]   button.days-btn.is-last[_ngcontent-%COMP%] {\n    border-radius: 0 36px 36px 0; }\n    [_nghost-%COMP%]   .days.startSelection[_ngcontent-%COMP%]:nth-child(7n):before.on-selected, [_nghost-%COMP%]   .days.between[_ngcontent-%COMP%]:nth-child(7n)   button.days-btn.on-selected[_ngcontent-%COMP%], [_nghost-%COMP%]   .days.between[_ngcontent-%COMP%]   button.days-btn.is-last.on-selected[_ngcontent-%COMP%] {\n      border-radius: 50%; }\n  [_nghost-%COMP%]   .days.endSelection[_ngcontent-%COMP%]:nth-child(7n + 1):before, [_nghost-%COMP%]   .days.between[_ngcontent-%COMP%]:nth-child(7n + 1)   button.days-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .days.between.is-first-wrap[_ngcontent-%COMP%]   button.days-btn.is-first[_ngcontent-%COMP%], [_nghost-%COMP%]   button.days-btn.is-first[_ngcontent-%COMP%] {\n    border-radius: 36px 0 0 36px; }\n  [_nghost-%COMP%]   .startSelection[_ngcontent-%COMP%]   button.days-btn.is-first[_ngcontent-%COMP%], [_nghost-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn.is-first[_ngcontent-%COMP%], [_nghost-%COMP%]   button.days-btn.is-first.on-selected[_ngcontent-%COMP%], [_nghost-%COMP%]   button.days-btn.is-last.on-selected[_ngcontent-%COMP%], [_nghost-%COMP%]   .startSelection[_ngcontent-%COMP%]   button.days-btn.is-last[_ngcontent-%COMP%], [_nghost-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn.is-last[_ngcontent-%COMP%] {\n    border-radius: 50%; }\n  [_nghost-%COMP%]   .startSelection.is-last-wrap[_ngcontent-%COMP%]::before, [_nghost-%COMP%]   .startSelection.is-last-wrap[_ngcontent-%COMP%]::after {\n    border-radius: 0 36px 36px 0; }\n  [_nghost-%COMP%]   .endSelection.is-first-wrap[_ngcontent-%COMP%]::before, [_nghost-%COMP%]   .endSelection.is-first-wrap[_ngcontent-%COMP%]::after {\n    border-radius: 36px 0 0 36px; }\n  .component-mode[_nghost-%COMP%]   .days.between[_ngcontent-%COMP%]   button.days-btn.is-last[_ngcontent-%COMP%], .component-mode[_nghost-%COMP%]   .days.between[_ngcontent-%COMP%]   button.days-btn.is-first[_ngcontent-%COMP%] {\n    border-radius: 0; }\n  .component-mode[_nghost-%COMP%]   .days.startSelection.is-last-wrap[_ngcontent-%COMP%]::before, .component-mode[_nghost-%COMP%]   .days.startSelection.is-last-wrap[_ngcontent-%COMP%]::after {\n    border-radius: 0; }\n  .component-mode[_nghost-%COMP%]   .days.endSelection.is-first-wrap[_ngcontent-%COMP%]::before, .component-mode[_nghost-%COMP%]   .days.endSelection.is-first-wrap[_ngcontent-%COMP%]::after {\n    border-radius: 0; }\n  [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 700; }\n  [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .last-month-day[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .next-month-day[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: rgba(0, 0, 0, 0.25); }\n  [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .today.on-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .marked.on-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #fff; }\n  [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .on-selected[_ngcontent-%COMP%], [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    color: #fff; }\n  [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%] {\n    position: relative; }\n    [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:before, [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      display: block; }\n    [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]:after {\n      background-color: white;\n      opacity: 0.25; }\n  [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%] {\n    position: relative; }\n    [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:before, [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block; }\n    [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]:after {\n      background-color: white;\n      opacity: 0.25; }\n  [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .startSelection.endSelection[_ngcontent-%COMP%]:after {\n    background-color: transparent; }\n  [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    border-radius: 50%; }\n  [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    border-radius: 0;\n    position: relative; }\n    [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]:after {\n      height: 36px;\n      width: 100%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      display: block;\n      background-color: white;\n      opacity: 0.25; }\n    [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      color: #fff; }\n  [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    border-radius: 50%; }\n    [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      color: #fff; }\n  [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .on-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #fff; }\n  [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .startSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .endSelection[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .between[_ngcontent-%COMP%]   button.days-btn[_ngcontent-%COMP%] {\n    -webkit-transition-property: background-color;\n    -moz-transition-property: background-color;\n    -ms-transition-property: background-color;\n    -o-transition-property: background-color;\n    transition-property: background-color;\n    -webkit-transition-duration: 180ms;\n    -moz-transition-duration: 180ms;\n    -ms-transition-duration: 180ms;\n    -o-transition-duration: 180ms;\n    transition-duration: 180ms;\n    -webkit-transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n    -ms-transition-timing-function: ease-out;\n    -o-transition-timing-function: ease-out;\n    transition-timing-function: ease-out; }\n  [_nghost-%COMP%]   .cal-color[_ngcontent-%COMP%]   .startSelection.endSelection[_ngcontent-%COMP%]::before {\n    --ion-color-primary: transparent; }"]
        });
        /*@__PURE__*/

        (function () {
          ɵngcc0.ɵsetClassMetadata(MonthComponent, [{
            type: core_1.Component,
            args: [{
              selector: 'ion-calendar-month',
              providers: [exports.MONTH_VALUE_ACCESSOR],
              // tslint:disable-next-line:use-host-property-decorator
              host: {
                '[class.component-mode]': 'componentMode'
              },
              template: "\n    <div [class]=\"color\">\n      <ng-template [ngIf]=\"!_isRange\" [ngIfElse]=\"rangeBox\">\n        <div class=\"days-box\">\n          <ng-template ngFor let-day [ngForOf]=\"month.days\" [ngForTrackBy]=\"trackByTime\">\n            <div class=\"days\">\n              <ng-container *ngIf=\"day\">\n                <button type='button'\n                        [class]=\"'days-btn ' + day.cssClass\"\n                        [class.today]=\"day.isToday\"\n                        (click)=\"onSelected(day)\"\n                        [class.marked]=\"day.marked\"\n                        [class.last-month-day]=\"day.isLastMonth\"\n                        [class.next-month-day]=\"day.isNextMonth\"\n                        [class.on-selected]=\"isSelected(day.time)\"\n                        [disabled]=\"day.disable\"\n                        [attr.aria-label]=\"getDayLabel(day) | date:DAY_DATE_FORMAT\">\n                  <p>{{ day.title }}</p>\n                  <small *ngIf=\"day.subTitle\">{{ day?.subTitle }}</small>\n                </button>\n              </ng-container>\n            </div>\n          </ng-template>\n        </div>\n      </ng-template>\n\n      <ng-template #rangeBox>\n        <div class=\"days-box\">\n          <ng-template ngFor let-day [ngForOf]=\"month.days\" [ngForTrackBy]=\"trackByTime\">\n            <div class=\"days\"\n                 [class.startSelection]=\"isStartSelection(day)\"\n                 [class.endSelection]=\"isEndSelection(day)\"\n                 [class.is-first-wrap]=\"day?.isFirst\"\n                 [class.is-last-wrap]=\"day?.isLast\"\n                 [class.between]=\"isBetween(day)\">\n              <ng-container *ngIf=\"day\">\n                <button type='button'\n                        [class]=\"'days-btn ' + day.cssClass\"\n                        [class.today]=\"day.isToday\"\n                        (click)=\"onSelected(day)\"\n                        [class.marked]=\"day.marked\"\n                        [class.last-month-day]=\"day.isLastMonth\"\n                        [class.next-month-day]=\"day.isNextMonth\"\n                        [class.is-first]=\"day.isFirst\"\n                        [class.is-last]=\"day.isLast\"\n                        [class.on-selected]=\"isSelected(day.time)\"\n                        [disabled]=\"day.disable\">\n                  <p>{{ day.title }}</p>\n                  <small *ngIf=\"day.subTitle\">{{ day?.subTitle }}</small>\n                </button>\n              </ng-container>\n\n            </div>\n          </ng-template>\n        </div>\n      </ng-template>\n    </div>\n  ",
              styles: [":host {\n  display: inline-block;\n  width: 100%; }\n  :host .days-box {\n    padding: 0.5rem; }\n  :host .days:nth-of-type(7n),\n  :host .days:nth-of-type(7n + 1) {\n    width: 15%; }\n  :host .days {\n    width: 14%;\n    float: left;\n    text-align: center;\n    height: 36px;\n    margin-bottom: 5px; }\n  :host .days .marked p {\n    font-weight: 500; }\n  :host .days .on-selected {\n    border: none; }\n    :host .days .on-selected p {\n      font-size: 1.3em; }\n  :host .primary button.days-btn small,\n  :host .primary .days .marked p,\n  :host .primary .days .today p {\n    color: var(--ion-color-primary); }\n  :host .primary .days .today p {\n    font-weight: 700; }\n  :host .primary .days .last-month-day p,\n  :host .primary .days .next-month-day p {\n    color: rgba(0, 0, 0, 0.25); }\n  :host .primary .days .today.on-selected p,\n  :host .primary .days .marked.on-selected p {\n    color: #fff; }\n  :host .primary .days .on-selected,\n  :host .primary .startSelection button.days-btn,\n  :host .primary .endSelection button.days-btn {\n    background-color: var(--ion-color-primary);\n    color: #fff; }\n  :host .primary .startSelection {\n    position: relative; }\n    :host .primary .startSelection:before, :host .primary .startSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      display: block; }\n    :host .primary .startSelection:before {\n      background-color: var(--ion-color-primary); }\n    :host .primary .startSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .primary .endSelection {\n    position: relative; }\n    :host .primary .endSelection:before, :host .primary .endSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block; }\n    :host .primary .endSelection:before {\n      background-color: var(--ion-color-primary); }\n    :host .primary .endSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .primary .startSelection.endSelection:after {\n    background-color: transparent; }\n  :host .primary .startSelection button.days-btn {\n    border-radius: 50%; }\n  :host .primary .between button.days-btn {\n    background-color: var(--ion-color-primary);\n    width: 100%;\n    border-radius: 0;\n    position: relative; }\n    :host .primary .between button.days-btn:after {\n      height: 36px;\n      width: 100%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      display: block;\n      background-color: white;\n      opacity: 0.25; }\n    :host .primary .between button.days-btn p {\n      color: #fff; }\n  :host .primary .endSelection button.days-btn {\n    border-radius: 50%; }\n    :host .primary .endSelection button.days-btn p {\n      color: #fff; }\n  :host .primary .days .on-selected p {\n    color: #fff; }\n  :host .primary .startSelection button.days-btn,\n  :host .primary .endSelection button.days-btn,\n  :host .primary .between button.days-btn {\n    -webkit-transition-property: background-color;\n    -moz-transition-property: background-color;\n    -ms-transition-property: background-color;\n    -o-transition-property: background-color;\n    transition-property: background-color;\n    -webkit-transition-duration: 180ms;\n    -moz-transition-duration: 180ms;\n    -ms-transition-duration: 180ms;\n    -o-transition-duration: 180ms;\n    transition-duration: 180ms;\n    -webkit-transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n    -ms-transition-timing-function: ease-out;\n    -o-transition-timing-function: ease-out;\n    transition-timing-function: ease-out; }\n  :host .primary .startSelection.endSelection::before {\n    --ion-color-primary: transparent; }\n  :host .secondary button.days-btn small,\n  :host .secondary .days .marked p,\n  :host .secondary .days .today p {\n    color: var(--ion-color-secondary); }\n  :host .secondary .days .today p {\n    font-weight: 700; }\n  :host .secondary .days .last-month-day p,\n  :host .secondary .days .next-month-day p {\n    color: rgba(0, 0, 0, 0.25); }\n  :host .secondary .days .today.on-selected p,\n  :host .secondary .days .marked.on-selected p {\n    color: #fff; }\n  :host .secondary .days .on-selected,\n  :host .secondary .startSelection button.days-btn,\n  :host .secondary .endSelection button.days-btn {\n    background-color: var(--ion-color-secondary);\n    color: #fff; }\n  :host .secondary .startSelection {\n    position: relative; }\n    :host .secondary .startSelection:before, :host .secondary .startSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      display: block; }\n    :host .secondary .startSelection:before {\n      background-color: var(--ion-color-secondary); }\n    :host .secondary .startSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .secondary .endSelection {\n    position: relative; }\n    :host .secondary .endSelection:before, :host .secondary .endSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block; }\n    :host .secondary .endSelection:before {\n      background-color: var(--ion-color-secondary); }\n    :host .secondary .endSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .secondary .startSelection.endSelection:after {\n    background-color: transparent; }\n  :host .secondary .startSelection button.days-btn {\n    border-radius: 50%; }\n  :host .secondary .between button.days-btn {\n    background-color: var(--ion-color-secondary);\n    width: 100%;\n    border-radius: 0;\n    position: relative; }\n    :host .secondary .between button.days-btn:after {\n      height: 36px;\n      width: 100%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      display: block;\n      background-color: white;\n      opacity: 0.25; }\n    :host .secondary .between button.days-btn p {\n      color: #fff; }\n  :host .secondary .endSelection button.days-btn {\n    border-radius: 50%; }\n    :host .secondary .endSelection button.days-btn p {\n      color: #fff; }\n  :host .secondary .days .on-selected p {\n    color: #fff; }\n  :host .secondary .startSelection button.days-btn,\n  :host .secondary .endSelection button.days-btn,\n  :host .secondary .between button.days-btn {\n    -webkit-transition-property: background-color;\n    -moz-transition-property: background-color;\n    -ms-transition-property: background-color;\n    -o-transition-property: background-color;\n    transition-property: background-color;\n    -webkit-transition-duration: 180ms;\n    -moz-transition-duration: 180ms;\n    -ms-transition-duration: 180ms;\n    -o-transition-duration: 180ms;\n    transition-duration: 180ms;\n    -webkit-transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n    -ms-transition-timing-function: ease-out;\n    -o-transition-timing-function: ease-out;\n    transition-timing-function: ease-out; }\n  :host .secondary .startSelection.endSelection::before {\n    --ion-color-primary: transparent; }\n  :host .danger button.days-btn small,\n  :host .danger .days .marked p,\n  :host .danger .days .today p {\n    color: var(--ion-color-danger); }\n  :host .danger .days .today p {\n    font-weight: 700; }\n  :host .danger .days .last-month-day p,\n  :host .danger .days .next-month-day p {\n    color: rgba(0, 0, 0, 0.25); }\n  :host .danger .days .today.on-selected p,\n  :host .danger .days .marked.on-selected p {\n    color: #fff; }\n  :host .danger .days .on-selected,\n  :host .danger .startSelection button.days-btn,\n  :host .danger .endSelection button.days-btn {\n    background-color: var(--ion-color-danger);\n    color: #fff; }\n  :host .danger .startSelection {\n    position: relative; }\n    :host .danger .startSelection:before, :host .danger .startSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      display: block; }\n    :host .danger .startSelection:before {\n      background-color: var(--ion-color-danger); }\n    :host .danger .startSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .danger .endSelection {\n    position: relative; }\n    :host .danger .endSelection:before, :host .danger .endSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block; }\n    :host .danger .endSelection:before {\n      background-color: var(--ion-color-danger); }\n    :host .danger .endSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .danger .startSelection.endSelection:after {\n    background-color: transparent; }\n  :host .danger .startSelection button.days-btn {\n    border-radius: 50%; }\n  :host .danger .between button.days-btn {\n    background-color: var(--ion-color-danger);\n    width: 100%;\n    border-radius: 0;\n    position: relative; }\n    :host .danger .between button.days-btn:after {\n      height: 36px;\n      width: 100%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      display: block;\n      background-color: white;\n      opacity: 0.25; }\n    :host .danger .between button.days-btn p {\n      color: #fff; }\n  :host .danger .endSelection button.days-btn {\n    border-radius: 50%; }\n    :host .danger .endSelection button.days-btn p {\n      color: #fff; }\n  :host .danger .days .on-selected p {\n    color: #fff; }\n  :host .danger .startSelection button.days-btn,\n  :host .danger .endSelection button.days-btn,\n  :host .danger .between button.days-btn {\n    -webkit-transition-property: background-color;\n    -moz-transition-property: background-color;\n    -ms-transition-property: background-color;\n    -o-transition-property: background-color;\n    transition-property: background-color;\n    -webkit-transition-duration: 180ms;\n    -moz-transition-duration: 180ms;\n    -ms-transition-duration: 180ms;\n    -o-transition-duration: 180ms;\n    transition-duration: 180ms;\n    -webkit-transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n    -ms-transition-timing-function: ease-out;\n    -o-transition-timing-function: ease-out;\n    transition-timing-function: ease-out; }\n  :host .danger .startSelection.endSelection::before {\n    --ion-color-primary: transparent; }\n  :host .dark button.days-btn small,\n  :host .dark .days .marked p,\n  :host .dark .days .today p {\n    color: var(--ion-color-dark); }\n  :host .dark .days .today p {\n    font-weight: 700; }\n  :host .dark .days .last-month-day p,\n  :host .dark .days .next-month-day p {\n    color: rgba(0, 0, 0, 0.25); }\n  :host .dark .days .today.on-selected p,\n  :host .dark .days .marked.on-selected p {\n    color: #fff; }\n  :host .dark .days .on-selected,\n  :host .dark .startSelection button.days-btn,\n  :host .dark .endSelection button.days-btn {\n    background-color: var(--ion-color-dark);\n    color: #fff; }\n  :host .dark .startSelection {\n    position: relative; }\n    :host .dark .startSelection:before, :host .dark .startSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      display: block; }\n    :host .dark .startSelection:before {\n      background-color: var(--ion-color-dark); }\n    :host .dark .startSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .dark .endSelection {\n    position: relative; }\n    :host .dark .endSelection:before, :host .dark .endSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block; }\n    :host .dark .endSelection:before {\n      background-color: var(--ion-color-dark); }\n    :host .dark .endSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .dark .startSelection.endSelection:after {\n    background-color: transparent; }\n  :host .dark .startSelection button.days-btn {\n    border-radius: 50%; }\n  :host .dark .between button.days-btn {\n    background-color: var(--ion-color-dark);\n    width: 100%;\n    border-radius: 0;\n    position: relative; }\n    :host .dark .between button.days-btn:after {\n      height: 36px;\n      width: 100%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      display: block;\n      background-color: white;\n      opacity: 0.25; }\n    :host .dark .between button.days-btn p {\n      color: #fff; }\n  :host .dark .endSelection button.days-btn {\n    border-radius: 50%; }\n    :host .dark .endSelection button.days-btn p {\n      color: #fff; }\n  :host .dark .days .on-selected p {\n    color: #fff; }\n  :host .dark .startSelection button.days-btn,\n  :host .dark .endSelection button.days-btn,\n  :host .dark .between button.days-btn {\n    -webkit-transition-property: background-color;\n    -moz-transition-property: background-color;\n    -ms-transition-property: background-color;\n    -o-transition-property: background-color;\n    transition-property: background-color;\n    -webkit-transition-duration: 180ms;\n    -moz-transition-duration: 180ms;\n    -ms-transition-duration: 180ms;\n    -o-transition-duration: 180ms;\n    transition-duration: 180ms;\n    -webkit-transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n    -ms-transition-timing-function: ease-out;\n    -o-transition-timing-function: ease-out;\n    transition-timing-function: ease-out; }\n  :host .dark .startSelection.endSelection::before {\n    --ion-color-primary: transparent; }\n  :host .light button.days-btn small,\n  :host .light .days .marked p,\n  :host .light .days .today p {\n    color: var(--ion-color-light); }\n  :host .light .days .today p {\n    font-weight: 700; }\n  :host .light .days .last-month-day p,\n  :host .light .days .next-month-day p {\n    color: rgba(0, 0, 0, 0.25); }\n  :host .light .days .today.on-selected p,\n  :host .light .days .marked.on-selected p {\n    color: #a0a0a0; }\n  :host .light .days .on-selected,\n  :host .light .startSelection button.days-btn,\n  :host .light .endSelection button.days-btn {\n    background-color: var(--ion-color-light);\n    color: #a0a0a0; }\n  :host .light .startSelection {\n    position: relative; }\n    :host .light .startSelection:before, :host .light .startSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      display: block; }\n    :host .light .startSelection:before {\n      background-color: var(--ion-color-light); }\n    :host .light .startSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .light .endSelection {\n    position: relative; }\n    :host .light .endSelection:before, :host .light .endSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block; }\n    :host .light .endSelection:before {\n      background-color: var(--ion-color-light); }\n    :host .light .endSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .light .startSelection.endSelection:after {\n    background-color: transparent; }\n  :host .light .startSelection button.days-btn {\n    border-radius: 50%; }\n  :host .light .between button.days-btn {\n    background-color: var(--ion-color-light);\n    width: 100%;\n    border-radius: 0;\n    position: relative; }\n    :host .light .between button.days-btn:after {\n      height: 36px;\n      width: 100%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      display: block;\n      background-color: white;\n      opacity: 0.25; }\n    :host .light .between button.days-btn p {\n      color: #a0a0a0; }\n  :host .light .endSelection button.days-btn {\n    border-radius: 50%; }\n    :host .light .endSelection button.days-btn p {\n      color: #a0a0a0; }\n  :host .light .days .on-selected p {\n    color: #a0a0a0; }\n  :host .light .startSelection button.days-btn,\n  :host .light .endSelection button.days-btn,\n  :host .light .between button.days-btn {\n    -webkit-transition-property: background-color;\n    -moz-transition-property: background-color;\n    -ms-transition-property: background-color;\n    -o-transition-property: background-color;\n    transition-property: background-color;\n    -webkit-transition-duration: 180ms;\n    -moz-transition-duration: 180ms;\n    -ms-transition-duration: 180ms;\n    -o-transition-duration: 180ms;\n    transition-duration: 180ms;\n    -webkit-transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n    -ms-transition-timing-function: ease-out;\n    -o-transition-timing-function: ease-out;\n    transition-timing-function: ease-out; }\n  :host .light .startSelection.endSelection::before {\n    --ion-color-primary: transparent; }\n  :host .light .days .today p {\n    color: #565656; }\n  :host button.days-btn {\n    border-radius: 36px;\n    width: 36px;\n    display: block;\n    margin: 0 auto;\n    padding: 0;\n    height: 36px;\n    background-color: transparent;\n    position: relative;\n    z-index: 2;\n    outline: 0; }\n  :host button.days-btn p {\n    margin: 0;\n    font-size: 1.2em;\n    color: #333;\n    text-align: center; }\n  :host button.days-btn[disabled] p {\n    color: rgba(0, 0, 0, 0.25); }\n  :host button.days-btn.on-selected small {\n    transition: bottom 0.3s;\n    bottom: -14px; }\n  :host button.days-btn small {\n    overflow: hidden;\n    display: block;\n    left: 0;\n    right: 0;\n    bottom: -5px;\n    position: absolute;\n    z-index: 1;\n    text-align: center;\n    font-weight: 200; }\n  :host .days.startSelection:nth-child(7n):before,\n  :host .days.between:nth-child(7n) button.days-btn,\n  :host .days.between button.days-btn.is-last {\n    border-radius: 0 36px 36px 0; }\n    :host .days.startSelection:nth-child(7n):before.on-selected,\n    :host .days.between:nth-child(7n) button.days-btn.on-selected,\n    :host .days.between button.days-btn.is-last.on-selected {\n      border-radius: 50%; }\n  :host .days.endSelection:nth-child(7n + 1):before,\n  :host .days.between:nth-child(7n + 1) button.days-btn,\n  :host .days.between.is-first-wrap button.days-btn.is-first,\n  :host button.days-btn.is-first {\n    border-radius: 36px 0 0 36px; }\n  :host .startSelection button.days-btn.is-first,\n  :host .endSelection button.days-btn.is-first,\n  :host button.days-btn.is-first.on-selected,\n  :host button.days-btn.is-last.on-selected,\n  :host .startSelection button.days-btn.is-last,\n  :host .endSelection button.days-btn.is-last {\n    border-radius: 50%; }\n  :host .startSelection.is-last-wrap::before, :host .startSelection.is-last-wrap::after {\n    border-radius: 0 36px 36px 0; }\n  :host .endSelection.is-first-wrap::before, :host .endSelection.is-first-wrap::after {\n    border-radius: 36px 0 0 36px; }\n  :host.component-mode .days.between button.days-btn.is-last,\n  :host.component-mode .days.between button.days-btn.is-first {\n    border-radius: 0; }\n  :host.component-mode .days.startSelection.is-last-wrap::before, :host.component-mode .days.startSelection.is-last-wrap::after {\n    border-radius: 0; }\n  :host.component-mode .days.endSelection.is-first-wrap::before, :host.component-mode .days.endSelection.is-first-wrap::after {\n    border-radius: 0; }\n  :host .cal-color .days .today p {\n    font-weight: 700; }\n  :host .cal-color .days .last-month-day p,\n  :host .cal-color .days .next-month-day p {\n    color: rgba(0, 0, 0, 0.25); }\n  :host .cal-color .days .today.on-selected p,\n  :host .cal-color .days .marked.on-selected p {\n    color: #fff; }\n  :host .cal-color .days .on-selected,\n  :host .cal-color .startSelection button.days-btn,\n  :host .cal-color .endSelection button.days-btn {\n    color: #fff; }\n  :host .cal-color .startSelection {\n    position: relative; }\n    :host .cal-color .startSelection:before, :host .cal-color .startSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      display: block; }\n    :host .cal-color .startSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .cal-color .endSelection {\n    position: relative; }\n    :host .cal-color .endSelection:before, :host .cal-color .endSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block; }\n    :host .cal-color .endSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .cal-color .startSelection.endSelection:after {\n    background-color: transparent; }\n  :host .cal-color .startSelection button.days-btn {\n    border-radius: 50%; }\n  :host .cal-color .between button.days-btn {\n    width: 100%;\n    border-radius: 0;\n    position: relative; }\n    :host .cal-color .between button.days-btn:after {\n      height: 36px;\n      width: 100%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      display: block;\n      background-color: white;\n      opacity: 0.25; }\n    :host .cal-color .between button.days-btn p {\n      color: #fff; }\n  :host .cal-color .endSelection button.days-btn {\n    border-radius: 50%; }\n    :host .cal-color .endSelection button.days-btn p {\n      color: #fff; }\n  :host .cal-color .days .on-selected p {\n    color: #fff; }\n  :host .cal-color .startSelection button.days-btn,\n  :host .cal-color .endSelection button.days-btn,\n  :host .cal-color .between button.days-btn {\n    -webkit-transition-property: background-color;\n    -moz-transition-property: background-color;\n    -ms-transition-property: background-color;\n    -o-transition-property: background-color;\n    transition-property: background-color;\n    -webkit-transition-duration: 180ms;\n    -moz-transition-duration: 180ms;\n    -ms-transition-duration: 180ms;\n    -o-transition-duration: 180ms;\n    transition-duration: 180ms;\n    -webkit-transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n    -ms-transition-timing-function: ease-out;\n    -o-transition-timing-function: ease-out;\n    transition-timing-function: ease-out; }\n  :host .cal-color .startSelection.endSelection::before {\n    --ion-color-primary: transparent; }\n"]
            }]
          }], function () {
            return [{
              type: ɵngcc0.ChangeDetectorRef
            }];
          }, {
            componentMode: [{
              type: core_1.Input
            }],
            readonly: [{
              type: core_1.Input
            }],
            color: [{
              type: core_1.Input
            }],
            change: [{
              type: core_1.Output
            }],
            select: [{
              type: core_1.Output
            }],
            selectStart: [{
              type: core_1.Output
            }],
            selectEnd: [{
              type: core_1.Output
            }],
            month: [{
              type: core_1.Input
            }],
            pickMode: [{
              type: core_1.Input
            }],
            isSaveHistory: [{
              type: core_1.Input
            }],
            id: [{
              type: core_1.Input
            }]
          });
        })();

        return MonthComponent;
      }();

      exports.MonthComponent = MonthComponent; //# sourceMappingURL=month.component.js.map

      /***/
    },

    /***/
    "./node_modules/ion2-calendar/__ivy_ngcc__/dist/config.js":
    /*!****************************************************************!*\
      !*** ./node_modules/ion2-calendar/__ivy_ngcc__/dist/config.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIon2Calendar__ivy_ngcc__DistConfigJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaults = {
        DATE_FORMAT: 'YYYY-MM-DD',
        COLOR: 'primary',
        WEEKS_FORMAT: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        MONTH_FORMAT: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
      };
      exports.pickModes = {
        SINGLE: 'single',
        RANGE: 'range',
        MULTI: 'multi'
      }; //# sourceMappingURL=config.js.map

      /***/
    },

    /***/
    "./node_modules/ion2-calendar/__ivy_ngcc__/dist/index.js":
    /*!***************************************************************!*\
      !*** ./node_modules/ion2-calendar/__ivy_ngcc__/dist/index.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIon2Calendar__ivy_ngcc__DistIndexJs(module, exports, __webpack_require__) {
      var ɵngcc0 = __webpack_require__(
      /*! ./components/month-picker.component */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/month-picker.component.js");

      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./calendar.model */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/calendar.model.js"));

      var calendar_modal_1 = __webpack_require__(
      /*! ./components/calendar.modal */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/calendar.modal.js");

      exports.CalendarModal = calendar_modal_1.CalendarModal;

      var calendar_week_component_1 = __webpack_require__(
      /*! ./components/calendar-week.component */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/calendar-week.component.js");

      exports.CalendarWeekComponent = calendar_week_component_1.CalendarWeekComponent;

      var month_component_1 = __webpack_require__(
      /*! ./components/month.component */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/month.component.js");

      exports.MonthComponent = month_component_1.MonthComponent;

      var calendar_options_provider_1 = __webpack_require__(
      /*! ./services/calendar-options.provider */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/services/calendar-options.provider.js");

      exports.DEFAULT_CALENDAR_OPTIONS = calendar_options_provider_1.DEFAULT_CALENDAR_OPTIONS;

      var calendar_component_1 = __webpack_require__(
      /*! ./components/calendar.component */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/components/calendar.component.js");

      exports.CalendarComponent = calendar_component_1.CalendarComponent;

      var calendar_module_1 = __webpack_require__(
      /*! ./calendar.module */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/calendar.module.js");

      exports.CalendarModule = calendar_module_1.CalendarModule;

      var calendar_controller_1 = __webpack_require__(
      /*! ./calendar.controller */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/calendar.controller.js");

      exports.CalendarController = calendar_controller_1.CalendarController;
      exports.MonthPickerComponent = ɵngcc0.MonthPickerComponent; //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "./node_modules/ion2-calendar/__ivy_ngcc__/dist/services/calendar-options.provider.js":
    /*!********************************************************************************************!*\
      !*** ./node_modules/ion2-calendar/__ivy_ngcc__/dist/services/calendar-options.provider.js ***!
      \********************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIon2Calendar__ivy_ngcc__DistServicesCalendarOptionsProviderJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      exports.DEFAULT_CALENDAR_OPTIONS = new core_1.InjectionToken('DEFAULT_CALENDAR_MODAL_OPTIONS'); //# sourceMappingURL=calendar-options.provider.js.map

      /***/
    },

    /***/
    "./node_modules/ion2-calendar/__ivy_ngcc__/dist/services/calendar.service.js":
    /*!***********************************************************************************!*\
      !*** ./node_modules/ion2-calendar/__ivy_ngcc__/dist/services/calendar.service.js ***!
      \***********************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIon2Calendar__ivy_ngcc__DistServicesCalendarServiceJs(module, exports, __webpack_require__) {
      "use strict";

      var ɵngcc0 = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var __assign = this && this.__assign || function () {
        __assign = Object.assign || function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return __assign.apply(this, arguments);
      };

      var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __param = this && this.__param || function (paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var moment = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");

      var config_1 = __webpack_require__(
      /*! ../config */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/config.js");

      var calendar_options_provider_1 = __webpack_require__(
      /*! ./calendar-options.provider */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/services/calendar-options.provider.js");

      var isBoolean = function isBoolean(input) {
        return input === true || input === false;
      };

      var ɵ0 = isBoolean;
      exports.ɵ0 = ɵ0;

      var CalendarService =
      /** @class */
      function () {
        function CalendarService(defaultOpts) {
          this.defaultOpts = defaultOpts;
        }

        Object.defineProperty(CalendarService.prototype, "DEFAULT_STEP", {
          get: function get() {
            return 12;
          },
          enumerable: true,
          configurable: true
        });

        CalendarService.prototype.safeOpt = function (calendarOptions) {
          if (calendarOptions === void 0) {
            calendarOptions = {};
          }

          var _disableWeeks = [];
          var _daysConfig = [];

          var _a = __assign({}, this.defaultOpts, calendarOptions),
              _b = _a.from,
              from = _b === void 0 ? new Date() : _b,
              _c = _a.to,
              to = _c === void 0 ? 0 : _c,
              _d = _a.weekStart,
              weekStart = _d === void 0 ? 0 : _d,
              _e = _a.step,
              step = _e === void 0 ? this.DEFAULT_STEP : _e,
              _f = _a.id,
              id = _f === void 0 ? '' : _f,
              _g = _a.cssClass,
              cssClass = _g === void 0 ? '' : _g,
              _h = _a.closeLabel,
              closeLabel = _h === void 0 ? 'CANCEL' : _h,
              _j = _a.doneLabel,
              doneLabel = _j === void 0 ? 'DONE' : _j,
              _k = _a.monthFormat,
              monthFormat = _k === void 0 ? 'MMM YYYY' : _k,
              _l = _a.title,
              title = _l === void 0 ? 'CALENDAR' : _l,
              _m = _a.defaultTitle,
              defaultTitle = _m === void 0 ? '' : _m,
              _o = _a.defaultSubtitle,
              defaultSubtitle = _o === void 0 ? '' : _o,
              _p = _a.autoDone,
              autoDone = _p === void 0 ? false : _p,
              _q = _a.canBackwardsSelected,
              canBackwardsSelected = _q === void 0 ? false : _q,
              _r = _a.closeIcon,
              closeIcon = _r === void 0 ? false : _r,
              _s = _a.doneIcon,
              doneIcon = _s === void 0 ? false : _s,
              _t = _a.showYearPicker,
              showYearPicker = _t === void 0 ? false : _t,
              _u = _a.isSaveHistory,
              isSaveHistory = _u === void 0 ? false : _u,
              _v = _a.pickMode,
              pickMode = _v === void 0 ? config_1.pickModes.SINGLE : _v,
              _w = _a.color,
              color = _w === void 0 ? config_1.defaults.COLOR : _w,
              _x = _a.weekdays,
              weekdays = _x === void 0 ? config_1.defaults.WEEKS_FORMAT : _x,
              _y = _a.daysConfig,
              daysConfig = _y === void 0 ? _daysConfig : _y,
              _z = _a.disableWeeks,
              disableWeeks = _z === void 0 ? _disableWeeks : _z,
              _0 = _a.showAdjacentMonthDay,
              showAdjacentMonthDay = _0 === void 0 ? true : _0,
              _1 = _a.defaultEndDateToStartDate,
              defaultEndDateToStartDate = _1 === void 0 ? false : _1,
              _2 = _a.clearLabel,
              clearLabel = _2 === void 0 ? null : _2;

          return {
            id: id,
            from: from,
            to: to,
            pickMode: pickMode,
            autoDone: autoDone,
            color: color,
            cssClass: cssClass,
            weekStart: weekStart,
            closeLabel: closeLabel,
            closeIcon: closeIcon,
            doneLabel: doneLabel,
            doneIcon: doneIcon,
            canBackwardsSelected: canBackwardsSelected,
            isSaveHistory: isSaveHistory,
            disableWeeks: disableWeeks,
            monthFormat: monthFormat,
            title: title,
            weekdays: weekdays,
            daysConfig: daysConfig,
            step: step,
            showYearPicker: showYearPicker,
            defaultTitle: defaultTitle,
            defaultSubtitle: defaultSubtitle,
            defaultScrollTo: calendarOptions.defaultScrollTo || from,
            defaultDate: calendarOptions.defaultDate || null,
            defaultDates: calendarOptions.defaultDates || null,
            defaultDateRange: calendarOptions.defaultDateRange || null,
            showAdjacentMonthDay: showAdjacentMonthDay,
            defaultEndDateToStartDate: defaultEndDateToStartDate,
            clearLabel: clearLabel
          };
        };

        CalendarService.prototype.createOriginalCalendar = function (time) {
          var date = new Date(time);
          var year = date.getFullYear();
          var month = date.getMonth();
          var firstWeek = new Date(year, month, 1).getDay();
          var howManyDays = moment(time).daysInMonth();
          return {
            year: year,
            month: month,
            firstWeek: firstWeek,
            howManyDays: howManyDays,
            time: new Date(year, month, 1).getTime(),
            date: new Date(time)
          };
        };

        CalendarService.prototype.findDayConfig = function (day, opt) {
          if (opt.daysConfig.length <= 0) return null;
          return opt.daysConfig.find(function (n) {
            return day.isSame(n.date, 'day');
          });
        };

        CalendarService.prototype.createCalendarDay = function (time, opt, month) {
          var _time = moment(time);

          var date = moment(time);
          var isToday = moment().isSame(_time, 'days');
          var dayConfig = this.findDayConfig(_time, opt);

          var _rangeBeg = moment(opt.from).valueOf();

          var _rangeEnd = moment(opt.to).valueOf();

          var isBetween = true;
          var disableWee = opt.disableWeeks.indexOf(_time.toDate().getDay()) !== -1;

          if (_rangeBeg > 0 && _rangeEnd > 0) {
            if (!opt.canBackwardsSelected) {
              isBetween = !_time.isBetween(_rangeBeg, _rangeEnd, 'days', '[]');
            } else {
              isBetween = moment(_time).isBefore(_rangeBeg) ? false : isBetween;
            }
          } else if (_rangeBeg > 0 && _rangeEnd === 0) {
            if (!opt.canBackwardsSelected) {
              var _addTime = _time.add(1, 'day');

              isBetween = !_addTime.isAfter(_rangeBeg);
            } else {
              isBetween = false;
            }
          }

          var _disable = false;

          if (dayConfig && isBoolean(dayConfig.disable)) {
            _disable = dayConfig.disable;
          } else {
            _disable = disableWee || isBetween;
          }

          var title = new Date(time).getDate().toString();

          if (dayConfig && dayConfig.title) {
            title = dayConfig.title;
          } else if (opt.defaultTitle) {
            title = opt.defaultTitle;
          }

          var subTitle = '';

          if (dayConfig && dayConfig.subTitle) {
            subTitle = dayConfig.subTitle;
          } else if (opt.defaultSubtitle) {
            subTitle = opt.defaultSubtitle;
          }

          return {
            time: time,
            isToday: isToday,
            title: title,
            subTitle: subTitle,
            selected: false,
            isLastMonth: date.month() < month,
            isNextMonth: date.month() > month,
            marked: dayConfig ? dayConfig.marked || false : false,
            cssClass: dayConfig ? dayConfig.cssClass || '' : '',
            disable: _disable,
            isFirst: date.date() === 1,
            isLast: date.date() === date.daysInMonth()
          };
        };

        CalendarService.prototype.createCalendarMonth = function (original, opt) {
          var days = new Array(6).fill(null);
          var len = original.howManyDays;

          for (var i = original.firstWeek; i < len + original.firstWeek; i++) {
            var itemTime = new Date(original.year, original.month, i - original.firstWeek + 1).getTime();
            days[i] = this.createCalendarDay(itemTime, opt);
          }

          var weekStart = opt.weekStart;

          if (weekStart === 1) {
            if (days[0] === null) {
              days.shift();
            } else {
              days.unshift.apply(days, new Array(6).fill(null));
            }
          }

          if (opt.showAdjacentMonthDay) {
            var _booleanMap = days.map(function (e) {
              return !!e;
            });

            var thisMonth = moment(original.time).month();
            var startOffsetIndex = _booleanMap.indexOf(true) - 1;
            var endOffsetIndex = _booleanMap.lastIndexOf(true) + 1;

            for (startOffsetIndex; startOffsetIndex >= 0; startOffsetIndex--) {
              var dayBefore = moment(days[startOffsetIndex + 1].time).clone().subtract(1, 'd');
              days[startOffsetIndex] = this.createCalendarDay(dayBefore.valueOf(), opt, thisMonth);
            }

            if (!(_booleanMap.length % 7 === 0 && _booleanMap[_booleanMap.length - 1])) {
              for (endOffsetIndex; endOffsetIndex < days.length + endOffsetIndex % 7; endOffsetIndex++) {
                var dayAfter = moment(days[endOffsetIndex - 1].time).clone().add(1, 'd');
                days[endOffsetIndex] = this.createCalendarDay(dayAfter.valueOf(), opt, thisMonth);
              }
            }
          }

          return {
            days: days,
            original: original
          };
        };

        CalendarService.prototype.createMonthsByPeriod = function (startTime, monthsNum, opt) {
          var _array = [];

          var _start = new Date(startTime);

          var _startMonth = new Date(_start.getFullYear(), _start.getMonth(), 1).getTime();

          for (var i = 0; i < monthsNum; i++) {
            var time = moment(_startMonth).add(i, 'M').valueOf();
            var originalCalendar = this.createOriginalCalendar(time);

            _array.push(this.createCalendarMonth(originalCalendar, opt));
          }

          return _array;
        };

        CalendarService.prototype.wrapResult = function (original, pickMode) {
          var _this = this;

          var result;

          switch (pickMode) {
            case config_1.pickModes.SINGLE:
              result = this.multiFormat(original[0].time);
              break;

            case config_1.pickModes.RANGE:
              result = {
                from: this.multiFormat(original[0].time),
                to: this.multiFormat((original[1] || original[0]).time)
              };
              break;

            case config_1.pickModes.MULTI:
              result = original.map(function (e) {
                return _this.multiFormat(e.time);
              });
              break;

            default:
              result = original;
          }

          return result;
        };

        CalendarService.prototype.multiFormat = function (time) {
          var _moment = moment(time);

          return {
            time: _moment.valueOf(),
            unix: _moment.unix(),
            dateObj: _moment.toDate(),
            string: _moment.format(config_1.defaults.DATE_FORMAT),
            years: _moment.year(),
            months: _moment.month() + 1,
            date: _moment.date()
          };
        };

        CalendarService = __decorate([__param(0, core_1.Optional()), __param(0, core_1.Inject(calendar_options_provider_1.DEFAULT_CALENDAR_OPTIONS)), __metadata("design:paramtypes", [Object])], CalendarService);

        CalendarService.ɵfac = function CalendarService_Factory(t) {
          return new (t || CalendarService)(ɵngcc0.ɵɵinject(calendar_options_provider_1.DEFAULT_CALENDAR_OPTIONS, 8));
        };

        CalendarService.ɵprov = ɵngcc0.ɵɵdefineInjectable({
          token: CalendarService,
          factory: function factory(t) {
            return CalendarService.ɵfac(t);
          }
        });
        /*@__PURE__*/

        (function () {
          ɵngcc0.ɵsetClassMetadata(CalendarService, [{
            type: core_1.Injectable
          }], function () {
            return [{
              type: Object,
              decorators: [{
                type: core_1.Optional
              }, {
                type: core_1.Inject,
                args: [calendar_options_provider_1.DEFAULT_CALENDAR_OPTIONS]
              }]
            }];
          }, null);
        })();

        return CalendarService;
      }();

      exports.CalendarService = CalendarService; //# sourceMappingURL=calendar.service.js.map

      /***/
    },

    /***/
    "./node_modules/ion2-calendar/__ivy_ngcc__/dist/utils/icons.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/ion2-calendar/__ivy_ngcc__/dist/utils/icons.js ***!
      \*********************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIon2Calendar__ivy_ngcc__DistUtilsIconsJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var getIconMap = function getIconMap() {
        if (typeof window === 'undefined') {
          return new Map();
        } else {
          var win = window;
          win.Ionicons = win.Ionicons || {};
          win.Ionicons.map = win.Ionicons.map || new Map();
          return win.Ionicons.map;
        }
      };

      var ɵ0 = getIconMap;
      exports.ɵ0 = ɵ0;

      exports.isIonIconsV4 = function () {
        var iconMap = getIconMap();
        return !!iconMap.get('md-arrow-dropdown');
      }; //# sourceMappingURL=icons.js.map

      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/retailer/detail/detail.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/retailer/detail/detail.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeRetailerDetailDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-button [routerLink]=\"['/home/retailer']\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        <ion-icon slot=\"icon-only\" class=\"arow-back\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-title>소매 편집</ion-title>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"ion-padding bg-calender\">\n\n    <ion-row>\n      <ion-col size=\"10\" class=\"line-height\">\n        <ion-row>\n          <ion-label class=\"font-bold\">{{retailer.retailer_name}}</ion-label>\n          <ion-label class=\"slas\"> / </ion-label>\n          <span *ngFor=\"let depo of retailer.depositors\">{{depo.name}}</span> \n        </ion-row>\n        <ion-row class=\"row\">\n          <ion-label class=\"round-border\">사입비</ion-label>\n          <ion-label class=\"font-bold\">{{retailer.buying_fee}} 명</ion-label>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button class=\"btn-his\">\n          <ion-icon name=\"pencil-sharp\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"row underline\">\n      <ion-col size=\"5\">\n        <ion-label>{{retailer.phone_number}}</ion-label>\n      </ion-col>\n      <ion-col size=\"7\">\n        <ion-label>{{retailer.address_ko}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"padding-top8\">\n      <ion-col size=\"4\">\n        <ion-select interface=\"popover\" placeholder=\"선택\" class=\"height32 bg-white\">\n          <ion-select-option value=\"nes\">선택</ion-select-option>\n          <ion-select-option value=\"n64\">사입완료</ion-select-option>\n          <ion-select-option value=\"ps\">미수금</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-chip outline color=\"dark\" class=\"bg-white\">\n          <ion-icon name=\"calendar-outline\"></ion-icon>\n          <div *ngIf=\"startDate != null && endDate != null; else def\">\n            <ion-label>{{startDate | date:'yyyy.MM.dd'}} ~ {{endDate | date:'yyyy.MM.dd'}}</ion-label>\n          </div>\n          <ng-template #def>\n            <ion-label>----.--.-- ~ ----.--.--</ion-label>\n          </ng-template >\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-row class=\"info\">\n          <ion-col> <ion-label class=\"black\">&bull; 선택</ion-label></ion-col>\n          <ion-col> <ion-label class=\"blue\">&bull; 사입완료</ion-label></ion-col>\n          <ion-col> <ion-label class=\"orange\">&bull; 미수금</ion-label></ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-calendar [(ngModel)]=\"dateRange\"\n        [options]=\"optionsRange\"\n        [type]=\"type\"\n        (change)=\"onChange($event)\"\n        [format]=\"'YYYY-MM-DD'\">\n    </ion-calendar>\n\n  <!-- <calendar \n    [eventSource]=\"eventSource\"\n    [calendarMode]=\"calendar.mode\"\n    [currentDate]=\"calendar.currentDate\"\n    [queryMode]=\"calendar.queryMode\"\n    (onEventSelected)=\"onEventSelected($event)\"\n    (onTimeSelected)=\"onTimeSelected($event)\"\n    (onTitleChanged)=\"onViewTitleChanged($event)\"\n    (onRangeChanged)=\"onRangeChanged($event)\"\n    [dateFormatter]=\"calendarFormart.dateFormatter\"\n    [monthviewDisplayEventTemplate]=\"foo\"\n    step=30\n  >\n  </calendar> -->\n\n<!-- \n  <ng-template #foo let-view=\"view\" let-row=\"row\" let-col=\"col\">\n    <div [class.with-event]=\"view.dates[row*7+col].events.length\">\n      {{view.dates[row*7+col].label}}\n      <div class=\"indicator-container\">\n        <div class=\"event-indicator\" *ngFor=\"let e of view.dates[row*7+col].events\"></div>\n      </div>\n    </div>\n  </ng-template> -->\n\n    <div class=\"bg-white borderTop\">\n      <ion-grid fixed>\n        <ion-row class=\"line-height\">\n          <ion-col>\n            <div><ion-label>사입건수</ion-label></div>\n            <div><ion-label class=\"order-count\">21​​ 건</ion-label></div>\n          </ion-col>\n          <ion-col class=\"col-border\">\n            <div><ion-label>물비(원)</ion-label></div>\n            <div><ion-label class=\"font-bold\">111,500,000</ion-label></div>\n          </ion-col>\n          <ion-col>\n            <div><ion-label>사입비(원)</ion-label></div>\n            <div><ion-label class=\"font-bold\">60,000</ion-label></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    \n      <ion-button class=\"btn-his\" (click)=\"purHistory()\" expand=\"block\" fill=\"solid\" >\n        사입 이력 조회\n      </ion-button>\n    </div>\n  </div>\n\n  \n\n  \n</ion-content>";
      /***/
    },

    /***/
    "./src/app/home/retailer/detail/detail-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/home/retailer/detail/detail-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: DetailPageRoutingModule */

    /***/
    function srcAppHomeRetailerDetailDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function () {
        return DetailPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./detail.page */
      "./src/app/home/retailer/detail/detail.page.ts");

      var routes = [{
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
      }];

      var DetailPageRoutingModule = function DetailPageRoutingModule() {
        _classCallCheck(this, DetailPageRoutingModule);
      };

      DetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/retailer/detail/detail.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/home/retailer/detail/detail.module.ts ***!
      \*******************************************************/

    /*! exports provided: DetailPageModule */

    /***/
    function srcAppHomeRetailerDetailDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailPageModule", function () {
        return DetailPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./detail-routing.module */
      "./src/app/home/retailer/detail/detail-routing.module.ts");
      /* harmony import */


      var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./detail.page */
      "./src/app/home/retailer/detail/detail.page.ts");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ion2-calendar */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/index.js");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);

      var DetailPageModule = function DetailPageModule() {
        _classCallCheck(this, DetailPageModule);
      };

      DetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"], ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"]],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
      })], DetailPageModule);
      /***/
    },

    /***/
    "./src/app/home/retailer/detail/detail.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/home/retailer/detail/detail.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeRetailerDetailDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bg-calender {\n  background-color: #f3f5fc;\n}\n\n.bg-white {\n  background-color: white;\n}\n\n.height32 {\n  height: 32px;\n}\n\n.padding-top8 {\n  padding-top: 8px;\n}\n\n.row {\n  display: unset;\n}\n\n.underline {\n  text-decoration: underline;\n}\n\n.line-height {\n  line-height: 2;\n  text-align: left;\n}\n\n.round-border {\n  border: 2px solid lightgrey;\n  margin-right: 5px;\n  padding: 4px;\n  border-radius: 5px;\n  font-size: 13px;\n  background-color: white;\n}\n\n.info {\n  font-size: 12px;\n}\n\n.margin-t5 {\n  margin-top: 5px;\n}\n\n.margin-l-r {\n  margin: 0 8px;\n}\n\n.orange {\n  color: #ee5a19;\n}\n\n.blue {\n  color: #2e50cb;\n}\n\n.black {\n  color: #1e1f20;\n}\n\nion-col {\n  text-align: center;\n}\n\n.col-border {\n  border-left: ridge;\n  border-right: ridge;\n}\n\n.btn-his {\n  --background: #e3e9ff;\n  --background-activated: #dbdff1;\n  color: #5375e8;\n}\n\n.borderTop {\n  border-top: ridge;\n}\n\n.order-count {\n  font-weight: bold;\n  color: #2b59f5;\n}\n\n.font-bold {\n  font-weight: bold;\n}\n\n.cal-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.slas {\n  margin: 0 5px;\n}\n\n.with-event {\n  background-color: #ee5a19;\n  border-radius: 10px;\n}\n\n.indicator-container {\n  padding-left: 0.5rem;\n  padding-bottom: 0.4rem;\n}\n\n.event-indicator {\n  background: white;\n  width: 5px;\n  height: 5px;\n  border-radius: 5px;\n  display: table-cell;\n}\n\n:host ::ng-deep .days-btn p {\n  color: black !important;\n}\n\n:host ::ng-deep .event-detail-container {\n  display: none;\n}\n\n:host ::ng-deep .monthview-container {\n  margin: 8px 0 15px;\n}\n\n:host ::ng-deep .danger button.days-btn small, :host ::ng-deep .danger .days .marked p, :host ::ng-deep .danger .days .today p {\n  color: blue !important;\n}\n\n:host ::ng-deep .red {\n  background-color: red !important;\n}\n\n:host ::ng-deep .cp {\n  background-color: #ee5a19 !important;\n  font-weight: bold !important;\n  color: white !important;\n}\n\n:host ::ng-deep .ar {\n  background-color: #2e50cb !important;\n  font-weight: bold !important;\n  color: white !important;\n}\n\n:host ::ng-deep .table-bordered {\n  border: none !important;\n}\n\n:host ::ng-deep .table-bordered > thead > tr > th,\n:host ::ng-deep .table-bordered > tbody > tr > th,\n:host ::ng-deep .table-bordered > tfoot > tr > th,\n:host ::ng-deep .table-bordered > thead > tr > td,\n:host ::ng-deep .table-bordered > tbody > tr > td,\n:host ::ng-deep .table-bordered > tfoot > tr > td {\n  border: none !important;\n}\n\n:host ::ng-deep .monthview-primary-with-event {\n  background-color: white !important;\n}\n\n:host ::ng-deep .monthview-selected {\n  background-color: var(--ion-color-success) !important;\n}\n\nion-calendar {\n  padding: 0px !important;\n  box-sizing: border-box;\n  display: inline-block;\n  background-color: #f3f5fc;\n  width: 100%;\n}\n\nion-calendar .title {\n  padding: 0 54px 0 54px;\n  overflow: hidden;\n}\n\nion-calendar .title .back, ion-calendar .title .forward, ion-calendar .title .switch-btn {\n  display: block;\n  position: relative;\n  float: left;\n  min-height: 32px;\n  margin: 0;\n  padding: 0;\n  font-size: 15px;\n}\n\nion-calendar .title .back, ion-calendar .title .forward {\n  color: #757575;\n}\n\nion-calendar .title .back {\n  margin-left: -100%;\n  left: -54px;\n  width: 54px;\n}\n\nion-calendar .title .forward {\n  margin-left: -54px;\n  right: -54px;\n  width: 54px;\n}\n\nion-calendar .title .switch-btn {\n  width: 100%;\n  text-align: center;\n  line-height: 32px;\n  color: #757575;\n}\n\nion-calendar .title .switch-btn .arrow-dropdown {\n  margin-left: 5px;\n}\n\nion-calendar .days.between .days-btn.is-last, ion-calendar .days.between .days-btn.is-first {\n  border-radius: 0;\n}\n\nion-calendar .component-mode .days.startSelection.is-last-wrap::after {\n  border-radius: 0;\n}\n\nion-calendar .component-mode .days.endSelection.is-first-wrap::after {\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9yZXRhaWxlci9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1QkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtBQUdKOztBQURBO0VBQ0ksZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLGNBQUE7QUFLSjs7QUFIQTtFQUNJLDBCQUFBO0FBTUo7O0FBSkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFMQTtFQUNJLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFRSjs7QUFOQTtFQUNJLGVBQUE7QUFTSjs7QUFQQTtFQUNFLGVBQUE7QUFVRjs7QUFSQTtFQUNFLGFBQUE7QUFXRjs7QUFUQTtFQUNJLGNBQUE7QUFZSjs7QUFWQTtFQUNJLGNBQUE7QUFhSjs7QUFYQTtFQUNJLGNBQUE7QUFjSjs7QUFaQTtFQUNJLGtCQUFBO0FBZUo7O0FBYkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBZ0JKOztBQWRBO0VBQ0kscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7QUFpQko7O0FBZkE7RUFDSSxpQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUFtQko7O0FBakJBO0VBQ0ksaUJBQUE7QUFvQko7O0FBbEJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBcUJGOztBQW5CQTtFQUNJLGFBQUE7QUFzQko7O0FBakJBO0VBRUkseUJBQUE7RUFDQSxtQkFBQTtBQW1CSjs7QUFoQkE7RUFDSSxvQkFBQTtFQUNBLHNCQUFBO0FBbUJKOztBQWRBO0VBRUksaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFnQko7O0FBVkU7RUFDTSx1QkFBQTtBQWFSOztBQVhFO0VBQ0UsYUFBQTtBQWFKOztBQVhFO0VBQ0Usa0JBQUE7QUFhSjs7QUFYRTtFQUNNLHNCQUFBO0FBYVI7O0FBWEU7RUFDSSxnQ0FBQTtBQWFOOztBQVhFO0VBQ0Usb0NBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0FBYUo7O0FBWEU7RUFDRSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7QUFhSjs7QUFYRTtFQUNFLHVCQUFBO0FBYUo7O0FBWEU7Ozs7OztFQU1FLHVCQUFBO0FBYUo7O0FBWEU7RUFDRSxrQ0FBQTtBQWFKOztBQVhFO0VBQ0UscURBQUE7QUFhSjs7QUFUQTtFQUlJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQVNKOztBQVBJO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtBQVNOOztBQVJNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBVVI7O0FBUE07RUFDRSxjQUFBO0FBU1I7O0FBTk07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQTVCUTtBQW9DaEI7O0FBTE07RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQWxDUTtBQXlDaEI7O0FBSk07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFNUjs7QUFKUTtFQUNFLGdCQUFBO0FBTVY7O0FBQU07RUFDRSxnQkFBQTtBQUVSOztBQUlRO0VBQ0UsZ0JBQUE7QUFGVjs7QUFPUTtFQUNFLGdCQUFBO0FBTFYiLCJmaWxlIjoic3JjL2FwcC9ob21lL3JldGFpbGVyL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWNhbGVuZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y1ZmM7XG59XG4uYmctd2hpdGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uaGVpZ2h0MzJ7XG4gICAgaGVpZ2h0OiAzMnB4O1xufVxuLnBhZGRpbmctdG9wOHtcbiAgICBwYWRkaW5nLXRvcDo4cHg7XG59XG4ucm93e1xuICAgIGRpc3BsYXk6IHVuc2V0O1xufVxuLnVuZGVybGluZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5saW5lLWhlaWdodHtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnJvdW5kLWJvcmRlcntcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uaW5mb3tcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4ubWFyZ2luLXQ1e1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ubWFyZ2luLWwtcntcbiAgbWFyZ2luOiAwIDhweDtcbn1cbi5vcmFuZ2V7XG4gICAgY29sb3I6ICNlZTVhMTk7XG59XG4uYmx1ZXtcbiAgICBjb2xvcjogIzJlNTBjYjtcbn1cbi5ibGFja3tcbiAgICBjb2xvcjogIzFlMWYyMDtcbn1cbmlvbi1jb2wge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb2wtYm9yZGVye1xuICAgIGJvcmRlci1sZWZ0OiByaWRnZTtcbiAgICBib3JkZXItcmlnaHQ6IHJpZGdlO1xufVxuLmJ0bi1oaXN7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZTNlOWZmO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNkYmRmZjE7XG4gICAgY29sb3I6IzUzNzVlODtcbn1cbi5ib3JkZXJUb3B7XG4gICAgYm9yZGVyLXRvcDogcmlkZ2U7XG59XG4ub3JkZXItY291bnR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IzJiNTlmNTtcbn1cbi5mb250LWJvbGR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY2FsLXRpdGxle1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNsYXN7XG4gICAgbWFyZ2luOiAwIDVweDtcbn1cblxuJHByaW1hcnk6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXG4ud2l0aC1ldmVudCB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZTVhMTk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmluZGljYXRvci1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XG59XG5cblxuXG4uZXZlbnQtaW5kaWNhdG9yIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgd2lkdGg6NXB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cblxuXG46aG9zdCA6Om5nLWRlZXAge1xuICAuZGF5cy1idG4gcHtcbiAgICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmV2ZW50LWRldGFpbC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubW9udGh2aWV3LWNvbnRhaW5lcntcbiAgICBtYXJnaW46IDhweCAwIDE1cHg7XG4gIH1cbiAgLmRhbmdlciBidXR0b24uZGF5cy1idG4gc21hbGwsIC5kYW5nZXIgLmRheXMgLm1hcmtlZCBwLCAuZGFuZ2VyIC5kYXlzIC50b2RheSBwe1xuICAgICAgICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xuICB9XG4gIC5yZWR7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgfVxuICAuY3B7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlNWExOSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTUwY2IgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG4gIC50YWJsZS1ib3JkZXJlZHtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGgsIFxuICAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGgsIFxuICAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyID4gdGgsIFxuICAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGQsIFxuICAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQsIFxuICAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyID4gdGR7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1vbnRodmlldy1wcmltYXJ5LXdpdGgtZXZlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxuICAubW9udGh2aWV3LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2VzcykgIWltcG9ydGFudDtcbiAgfVxufVxuXG5pb24tY2FsZW5kYXIge1xuXG4gICAgJGJ0bi13aWR0aDogNTRweDtcbiAgXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjVmYztcbiAgICB3aWR0aDogMTAwJTtcbiAgXG4gICAgLnRpdGxlIHtcbiAgICAgIHBhZGRpbmc6IDAgJGJ0bi13aWR0aCAwICRidG4td2lkdGg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgLmJhY2ssIC5mb3J3YXJkLCAuc3dpdGNoLWJ0biB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBtaW4taGVpZ2h0OiAzMnB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cbiAgXG4gICAgICAuYmFjaywgLmZvcndhcmQge1xuICAgICAgICBjb2xvcjogIzc1NzU3NTtcbiAgICAgIH1cbiAgXG4gICAgICAuYmFjayB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcbiAgICAgICAgbGVmdDogLSRidG4td2lkdGg7XG4gICAgICAgIHdpZHRoOiAkYnRuLXdpZHRoO1xuICAgICAgfVxuICBcbiAgICAgIC5mb3J3YXJkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0kYnRuLXdpZHRoO1xuICAgICAgICByaWdodDogLSRidG4td2lkdGg7XG4gICAgICAgIHdpZHRoOiAkYnRuLXdpZHRoO1xuICAgICAgfVxuICBcbiAgICAgIC5zd2l0Y2gtYnRuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIGNvbG9yOiAjNzU3NTc1O1xuICBcbiAgICAgICAgLmFycm93LWRyb3Bkb3duIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAuZGF5cy5iZXR3ZWVuIHtcbiAgICAgIC5kYXlzLWJ0bi5pcy1sYXN0LCAuZGF5cy1idG4uaXMtZmlyc3Qge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLmNvbXBvbmVudC1tb2RlIHtcbiAgICAgIC5kYXlzLnN0YXJ0U2VsZWN0aW9uLmlzLWxhc3Qtd3JhcCB7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLmRheXMuZW5kU2VsZWN0aW9uLmlzLWZpcnN0LXdyYXAge1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/home/retailer/detail/detail.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/home/retailer/detail/detail.page.ts ***!
      \*****************************************************/

    /*! exports provided: DetailPage */

    /***/
    function srcAppHomeRetailerDetailDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailPage", function () {
        return DetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var DetailPage = /*#__PURE__*/function () {
        function DetailPage(route) {
          _classCallCheck(this, DetailPage);

          this.route = route; // ====== Ion2-calendar =========================

          this.daysConfig = [];
          this.optionsRange = {
            pickMode: 'range',
            color: 'danger',
            canBackwardsSelected: true,
            monthFormat: 'YYYY 년 MM 월 ',
            // monthPickerFormat:['일월','이월','삼월','사월','오월','유월','칠월','팔월','구월','시월','십일월','십이월'],
            weekdays: ['일', '월', '화', '수', '목', '금', '토'],
            daysConfig: this.daysConfig
          };
        }

        _createClass(DetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            // for (let i = 0; i < 31; i++) {
            //   // this.daysConfig.push({
            //   //   date: new Date(2021, 1, i + 1),
            //   //   subTitle: `$${i + 1}`,
            //   //   cssClass: 'test'
            //   // });
            this.daysConfig.push({
              date: new Date(2021, 1, 9),
              cssClass: 'cp'
            });
            this.daysConfig.push({
              date: new Date(2021, 1, 12),
              cssClass: 'ar'
            });
            this.route.queryParams.subscribe(function (params) {
              _this2.retailer = JSON.parse(params["data"]);
            });
          }
        }, {
          key: "onChange",
          value: function onChange($event) {
            this.startDate = $event.from._d;
            this.endDate = $event.to._d;
            console.log("From: " + this.startDate + " To: " + this.endDate);
          }
        }, {
          key: "purHistory",
          value: function purHistory() {
            alert("Comming Soon!");
          }
        }]);

        return DetailPage;
      }();

      DetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      };

      DetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/retailer/detail/detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./detail.page.scss */
        "./src/app/home/retailer/detail/detail.page.scss"))["default"]]
      })], DetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=retailer-detail-detail-module-es5.js.map