angular.module('controllers', [])

.controller('JobCtrl', function($scope,$http){

  $scope.mydata = [];
  $http.get('json/company_jobs.json').then(function(response){

    $scope.mydata = response.data.jobViews;

  });

});
