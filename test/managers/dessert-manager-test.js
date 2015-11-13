/**
 * Created by ShrimpTang on 2015/11/13.
 */
describe('dessertsManager', function () {
    var dessertValues, dessertManager;
    beforeEach(function () {
        module('desserts');
        inject(function ($injector) {
            dessertValues = $injector.get('DessertValues');
            dessertManager = $injector.get('DessertManager');
        });
    });
    describe('DessertValues', function () {
        it('应该为3个', function () {
            expect(dessertValues.pies).toEqual([
                {flavor: 'Cherry', score: 6},
                {flavor: 'Apple', score: 3},
                {flavor: 'Peach', score: 5}
            ]);
        });
    });
    describe('DessertManager', function () {
        it('应该返回3个 并且顺序正确', function () {
            expect(dessertManager.pieFlavors().length).toEqual(3);
            expect(dessertManager.pieFlavors()[0]).toEqual('Cherry');
            expect(dessertManager.pieFlavors()[1]).toEqual('Apple');
            expect(dessertManager.pieFlavors()[2]).toEqual('Peach');
        });
        //it('应该抛出异常', function () {
        //    dessertValues.pies = null;
        //   expect(dessertManager.pieFlavors()).toThrow();
        //
        //});
    });
});