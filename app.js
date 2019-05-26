const accounts = require('./endpoints/accounts');
const express = require('express')

const app = express()

console.log('The value of URI is:', process.env.DB_URI);

// MongoClient.connect(uri, function(err, client) {
//    if(err) {
//         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//    }
//    console.log('Connected...');
//    const collection = client.db("node-account-api").collection("accounts");
//    // perform actions on the collection object\
//    console.log(collection.findOne({}, function(err, result) {
//        if (err) {
//             console.log('error')
//        }  else {
//             console.log(result);
//        }
//     }));
//    client.close();
// });

app.use(express.json())
app.use('/node-account-api/accounts', accounts);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));