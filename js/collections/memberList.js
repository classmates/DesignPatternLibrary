var app = app || {};

(function () {
	'use strict';
	var MemberList = Backbone.Collection.extend({
		model: app.MemberListItem,
		url: 'http://jcornsmac1.sea.corp.int.untd.com/memberList/docs/profilesAll.json'
	});
	app.memberList = new MemberList();
}());