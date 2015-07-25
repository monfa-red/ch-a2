/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {
    RouteConfig,
    RouterOutlet,
    RouterLink,
    routerInjectables,
} from 'angular2/router';

import {Home} from './components/home/home';
import {Register} from './components/register/register'; 

// Anotation section
@RouteConfig([
    // { path: '/', redirectTo: '/home' },
    { path: '',         component: Home,     as: 'home' },
    { path: '/register', component: Register, as: 'register' },
])
@Component({
    selector: 'my-app'
})
@View({
	templateUrl: `app.html`,
	directives: [RouterOutlet, RouterLink]

})

// Component controller.
class MyAppComponent {
	name: string;
	
	constructor() {
		this.name = "Abbas";
	}
}

// Bootstrap!
bootstrap(MyAppComponent,  [routerInjectables]);