import { Component, OnInit } from 'angular2/core';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { Router } from 'angular2/router';
import { SchemaService } from './schema.service';
import { Schema } from './schema';
import { ClassItemComponent } from './class-item.component';

import 'rxjs/Rx';

@Component({
  selector: 'my-dashboard',
  providers: [  HTTP_PROVIDERS, SchemaService ],
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css'],
  directives: [ ClassItemComponent ] 
})

export class DashboardComponent implements OnInit {
  private schema: Schema;
  private concepts: classItem[];

  constructor(
    private _router: Router,
    public http: Http,
    private schemaService: SchemaService
  ) { }

  ngOnInit() {
    this.schemaService.getSchema().then(
      schema => {
        this.schema = schema;
    );

      }

      startWizard(label) {
        let link = ['Inputs', { id: "schema:"+label}];
        this._router.navigate(link);
      }

  }
