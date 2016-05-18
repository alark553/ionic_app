ionicApp.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('Jobs', {
      url: '/jobs',
      templateUrl: 'templates/JobListing.html',
      controller: 'JobCtrl'
    })
    .state('page1', {
      url: '/page1',
      templateUrl: 'templates/page1.html',
      controller: 'JobCtrl'
    })
    .state('page1.level1', {
      url: '/page1_level1',
      templateUrl: 'templates/page1_level1.html',
      controller: 'JobCtrl'
    })
    .state('page1.level1_2', {
      url: '/page1_level1_2',
      templateUrl: 'templates/page1.level1_2.html',
      controller: 'JobCtrl'
    })
    .state('page2', {
      url: '/page2',
      templateUrl: 'templates/page2.html',
      controller: 'JobCtrl'
    });

  $urlRouterProvider.otherwise('/page1');
});
