import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { DashboardComponent } from './dashboard.component';
import { WizardComponent } from './wizard.component';
import { RecursiveInputsAppComponent } from './recursive-inputs.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})

@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/wizard/:id',
    name: 'Wizard',
    component: WizardComponent
  },
  {
    path: '/rec/:id',
    name: 'Inputs',
    component: RecursiveInputsAppComponent
  },
])

export class AppComponent {
  title = 'JSON-LD Generator';
}
