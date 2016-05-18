angular.module('services', [])
  .factory('GetRange', ['http','$scope', function ($http, $scope) {

    var self = this;
    self.num = [];

    return {

      range: function (pageSize) {
        for (i = 1; i <= pageSize; i++) {
          self.num.push(i);
        }
        return self.num;
      }

    }

  }]);
