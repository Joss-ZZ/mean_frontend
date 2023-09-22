"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_modules_auth_auth_module_ts"],{

/***/ 3818:
/*!********************************************************!*\
  !*** ./src/app/core/security/services/auth.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_shared_services_utils_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/utils/local-storage.service */ 5291);





class AuthService {
  constructor(_httpClient, _localStorageService) {
    this._httpClient = _httpClient;
    this._localStorageService = _localStorageService;
    this.URL_SERVICE = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}/auth`;
    this._usuario = null;
  }
  getUser() {
    return this._usuario;
  }
  isAuthenticated() {
    return this._localStorageService.getItem('token') ? (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true) : (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(false);
  }
  login(data) {
    return this._httpClient.post(`${this.URL_SERVICE}/login`, data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(res => {
      this._usuario = res.user;
      this._localStorageService.setItem('user', this._usuario);
      this._localStorageService.setItem('token', res.token);
    }));
  }
  logout() {
    this._localStorageService.clear();
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_shared_services_utils_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9988:
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 2792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: 'login',
  data: {
    title: 'Login'
  },
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}];
class AuthRoutingModule {}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) {
  return new (t || AuthRoutingModule)();
};
AuthRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AuthRoutingModule
});
AuthRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2950:
/*!************************************************!*\
  !*** ./src/app/modules/auth/auth.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AuthComponent {}
AuthComponent.ɵfac = function AuthComponent_Factory(t) {
  return new (t || AuthComponent)();
};
AuthComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AuthComponent,
  selectors: [["vex-auth"]],
  decls: 1,
  vars: 0,
  template: function AuthComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 3970:
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.component */ 2950);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 2792);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ 9988);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);











class AuthModule {}
AuthModule.ɵfac = function AuthModule_Factory(t) {
  return new (t || AuthModule)();
};
AuthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AuthModule
});
AuthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__.AuthRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBarModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__.AuthRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBarModule]
  });
})();

/***/ }),

/***/ 2792:
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ 3848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_security_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/security/services/auth.service */ 3818);
/* harmony import */ var src_app_shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/alert/alert.service */ 9379);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);











function LoginComponent_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_mat_icon_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-icon", 18);
  }
}
function LoginComponent_mat_icon_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-icon", 19);
  }
}
function LoginComponent_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class LoginComponent {
  constructor(router, fb, cd, _authService, _alertService) {
    this.router = router;
    this.fb = fb;
    this.cd = cd;
    this._authService = _authService;
    this._alertService = _alertService;
    this.inputType = 'password';
    this.visible = false;
    this._snackBar = this._alertService.snackBar;
  }
  ngOnInit() {
    this.form = this.fb.group({
      usuario: ['coperito', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      contrasena: ['123456', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }
  login() {
    if (!this.form.valid) return;
    const user = {
      usuario: this.form.get('usuario').value,
      contrasena: this.form.get('contrasena').value
    };
    this._authService.login(user).subscribe(res => {
      this._snackBar.info(`Bienvenido ${res.user.name}`, 5000);
      this.router.navigate(['/']);
    });
  }
  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_security_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["vex-login"]],
  decls: 29,
  vars: 7,
  consts: [[1, "w-full", "h-full", "bg-pattern", "flex", "flex-col", "items-center", "justify-center"], [1, "card", "overflow-hidden", "w-full", "max-w-md"], [1, "p-6", "pb-0", "flex", "flex-col", "items-center", "justify-center"], [1, "fill-current", "text-center"], ["src", "assets/img/demo/logo.png", 1, "w-64"], [1, "text-center", "mt-4"], [1, "title", "m-0"], [1, "body-2", "text-secondary", "m-0"], [1, "p-6", "flex", "flex-col", "gap-4", 3, "formGroup"], [1, "flex", "flex-col"], [1, "flex-1"], ["formControlName", "usuario", "matInput", "", "required", ""], [4, "ngIf"], ["formControlName", "contrasena", "matInput", "", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "matTooltip", "Toggle Visibility", "type", "button", 3, "click"], ["svgIcon", "mat:visibility", 4, "ngIf"], ["svgIcon", "mat:visibility_off", 4, "ngIf"], ["color", "primary", "mat-raised-button", "", "type", "button", 3, "click"], ["svgIcon", "mat:visibility"], ["svgIcon", "mat:visibility_off"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Bienvenido");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Por favor, ingrese sus credenciales.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "mat-form-field", 10)(13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Correo electr\u00F3nico");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, LoginComponent_mat_error_16_Template, 2, 0, "mat-error", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-form-field", 10)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Contrase\u00F1a");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() {
        return ctx.toggleVisibility();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, LoginComponent_mat_icon_22_Template, 1, 0, "mat-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, LoginComponent_mat_icon_23_Template, 1, 0, "mat-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Haga clic en el ojo para alternar la visibilidad");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, LoginComponent_mat_error_26_Template, 2, 0, "mat-error", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_27_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " INGRESAR ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInUp", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("usuario").hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.inputType);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.visible);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.visible);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("contrasena").hasError("required"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon],
  encapsulation: 2,
  data: {
    animation: [src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms]
  },
  changeDetection: 0
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_auth_module_ts.js.map