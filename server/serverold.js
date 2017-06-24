var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoAPP');

var Todo = mongoose.model('Toodo', {
	text: {
		type: String,
		required: true, //validator fail error show
		minlength: 1,   //
		trin: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null   
	}
});

// var newTodo = new Todo({
// 	text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
// 	console.log('Save todo', doc);
// }, (e) => {
// 	console.log('Unable to save todo');
// });

var otherTodo = new Todo({
// 	text: 'Feed the cat',
// 	completed: true,
// 	completedAt: 123

	text: '  Edit this video  '
});
otherTodo.save().then((doc) => {
	console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
	console.log('Unable to save', e);
});
