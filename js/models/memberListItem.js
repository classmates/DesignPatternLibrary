var app = app || {};

(function () {
	'use strict';
	app.MemberListItem = Backbone.Model.extend({
		defaults: {
			firstName: '',
			lastName: '',
			years: ''
		},
		idAttribute: 'personId'
	});
}());