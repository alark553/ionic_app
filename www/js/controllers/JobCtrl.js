angular.module('controllers', [])

  .controller('JobCtrl', function ($scope, $http, JobListing, GetRange) {

    var self = this;
    self.num = [];
    self.mydata = [];
    self.pageNumber = 0;
    self.pageSize = 10;
    JobListing.fetchJobs(self.pageNumber, self.pageSize).then(function (response) {

      self.mydata = response.data.result.jobDetails;
      self.totalCount = response.data.totalRecordCount;
      self.totalPages = Math.ceil(self.totalCount/self.pageSize);

    });

    self.next = function () {
      if (self.pageNumber < self.totalPages - 1) {
        self.pageNumber++;
        JobListing.fetchJobs(self.pageNumber, self.pageSize).then(function (response) {
          self.mydata = response.data.result.jobDetails;
        });
      }
    };

    self.previous = function () {
      if(self.pageNumber >0){
        self.pageNumber--;
        JobListing.fetchJobs(self.pageNumber, self.pageSize).then(function (response) {
          self.mydata = response.data.result.jobDetails;
        });
      }
    };


        self.num = GetRange.range(self.totalPages);


  });
