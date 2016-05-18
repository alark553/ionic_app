ionicApp.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('Jobs', {
      url: '/jobs',
      templateUrl: 'templates/JobListing.html',
      controller: 'JobCtrl'
    });
  $urlRouterProvider.otherwise('/jobs');
});
