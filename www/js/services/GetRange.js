//angular.module('service', [])
ionicApp.factory('GetRange', ['$http', function ($http) {
  return {
    range: function (size) {
      var num = [];
      for (i = 1; i < size; i++) {
        num.push(i);
      }
      return num;
    }
  }
}]);



