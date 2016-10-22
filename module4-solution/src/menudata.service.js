(function () {
'use strict';

angular.module('data')
.service('MenuDataService', ['$http', '$q', function($http, $q) {
    var service = this;
  
    service.getAllCategories = function() {	
		var deffered = $q.defer();	
		$http({
			 method: "GET",
			 url: "https://davids-restaurant.herokuapp.com/categories.json"
			}).then(function (result) {
				deffered.resolve(result.data);
			}, function(error){
				deffered.reject(error);
		});
		return deffered.promise;
	};

	service.getItemsForCategory = function(categoryShortName) {	
		var deffered = $q.defer();		
		$http({
			method: "GET",
			url: "https://davids-restaurant.herokuapp.com/menu_items.json",
			  params : {
				category : categoryShortName
			  }
			}).then(function (result) {
				deffered.resolve(result.data);
			}, function(error){
				deffered.reject(error);			
		});
		return deffered.promise;	  	  
	};
 }]);
 
 })();