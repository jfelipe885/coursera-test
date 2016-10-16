(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('shoppingList', ShoppingListDirective);

function ShoppingListDirective() {
  var ddo = {
    templateUrl: 'shoppingList.html',
    scope: {
      items: '<',
      error: '<',
      onRemove: '&'
    }
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
	var data = this;
	data.error = "";
	
	data.searchMenuItems = function (searchItem) {
		if(searchItem ==="" || searchItem === undefined){
		    data.error= "Nothing found!"
		} else {
		    data.error = "";
			var promise = MenuSearchService.getMatchedMenuItems(searchItem);
			promise.then(function (response) {
				data.items = [];
				data.items = response;
				if(data.items.length === 0){
				  data.error = "Nothing found";
				}
			})
			.catch(function (error) {
			  console.log(error);
			});
		}
	}
	
	data.removeItem = function (searchItem) {
		MenuSearchService.removeItem(searchItem);
		this.title = "Menu";
	}
}

MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
  var service = this;
  var items = [];
  var listItems = [];
  
  service.getMatchedMenuItems = function (searchItem) {
	searchItem = searchItem.toLowerCase();
	listItems = [];
    return $http({
         method: "GET",
         url: "https://davids-restaurant.herokuapp.com/menu_items.json"
        }).then(function (result) {
		items = result.data;
		items = items.menu_items;
		
		for(var i = 0 ; i <= items.length-1; i++){
		  var itemdesc = items[i].description;
		  if(itemdesc.toLowerCase().indexOf(searchItem) !== -1 ){
			  listItems.push(items[i]);
		  }
		}		
		return listItems;
	});
  }; 
  
  service.removeItem = function (searchItem) {
	listItems.splice(searchItem, 1);
  };
   
}

})();