angular.module('myApp')

.controller('mainCtrl', function($scope, dataService) {

   $scope.authors = dataService.getData();

   $scope.addQuote = function(author) {
      dataService.addData(author);

      $scope.author = {};

   };

   $scope.removeQuote = function(remove) {

      dataService.remove(remove);

      $scope.remove = '';
   };
});
