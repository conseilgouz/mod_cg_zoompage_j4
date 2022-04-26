/**
* CG Zoom Article for Joomla 4
* Version			: 2.0.1
* Package			: CG Zoom Page
* copyright 		: Copyright (C) 2021 ConseilGouz. All rights reserved.
* license    		: http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
* From              : http://stackoverflow.com/questions/10464038/imitate-browser-zoom-with-javascript
*/
// zoom 
// depuis http://stackoverflow.com/questions/10464038/imitate-browser-zoom-with-javascript
//
jQuery(document).ready(function($) {

if (typeof Joomla === 'undefined' || typeof Joomla.getOptions === 'undefined') {
	console.error('Joomla.getOptions not found!\nThe Joomla core.js file is not being loaded.');
	return false;
}
var options = Joomla.getOptions('cg_zoompage');
if (typeof options === 'undefined' ) {
		request = {
			'option' : 'com_ajax',
			'module' : 'cg_zoompage',
			'data'   : 'param',
			'format' : 'raw'
			};
			jQuery.ajax({
				type   : 'POST',
				data   : request,
				success: function (response) {
					options = JSON.parse(response);
					check_buttons(options);
				}
			});

	return true;
}
check_buttons(options);
});
function check_buttons(options) {
var currFFZoom = 1;
var initFFZoom = 1;
var currIEZoom = 100;
var initIEZoom = 100;
	
	
jQuery('#mod_zoom_page #In').on('click',function(){
    if (navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6){//Firefox
        var step = (parseInt(options.zoom_in) * 0.01);
        currFFZoom += step; 
        jQuery('body').css('MozTransform','scale(' + currFFZoom + ')');
    } else {
        var step = parseInt(options.zoom_in);
        currIEZoom += step;
        jQuery('body').css('zoom', ' ' + currIEZoom + '%');
    }
});
jQuery('#mod_zoom_page #Reset').on('click',function(){
    if (navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6){//Firefox
        currFFZoom = initFFZoom;                 
        jQuery('body').css('MozTransform','scale(' + initFFZoom + ')');

    } else {
        currIEZoom = initIEZoom;                 
        jQuery('body').css('zoom', ' ' + initIEZoom + '%');
    }
});
jQuery('#mod_zoom_page #Out').on('click',function(){
    if (navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6){//Firefox
        var step = (parseInt(options.zoom_in) * 0.01);
        currFFZoom -= step;                 
        jQuery('body').css('MozTransform','scale(' + currFFZoom + ')');

    } else {
        var step = parseInt(options.zoom_in);
        currIEZoom -= step;
        jQuery('body').css('zoom', ' ' + currIEZoom + '%');
    }
});
}
