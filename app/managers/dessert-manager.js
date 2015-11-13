/**
 * Created by ShrimpTang on 2015/11/13.
 */
angular.module('desserts', [])
    .value('DessertValues', {
        pies: [
            {flavor: 'Cherry', score: 6},
            {flavor: 'Apple', score: 3},
            {flavor: 'Peach', score: 5}
        ]
    }).factory('DessertManager', ['DessertValues', function (dessertValues) {
        return {
            pieFlavors: function () {
             //   try {
                    return dessertValues.pies.map(function (pie) {
                        return pie.flavor;
                    })
                //} catch (e) {
                //    throw  e;
                //}
            }
        };
    }]);