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
			console.log('school number: ', id);
			console.log('memberList');
			console.log(app.memberList);
			console.log(typeof app.memberList.fetch);
			app.memberList.fetch({
				success: function (coll, resp, opts) {
					console.group('member list fetch results');
						console.log('collection: ', coll);
						console.log('response: ', resp);
						console.log('options: ', opts);
					console.groupEnd();
					$('#mainContent').html(new app.MemberListView({model: app.MemberListItem}).el);
				}
			});

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