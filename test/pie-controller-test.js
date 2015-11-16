/**
 * Created by ShrimpTang on 2015/11/13.
 */
describe('pie', function () {
    var $rootScope,
        $scope,
        controoler;
    beforeEach(function () {
        module('pie');
        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controoler = $injector.get('$controller')('PieController', {$scope: $scope});
        });
        $scope.$digest();
    });

    describe('$on 测试', function () {
        it('warning为RED ALERT!', function () {
            $rootScope.$broadcast('pieHasBeenDepleted');
            $scope.$digest();
            expect($scope.warning).toEqual('RED ALERT!');
        });

        it('slices 为0', function () {
            $rootScope.$broadcast('pieHasBeenDepleted');
            $scope.$digest();
            expect($scope.slices).toEqual(0);
        });

    });

    describe('action handlers', function () {
        describe('Eat slice', function () {
            it('数量应该匹配', function () {
                expect($scope.slices).toEqual(8);
                $scope.eatSlice();
                expect($scope.slices).toEqual(7);
            });

            it('数量应该为0', function () {
                $scope.slices = 0;
                expect($scope.slices).toEqual(0);
            });

            it('lastRequstedFlavor不该为undefined', function () {
                controoler.requestFlavor('草莓');
                expect($scope.lastRequstedFlavor).toEqual('草莓');
            });

        });
    });

    describe('Watch', function () {
        it('calories增加!', function () {
            $scope.nutritionalValue.calories++;
            $scope.$digest();
            expect($scope.warning).toEqual('Calories增加了');
        });

        it('fat增加!', function () {
            $scope.nutritionalValue.fat++;
            $scope.$digest();
            expect($scope.warning).toEqual('Fat增加了');
        });

        it('carbs增加!', function () {
            $scope.nutritionalValue.carbs++;
            $scope.$digest();
            expect($scope.warning).toEqual('Carbs增加了');
        });

        it('全部增加!', function () {
            $scope.nutritionalValue.calories++;
            $scope.nutritionalValue.fat++;
            $scope.nutritionalValue.carbs++;
            $scope.$digest();
            expect($scope.warning).toEqual('Calories,Fat,Carbs增加了');
        });

        it('不增加 waring为null', function () {
            expect($scope.warning).toBeNull();
        });

        it('全部减少 warning为null', function () {
            $scope.nutritionalValue.calories--;
            $scope.nutritionalValue.fat--;
            $scope.nutritionalValue.carbs--;
            $scope.$digest();
            expect($scope.warning).toBeNull();
        });

    })

    describe('Init ', function () {
        it('应该是8!', function () {
            expect($scope.slices).toEqual(8);
        });
        it('lastRequstedFlavor应该undefined', function () {
            expect($scope.lastRequstedFlavor).toBeUndefined();
        });

        it('nutritionalValue应该是初始值!', function () {
            expect($scope.nutritionalValue).toEqual({calories: 500, fat: 200, carbs: 100});
        });

        it('warning应该为null', function () {
            expect($scope.warning).toBeNull();
        });
    });

});