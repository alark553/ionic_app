angular.module('services', [])
  .factory('GetRange', ['$http','$scope', function ($http, $scope) {

    var self = this;
    self.num = [];

    return {

      range: function (size) {
        for (i = 1; i < size; i++) {
          self.num.push(i);
        }
        return self.num;
      }

    }

  }]);
