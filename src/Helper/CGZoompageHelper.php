<?php
/**
* CG Zoom Article
* Package			: Joomla 4.x/5.x/6.x
* copyright 		: Copyright (C) 2025 ConseilGouz. All rights reserved.
* license    		: https://www.gnu.org/licenses/gpl-3.0.html GNU/GPL
* From              : http://stackoverflow.com/questions/10464038/imitate-browser-zoom-with-javascript
*/
// No direct access
namespace ConseilGouz\Module\CGZoomPage\Site\Helper;
defined('_JEXEC') or die;
use Joomla\CMS\Factory;
use Joomla\CMS\Helper\ModuleHelper;
use Joomla\Registry\Registry;

class CGZoompageHelper {
	public static function getAjax() {
		$module = ModuleHelper::getModule('cg_zoompage');
		$params = new Registry($module->params);  		
        $input = Factory::getApplication()->getInput();
		if ($input->get('data') == "param") {
			return '{"name":"'.$module->name.'","zoom_in":"'.$params->get('zoom').'"}';
		}
		return false;
	}

}