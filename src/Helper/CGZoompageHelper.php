<?php
/**
* CG Zoom Article for Joomla 4
* Version			: 2.0.1
* Package			: CG Zoom Page
* copyright 		: Copyright (C) 2021 ConseilGouz. All rights reserved.
* license    		: http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
* From              : http://stackoverflow.com/questions/10464038/imitate-browser-zoom-with-javascript
*/
// No direct access
namespace Joomla\Module\CGZoomPage\Site\Helper;
defined('_JEXEC') or die;
use Joomla\CMS\Factory;
use Joomla\CMS\Helper\ModuleHelper;
use Joomla\Registry\Registry;

class CGZoompageHelper {
	public static function getAjax() {
		$module = ModuleHelper::getModule('cg_zoompage');
		$params = new Registry($module->params);  		
        $input = Factory::getApplication()->input;
        $output = '';
		if ($input->get('data') == "param") {
			return '{"name":"'.$module->name.'","zoom_in":"'.$params->get('zoom').'"}';
		}
		return false;
	}

}