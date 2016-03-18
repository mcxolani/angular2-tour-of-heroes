import {Component} from 'angular2/core';
import {HeroService} from './hero.service';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';


@RouteConfig([{
	path: '/heroes',
	name: 'Heroes',
	component: HeroesComponent
},{
	path: '/',
	name: 'Dashboard',
	component: DashboardComponent,
	useAsDefault: true
}])
@Component({
	selector: 'my-app',
	template: `
		   <h1>{{title}}</h1>
		   <nav>
		   		<a [routerLink]="['Dashboard']">Dashboard</a>
		   		<a [routerLink]="['Heroes']">Heroes</a>
		   </nav>
		   <router-outlet></router-outlet>
	`,
	providers: [HeroService, ROUTER_PROVIDERS],
	directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
	public title = 'Tour of Heroes';
} 