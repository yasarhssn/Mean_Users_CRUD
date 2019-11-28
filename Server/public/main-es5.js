(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-users></app-users>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>ramkumars project</p> -->\n<div class=\"row\">\n    <div class=\"col-sm-6\">\n\n        <div class=\"card\">\n\n            <div class=\"card-header strong info-color white-text text-center\">\n                Create User(Add/Register)\n            </div>\n\n            <div class=\"card-body\">\n\n                <form #userForm=\"ngForm\" (ngSubmit)=\"userForm.valid && onSubmit(userForm)\">\n                         <div class=\"md-form\">\n                            <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"userService.selectedUser._id\" class=\"form=control\" id=\"userForm_id\" mdbInput/>\n                        </div>\n\n                        <div class=\"md-form\">\n                            <input type=\"text\" name=\"username\" #username=\"ngModel\" [(ngModel)]=\"userService.selectedUser.username\" class=\"form-control\" id=\"userFormusername\" \n                            mdbInput required [ngClass]=\"{'invalid' : userForm.submitted && !username.valid}\"/>\n                            <label for=\"userFormusername\">UserName</label>\n                        </div>\n\n                        <div *ngIf=\"userForm.submitted && username.errors\">\n                            <label *ngIf=\"username.errors.required\">User Name required</label>\n                        </div>\n\n                        <div class=\"md-form\">\n                            <input type=\"text\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"userService.selectedUser.email\" class=\"form-control\" id=\"userFormemail\" \n                            mdbInput required [pattern]=\"emailRegex\" [ngClass]=\"{'invalid' : userForm.submitted && !email.valid}\"/>\n                            <label for=\"userFormemail\">Email</label>                            \n                        </div>\n\n                        <div *ngIf=\"userForm.submitted && email.errors\">\n                            <label *ngIf=\"email.errors.required\">Email Required!</label>\n                            <label *ngIf=\"email.errors.pattern\">Email is invalid!</label>\n                        </div>\n\n                        <fieldset ngModelGroup=\"address\">\n                        <div class=\"md-form\">\n                            <input type=\"text\" name=\"street\" #street=\"ngModel\" [(ngModel)]=\"userService.selectedUser.address.street\" class=\"form-control\" id=\"userFormAddressStreet\" \n                            mdbInput required [ngClass]=\"{'invalid' : userForm.submitted && !street.valid}\"/>\n                            <label for=\"userFormAddressStreet\">Address - Street</label>\n                        </div>\n\n                        <div *ngIf=\"userForm.submitted && street.errors\">\n                            <label *ngIf=\"street.errors\">Address street required!</label>\n                        </div>\n\n                        <div class=\"md-form\">\n                            <input type=\"text\" name=\"suite\" #suite=\"ngModel\" [(ngModel)]=\"userService.selectedUser.address.suite\" class=\"form-control\" id=\"userFormAddressSuite\" \n                            mdbInput required [ngClass]=\"{'invalid' : userForm.submitted && !suite.valid}\"/>\n                            <label for=\"userFormAddressSuite\">Address - Suite</label>\n                        </div>\n\n                        <div *ngIf=\"userForm.submitted && suite.errors\">\n                            <label *ngIf=\"suite.errors\">Address Suite required!</label>\n                        </div>\n\n                        \n                        <div class=\"md-form\">\n                            <input type=\"text\" name=\"city\" #city=\"ngModel\" [(ngModel)]=\"userService.selectedUser.address.city\" class=\"form-control\" id=\"userFormAddressCity\" \n                            mdbInput required [ngClass]=\"{'invalid' : userForm.submitted && !city.valid}\"/>\n                            <label for=\"userFormAddressCity\">Address - City</label>\n                        </div>\n\n                        <div *ngIf=\"userForm.submitted && city.errors\">\n                            <label *ngIf=\"city.errors\">Address City required!</label>\n                        </div>\n\n                        \n                        <div class=\"md-form\">\n                            <input type=\"text\" name=\"zipcode\" #zipcode=\"ngModel\" [(ngModel)]=\"userService.selectedUser.address.zipcode\" class=\"form-control\" id=\"userFormAddressZipcode\" \n                            mdbInput required [ngClass]=\"{'invalid' : userForm.submitted && !zipcode.valid}\"/>\n                            <label for=\"userFormAddressZipcode\">Address - Zipcode</label>\n                        </div>\n\n                        <div *ngIf=\"userForm.submitted && zipcode.errors\">\n                            <label *ngIf=\"zipcode.errors\">Address Zipcode required!</label>\n                        </div>\n\n                        <fieldset ngModelGroup=\"geo\">\n\n                        <div class=\"md-form\">\n                            <input type=\"text\" name=\"lat\" #lat=\"ngModel\" [(ngModel)]=\"userService.selectedUser.address.geo.lat\" class=\"form-control\" id=\"userFormAddressGeoLat\" \n                            mdbInput required [ngClass]=\"{'invalid' : userForm.submitted && !lat.valid}\"/>\n                            <label for=\"userFormAddressGeoLat\">Address - Geo Lat</label>\n                        </div>\n\n                        <div *ngIf=\"userForm.submitted && lat.errors\">\n                            <label *ngIf=\"lat.errors\">Address - Geo Lat required!</label>\n                        </div>\n\n                        <div class=\"md-form\">\n                            <input type=\"text\" name=\"lang\" #lang=\"ngModel\" [(ngModel)]=\"userService.selectedUser.address.geo.lang\" class=\"form-control\" id=\"userFormAddressGeoLang\" \n                            mdbInput required [ngClass]=\"{'invalid' : userForm.submitted && !lang.valid}\"/>\n                            <label for=\"userFormAddressGeoLang\">Address - Geo Lang</label>\n                        </div>\n\n                        <div *ngIf=\"userForm.submitted && lang.errors\">\n                            <label *ngIf=\"lang.errors\">Address Geo Lang required!</label>\n                        </div>\n                        </fieldset>\n                    </fieldset>\n\n                        <div class=\"md-form\">\n                            <input type=\"text\" name=\"phone\" #phone=\"ngModel\" [(ngModel)]=\"userService.selectedUser.phone\" class=\"form-control\" id=\"userFormPhone\" \n                            mdbInput required [ngClass]=\"{'invalid' : userForm.submitted && !phone.valid}\"/>\n                            <label for=\"userFormPhone\">Phone</label>\n                        </div>\n\n                        <div *ngIf=\"userForm.submitted && phone.errors\">\n                            <label *ngIf=\"phone.errors\">Phone number required!</label>\n                        </div>\n\n                        <div class=\"md-form\">\n                            <input type=\"text\" name=\"website\" #website=\"ngModel\" [(ngModel)]=\"userService.selectedUser.website\" class=\"form-control\" id=\"userFormWebsite\" \n                            mdbInput required [ngClass]=\"{'invalid' : userForm.submitted && !website.valid}\"/>\n                            <label for=\"userFormWebsite\">Website</label>\n                        </div>\n\n                        <div *ngIf=\"userForm.submitted && website.errors\">\n                            <label *ngIf=\"website.errors\">Website required!</label>\n                        </div>\n\n<!--read!post!crud!-->\n                    <fieldset ngModelGroup=\"company\">\n                        <div class=\"md-form\">\n                            <input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"userService.selectedUser.company.name\" class=\"form-control\" id=\"userFormCompanyName\" \n                            mdbInput required [ngClass]=\"{'invalid' : userForm.submitted && !name.valid}\"/>\n                            <label for=\"userFormCompanyName\">Company Name</label>\n                        </div>\n\n                        <div *ngIf=\"userForm.submitted && name.errors\">\n                                <label *ngIf=\"name.errors\">Company name required!</label>\n                        </div>\n\n\n                        <div class=\"md-form\">\n                            <input type=\"text\" name=\"catchPhrase\" #catchPhrase=\"ngModel\" [(ngModel)]=\"userService.selectedUser.company.catchPhrase\" class=\"form-control\" id=\"userFormCompanyCatchPhrase\" \n                            mdbInput required [ngClass]=\"{'invalid' : userForm.submitted && !catchPhrase.valid}\"/>\n                            <label for=\"userFormCompanyCatchPhrase\">Company CatchPhrase</label>\n                        </div>\n\n                        <div *ngIf=\"userForm.submitted && catchPhrase.errors\">\n                            <label *ngIf=\"catchPhrase.errors\">Company CatchPhrase required!</label>\n                        </div>\n\n                        <div class=\"md-form\">\n                                <input type=\"text\" name=\"bs\" #bs=\"ngModel\" [(ngModel)]=\"userService.selectedUser.company.bs\" class=\"form-control\" id=\"userFormCompanyBs\" \n                                mdbInput required [ngClass]=\"{'invalid' : userForm.submitted && !bs.valid}\"/>\n                                <label for=\"userFormCompanyBs\">Company BS</label>\n                        </div>\n\n                        <div *ngIf=\"userForm.submitted && bs.errors\">\n                            <label *ngIf=\"bs.errors\">Company BS required!</label>\n                        </div>\n\n                </fieldset>\n                       \n                    <button type=\"submit\" class=\"btn btn-primary\">save</button>\n                </form>\n            </div>\n        </div>\n      \n    </div>\n    <div class=\"col-sm-6\">\n        <table mdbTable>\n            <thead  class=\"info-color white-text\">\n                <tr>\n                    <th>UserName</th>\n                    <th>City</th>\n                    <th>CompanyName</th>\n                </tr>\n                        \n\n            </thead>\n            <tbody>\n                <tr mdbTableCol *ngFor=\"let user of this.userService.users\">\n                    <td>{{user.username}}</td>\n                    <td>{{user.address.city}}</td>\n                    <td>{{user.company.name}}</td>\n                    <td><i class=\"fas fa-edit\" (click)=\"onEdit(user)\"></i></td>\n                <td>    <i class=\"fas fa-fire\" (click)=\"onDelete(user._id,form)\"></i></td>\n                </tr>\n\n            </tbody>\n        </table>\n        <button type=\"submit\" class=\"btn btn-danger\">Edit/Delete</button> -->\n    </div>\n    \n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent_1;
            //testing
            var AppComponent = AppComponent_1 = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'AngularClient';
                }
                return AppComponent;
            }());
            AppComponent = AppComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [AppComponent_1],
                    exports: [AppComponent_1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]],
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
                }),
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                        _users_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"].forRoot()
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/shared/user.service.ts": 
        /*!****************************************!*\
          !*** ./src/app/shared/user.service.ts ***!
          \****************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var UserService = /** @class */ (function () {
                function UserService(http) {
                    this.http = http;
                    this.selectedUser = {
                        _id: '',
                        username: '',
                        email: '',
                        address: {
                            street: '',
                            suite: '',
                            city: '',
                            zipcode: '',
                            geo: {
                                lat: '',
                                lang: ''
                            }
                        },
                        phone: undefined,
                        website: '',
                        company: {
                            name: '',
                            catchPhrase: '',
                            bs: ''
                        }
                    };
                }
                UserService.prototype.postUser = function (user) {
                    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/saveUser', user);
                };
                UserService.prototype.getUsers = function () {
                    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getUsers');
                };
                UserService.prototype.putUser = function (user) {
                    return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/updateUserById/' + ("" + user._id), user);
                };
                UserService.prototype.deleteUser = function (_id) {
                    return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/deleteUserById/' + ("" + _id));
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/users/users.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/users/users.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/users/users.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/users/users.component.ts ***!
          \******************************************/
        /*! exports provided: UsersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function () { return UsersComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var UsersComponent_1;
            //for testing
            var UsersComponent = UsersComponent_1 = /** @class */ (function () {
                function UsersComponent(userService) {
                    this.userService = userService;
                    this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                }
                UsersComponent.prototype.ngOnInit = function () {
                    console.log('ngOninit');
                    this.resetForm();
                    this.refreshUserList();
                };
                UsersComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    if (form.value._id == "") {
                        console.log('onSubmit::' + form.value);
                        console.log('onSubmit::' + JSON.stringify(form.value, undefined, 2));
                        this.userService.postUser(form.value).subscribe(function (res) {
                            form.resetForm();
                            console.log('postUser->correctly saved:form-id-value::' + form.value._id);
                            form.value._id = "";
                            _this.refreshUserList();
                        }, function (err) {
                            console.log('postUser->not yet correctly saved-error coming:' + JSON.stringify(err, undefined, 2));
                        });
                    }
                    else {
                        this.userService.putUser(form.value).subscribe(function (res) {
                            console.log('User updated successfully');
                            form.resetForm();
                            console.log('after-updated-form-id::' + form.value._id);
                            form.value._id = "";
                            _this.refreshUserList();
                        }, function (err) {
                            console.log('putuser -> not yet updated successfully');
                        });
                    }
                };
                UsersComponent.prototype.resetForm = function (form) {
                    if (form) {
                        form.reset();
                        this.userService.selectedUser =
                            {
                                _id: '',
                                username: '',
                                email: '',
                                address: {
                                    street: '',
                                    suite: '',
                                    city: '',
                                    zipcode: '',
                                    geo: {
                                        lat: '',
                                        lang: ''
                                    }
                                },
                                phone: undefined,
                                website: '',
                                company: {
                                    name: '',
                                    catchPhrase: '',
                                    bs: ''
                                }
                            };
                    }
                };
                UsersComponent.prototype.refreshUserList = function () {
                    var _this = this;
                    this.userService.getUsers().subscribe(function (res) {
                        _this.userService.users = res;
                        console.log('resource:' + JSON.stringify(res, undefined, 2));
                        console.log('users:' + JSON.stringify(_this.userService.users, undefined, 2));
                    }, function (err) {
                        console.log('Error in retreving data');
                    });
                };
                UsersComponent.prototype.onEdit = function (user) {
                    this.userService.selectedUser = user;
                };
                UsersComponent.prototype.onDelete = function (_id, form) {
                    var _this = this;
                    if (confirm("Are you sure you want to delete?") == true) {
                        this.userService.deleteUser(_id).subscribe(function (res) {
                            _this.refreshUserList();
                            _this.resetForm(form);
                            console.log('Successfully user deleted');
                        }, function (err) {
                            console.log('Coud not delete user');
                        });
                    }
                    else {
                    }
                };
                return UsersComponent;
            }());
            UsersComponent.ctorParameters = function () { return [
                { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
            ]; };
            UsersComponent = UsersComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
                    selector: 'app-users',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html")).default,
                    providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")).default]
                }),
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
                    declarations: [UsersComponent_1],
                    exports: [UsersComponent_1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ELEMENTS_SCHEMA"]]
                })
            ], UsersComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: true,
                apiBaseUrl: "api"
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! E:\MEAN_Users_CRUD\AngularClient\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map