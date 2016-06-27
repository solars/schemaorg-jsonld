System.register(['angular2/core', '../schema', '../schema.service'], function(exports_1, context_1) {
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
    var core_1, schema_1, schema_service_1;
    var RenderTreeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (schema_1_1) {
                schema_1 = schema_1_1;
            },
            function (schema_service_1_1) {
                schema_service_1 = schema_service_1_1;
            }],
        execute: function() {
            RenderTreeComponent = (function () {
                function RenderTreeComponent(schemaService) {
                    this.schemaService = schemaService;
                    this.chosenRanges = {};
                }
                RenderTreeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // Init with empty values
                    setTimeout(function () {
                        _this.schemaService.getSchema().then(function (schema) {
                            _this.schema = schema;
                            _this.properties = _this.schema.propertiesOf(_this.itemId);
                        });
                    }, 0);
                };
                RenderTreeComponent.prototype.changeProperty = function (id, value) {
                    this.data[id] = value;
                };
                RenderTreeComponent.prototype.setChosenRange = function (i, property) {
                    this.chosenRanges[property.label] = i;
                    if (typeof this.data[property.label] == 'undefined') {
                        if (this.chosenRanges[property.label] >= 0) {
                            switch (property.range[this.chosenRanges[property.label]]) {
                                case 'schema:Text':
                                    this.data[property.label] = '';
                                    break;
                                case 'schema:URL':
                                    this.data[property.label] = '';
                                    break;
                                case 'schema:Numeric':
                                    this.data[property.label] = 0;
                                    break;
                                default:
                                    this.data[property.label] = { "@type": property.range[this.chosenRanges[property.label]] };
                                    break;
                            }
                        }
                        console.log("Data:");
                        console.log(this.data);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', schema_1.Schema)
                ], RenderTreeComponent.prototype, "schema", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], RenderTreeComponent.prototype, "properties", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], RenderTreeComponent.prototype, "itemId", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], RenderTreeComponent.prototype, "data", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], RenderTreeComponent.prototype, "counter", void 0);
                RenderTreeComponent = __decorate([
                    core_1.Component({
                        selector: 'render-tree',
                        templateUrl: 'app/render-tree/render-tree.component.html',
                        styleUrls: ['app/render-tree/render-tree.component.css'],
                        directives: [RenderTreeComponent]
                    }), 
                    __metadata('design:paramtypes', [schema_service_1.SchemaService])
                ], RenderTreeComponent);
                return RenderTreeComponent;
            }());
            exports_1("RenderTreeComponent", RenderTreeComponent);
        }
    }
});
//# sourceMappingURL=render-tree.component.js.map