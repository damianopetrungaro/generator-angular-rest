(function(){

	'use strict';

	// Define angular app module
	angular.module('<%= appname %>', ['core.routing', 'core.mocking', 'core.validator', 'ui.router'])
	.config(['$qProvider', function ($qProvider) {
		$qProvider.errorOnUnhandledRejections(false);
	}]);
})();
