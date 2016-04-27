// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var sum = 0;
angular.module('foodPlanner', ['ionic'])

.controller('FoodCtrl', function($scope, $ionicModal, $ionicSideMenuDelegate) {
  $scope.foods = [];
  $scope.current_sum = sum;
  $scope.subsections = [
    "home",
    "past results",
    "credit"
  ];

  $ionicModal.fromTemplateUrl('new-food.html', function(modal) {
    $scope.foodModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  $scope.createFood = function(food) {
    $scope.foods.push({
      title: food.title,
      calories: food.calories
    });
    $scope.current_sum  =  $scope.current_sum  + parseInt(food.calories, 10);
    $scope.foodModal.hide();
    food.title = "";
    food.calories = "";
  };
  $scope.newFood = function() {
    $scope.foodModal.show();
  };
  $scope.closeNewFood = function() {
    $scope.foodModal.hide();
  };
  $scope.toggleMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  }

});


// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     if(window.cordova && window.cordova.plugins.Keyboard) {
//       // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//       // for form inputs)
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//
//       // Don't remove this line unless you know what you are doing. It stops the viewport
//       // from snapping when text inputs are focused. Ionic handles this internally for
//       // a much nicer keyboard experience.
//       cordova.plugins.Keyboard.disableScroll(true);
//     }
//     if(window.StatusBar) {
//       StatusBar.styleDefault();
//     }
//   });
// })
