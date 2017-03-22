(function (angular) {
  'use strict';
  angular.module('Filter',[])
  .filter('isAllow', function () {
    return function (val) {  
      return val=='1'?'通过':'不通过';
    };
  })
  .filter('highlight', ['$sce', function ($sce) {
      return function (input, search) {
        var reg = new RegExp('(' + search + ')', 'ig');
        return $sce.trustAsHtml(input.replace(reg, '<span class="highlight">$1</span>'));
      };
    }]);
})(window.angular);
