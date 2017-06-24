//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('594ce18dca898b24844fac3c')
	}, {
		$set: {
			 completed: true
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('594ce2c7ab97ae1464a264da')
	}, {
		$set: {
			 name: 'Kyawsithu'
		},
		$inc: {
			age: 5
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	//db.close();
});
