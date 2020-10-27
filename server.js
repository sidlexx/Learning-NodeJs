import express from 'express' 
import bodyParser  from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import  phone from './Routes/phone.js'
const app = express();
const PORT = 4000;


app.use(cors());
app.use(bodyParser.json());
// mongoose gets to connect on this port 
mongoose.connect('mongodb://127.0.0.1:27017/phones', { useNewUrlParser: true });// to avoid warning for useNreUrl parset

//establishing the connection in the following
const connection = mongoose.connection;

connection.once('open', function() { // for establishing connection 
    console.log("MongoDB database connection established successfully");
})

// to use for sending data in json
app.use(express.json())


app.use('/phone',phone)



app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});