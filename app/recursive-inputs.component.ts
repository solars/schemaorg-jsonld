import { Component } from 'angular2/core';

import { RenderTreeComponent } from './render-tree/render-tree.component';

import { Component, Input, OnInit,  } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { Schema } from './schema';
import { SchemaService } from './schema.service';

@Component({
  selector: 'recursive-inputs-app',
  templateUrl: 'app/recursive-inputs.component.html',
  styleUrls: ['app/recursive-inputs.component.css'],
  providers: [HTTP_PROVIDERS, SchemaService, RecursiveInputsAppComponent],
  directives: [ RecursiveInputsAppComponent, RenderTreeComponent ]
})

export class RecursiveInputsAppComponent implements OnInit {
  private schema: Schema;
  private itemId: any;
  private data = {"@context": "http://schema.org/"};
  private properties: Array<any>;
  private classItem: any;

  constructor(
    private schemaService: SchemaService,
    private _routeParams: RouteParams
  ) { }

  ngOnInit() {
    this.schemaService.getSchema().then(
      schema => {
        this.schema = schema;
        this.itemId = this._routeParams.get('id');
        this.classItem = schema.get(this.itemId);
        this.properties = schema.propertiesOf(this.itemId);

        //console.log(this.classItem);
        //console.log(this.properties);
      }
    );
  }

  get jsonld() {
    if (this.itemId) {
      this.data['@type'] = this.itemId.split(":")[1];
    }
    return this.data;
  }

}
