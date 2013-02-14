var app = app || {};

(function ($) {
	'use strict';

	var Workspace = Backbone.Router.extend({
		initialize: function () {
			this.route(/^\/?$/, 'App Home', this.home);
			this.route(/^\/?school\/?$/, 'public', this.errorState);
			this.route(/^\/?school\/([^0-9]+)/, 'public', this.errorState);
			this.route(/^\/?school\/(\d+)\/?$/, 'School Home', this.schoolHome);
			this.route(/^\/?school\/(\d+)\/memberList\/?$/, 'School Member List', this.memberList);
			this.route(/^\/?school\/(\d+)\/memberList\/(\d{4})\/?$/, 'Class List', this.classList);
		},
//		routes: {
//			'': 'home',
//			'school/:id': 'schoolHome',
//			'school/:id/memberList': 'memberList',
//			'school/:id/memberList/:gradYear': 'gradClass',
//			'school/memberList': 'errorState',
//			'school': 'errorState'
//		},

		home: function (param) {
			console.log('home');
		},
		errorState: function () {
			console.warn('whoops');
		},
		schoolHome: function (id) {
			console.log(id);
			console.log('schoolHome');
			this.navigate('/school/' + id + '/memberList', true);
		},
		memberList: function (id) {
			console.group('memberList');
			console.log('id: ', id);
			console.groupEnd();
			var mlv = new app.MemberListView();
		},
		classList: function (id, gradYear) {
			console.log(arguments);
			console.log('class list:', gradYear);
			console.log('for school: ', gradYear);
		}
	});

	app.MemberListRouter = new Workspace();
	Backbone.history.start();

}(jQuery));