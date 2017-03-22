/**
 * Created by wb.huanghuaqing on 2016/9/20.
 */
(function (angular) {
    'use strict';
    angular.module('Batch', ['Request'])
        .service('batch', ['$http', '$location', '$q',  'request', function ($http, $location, $q, request) {
            return {
                image: {
                    upload: function (blob, info) {
                        //这里做数据的处理
                        //请求
                        return request('/upload/img/detail', info, true);
                    }
                }
            }
        }]);
})(window.angular);

