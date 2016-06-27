import { Component, OnInit, Input } from 'angular2/core';
import { Schema } from '../schema';
import { SchemaService } from '../schema.service';

@Component({
  selector: 'render-tree',
  templateUrl: 'app/render-tree/render-tree.component.html',
  styleUrls: ['app/render-tree/render-tree.component.css'],
  directives: [ RenderTreeComponent ]
})

export class RenderTreeComponent implements OnInit {
  @Input() schema: Schema;
  @Input() properties: any[];
  @Input() itemId: any[];
  @Input() data: {};
  @Input() counter: number;

  private chosenRanges: { [id: string]: any } = {};

  constructor(
    private schemaService: SchemaService
  ) {}

  ngOnInit() {
    // Init with empty values
    setTimeout(() => { // setTimeout to supress the "value has changed after it was checked" errors

      this.schemaService.getSchema().then(
        schema => {
          this.schema = schema;
          this.properties = this.schema.propertiesOf(this.itemId);
        });

    }, 0);
  }

  changeProperty(id: string, value: any) {
    this.data[id] = value;
  }

  setChosenRange(i: number, property: any) {
    this.chosenRanges[property.label] = i;
    if (typeof this.data[property.label] == 'undefined') {
      if(this.chosenRanges[property.label] >= 0) {
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

  }

}
