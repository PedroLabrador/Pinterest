import { Session } from 'meteor/session';

Template.loginTwitter.events({
	'click #signInTwitter': function() {
		Meteor.loginWithTwitter();
	}
});

Template.user.events({
	'click #signOut': function() {
		Meteor.logout();
	}
});

Template.LoginModal.events({
	'click .close-login': ()=> {
		Session.set('nav-toggle', '');
	}
});

Template.LoginModal.helpers({
	navtoggle() {
		return Session.get('nav-toggle');
	},
	title() {
		return Session.get('sign-title');
	}
});