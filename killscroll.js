(function (angular) {
    'use strict';

    function isDef(o) {
        return o !== undefined && o !== null;
    }

    angular.module("alveo.directives")
        .directive("killscroll", [
            function () {
                return {
                    restrict        : 'A',
                    scope           : true,
                    transclude      : true,
                    template        : "<ng-transclude></ng-transclude>",
                    link    : function(scope, elem) {
                        elem.bind('mousewheel', function(e) {
                            // since the height might be dynamic this shit changes
                            var top                         =   elem[0].scrollHeight - elem.height();
                            var mousewheel_delta            =   e.originalEvent.wheelDelta/120;
                            var scroll_down_in_the_bottom   =   this.scrollTop === 0 && mousewheel_delta > 0;
                            var scroll_up_at_the_top        =   this.scrollTop === top && mousewheel_delta < 0;
                            if (scroll_down_in_the_bottom || scroll_up_at_the_top) e.preventDefault();
                        });
                    }
                };
            }
        ]);
})(angular);
