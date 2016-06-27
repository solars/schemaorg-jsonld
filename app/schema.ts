// uses json from https://github.com/scienceai/schema.org

import * as _ from 'underscore';
export class Schema {
  context: any;
  graph: any;
  rootClasses: Array<any>;
  private nodeMap: any;

  constructor(data) {
    //console.log(data);
    this.context = data['@context'];
    this.graph = data['@graph'];
    this.rootClasses = this.graph.filter(s => s['@type'] === 'rdfs:Class' && !s.subClassOf);
    this.concepts = this.graph.filter(s => s['@type'] === 'rdfs:Class' && (s['label'] === 'Offer' || s['label'] === 'Service'));
    this.nodeMap = this.graph.reduce((nodeMap, node) => {
      nodeMap[node['@id']] = node;
      return nodeMap;
    }, {});
  }

  subclassesOf(id) {
    console.log("retrieving subclasses of " + id);
    return this.graph.filter(s => s['@type'] === 'rdfs:Class' && s.subClassOf && s.subClassOf == id );
  }    

  get(id) {
    return this.nodeMap[id];
  }

  ancestors(id) {
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
  }

  propertiesOf(id) {
    var conceptIDs = [id].concat(this.ancestors(id));
    return this.graph.filter(s => s['@type'] === 'rdf:Property' && s.domain && _.intersection(s.domain, conceptIDs).length > 0);
  }

}
