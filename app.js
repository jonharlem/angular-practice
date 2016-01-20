var application = angular.module("myApp", []);

application.controller("HelloController",
	function($scope) {
		$scope.hello = {};
		$scope.hello.title = "World";

		$scope.printTitle = function() {
			console.log($scope.hello.title);
		}
});