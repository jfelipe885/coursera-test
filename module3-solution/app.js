(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('shoppingList', ShoppingListDirective)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

function ShoppingListDirective() {
  var ddo = {
    templateUrl: 'shoppingList.html',
    scope: {
      items: '<',
      myTitle: '@title',
      onRemove: '&'
    },
    controller: ShoppingListDirectiveController,
    controllerAs: 'data',
    bindToController: true
  };

  return ddo;
}

function ShoppingListDirectiveController() {
  var data = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
	var data = this;
	
	data.searchMenuItems = function (searchItem) {
		console.log("searchItem: "+searchItem);
		var promise = MenuSearchService.getMatchedMenuItems(searchItem);
		promise.then(function (response) {
			data.items = response.data.menu_items;
		    console.log(data.items);
		})
		.catch(function (error) {
		  console.log(error);
		})
	};
	
	data.removeItem = function (searchItem) {
		MenuSearchService.removeItem(searchItem);
		this.title = "Menu";
	}
}

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  var items = [];
  
  service.getMatchedMenuItems = function (searchItem) {
    var response = $http({
		method: "GET",
		url: (ApiBasePath + "/menu_items.json"),
        params: {
			category: searchItem
		}	
    });
	items = response.menu_items;
	return response;
  }; 
  
  service.removeItem = function (searchItem) {
	console.log(items);
    items.splice(searchItem, 1);
  };
   
}

})();