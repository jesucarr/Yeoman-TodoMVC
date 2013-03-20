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
		jquery: '../components/jquery/jquery.min',
		underscore: '../components/underscore/underscore-min',
		backbone: '../components/backbone/backbone-min',
		backboneLocalstorage: '../components/backbone.localStorage/backbone.localStorage-min',
		text: '../components/requirejs-text/text'
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
