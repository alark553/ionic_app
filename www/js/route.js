ionicApp.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('Jobs', {
      url: '/jobs',
      templateUrl: 'templates/JobListing.html',
      controller: 'JobCtrl'
    })
    .state('individualData', {
      url: '/individual_data/:jobId',
      templateUrl: 'templates/IndividualJobs.html',
      controller: 'JobCtrl'
    });

  $urlRouterProvider.otherwise('/jobs');
});
