(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath', '$q'];
function MenuService($http, ApiPath, $q) {
  var service = this;
  console.log("ApiPath: "+ApiPath);

  service.getItem = function (shortName) {
    var deferred = $q.defer(); // to return result as promise
	var url = "https://jfelipe885.herokuapp.com/menu_items.json";
	
	$http.get(url).then(function (response) {
		for (var i =0 ; i < response.data.menu_items.length ; i++){
			if  (response.data.menu_items[i].short_name == shortName ) {  
				deferred.resolve(response.data.menu_items[i]) ;
				return deferred.promise;  			
			}
		}
		deferred.reject("No such menu number exists");
	    }).catch(function (error) {
	  deferred.reject(error.statusText); 
    });
	return deferred.promise;
  };  
  
  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

}



})();
