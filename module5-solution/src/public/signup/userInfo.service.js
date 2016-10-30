(function () {
"use strict";

angular.module('public')
.service('userInfoService', userInfoService);

userInfoService.$inject = [ '$cookies'];
function userInfoService( $cookies) {
  var service = this;
  	
	service.addCookie = function (key , value)
	{
		// Setting a cookie
  $cookies.putObject(key, value);
 // console.log ($cookies.get(key)) ;
  
  };
  
  service.getCookie = function (key)
	{
		// Setting a cookie
		 if ($cookies.getObject(key))
 return $cookies.getObject(key);
 else return null ;

  
  };
}


})();
