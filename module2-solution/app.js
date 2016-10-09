(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
	var dataC1 = this;
	dataC1.itemsToBuy = ShoppingListCheckOffService.getItemsList1(); 
	
	dataC1.removeItem = function (itemIndex) {
	   ShoppingListCheckOffService.buyItemList1(itemIndex);		
    };
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
	var dataC2 = this;
	dataC2.itemsBought = ShoppingListCheckOffService.getItemsList2();    
}

function ShoppingListCheckOffService() {
  var service = this;
  // List of shopping items
  var itemsToBuy = [
    { name: "Laptops", quantity: 5 },
    { name: "Monitors", quantity: 8 },
    { name: "Mouses", quantity: 6 },
    { name: "Graphic cards", quantity: 4 },
    { name: "Keyboards", quantity: 10 }
  ];
    
  var itemsBought = [];

  service.buyItemList1 = function (itemIndex) {
	var item = itemsToBuy[itemIndex];
	itemsToBuy.splice(itemIndex, 1);
	itemsBought.push(item);    
  };
  
  service.getItemsList1 = function () {
    return itemsToBuy;
  };  
  
  service.getItemsList2 = function () {
    return itemsBought;
  };  
}

})();