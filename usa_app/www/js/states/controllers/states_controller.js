module.exports = exports = function(app) {
  app.controller('StatesController', ['$http', function($http, $scope, $ionicPopup) {
    var server = 'http://' + SERVER_ADDRESS + '/api/states';

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
