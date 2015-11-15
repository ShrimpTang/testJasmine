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
});
