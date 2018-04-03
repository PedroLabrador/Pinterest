import { Mongo } from 'meteor/mongo';

var imageStore = new FS.Store.GridFS('images',{
	// beforeWrite: function (fileObj) {
	// 	return {
	// 		extension: 'png',
	// 		level: 'level-2'
	// 	};
	// },
	maxTries: 3
});

export const Posts = new FS.Collection('posts', {
	stores: [imageStore]
});