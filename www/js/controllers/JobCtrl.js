//angular.module('controllers', [])

ionicApp.controller('JobCtrl', function ($scope, $http, $stateParams, $ionicPopup, $filter, JobListing, GetRange) {

  var self = this;
  self.num = [];
  self.mydata = [];
  self.pageNumber = 0;
  self.pageSize = 10;
  self.individualData = [];
  
  self.jobFunction = function () {
    JobListing.fetchJobs(self.pageNumber, self.pageSize).then(function (response) {

      self.mydata = response.data.result.jobDetails;
      self.totalCount = response.data.totalRecordCount;
      self.totalPages = Math.ceil(self.totalCount / self.pageSize);

    });
  };

  self.jobFunction();
  self.next = function () {
    if (self.pageNumber < self.totalPages - 1) {
      self.pageNumber++;
      self.jobFunction();
    }
  };

  self.previous = function () {
    if (self.pageNumber > 0) {
      self.pageNumber--;
      self.jobFunction();
    }
  };

  self.num = GetRange.range(self.totalPages);
  // console.log(self.num);

  self.individualDataShow = function (jobId) {
    // jobId= $stateParams.jobId;
    // $rootScope.jobId= jobId;
    self.individualData = $filter('filter')(self.mydata, {jobId: jobId})[0];
    console.log(self.individualData);
    /*$ionicPopup.show({
      templateUrl: 'templates/IndividualJobs.html',
      buttons: [{text: 'Back'}]
    });*/
  };


});
