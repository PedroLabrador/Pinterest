import { Router } from 'meteor/iron:router';
import { Posts } from '../lib/collections'

Router.configure({
	noRoutesTemplate: true
});

Router.configure({
	layoutTemplate: 'baseLayout'
});

Router.route('/', {
	name: 'home',
	data: {
		posts() {
			return Posts.find();
		}
	}
});