(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
    var service = this;
  
    service.getAllCategories = function() {		
		return $http({
			 method: "GET",
			 url: "https://davids-restaurant.herokuapp.com/categories.json"
			}).then(function (result) {
			items = result.data;
			items = items.menu_items;
			return items;
		});
	};

	service.getItemsForCategory = function(categoryShortName) {		
		return $http({
			method: "GET",
			url: "https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName
			  //,{params:{"param1": val1, "param2": val2}}
			}).then(function (result) {
			items = result.data;
			items = items.menu_items;
			return items;
		});
	  };
	  
	};
}

})();