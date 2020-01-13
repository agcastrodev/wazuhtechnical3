/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'wazuh-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'wico-clock': '&#xe925;',
		'wico-coffee': '&#xe926;',
		'wico-moving-up': '&#xe927;',
		'wico-docs': '&#xe91f;',
		'wico-github': '&#xe920;',
		'wico-maillist': '&#xe921;',
		'wico-slack': '&#xe922;',
		'wico-team': '&#xe923;',
		'wico-training-hat': '&#xe924;',
		'wico-agent': '&#xe900;',
		'wico-analytic': '&#xe901;',
		'wico-aresponse': '&#xe902;',
		'wico-branch': '&#xe903;',
		'wico-cloud': '&#xe904;',
		'wico-compliance-full': '&#xe905;',
		'wico-compliance': '&#xe906;',
		'wico-config': '&#xe907;',
		'wico-deploy': '&#xe908;',
		'wico-fileint': '&#xe909;',
		'wico-help-hands': '&#xe90a;',
		'wico-help': '&#xe90b;',
		'wico-incident-full': '&#xe90c;',
		'wico-incident': '&#xe90d;',
		'wico-integr': '&#xe90e;',
		'wico-intrusion-full': '&#xe90f;',
		'wico-intrusion': '&#xe910;',
		'wico-log': '&#xe911;',
		'wico-logdata': '&#xe912;',
		'wico-manager': '&#xe913;',
		'wico-policy': '&#xe914;',
		'wico-saas': '&#xe915;',
		'wico-siem': '&#xe916;',
		'wico-start': '&#xe917;',
		'wico-support': '&#xe918;',
		'wico-training': '&#xe919;',
		'wico-trojan': '&#xe91a;',
		'wico-vulne-full': '&#xe91b;',
		'wico-vulne': '&#xe91c;',
		'wico-wazuh': '&#xe91d;',
		'wico-whitelist': '&#xe91e;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/wico-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
