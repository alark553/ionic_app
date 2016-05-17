angular.module('controllers', [])

.controller('JobCtrl', function($scope,$http,JobListing){

  var self = this;
  self.mydata = [];
  self.pageNumber = 0;
  self.pageSize = 5;
  JobListing.fetchJobs(self.pageNumber,self.pageSize).then(function(response){

    self.mydata = response.data.result.jobDetails;

  });

});
