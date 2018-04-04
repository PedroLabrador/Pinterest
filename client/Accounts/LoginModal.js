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