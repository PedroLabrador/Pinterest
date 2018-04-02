import { Router } from 'meteor/iron:router';

Router.configure({
	noRoutesTemplate: true
});

Router.configure({
	layoutTemplate: 'baseLayout'
});

Router.route('/', {
	name: 'home'
});