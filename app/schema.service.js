System.register(['angular2/core', 'angular2/http', './schema'], function(exports_1, context_1) {
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
    var core_1, http_1, schema_1;
    var SchemaService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (schema_1_1) {
                schema_1 = schema_1_1;
            }],
        execute: function() {
            SchemaService = (function () {
                function SchemaService(http) {
                    this.http = http;
                    this._schemaLocation = '/schema_org.json';
                }
                SchemaService.prototype.getSchema = function () {
                    var _this = this;
                    /* if (this.schema) {
                         return Promise.resolve(this.schema);
                     }*/
                    return this.http.get(this._schemaLocation).map(function (res) { return res.json(); }).toPromise()
                        .then(function (data) { return _this.schema = new schema_1.Schema(data); });
                };
                SchemaService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], SchemaService);
                return SchemaService;
                var _a;
            }());
            exports_1("SchemaService", SchemaService);
        }
    }
});
//# sourceMappingURL=schema.service.js.map