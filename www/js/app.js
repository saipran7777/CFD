// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl'
      }
    }
  })
  .state('app.allselected', {
    url: '/allselected',
    views: {
      'menuContent': {
        templateUrl: 'templates/allselected.html',
        controller: 'AllselectedCtrl'
      }
    }
  })
  .state('app.categoryselected', {
    url: '/categoryselected',
    views: {
      'menuContent': {
        templateUrl: 'templates/categoryselected.html',
        controller: 'CategoryselectedCtrl'
      }
    }
  })
  .state('app.locationselected', {
    url: '/locationselected',
    views: {
      'menuContent': {
        templateUrl: 'templates/locationselected.html',
        controller: 'LocationselectedCtrl'
      }
    }
  })
  .state('app.nameselected', {
    url: '/nameselected',
    views: {
      'menuContent': {
        templateUrl: 'templates/nameselected.html',
        controller: 'NameselectedCtrl'
      }
    }
  })
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  })
    .state('app.signup', {
      url: '/signup',
      views: {
        'menuContent': {
          templateUrl: 'templates/signup.html',
          controller: 'SignupCtrl'
        }
      }
    })
    .state('app.postevent', {
      url: '/postevent',
      views: {
        'menuContent': {
          templateUrl: 'templates/postevent.html',
          controller: 'PosteventCtrl'
        }
      }
    })
    .state('app.searchevent', {
      url: '/searchevent',
      views: {
        'menuContent': {
          templateUrl: 'templates/searchevent.html',
          controller: 'SearchCtrl'
        }
      }
    })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
