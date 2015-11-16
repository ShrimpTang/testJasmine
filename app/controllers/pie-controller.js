/**
 * Created by ShrimpTang on 2015/11/13.
 */
angular.module('pie', []).controller('PieController',
    ['$scope',
        function ($scope) {
            $scope.slices = 8;
            $scope.lastRequstedFlavor;
            $scope.nutritionalValue = {calories: 500, fat: 200, carbs: 100};
            $scope.warning = null;

            $scope.$on('pieHasBeenDepleted', function () {
                $scope.slices = 0;
                $scope.warning = 'RED ALERT!';
        });

            $scope.eatSlice = function () {
                if ($scope.slices) {
                    $scope.slices--;
                }
            }
            this.requestFlavor = function (flavor) {
                $scope.lastRequstedFlavor = flavor;
            }
            function compareAndWarn(newVal, oldValue) {
                var props = [];
                if (newVal && oldValue) {
                    for (var key in newVal) {
                        if (newVal[key] > oldValue[key]) {
                            props.push(key.charAt(0).toUpperCase() + key.slice(1));
                        }
                    }
                }
                return props;
            }

            $scope.$watch('nutritionalValue', function (newVal, oldVal) {
                var props = compareAndWarn(newVal, oldVal);
                if (props && props.length) {
                    $scope.warning=props.join(',')+'增加了';
                }else{
                    $scope.warning=null;
                }
            },true);
        }]);