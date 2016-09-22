(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
	$scope.check = function () {
		if($scope.menu==undefined || $scope.menu.trim()=="") {
			$scope.menu = "";
		    $scope.message = "Please enter data first";
	    } else {
		    var total = $scope.menu.split(',').length;
		    if(total<=3) {
			    $scope.message = "Enjoy!";
		    } else {
			  $scope.message = "Too much!";
		    }
	    }
	}	
}

})();