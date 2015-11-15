/**
 * Created by ShrimpTang on 2015/11/15.
 */
describe('nsStateful', function () {
    var $rootScope,
        $scope,
        $compile,
        el,
        $body = $('body'),
        simpleHtml = '<button ns-stateful="red"></button>';
    beforeEach(function () {
        module('directives');
        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $compile = $injector.get('$compile');
            el = $compile(angular.element(simpleHtml))($scope);
        });
        $body.append(el);
        $rootScope.$digest();
    });
    it('先没样式 点击后有样式 再点击无样式 再点击有样式 再点击无样式', function () {
        expect(el.hasClass('red')).toBeFalsy();

        el.click();
        $scope.$digest();
        expect(el.hasClass('red')).toBeTruthy();

        el.click();
        $scope.$digest();
        expect(el.hasClass('red')).toBeFalsy();

        el.click();
        $scope.$digest();
        expect(el.hasClass('red')).toBeTruthy();

    });
    it('属性为空报错', function () {
        expect(function () {
            $compile(angular.element('<a ns-stateful></a>'))($scope);
        }).toThrow()
    })
});