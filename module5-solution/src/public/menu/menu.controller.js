(function () {
"use strict";

angular.module('public')
.controller('MenuController', MenuController);

MenuController.$inject = ['menuCategories'];
function MenuController(menuCategories) {
  var $ctrl = this;
  $ctrl.menuCategories = menuCategories;
  
  var reg = this;
  console.log("$ctrl:"+$ctrl.menuCategories);
  
  reg.submit = function () {
    reg.completed = true;
  };
}

})();
