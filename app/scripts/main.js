// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		backboneLocalstorage: {
			deps: ['backbone'],
			exports: 'Store'
		}
	},
	paths: {
		jquery: '../bower_components/jquery/jquery.min',
		underscore: '../bower_components/underscore/underscore-min',
		backbone: '../bower_components/backbone/backbone-min',
		backboneLocalstorage: '../bower_components/backbone.localStorage/backbone.localStorage-min',
		text: '../bower_components/requirejs-text/text'
	}
});

require([
	'backbone',
	'views/app',
	'routers/router'
], function (Backbone, AppView, Workspace) {
	'use strict';
	// Initialize routing and start Backbone.history()
	new Workspace();
	Backbone.history.start({pushState: true});

	// Initialize the application view
	new AppView();
});
