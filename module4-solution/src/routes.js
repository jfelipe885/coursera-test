(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.template.html'
  })


  .state('categoriesList', {
    url: '/categories-list',
    templateUrl: 'templates/categoriesList.template.html',
    controller: 'CategoriesListController as categoriesList',
    resolve : {
      categories : ['MenuDataService', function(MenuDataService){
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('categoriesList.categoryItem', {
    url: '/category-items/{categoryName}',
    templateUrl: 'templates/categoryItems.template.html',
    controller: 'CategoryItemsController as categoryItems',
    resolve : {
      items : ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams){
        return MenuDataService.getItemsForCategory($stateParams.categoryName);
      }]
    }
  });
}

})();

