var app = angular.module("myApp", []);

app.controller("HelloController",
	function($scope) {
		$scope.hello = {};
		$scope.hello.title = "World";

		$scope.printTitle = function() {
			console.log($scope.hello.title);
		};
	});

app.controller('yellWhisper', function($scope) {
	$scope.yellOrWhipser = {};
});

app.controller('roundPi', function($scope) {
	$scope.digits = [1, 2, 3, 4, 5];
	$scope.pi = {};
});

app.controller('tipCalc', function($scope) {
	$scope.meal = {};
	$scope.percents = [{
		string: '10%',
		number: 0.1
	}, {
		string: '15%',
		number: 0.15
	}, {
		string: '20%',
		number: 0.2
	}];
	$scope.selectedTip = $scope.percents[0];
});

app.controller('madLibs', function(){
	
})