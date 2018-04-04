import { Posts } from '../../lib/collections';

Template.formPost.events({
	'change .myFileInput': function(event, template) {
		// FS.Utility.eachFile(event, function() {
			var fsFile = new FS.File(event.target.files[0]);
			var level = '';

			var file = event.target.files[0];
		    var fr = new FileReader;
		    fr.onload = function() {
		        var img = new Image;
		        img.onload = function() {
		        	var height = parseInt(img.height);
		            if (height < 600) 
		            	level += 'level-1';
		            else if (height > 600 && height <= 1300)
		            	level += 'level-2';
		            else
		            	level += 'level-3';
		        };
		        img.src = fr.result;
		    };
		    fr.readAsDataURL(file);

			fsFile.level = level;
			// fsFile.owner = Meteor.userId();
			Posts.insert(fsFile, function(err, fileObj) {
				if (err) {
				 	throw err;
				} 
			// else {
			// 		// var userId = Meteor.userId();
			// 		// var imagesURL = {
			// 		// 	'profile.image': '/cfs/files/posts/' + fileObj._id
			// 		// };
			// 		// Meteor.users.update(userId, {$set: imagesURL});
			// 	}
			});
		// });
		return false;
	}
});