var app = app || {};
(function ($) {
	'use strict';
	app.MemberListView = Backbone.View.extend({
		tagName: 'li',
		template: _.template($('#mlTemplate').html()),
		initialize: function () {
			this.render();
		},
		render: function () {
			console.group('mlview');
			console.log(this.model);
			console.log(this.model.models);
			console.groupEnd();
			return this;
		}
	});
	app.MemberListItemView = Backbone.View.extend({
		tagName: 'li',
		initialize: function () {
		},
		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
}(jQuery));