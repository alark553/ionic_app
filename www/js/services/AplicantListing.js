/**
 * Created by Myrefers on 5/17/2016.
 */

app.factory('ApplicantListing', ['$http', function ($http) {
  return {
    fetchJobs: function (pageNumber,pageSize) {
      var options = {
        method: 'GET',
        url: '/applicants',
        params: {
          pageNumber:pageNumber,
          pageSize:pageSize
        }
      };
      return $http(options);
    }

  };
}]);

