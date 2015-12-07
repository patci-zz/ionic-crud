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

