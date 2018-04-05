import { Session } from 'meteor/session';

Template['override-atSignupLink'].replaces('atSignupLink');

Template.atSignupLink.events({
	'click #at-signUp' : () => {
		Session.set('sign-title', true);
	}
});