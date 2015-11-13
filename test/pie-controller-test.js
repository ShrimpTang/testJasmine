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
    });

    describe('action handlers', function () {
        describe('Eat slice', function () {
            it('数量应该匹配', function () {
                expect($scope.slices).toEqual(8);
                $scope.eatSlice();
                expect($scope.slices).toEqual(7);
            });

            it('数量应该为0',function(){
                $scope.slices=0;
                expect($scope.slices).toEqual(0);
            });

            it('lastRequstedFlavor不该为undefined', function () {
                controoler.requestFlavor('草莓');
                expect($scope.lastRequstedFlavor).toEqual('草莓');
            });

        })
    });

    describe('Init ', function () {
        it('应该是8!', function () {
            expect($scope.slices).toEqual(8);
        });
        it('lastRequstedFlavor应该undefined', function () {
            expect($scope.lastRequstedFlavor).toBeUndefined();
        });
    });

});