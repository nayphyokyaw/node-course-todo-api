//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	//deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat dinner'}).then((result) => {
	// 	console.log(result);
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat dinner'}).then((result) => {
	// 	console.log(result);
	// });

	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete({conpleted: false}).then((result) => {
	// 	console.log(result);
	// });

	//db.collection('Users').deleteMany({name: 'Kyawsithu'});

	db.collection('Users').findOneAndDelete({
		_id: new ObjectID('594a860e4a6a6809e821450f')
	}).then((result) => {
		console.log(JSON.stringify(result, undefined, 2));
	});
	//db.close();
});
