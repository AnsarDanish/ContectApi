const mongoose =require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.Mongo_url)
//mongoose.connect("mongodb+srv://root:root123@cluster0.9hcblhu.mongodb.net/test")
.then(()=>{
    console.log("Connected to database");
})
.catch((error)=>{
    console.log("Error to Connecting with database "+error);
})

/*
mongoose.connect('mongodb://localhost/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
*/


/*
// Replace <connection_string> with your actual MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/mydb';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');

});
*/



 