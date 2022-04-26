<?php
/**
* CG Zoom Article
* Version			: 2.0.1
* Package			: Joomla 4.x.x
* copyright 		: Copyright (C) 2021 ConseilGouz. All rights reserved.
* license    		: http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
* From              : http://stackoverflow.com/questions/10464038/imitate-browser-zoom-with-javascript
* Updated on        : March 2018
*/
// No direct access
defined('_JEXEC') or die;
use Joomla\CMS\Factory;
use Joomla\CMS\Helper\ModuleHelper;

$doc = Factory::getDocument();
$modulefield	= 'media/mod_cg_zoompage/';
/** @var Joomla\CMS\WebAsset\WebAssetManager $wa */
$wa = Factory::getApplication()->getDocument()->getWebAssetManager();

$wa->registerAndUseScript('zoompage', $modulefield.'js/zoom.js');
$doc->addScriptOptions('cg_zoompage', 
							array('id' => $module->id,'zoom_in' => $params->get('zoom')));
require ModuleHelper::getLayoutPath('mod_cg_zoompage');
?>