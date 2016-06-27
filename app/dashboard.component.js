System.register(['angular2/core', 'angular2/http', 'angular2/router', './schema.service', './class-item.component', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, schema_service_1, class_item_component_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (schema_service_1_1) {
                schema_service_1 = schema_service_1_1;
            },
            function (class_item_component_1_1) {
                class_item_component_1 = class_item_component_1_1;
            },
            function (_1) {}],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_router, http, schemaService) {
                    this._router = _router;
                    this.http = http;
                    this.schemaService = schemaService;
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.schemaService.getSchema().then(function (schema) {
                        _this.schema = schema;
                    });
                };
                DashboardComponent.prototype.startWizard = function (label) {
                    var link = ['Inputs', { id: "schema:" + label }];
                    this._router.navigate(link);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dashboard',
                        providers: [http_1.HTTP_PROVIDERS, schema_service_1.SchemaService],
                        templateUrl: 'app/dashboard.component.html',
                        styleUrls: ['app/dashboard.component.css'],
                        directives: [class_item_component_1.ClassItemComponent]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _b) || Object, schema_service_1.SchemaService])
                ], DashboardComponent);
                return DashboardComponent;
                var _a, _b;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map