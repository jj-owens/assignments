angular.module("myApp", [])
	.controller("MainController", ["$scope", "redCounter", "blueCounter", function ($scope, redCounter, blueCounter) {
		$scope.blueCount = blueCounter.count.number;
		$scope.redCount = redCounter.count.number;
		console.log(blueCounter.count.number);
		$scope.blueBtn = function () {
			if ($scope.redCount == 1) {
				$scope.redCount = redCounter.count.reset();
				$scope.blueCount = blueCounter.count.reset();
			}
			$scope.blueCount = blueCounter.count.increment();
			$scope.redCount = redCounter.count.decrement();

		};
		$scope.redBtn = function () {
			if ($scope.blueCount == 1) {
				$scope.blueCount = blueCounter.count.reset();
				$scope.redCount = redCounter.count.reset();
			}
			$scope.redCount = redCounter.count.increment();
			$scope.blueCount = blueCounter.count.decrement();
		}

}])
	.service("blueCounter", function () {
		var self = this;
		self.count = {
			number: 100,
			increment: function () {
				return this.number++;
			},
			decrement: function () {
				return this.number--;
			},
			reset: function () {
				return this.number = 100;
			}
		}
	})

.service("redCounter", function () {
	var self = this;
	self.count = {
		number: 100,
		increment: function () {
			return this.number++;
		},
		decrement: function () {
			return this.number--;
		},
		reset: function () {
			return this.number = 100;
		}
	}
});