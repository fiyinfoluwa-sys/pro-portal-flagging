angular.module('flagApp')
  .service('evaluateService', ['$http', function($http) {
    this.evaluate = function(candidate) {
      return $http.post('http://localhost:3000/api/evaluate', candidate);
    };
  }]);

