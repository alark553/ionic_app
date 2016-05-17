/**
 *
 * User: Aman
 * Date: 2/9/16
 */
angular.module('services', [])
.factory('JobListing', ['$http', function ($http) {
  return {
    fetchJobs: function (pageNumber,pageSize) {
      var options = {
        method: 'GET',
        url: 'http://myrefers.com/myrefers-api/jobs',
        params: {
          pageNumber:pageNumber,
          pageSize:pageSize
        }
      };
      return $http(options);
    }

  };
}]);
