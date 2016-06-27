// uses json from https://github.com/scienceai/schema.org
System.register(['underscore'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var _;
    var Schema;
    return {
        setters:[
            function (_1) {
                _ = _1;
            }],
        execute: function() {
            Schema = (function () {
                function Schema(data) {
                    //console.log(data);
                    this.context = data['@context'];
                    this.graph = data['@graph'];
                    this.rootClasses = this.graph.filter(function (s) { return s['@type'] === 'rdfs:Class' && !s.subClassOf; });
                    this.concepts = this.graph.filter(function (s) { return s['@type'] === 'rdfs:Class' && (s['label'] === 'Offer' || s['label'] === 'Service'); });
                    this.nodeMap = this.graph.reduce(function (nodeMap, node) {
                        nodeMap[node['@id']] = node;
                        return nodeMap;
                    }, {});
                }
                Schema.prototype.subclassesOf = function (id) {
                    console.log("retrieving subclasses of " + id);
                    return this.graph.filter(function (s) { return s['@type'] === 'rdfs:Class' && s.subClassOf && s.subClassOf == id; });
                };
                Schema.prototype.get = function (id) {
                    return this.nodeMap[id];
                };
                Schema.prototype.ancestors = function (id) {
                    console.log("retrieving ancestors of " + id);
                    var ancestors = [];
                    var currentNode = this.get(id);
                    console.log("current node: " + currentNode);
                    while (currentNode['subClassOf']) {
                        var parent = currentNode.subClassOf[0];
                        ancestors.push(parent);
                        currentNode = this.get(parent);
                    }
                    return ancestors;
                };
                Schema.prototype.propertiesOf = function (id) {
                    var conceptIDs = [id].concat(this.ancestors(id));
                    return this.graph.filter(function (s) { return s['@type'] === 'rdf:Property' && s.domain && _.intersection(s.domain, conceptIDs).length > 0; });
                };
                return Schema;
            }());
            exports_1("Schema", Schema);
        }
    }
});
//# sourceMappingURL=schema.js.map