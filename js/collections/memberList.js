var app = app || {};

(function () {
	'use strict';
	app.MemberList = Backbone.Collection.extend({
		model: app.MemberListItem,
		url: '/CMBackbone/docs/samples/profilesAll.json',
		initialize: function () {
			_.bindAll(this);
		},
		parse: function (res, opts) {
			res.records = res.records || [];
			return res.records;
		}
	});
	// app.memberList = new MemberList();
}());