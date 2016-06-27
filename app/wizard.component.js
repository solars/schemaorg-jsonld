System.register(['angular2/core', 'angular2/router', 'angular2/http', './schema.service', './input-item.component'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, schema_service_1, input_item_component_1;
    var WizardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (schema_service_1_1) {
                schema_service_1 = schema_service_1_1;
            },
            function (input_item_component_1_1) {
                input_item_component_1 = input_item_component_1_1;
            }],
        execute: function() {
            WizardComponent = (function () {
                function WizardComponent(schemaService, _routeParams) {
                    this.schemaService = schemaService;
                    this._routeParams = _routeParams;
                    this.model = {};
                }
                WizardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.schemaService.getSchema().then(function (schema) {
                        _this.schema = schema;
                        var id = _this._routeParams.get('id');
                        _this.classItem = schema.get(id);
                        _this.properties = schema.propertiesOf(id);
                        //console.log(this.classItem);
                        //console.log(this.properties);
                    });
                };
                WizardComponent.prototype.getURI = function (id) {
                    var prefix, name = id.split;
                    return this.schema.context[prefix] + name;
                };
                WizardComponent.prototype.getUsedPrefixes = function (model) {
                    return Object.keys(model).map(function (key) { return key.split(":")[0]; });
                };
                Object.defineProperty(WizardComponent.prototype, "diagnostic", {
                    get: function () {
                        return JSON.stringify(this.model);
                    },
                    enumerable: true,
                    configurable: true
                });
                WizardComponent.prototype.extended_data = function () {
                    var output = {};
                    for (var _i = 0, _a = Object.keys(this.model); _i < _a.length; _i++) {
                        var key = _a[_i];
                        output[key] = {
                            "@id": this.model[key],
                            "@type": this.schema.get(key)['@type']
                        };
                    }
                    return output;
                };
                Object.defineProperty(WizardComponent.prototype, "jsonld", {
                    get: function () {
                        jsonld = this.extended_data();
                        var prefixes = this.getUsedPrefixes(this.model);
                        //console.log(prefixes);
                        var context = {};
                        for (var _i = 0, prefixes_1 = prefixes; _i < prefixes_1.length; _i++) {
                            var prefix = prefixes_1[_i];
                            //console.log(prefix);
                            context[prefix] = this.schema.context[prefix];
                        }
                        jsonld['@context'] = context;
                        return JSON.stringify(jsonld);
                    },
                    enumerable: true,
                    configurable: true
                });
                WizardComponent = __decorate([
                    core_1.Component({
                        selector: 'wizard',
                        templateUrl: 'app/wizard.component.html',
                        providers: [http_1.HTTP_PROVIDERS, schema_service_1.SchemaService, WizardComponent],
                        directives: [WizardComponent, input_item_component_1.InputItemComponent]
                    }), 
                    __metadata('design:paramtypes', [schema_service_1.SchemaService, router_1.RouteParams])
                ], WizardComponent);
                return WizardComponent;
            }());
            exports_1("WizardComponent", WizardComponent);
        }
    }
});
//# sourceMappingURL=wizard.component.js.map