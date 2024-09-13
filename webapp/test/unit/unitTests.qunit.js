/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comisat/isat_ui5/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
