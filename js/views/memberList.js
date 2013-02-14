var app = app || {};
(function ($) {
	'use strict';
	app.MemberListView = Backbone.View.extend({
		tagName: 'ul',
		template: _.template($('#mlTemplate').html()),
		initialize: function () {
			_.bindAll(this);
			this.collection = new app.MemberList();
			this.collection.on('reset', this.render);
			this.collection.fetch();
		},
		renderItem: function (model, idx, len) {
			var itemView = new app.MemberListItemView({
				model: model,
				idx: idx,
				count: len
			});
			itemView.render();
			this.$el.append(itemView.el);
		},
		render: function () {
			var self = this,
				collCount = this.collection.models.length;
			_.each(this.collection.models, function (mem, idx) {
				self.renderItem(mem, idx, collCount);
			});
			this.$el.appendTo($('#mainContent'));
		}
	});
	app.MemberListItemView = Backbone.View.extend({
		tagName: 'li',
		initialize: function () {
			var tData = this.model.toJSON();
			tData.idx = this.options.idx;
			tData.count = this.options.count;
		},
		render: function () {
			this.$el.html(_.template('<span><%- firstName %> <%- lastName %></span> | <span><%- years %></span>', this.model.toJSON()));
			return this;
		}
	});
}(jQuery));