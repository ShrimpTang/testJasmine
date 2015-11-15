/**
 * Created by ShrimpTang on 2015/11/15.
 */
angular.module('directives',[])
.directive('nsStateful',
    function () {
        return{
            restrict:'A',
            scope:false,
            link: function (scope,element,attrs) {
                if(!attrs.nsStateful){
                    throw  "No";
                }
                element.bind('click', function (e) {
                    scope.$apply(function () {
                        if(!element.hasClass(attrs.nsStateful)){
                            element.addClass(attrs.nsStateful);
                        }else{
                            element.removeClass(attrs.nsStateful);
                        }
                    });
                })
            }
        }
    });