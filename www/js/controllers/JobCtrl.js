//angular.module('controllers', [])

ionicApp.controller('JobCtrl', function ($scope, $http, $stateParams, $ionicPopup, $filter, JobListing, GetRange, $rootScope) {

  var self = this;
  self.num = [];
  self.mydata = [];
  self.pageNumber = 0;
  self.pageSize = 10;
  self.width = 0;
  self.to_be_true = 1;

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

  self.concating = function () {
    self.pageNumber++;
    // console.log(self.mydata);
    JobListing.fetchJobs(self.pageNumber, self.pageSize).then(function (response) {
      self.mydata = self.mydata.concat(response.data.result.jobDetails);
    });
    // console.log(self.mydata);
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
    self.individualData = [];
    console.log(self.mydata);
    self.individualData = $filter('filter')(self.mydata, {jobId: jobId})[0];
    console.log(self.individualData);
    console.log(jobId);
    $ionicPopup.show({
      templateUrl: 'templates/IndividualJobs.html',
      scope: $scope,
      buttons: [{text: 'Back'},
        {text: 'Delete'}]
    });
  };

  self.leftSwipe = function (jobId, index) {
    console.log('Left Swipe Detected');
    console.log(jobId);
    console.log(index);
    self.width += 25;
    //self.mydata.splice(index,1);
    console.log(self.width);
  };

  self.rightSwipe = function (jobId, index) {
    console.log('right Swipe Detected');
    console.log(jobId);
    self.width -= 25;
    console.log(index);
    console.log(self.width);
  };

  /*self.ifScroll = function (pageNum) {
    if (pageNum > self.totalPages){
      return false;
    }
    else true;
  };*/

  self.loadMore = function () {
    self.pageNumber++;
    JobListing.fetchJobs(self.pageNumber, self.pageSize).then(function (response) {
      self.mydata = self.mydata.concat(response.data.result.jobDetails);
    });
    // self.to_be_true = self.ifScroll(self.pageNumber);
    if (self.pageNumber > self.totalPages){
      self.to_be_true = 0;
    }
    // console.log( self.ifScroll(self.pageNumber));
    console.log(self.to_be_true);
    $scope.$broadcast('scroll.infiniteScrollComplete');

  };


});
