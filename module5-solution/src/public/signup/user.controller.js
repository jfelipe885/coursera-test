(function () {
"use strict";

angular.module('public')
.controller('userController', userController);

userController.$inject = ['favItem', 'user'];
function userController(favItem , user) {
	
  var $ctrl = this;
  $ctrl.needSign = false ;
console.log(user) ;
if (favItem == null || user == null )
{
	$ctrl.needSign = true ;
	}else {
		$ctrl.user = user ;
   $ctrl.favItem = favItem ;  
		}
  

}


})();
