var app = angular.module('hilmarpApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'MainController',
			templateUrl: 'app/partials/main.html'
		})
		.when('/about', {
			controller: 'AboutController',
			templateUrl: 'app/partials/about.html'
		})
		.when('/contact', {
			controller: 'ContactController',
			templateUrl: 'app/partials/contact.html'
		})
		.when('/car', {
			controller: 'CarProjectController',
			templateUrl: 'app/partials/car.html'
		})
		.when('/bio', {
			controller: 'BioProjectController',
			templateUrl: 'app/partials/bio.html'
		})
		.when('/map', {
			controller: 'MapProjectController',
			templateUrl: 'app/partials/map.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});