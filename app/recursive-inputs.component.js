System.register(['angular2/core', './render-tree/render-tree.component', 'angular2/router', 'angular2/http', './schema.service'], function(exports_1, context_1) {
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
    var core_1, render_tree_component_1, router_1, http_1, schema_service_1;
    var RecursiveInputsAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (render_tree_component_1_1) {
                render_tree_component_1 = render_tree_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (schema_service_1_1) {
                schema_service_1 = schema_service_1_1;
            }],
        execute: function() {
            RecursiveInputsAppComponent = (function () {
                function RecursiveInputsAppComponent(schemaService, _routeParams) {
                    this.schemaService = schemaService;
                    this._routeParams = _routeParams;
                    this.data = { "@context": "http://schema.org/" };
                }
                RecursiveInputsAppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.schemaService.getSchema().then(function (schema) {
                        _this.schema = schema;
                        _this.itemId = _this._routeParams.get('id');
                        _this.classItem = schema.get(_this.itemId);
                        _this.properties = schema.propertiesOf(_this.itemId);
                        //console.log(this.classItem);
                        //console.log(this.properties);
                    });
                };
                Object.defineProperty(RecursiveInputsAppComponent.prototype, "jsonld", {
                    get: function () {
                        if (this.itemId) {
                            this.data['@type'] = this.itemId.split(":")[1];
                        }
                        return this.data;
                    },
                    enumerable: true,
                    configurable: true
                });
                RecursiveInputsAppComponent = __decorate([
                    core_1.Component({
                        selector: 'recursive-inputs-app',
                        templateUrl: 'app/recursive-inputs.component.html',
                        styleUrls: ['app/recursive-inputs.component.css'],
                        providers: [http_1.HTTP_PROVIDERS, schema_service_1.SchemaService, RecursiveInputsAppComponent],
                        directives: [RecursiveInputsAppComponent, render_tree_component_1.RenderTreeComponent]
                    }), 
                    __metadata('design:paramtypes', [schema_service_1.SchemaService, (typeof (_a = typeof router_1.RouteParams !== 'undefined' && router_1.RouteParams) === 'function' && _a) || Object])
                ], RecursiveInputsAppComponent);
                return RecursiveInputsAppComponent;
                var _a;
            }());
            exports_1("RecursiveInputsAppComponent", RecursiveInputsAppComponent);
        }
    }
});
//# sourceMappingURL=recursive-inputs.component.js.map