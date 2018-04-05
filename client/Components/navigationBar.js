import { Session } from 'meteor/session';

Template.navigationBar.events({
	'click .newpin': function() {
		Modal.show('formPost')
	},
	'click .login-toggle': function() {
		Session.set('nav-toggle', 'open');
	},
	'click .logout': ()=> {
		Meteor.logout();
	}
});