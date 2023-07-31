<?php 
/**
* CG Zoom Article for Joomla 4
* Version			: 2.1.0 
* Package			: CG Zoom Page
* copyright 		: Copyright (C) 2023 ConseilGouz. All rights reserved.
* license    		: http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
* From              : http://stackoverflow.com/questions/10464038/imitate-browser-zoom-with-javascript
*/
// No direct access
defined('_JEXEC') or die;
use Joomla\CMS\Language\Text;

$zoom_in = $params->get('zoom');
$font_color = $params->get('font-color','#52c0ff');
$icon_size = $params->get('icon-size','2.5');
?>
<div class= "mod_zoom_page" id="mod_zoom_page_<?php echo $module->id; ?>" data="<?php echo $module->id;?>">
<table width=100% >
<tr><td width=35%>
<a href="#" id="In_<?php echo $module->id;?>" title="<?php echo Text::_('CG_ZOOM_INCREASE');?>"><i class="fa fa-search-plus" style="font-size:<?php echo $icon_size;?>em;color:<?php echo $font_color;?>" ></i></a>
</td>
<td width=35%>
<a href="#" id="Reset_<?php echo $module->id;?>" title="<?php echo Text::_('CG_ZOOM_RESTORE');?>" ><i class="fa fa-undo" style="font-size:<?php echo $icon_size;?>em;color:<?php echo $font_color;?>"></i></a>
</td>
<td>
<a href="#" id="Out_<?php echo $module->id;?>" title="<?php echo Text::_('CG_ZOOM_DECREASE');?>" ><i class="fa fa-search-minus" style="font-size:<?php echo $icon_size;?>em;color:<?php echo $font_color;?>" ></i></a></h2>
</td>
</tr>
</table>
</div>