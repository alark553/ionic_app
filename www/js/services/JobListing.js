/**
 *
 * User: Aman
 * Date: 2/9/16
 */

app.factory('JobListing', ['$http', function ($http) {
  return {
    fetchJobs: function (pageNumber,pageSize) {
      var options = {
        method: 'GET',
        url: '/jobs',
        params: {
          pageNumber:pageNumber,
          pageSize:pageSize
        }
      };
      return $http(options);
    }

  };
}]);
