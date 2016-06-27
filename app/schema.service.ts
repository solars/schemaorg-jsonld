import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS } from 'angular2/http';
import { Schema } from './schema';



@Injectable()
export class SchemaService {
    private _schemaLocation = '/schema_org.json';
    private schema: Schema;

    constructor(private http: Http) { }

    getSchema() {
       /* if (this.schema) {
            return Promise.resolve(this.schema);
        }*/
        return this.http.get(this._schemaLocation).map(res => res.json()).toPromise()
            .then(data => this.schema = new Schema(data));
    }
}
