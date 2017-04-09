angular.module('sofi')
.directive('logoDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './logo.html'
    };
});
