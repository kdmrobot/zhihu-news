'use strict';
(function(angular){	
	angular.module('Routes', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('openAudit');
		$stateProvider.state('home',{
			url: '/home',
			templateUrl: 'pages/views/tpl/welcome.html',
			controller:"WelcomeCtrl",
			controllerAs:'welcome'
		})		
	}]);
})(window.angular)