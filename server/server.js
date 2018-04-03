import { Posts } from '../lib/collections';

Posts.allow({
	'insert': function() {
		return true;
	},
	'download': function() {
		return true;
	}
});