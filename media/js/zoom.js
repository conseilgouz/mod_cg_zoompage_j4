/**
* CG Zoom Article for Joomla 4
* Version			: 2.1.0
* Package			: CG Zoom Page
* copyright 		: Copyright (C) 2023 ConseilGouz. All rights reserved.
* license    		: http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
* From              : http://stackoverflow.com/questions/10464038/imitate-browser-zoom-with-javascript
*/
// zoom 
// depuis http://stackoverflow.com/questions/10464038/imitate-browser-zoom-with-javascript
//
var options = {};
document.addEventListener('DOMContentLoaded', function() {

if (typeof Joomla === 'undefined' || typeof Joomla.getOptions === 'undefined') {
	console.error('Joomla.getOptions not found!\nThe Joomla core.js file is not being loaded.');
	return false;
}
mains = document.querySelectorAll('.mod_zoom_page');
for(var i=0; i< mains.length; i++) {
	var $this = mains[i];
	var myid = $this.getAttribute("data");
	if (typeof Joomla === 'undefined' || typeof Joomla.getOptions === 'undefined') {
		options[myid] = '';
	} else {
		options[myid] = Joomla.getOptions('cg_zoompage_'+myid);
	}
	if (typeof options[myid] === 'undefined' ) { // cache Joomla problem
		return false;
	};
	if (typeof options[myid] !== 'undefined' ) {
		check_buttons(options[myid]);
	}
}
});
function check_buttons(options) {
var currFFZoom = 1;
var initFFZoom = 1;
var currIEZoom = 100;
var initIEZoom = 100;
$id = options.id;
$body = document.querySelector('body');
zoomin = document.querySelector('#In_'+$id);
zoomin.onclick =function(){
    if (navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6){//Firefox
        var step = (parseInt(options.zoom_in) * 0.01);
        currFFZoom += step; 
        $body.style.MozTransform = 'scale(' + currFFZoom + ')';
    } else {
        var step = parseInt(options.zoom_in);
        currIEZoom += step;
        $body.style.zoom =  currIEZoom + '%';
    }
};
zoomreset = document.querySelector('#Reset_'+$id);
zoomreset.onclick = function(){
    if (navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6){//Firefox
        currFFZoom = initFFZoom;                 
        $body.style.MozTransform = 'scale(' + currFFZoom + ')';
    } else {
        currIEZoom = initIEZoom;    
		$body.style.zoom =  currIEZoom + '%';		
    }
};
zoomout =document.querySelector('#Out_'+$id);
zoomout.addEventListener('click',function() {
    if (navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6){//Firefox
        var step = (parseInt(options.zoom_in) * 0.01);
        currFFZoom -= step;                 
        $body.style.MozTransform = 'scale(' + currFFZoom + ')';

    } else {
        var step = parseInt(options.zoom_in);
        currIEZoom -= step;
        $body.style.zoom =  currIEZoom + '%';
    }
});
}
