(function () {
"use strict";

angular.module('public')
.controller('signupController', signupController);

signupController.$inject = ['MenuService' , 'userInfoService'];
function signupController(MenuService, userInfoService ) {
  var $ctrl = this;
  	
  $ctrl.itemError = false ; 
  $ctrl.user = {
	  firstname : "" ,
      lastname : "" ,
       email : "" ,
       phone : "" ,
      favdish : "" 
	  };
  
  $ctrl.okSign = false ;

  $ctrl.doSignup  = function (){
	$ctrl.itemError = false ; 
	$ctrl.okSign = false ;
	$ctrl.user.favdish  = $ctrl.user.favdish.toUpperCase(); 
	 
	// do search 	
	MenuService.getItem($ctrl.user.favdish)
    .then(function (result) {
		$ctrl.itemd = result ;
		///add info 
	userInfoService.addCookie ("user" ,$ctrl.user ) ;
	userInfoService.addCookie ("fav_item" ,$ctrl.itemd  ) ;
	
	// show to user	
	$ctrl.okSign = true ;
	console.log($ctrl.itemd );		
	}).catch(function (error) {
	  $ctrl.itemError = true;
      console.log(error);
	}) ;	 

	}; 
}

})();
