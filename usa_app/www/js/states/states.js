module.exports = exports = function(app) {
  require('./controllers/states_controller')(app);
  require('./controllers/popup_controller')(app);
};
