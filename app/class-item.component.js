System.register(['angular2/core', 'angular2/router', './schema.service', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, router_1, schema_service_1;
    var ClassItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (schema_service_1_1) {
                schema_service_1 = schema_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            ClassItemComponent = (function () {
                function ClassItemComponent(schemaService, _router) {
                    this.schemaService = schemaService;
                    this._router = _router;
                }
                ClassItemComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.schemaService.getSchema().then(function (schema) {
                        _this.schema = schema;
                        _this.subClasses = schema.subclassesOf(_this.classItem['@id']);
                    });
                };
                ClassItemComponent.prototype.onSelect = function (classItem) {
                    this.selectedClassItem = classItem;
                };
                ClassItemComponent.prototype.startWizard = function (classItem) {
                    var link = ['Inputs', { id: classItem['@id'] }];
                    this._router.navigate(link);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ClassItemComponent.prototype, "classItem", void 0);
                ClassItemComponent = __decorate([
                    core_1.Component({
                        selector: 'class-item',
                        templateUrl: 'app/class-item.component.html',
                        styleUrls: ['app/class-item.component.css'],
                        directives: [ClassItemComponent]
                    }), 
                    __metadata('design:paramtypes', [schema_service_1.SchemaService, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
                ], ClassItemComponent);
                return ClassItemComponent;
                var _a;
            }());
            exports_1("ClassItemComponent", ClassItemComponent);
        }
    }
});
//# sourceMappingURL=class-item.component.js.map