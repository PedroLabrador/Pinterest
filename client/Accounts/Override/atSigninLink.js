import { Session } from 'meteor/session';

Template['override-atSigninLink'].replaces('atSigninLink');

Template.atSigninLink.events({
	'click': () => {
		Session.set('sign-title', false);
	}
});