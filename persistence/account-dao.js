require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID
const uri =  process.env.DB_URI

function findAll(getResultsFn) {
    MongoClient.connect(uri, function(err, client) {
        if(err) {
             console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
        }
        const collection = client.db("node-account-api").collection("accounts");
        collection.find({}).toArray(getResultsFn);
        client.close();
     });
}

function createAccount(payload, getResponseFn) {
    MongoClient.connect(uri, function(err, client) {
        if(err) {
             console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
        }

        const collection = client.db("node-account-api").collection("accounts");
        collection.insertOne(payload, getResponseFn);
        client.close();
     });
}

function findById(id, getResultsFn) {

    console.log('findById() -> id: ', id)

    MongoClient.connect(uri, function(err, client) {
        if(err) {
             console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
        }
        const collection = client.db("node-account-api").collection("accounts");
        collection.findOne({ "_id": ObjectId(id) }, getResultsFn);
        client.close();
     });
}

function update(id, handleResultsFn) {
    MongoClient.connect(uri, function(err, client) {
        if(err) {
             console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
        }
        const collection = client.db("node-account-api").collection("accounts");
        collection.findOne({ "_id" : ObjectId(id._id) }, handleResultsFn);
        collection.updateOne({ "_id" : ObjectId(id._id) }, handleResultsFn)
        client.close();
     });
}

module.exports = {
    findAll,
    createAccount,
    findById,
    update
}