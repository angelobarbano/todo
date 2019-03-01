const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
    if(err){
        return console.log('Nah dude');
    }
    console.log('Totally connected bruh!');

    db.collection('Todos').find().toArray().then((docs) => {
       console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('cant find that doc man',err);
    });
    
    db.collection('Todos').find({completed: false}).count().then((count) =>{
        console.log(`${count}`)}, (err) =>{
            console.log(err);
        });
    //db.close();
});

