var app = app || {};

(function () {
	'use strict';
	app.MemberListItem = Backbone.Model.extend({
		defaults: {
			firstName: '',
			lastName: '',
			years: ''
		},
		idAttribute: 'personId',
		initialize: function () {
			var attYears = this.get('startYear') + ' - ' + this.get('endYear');
			this.set({
				years: attYears
			});
		}
	});
}());