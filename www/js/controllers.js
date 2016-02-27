angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('HomeCtrl', function($scope,$state) {

$scope.gotopostevent =function(){

  $state.go("app.postevent");
};
$scope.gotosearchevent =function(){

  $state.go("app.searchevent");
};
var client = new WindowsAzure.MobileServiceClient(
    "https://cfdms.azure-mobile.net/",
    "JdKrCxQZhNzIUBuUdKFcuXIQoXnRys50"
);

// client.getTable("test").insert(item);
// var item2 = { text: "Awesome item2" };
// client.getTable("test").insert(item2);
// var item4 = []
// var item3 = client.getTable("test").read().done(function (results) {
//     console.log(results[0]['text']);
// });
// console.log(item);

})
.controller('SignupCtrl', function($scope) {

})
.controller('PosteventCtrl', function($scope) {

var client = new WindowsAzure.MobileServiceClient(
    "https://cfdms.azure-mobile.net/",
    "JdKrCxQZhNzIUBuUdKFcuXIQoXnRys50"
);
$scope.xxx = {'eventname': '' , 'eventdesc': '','venue': '' , 'room': '','startdate': '' , 'starttime': '','enddate': '' , 'endtime': '',};
$scope.postevent = function(){
  console.log("posted");
  console.log($scope.eventname);
  console.log($scope.xxx.startdate);
  $scope.starter=$scope.xxx.startdate+$scope.xxx.starttime;
  $scope.ender=$scope.xxx.enddate+$scope.xxx.endtime;
  var item = {eventname:$scope.xxx.eventname,eventdesc:$scope.xxx.eventdesc,location:$scope.xxx.venue,locationdet:$scope.xxx.room,category:$scope.xxx.category,startdate:$scope.xxx.startdate.toLocaleDateString()+" "+$scope.xxx.starttime.toString().split(" ")[4],enddate:$scope.xxx.enddate.toLocaleDateString()+" "+$scope.xxx.endtime.toString().split(" ")[4]};
  client.getTable("test").insert(item);
  console.log(item);
}

})
.controller('AboutCtrl', function($scope,$stateParams,$state) {
  $scope.gotologin =function(){
    $state.go('app.login');
    
  };
})
.controller('SearchCtrl', function($scope,$stateParams,$state) {

$scope.selection3 = function(){
  $scope.selectedlocation=true;
  $scope.selectedname="";
  $scope.selectedcategory="";
  $scope.selectedall="";
}
$scope.selection1 = function(){
  $scope.selectedlocation="";
  $scope.selectedname=true;
  $scope.selectedcategory="";
  $scope.selectedall="";
}
$scope.selection2 = function(){
  $scope.selectedlocation="";
  $scope.selectedname="";
  $scope.selectedcategory=true;
  $scope.selectedall="";
}
$scope.selection4 = function(){

  $scope.selectedlocation="";
  $scope.selectedname="";
  $scope.selectedcategory="";
  $scope.selectedall=true;
}
})
.controller('LoginCtrl', function($scope, $stateParams,$state) {
  $scope.signNew =function(){
    $state.go('app.signup');
    
  };
});
