import { Component, Input, OnInit  } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { Schema } from './schema';
import { SchemaService } from './schema.service';
import { InputItemComponent } from './input-item.component';

declare var jsonld: any;

@Component({
  selector: 'wizard',
  templateUrl: 'app/wizard.component.html',
  providers: [HTTP_PROVIDERS, SchemaService, WizardComponent],
  directives: [ WizardComponent, InputItemComponent ]
})

export class WizardComponent implements OnInit {
  private classItem: any;
  private properties: Array<any>;
  private schema: Schema;
  private model = {};

  constructor(
    private schemaService: SchemaService,
    private _routeParams: RouteParams
  ) { }


  ngOnInit() {
    this.schemaService.getSchema().then(
      schema => {
        this.schema = schema;
        let id = this._routeParams.get('id');
        this.classItem = schema.get(id);
        this.properties = schema.propertiesOf(id);

        //console.log(this.classItem);
        //console.log(this.properties);
      }
    );
  }

  getURI(id) {
    var prefix, name = id.split;
    return this.schema.context[prefix] + name;
  }

  getUsedPrefixes(model) {
    return  Object.keys(model).map(key => key.split(":")[0])
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  extended_data() {
    var output = {};
    for (var key of Object.keys(this.model)) {
      output[key] = {
        "@id": this.model[key],
        "@type": this.schema.get(key)['@type']
      }
    }
    return output;
  }

  get jsonld() {
    jsonld = this.extended_data();
    var prefixes = this.getUsedPrefixes(this.model);
    //console.log(prefixes);
    var context = {};
    for (var prefix of prefixes) {
      //console.log(prefix);
      context[prefix] = this.schema.context[prefix];
      //console.log(context[prefix]);
    }
    jsonld['@context'] = context;
    return JSON.stringify(jsonld);
  }

}
