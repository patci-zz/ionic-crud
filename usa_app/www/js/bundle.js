/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// Ionic Starter App

	// angular.module is a global place for creating, registering and retrieving Angular modules
	// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
	// the 2nd parameter is an array of 'requires'
	var angular = window.angular;
	var usaApp = angular.module('starter', ['ionic'])

	usaApp.config(['$httpProvider', function($http) {
	  $http.defaults.useXDomain = true;
	}]);

	__webpack_require__(1)(usaApp);

	usaApp.run(['$ionicPlatform', function($ionicPlatform) {
	  $ionicPlatform.ready(function() {
	    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	    // for form inputs)
	    if(window.cordova && window.cordova.plugins.Keyboard) {
	      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	    }
	    if(window.StatusBar) {
	      StatusBar.styleDefault();
	    }
	  })
	}]);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = exports = function(app) {
	  __webpack_require__(2)(app);
	  __webpack_require__(3)(app);
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = exports = function(app) {
	  app.controller('StatesController', ['$http', function($http, $ionicPopup) {
	    var server = 'http://' + ("192.168.0.3:3000") + '/api/states';

	    var handleError = function(res) {
	      console.log(res);
	    };

	    this.states = [];

	    this.getAll = function() {
	      $http.get(server)
	      .then(function(res) {
	        this.states = res.data;
	      }.bind(this), handleError);
	    }.bind(this);

	    this.createState = function(state) {
	      $http.post(server, state)
	      .then(function(res) {
	        this.states.push(res.data);
	        this.newState = null;
	      }.bind(this), handleError);
	    }.bind(this);

	    this.deleteState = function(state) {
	      $http.delete(server + '/' + state._id)
	      .then(function(res) {
	        this.states.splice(this.states.indexOf(state), 1);
	      }.bind(this), handleError)
	    }.bind(this);

	    this.updateState = function(state) {
	      $ionicPopup.show({
	        template: '<input autofocus type="text" ng-model="states.name">',
	        title: 'Enter new State',
	        scope: $(this),
	        buttons: [
	          {
	            text: 'Cancel',
	            onTap: function(){
	              editPopup.close();
	            }
	          },
	          {
	            text: '<b>Save</b>',
	            type: 'button-positive',
	            onTap: function(e) {
	              if (!states.name) e.preventDefault();

	              $http.put(server + '/' + state._id, state)
	              .then(function(res) {
	                console.log('State name changed');
	              }.bind(this), handleError)
	            }.bind(this)
	          }]
	        })
	      }
	  }]);
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = exports = function(app) {
	  app.controller('PopupCtrl', function($scope, $ionicPopup) {

	    $scope.showPopup = function() {
	   $scope.data = {}

	   var myPopup = $ionicPopup.show({
	     template: '<input autofocus type="text" ng-model="data.name">',
	     title: 'Enter new State',
	     scope: $scope,
	     buttons: [
	       {
	         text: 'Cancel' ,
	         onTap: function() {
	                myPopup.close();
	         }
	       },
	       {
	         text: '<b>Save</b>',
	         type: 'button-positive',
	         onTap: function(e) {
	           if (!$scope.data.name) {
	             e.preventDefault();
	           } else {
	             return $scope.data.name;
	           }
	         }
	       },
	     ]
	   });

	  };
	});
	}



/***/ }
/******/ ]);