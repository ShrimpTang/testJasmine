/**
 * Created by ShrimpTang on 2015/11/13.
 */
angular.module('pie', []).controller('PieController',
    ['$scope',
        function ($scope) {
            $scope.slices = 8;
            $scope.lastRequstedFlavor;
            $scope.eatSlice = function () {
                if ($scope.slices) {
                    $scope.slices--;
                }
            }
            this.requestFlavor = function(flavor){
                $scope.lastRequstedFlavor = flavor;
            }
        }]);