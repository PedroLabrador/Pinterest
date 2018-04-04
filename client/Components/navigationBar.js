import { Session } from 'meteor/session';

Template.navigationBar.events({
	'click .newpin': function() {
		Modal.show('formPost')
	},
	'click .login-toggle': function() {
		Session.set('nav-toggle', 'open');
	}
});

Template.home.helpers({
	navtoggle() {
		return Session.get('nav-toggle');
	}
});