var app = app || {};

(function ($) {
	'use strict';

	var Workspace = Backbone.Router.extend({
		initialize: function () {
			app.memberListSettings = app.memberListSettings || {};
			this.route(/^\/?$/, 'App Home', this.home);
			this.route(/^\/?school\/?$/i, 'public', this.errorState);
			this.route(/^\/?school\/([^0-9]+)\/?$/i, 'public', this.errorState);
			this.route(/^\/?school\/([a-zA-Z0-9-_ ]*)\/(\d+)\/?$/i, 'School Home', this.schoolHome);
			this.route(/^\/?school\/([a-zA-Z0-9-_ ]*)\/(\d+)\/memberlist(\/\w)*\/?$/i, 'School Member List', this.memberList);
			this.route(/^\/?school\/([a-zA-Z0-9-_ ]*)\/(\d+)\/memberlist\/(\d{4})\/?$/i, 'Class List', this.classList);
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
		schoolHome: function (schoolName, id) {
			console.group('school home');
			console.log(schoolName);
			console.log(id);
			console.groupEnd();
			this.navigate('/school/' + schoolName + '/' + id + '/memberList', true);
		},
		memberList: function (schoolName, id) {
			console.group('member list');
			console.log(schoolName);
			console.log(id);
			console.groupEnd();
			app.memberListSettings.schoolName = schoolName;
			app.memberListSettings.schoolID = id;
			var mlv = new app.MemberListView();
		},
		classList: function (schoolName, id, gradYear) {
			console.group('class list');
			console.log(schoolName);
			console.log(id);
			console.log(gradYear);
			console.groupEnd();
		}
	});

	app.MemberListRouter = new Workspace();
	Backbone.history.start();

}(jQuery));