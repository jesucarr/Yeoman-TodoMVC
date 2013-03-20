require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	urlArgs: 'cb=' + Math.random(),
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
		},
		mocha: {
      exports: 'mocha'
    },
    chai: {
      exports: 'chai'
    },
	},
	paths: {
		jquery: '../app/components/jquery/jquery.min',
		underscore: '../app/components/underscore/underscore-min',
		backbone: '../app/components/backbone/backbone-min',
		backboneLocalstorage: '../app/components/backbone.localStorage/backbone.localStorage-min',
		text: '../app/components/requirejs-text/text',
		mocha: 'lib/mocha/mocha',
		chai: 'lib/chai'
	}
});

window.store = "TestStore"; // override local storage store name - for testing

require(['underscore', 'jquery', 'mocha', 'chai'], function(_, $, mocha, chai) {

  // Chai
  this.assert = chai.assert;
  this.expect = chai.expect;
  
  // Mocha
  mocha.setup({ui: 'bdd', ignoreLeaks: true});

  var specs = [];

  specs.push('spec/models/todo');
  

  require(specs, function(){
    $(function(){
      mocha.run();//.globals(['Backbone']);
    });
  });

});
