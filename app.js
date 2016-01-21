var app = angular.module("myApp", []);

app.controller("HelloController",
	function($scope) {
		$scope.hello = {};
		$scope.hello.title = "World";

		$scope.printTitle = function() {
			console.log($scope.hello.title);
		};
});

app.controller('yellWhisper', function($scope){
	$scope.yellOrWhipser = {};
});

app.controller('roundPi', function($scope){
	$scope.digits = [1, 2, 3, 4, 5];
	$scope.pi = {};
	}
);