(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryItemsController', CategoryItemsController);

CategoryItemsController.$inject = ['items'];

function CategoryItemsController(items) {
    var categoryItems = this;

    categoryItems.category = items.category;
    categoryItems.items = items.menu_items;
}


})();