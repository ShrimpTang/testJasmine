/**
 * Created by ShrimpTang on 2015/11/15.
 */
angular.module('directives', [])
    .directive('nsTextAndSub', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/text-and-sub.html',
            scope: {
                text: "@",
                sub: "@"
            }
        }
    });