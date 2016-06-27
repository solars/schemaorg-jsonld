import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Schema } from './schema';
import { SchemaService } from './schema.service';

import 'rxjs/Rx';

@Component({
  selector: 'class-item',
  templateUrl: 'app/class-item.component.html',
  styleUrls: ['app/class-item.component.css'],
  directives: [ClassItemComponent]
})

export class ClassItemComponent implements OnInit {
  @Input()
  classItem: any;

  private subClasses;    
  selectedClassItem: any;

  private schema: Schema;

  constructor(
    private schemaService: SchemaService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.schemaService.getSchema().then(
      schema => {
        this.schema = schema;
        this.subClasses = schema.subclassesOf(this.classItem['@id']);
      });
  }

  onSelect(classItem) {
    this.selectedClassItem = classItem; 
  }

  startWizard(classItem) {
    let link = ['Inputs', { id: classItem['@id'] }];
    this._router.navigate(link);
  }

}
