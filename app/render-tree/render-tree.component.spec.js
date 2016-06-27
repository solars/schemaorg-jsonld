System.register(['@angular/core/testing', '@angular/compiler/testing', '@angular/core', '@angular/platform-browser', './render-tree.component'], function(exports_1, context_1) {
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
    var testing_1, testing_2, core_1, platform_browser_1, render_tree_component_1;
    var RenderTreeComponentTestController;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (render_tree_component_1_1) {
                render_tree_component_1 = render_tree_component_1_1;
            }],
        execute: function() {
            testing_1.describe('Component: RenderTree', function () {
                var builder;
                testing_1.beforeEachProviders(function () { return [render_tree_component_1.RenderTreeComponent]; });
                testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
                    builder = tcb;
                }));
                testing_1.it('should inject the component', testing_1.inject([render_tree_component_1.RenderTreeComponent], function (component) {
                    testing_1.expect(component).toBeTruthy();
                }));
                testing_1.it('should create the component', testing_1.inject([], function () {
                    return builder.createAsync(RenderTreeComponentTestController)
                        .then(function (fixture) {
                        var query = fixture.debugElement.query(platform_browser_1.By.directive(render_tree_component_1.RenderTreeComponent));
                        testing_1.expect(query).toBeTruthy();
                        testing_1.expect(query.componentInstance).toBeTruthy();
                    });
                }));
            });
            RenderTreeComponentTestController = (function () {
                function RenderTreeComponentTestController() {
                }
                RenderTreeComponentTestController = __decorate([
                    core_1.Component({
                        selector: 'test',
                        template: "\n    <app-render-tree></app-render-tree>\n  ",
                        directives: [render_tree_component_1.RenderTreeComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RenderTreeComponentTestController);
                return RenderTreeComponentTestController;
            }());
        }
    }
});
//# sourceMappingURL=render-tree.component.spec.js.map