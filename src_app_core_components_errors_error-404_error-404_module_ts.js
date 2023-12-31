"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_core_components_errors_error-404_error-404_module_ts"],{

/***/ 7304:
/*!******************************************************************************!*\
  !*** ./src/app/core/components/errors/error-404/error-404-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error404RoutingModule": () => (/* binding */ Error404RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 9772);
/* harmony import */ var _error_404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-404.component */ 4852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: '',
  component: _error_404_component__WEBPACK_IMPORTED_MODULE_0__.Error404Component,
  data: {
    containerEnabled: true,
    toolbarShadowEnabled: true
  }
}];
class Error404RoutingModule {}
Error404RoutingModule.ɵfac = function Error404RoutingModule_Factory(t) {
  return new (t || Error404RoutingModule)();
};
Error404RoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: Error404RoutingModule
});
Error404RoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Error404RoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
  });
})();

/***/ }),

/***/ 4852:
/*!*************************************************************************!*\
  !*** ./src/app/core/components/errors/error-404/error-404.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error404Component": () => (/* binding */ Error404Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 7822);


class Error404Component {
  constructor() {}
  ngOnInit() {}
}
Error404Component.ɵfac = function Error404Component_Factory(t) {
  return new (t || Error404Component)();
};
Error404Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Error404Component,
  selectors: [["vex-error404"]],
  decls: 9,
  vars: 0,
  consts: [[1, "w-full", "p-gutter", "text-center"], ["src", "assets/img/illustrations/data_center.svg", 1, "w-full", "max-w-lg", "mx-auto", "mb-6"], [1, "display-3", "font-medium", "m-0"], [1, "headline", "m-0"], [1, "bg-foreground", "rounded-full", "overflow-hidden", "relative", "ltr:pl-5", "rtl:pr-5", "h-12", "max-w-md", "w-full", "shadow-xl", "mx-auto", "mt-6", "flex", "items-center"], ["svgIcon", "mat:search", 1, "text-secondary", "flex-none"], ["placeholder", "Search for other pages ...", "type", "text", 1, "border-0", "h-12", "outline-none", "ltr:pl-4", "rtl:pr-4", "placeholder:text-secondary", "bg-foreground", "flex-auto"]],
  template: function Error404Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Page not found.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-icon", 5)(8, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3788:
/*!**********************************************************************!*\
  !*** ./src/app/core/components/errors/error-404/error-404.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error404Module": () => (/* binding */ Error404Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _error_404_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-404-routing.module */ 7304);
/* harmony import */ var _error_404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-404.component */ 4852);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





class Error404Module {}
Error404Module.ɵfac = function Error404Module_Factory(t) {
  return new (t || Error404Module)();
};
Error404Module.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: Error404Module
});
Error404Module.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _error_404_routing_module__WEBPACK_IMPORTED_MODULE_0__.Error404RoutingModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](Error404Module, {
    declarations: [_error_404_component__WEBPACK_IMPORTED_MODULE_1__.Error404Component],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _error_404_routing_module__WEBPACK_IMPORTED_MODULE_0__.Error404RoutingModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule]
  });
})();

/***/ }),

/***/ 9772:
/*!***************************************************************!*\
  !*** ./node_modules/ngx-quicklink/fesm2020/ngx-quicklink.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuicklinkDirective": () => (/* binding */ LinkDirective),
/* harmony export */   "QuicklinkModule": () => (/* binding */ QuicklinkModule),
/* harmony export */   "QuicklinkStrategy": () => (/* binding */ QuicklinkStrategy),
/* harmony export */   "quicklinkProviders": () => (/* binding */ quicklinkProviders)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 591);






// Using a global registry so we can keep it populated across lazy-loaded
// modules with different parent injectors which create instance of the registry.
const globalRegistry = [];
class PrefetchRegistry {
  constructor(router) {
    this.router = router;
    this.trees = globalRegistry;
  }
  add(tree) {
    this.trees.push(tree);
  }
  shouldPrefetch(url) {
    const tree = this.router.parseUrl(url);
    return this.trees.some(containsTree.bind(null, tree));
  }
}
PrefetchRegistry.ɵfac = function PrefetchRegistry_Factory(t) {
  return new (t || PrefetchRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
PrefetchRegistry.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: PrefetchRegistry,
  factory: PrefetchRegistry.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrefetchRegistry, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
    }];
  }, null);
})();
function containsQueryParams(container, containee) {
  // TODO: This does not handle array params correctly.
  return Object.keys(containee).length <= Object.keys(container).length && Object.keys(containee).every(key => containee[key] === container[key]);
}
function containsTree(containee, container) {
  return containsQueryParams(container.queryParams, containee.queryParams) && containsSegmentGroup(container.root, containee.root, containee.root.segments);
}
function containsSegmentGroup(container, containee, containeePaths) {
  if (container.segments.length > containeePaths.length) {
    const current = container.segments.slice(0, containeePaths.length);
    if (!equalPath(current, containeePaths)) return false;
    if (containee.hasChildren()) return false;
    return true;
  } else if (container.segments.length === containeePaths.length) {
    if (!equalPath(container.segments, containeePaths)) return false;
    if (!containee.hasChildren()) return true;
    for (const c in containee.children) {
      if (!container.children[c]) break;
      if (containsSegmentGroup(container.children[c], containee.children[c], containee.children[c].segments)) return true;
    }
    return false;
  } else {
    const current = containeePaths.slice(0, container.segments.length);
    const next = containeePaths.slice(container.segments.length);
    if (!equalPath(container.segments, current)) return false;
    if (!container.children[_angular_router__WEBPACK_IMPORTED_MODULE_1__.PRIMARY_OUTLET]) return false;
    return containsSegmentGroup(container.children[_angular_router__WEBPACK_IMPORTED_MODULE_1__.PRIMARY_OUTLET], containee, next);
  }
}
function equalPath(as, bs) {
  if (as.length !== bs.length) return false;
  return as.every((a, i) => a.path === bs[i].path || a.path.startsWith(':') || bs[i].path.startsWith(':'));
}
const requestIdleCallback = typeof window !== 'undefined' ? window.requestIdleCallback || function (cb) {
  const start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
} : () => {};
const observerSupported = () => typeof window !== 'undefined' ? !!window.IntersectionObserver : false;
const LinkHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('LinkHandler');
class ObservableLinkHandler {
  constructor(loader, registry, ngZone) {
    this.loader = loader;
    this.registry = registry;
    this.ngZone = ngZone;
    this.elementLink = new Map();
    this.observer = observerSupported() ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!this.observer) {
          return;
        }
        if (entry.isIntersecting) {
          const link = entry.target;
          const routerLink = this.elementLink.get(link);
          if (!routerLink || !routerLink.urlTree) return;
          this.registry.add(routerLink.urlTree);
          this.observer.unobserve(link);
          requestIdleCallback(() => {
            this.loader.preload().subscribe(() => void 0);
          });
        }
      });
    }) : null;
  }
  register(el) {
    this.elementLink.set(el.element, el);
    this.ngZone.runOutsideAngular(() => {
      if (!this.observer) {
        return;
      }
      this.observer.observe(el.element);
    });
  }
  // First call to unregister will not hit this.
  unregister(el) {
    if (!this.observer) {
      return;
    }
    if (this.elementLink.has(el.element)) {
      this.observer.unobserve(el.element);
      this.elementLink.delete(el.element);
    }
  }
  supported() {
    return observerSupported();
  }
}
ObservableLinkHandler.ɵfac = function ObservableLinkHandler_Factory(t) {
  return new (t || ObservableLinkHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterPreloader), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PrefetchRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
ObservableLinkHandler.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ObservableLinkHandler,
  factory: ObservableLinkHandler.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObservableLinkHandler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterPreloader
    }, {
      type: PrefetchRegistry
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();
class PreloadLinkHandler {
  constructor(loader, registry) {
    this.loader = loader;
    this.registry = registry;
  }
  register(el) {
    this.registry.add(el.urlTree);
    requestIdleCallback(() => this.loader.preload().subscribe(() => void 0));
  }
  unregister(_) {}
  supported() {
    return true;
  }
}
PreloadLinkHandler.ɵfac = function PreloadLinkHandler_Factory(t) {
  return new (t || PreloadLinkHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterPreloader), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PrefetchRegistry));
};
PreloadLinkHandler.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: PreloadLinkHandler,
  factory: PreloadLinkHandler.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreloadLinkHandler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterPreloader
    }, {
      type: PrefetchRegistry
    }];
  }, null);
})();
class LinkDirective {
  constructor(linkHandlers, el, link, linkWithHref) {
    this.linkHandlers = linkHandlers;
    this.el = el;
    this.linkHandler = this.linkHandlers.filter(h => h.supported()).shift();
    this.rl = link || linkWithHref;
    if (this.element && this.element.setAttribute) {
      this.element.setAttribute('ngx-ql', '');
    }
  }
  ngOnChanges(c) {
    if (c['routerLink'] && this.linkHandler) {
      this.linkHandler.unregister(this);
      this.linkHandler.register(this);
    }
  }
  ngOnDestroy() {
    if (!this.linkHandler) {
      return;
    }
    this.linkHandler.unregister(this);
  }
  get element() {
    return this.el.nativeElement;
  }
  get urlTree() {
    return this.rl.urlTree;
  }
}
LinkDirective.ɵfac = function LinkDirective_Factory(t) {
  return new (t || LinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LinkHandler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, 8));
};
LinkDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: LinkDirective,
  selectors: [["", "routerLink", ""]],
  inputs: {
    routerLink: "routerLink"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[routerLink]',
      standalone: true
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [LinkHandler]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    routerLink: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class QuicklinkStrategy {
  constructor(registry, router) {
    this.registry = registry;
    this.router = router;
    this.loading = new Set();
  }
  preload(route, load) {
    if (this.loading.has(route)) {
      // Don't preload the same route twice
      return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
    }
    const conn = typeof navigator !== 'undefined' ? navigator.connection : undefined;
    if (conn) {
      // Don't preload if the user is on 2G. or if Save-Data is enabled..
      if ((conn.effectiveType || '').includes('2g') || conn.saveData) return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
    }
    // Prevent from preloading
    if (route.data && route.data['preload'] === false) {
      return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
    }
    const fullPath = findPath(this.router.config, route);
    if (this.registry.shouldPrefetch(fullPath)) {
      this.loading.add(route);
      return load();
    }
    return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
  }
}
QuicklinkStrategy.ɵfac = function QuicklinkStrategy_Factory(t) {
  return new (t || QuicklinkStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PrefetchRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
QuicklinkStrategy.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: QuicklinkStrategy,
  factory: QuicklinkStrategy.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuicklinkStrategy, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: PrefetchRegistry
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
    }];
  }, null);
})();
const findPath = (config, route) => {
  config = config.slice();
  const parent = new Map();
  const visited = new Set();
  while (config.length) {
    const el = config.shift();
    if (!el) {
      continue;
    }
    visited.add(el);
    if (el === route) break;
    let children = el.children || [];
    const current = el._loadedRoutes || [];
    for (const route of current) {
      if (route && route.children) {
        children = children.concat(route.children);
      }
      children.forEach(r => {
        if (visited.has(r)) return;
        parent.set(r, el);
        config.push(r);
      });
    }
  }
  let path = '';
  let current = route;
  while (current) {
    if (isPrimaryRoute(current)) {
      path = `/${current.path}${path}`;
    } else {
      path = `/(${current.outlet}:${current.path}${path})`;
    }
    current = parent.get(current);
  }
  return path.replace(/\/\//, '/');
};
function isPrimaryRoute(route) {
  return route.outlet === _angular_router__WEBPACK_IMPORTED_MODULE_1__.PRIMARY_OUTLET || !route.outlet;
}
const quicklinkProviders = [{
  provide: LinkHandler,
  useClass: ObservableLinkHandler,
  multi: true
}, {
  provide: LinkHandler,
  useClass: PreloadLinkHandler,
  multi: true
}, PrefetchRegistry, QuicklinkStrategy];
class QuicklinkModule {}
QuicklinkModule.ɵfac = function QuicklinkModule_Factory(t) {
  return new (t || QuicklinkModule)();
};
QuicklinkModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: QuicklinkModule
});
QuicklinkModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: quicklinkProviders
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuicklinkModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [LinkDirective],
      exports: [LinkDirective],
      providers: quicklinkProviders
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-quicklink
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_core_components_errors_error-404_error-404_module_ts.js.map