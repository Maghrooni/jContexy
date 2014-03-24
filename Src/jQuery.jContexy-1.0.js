/*
 * jContexy - jQuery Plugin for handling simple Context menu
 * 
 * Version: 1.0
 * Author : Mahdi Maghrooni | http://maghrooni.ir
 * Web: http://github.com/Maghrooni/jContexy
 * 
 * License under
 *      MIT License http://www.opensource.org/licenses/mit-license
 * 
 */
(function($) {
    $.fn.jcontexy = function(options) {
        //Define Settings
        var settings = {};
        $.extend(settings, this.jcontexy.defaults, options);
        var menu = $(settings.menu);
        //set the necessary style options
        menu.css({'position': 'absolute', 'z-index': '1000'});
        var hide = function() {
            menu.hide();
        };
        //hide the Menu 
        hide();
        //bind menu on the Menu element
        menu.menu({position: {my: settings.position, at: settings.at, collision: settings.collision}});
        this.bind(settings.event, function(e) {
            e.preventDefault();
            menu.show().css({
                top: e.pageY + 'px',
                left: e.pageX + 'px'
            });
        });
        //hide menu on click 
        $(document).click(function() {
            hide();
        });
        return this;
    };
    //default Parameters
    $.fn.jcontexy.defaults = {
        event: 'contextmenu',
        menu: '#menu',
        position: 'left top',
        at: 'right-5 top+5',
        collision: 'flipfit'
    };
})(jQuery);