/**
 * Created by ShrimpTang on 2015/11/15.
 */
describe('nsTextAndSub', function () {
    var $rootScope,
        $scope,
        $compile,
        el,
        $el,
        $body = $('body'),
        simpleHtml = '<ns-text-and-sub text="{{scopeText}}" sub="{{scopeSub}}"></ns-text-and-sub>';
    beforeEach(function () {
        module('templates', 'directives');
        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $compile = $injector.get('$compile');
            el = $compile(angular.element(simpleHtml))($scope);
        });
        $body.append(el);
        $rootScope.$digest();
        $el = $('.text-and-sub');
    });
    afterEach(function () {
        $body.empty();
    });

    it('存在', function () {
       expect($el.length).toEqual(1);
    });

    it('给scopeText赋值 在判断h3里面的text()是否与scopeText值相等', function () {
        $scope.scopeText='moumoon';
        $scope.$digest();
        expect($el.find('h3').text()).toEqual('moumoon');
    });

    it('scopeSub 在判断h5里面的text()scopeSub', function () {
        $scope.scopeSub='tang';
        $scope.$digest();
        expect($el.find('h5').text()).toEqual('tang');
    });

    it('h5默认隐藏', function () {
        expect($el.find('h5').is(':visible')).toBeFalsy();
    });

    it('给h5 赋值  h5显示', function () {
        $scope.scopeSub='moumoon';//
        $scope.$digest();
        expect($el.find('h5').is(':visible')).toBeTruthy();
    });

});
