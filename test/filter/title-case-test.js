/**
 * Created by ShrimpTang on 2015/11/13.
 */
describe('title-case-filter', function () {
    var filter, $filter;
    beforeEach(function () {
        module('filters');
        inject(function ($injector) {
            $filter = $injector.get('$filter');
            filter = $filter('titleCase');
        });
    });
    it('期望undefine', function () {
        expect(filter(undefined)).toBeUndefined();
    });

    it('期望null!', function () {
        expect(filter(null)).toBeNull();
    });

    it('期望首字母大写 其他小写', function () {
        expect(filter('asAD JsD')).toEqual('Asad Jsd');
    });
    it('期望空字符串', function () {
        expect(filter('')).toEqual('');
    });
});