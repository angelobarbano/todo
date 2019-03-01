const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
    if(err){
        return console.log('Nah dude');
    }
    console.log('Totally connected bruh!');

    db.collection('Todos').insertOne({
        text:'walk the dog',
        completed: false
    }, (err,result) =>{
        if(err){
            return console.log('Cmon man theres errors up in here!');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    /*db.collection('Users').insertOne({
        name: 'Angelo',
        age: '36',
        location: 'new york'
    }, (err,result) =>{
        if(err){
            return console.log('nope uh uh nah!', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });*/
    db.close();
});

