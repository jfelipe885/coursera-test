(function () {
"use strict";

angular.module('public')
.controller('signupController', signupController);

signupController.$inject = ['MenuService' , 'userInfoService'];
function signupController(MenuService, userInfoService ) {
  var $ctrl = this;
  	
  $ctrl.itemError = false ; 
  $ctrl.user = {
	  firtsName : "" ,
      lastName : "" ,
       email : "" ,
       phone : "" ,
      favDish : "" 
	  };
  
  $ctrl.okSign = false ;

 $ctrl.doSignup  = function (){
	console.log ( $ctrl.user   );
	 $ctrl.itemError = false ; 
	 $ctrl.okSign = false ;
	 $ctrl.user.favDish  = $ctrl.user.favDish.toUpperCase(); 
	 

// do search 	
	MenuService.getItem($ctrl.user.favDish)
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

//// end search
	
	 }; /// end sign function
}


})();
