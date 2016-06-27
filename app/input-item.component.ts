import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Schema } from './schema';
import { SchemaService } from './schema.service';
import { ClassItemComponent } from './class-item.component';

import 'rxjs/Rx';

@Component({
    selector: 'input-item',
    templateUrl: 'app/input-item.component.html',
    directives: [InputItemComponent]
})

export class InputItemComponent implements OnInit {
    @Input()
    property: any;

    private childs: any;
    private inputs = {};

    ngOnInit() {

    }   
    
}
