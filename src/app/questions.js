module.exports = {
  template: require('./questions.html'),
  /** @ngInject */
  controller: function ($http) {
    this.callDone = false;
    this.update = function (user) {
      var data = {name: user.name, email: user.email, technical: user.technical};
      this.callDone = $http.post('http://rtdapi.azurewebsites.net/api/users', data).then(function () {
        return true;
      }, function () {
        return true;
      });
    };
  }
};
