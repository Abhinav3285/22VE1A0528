var express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();
app.use(cors());
app.use(express.json()); // to read incoming data in json format

mongoose.connect('mongodb://127.0.0.1:27017/testdb')
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB error: ", err));

app.get('/',(req,res)=>{
    res.send("Welcome to Express")
});

app.post('/shorturls',(req,res)=>{
    console.log(res.body);
    res.json({ data: res.body});
});

const port=5001;
app.listen(port,()=>{
    console.log(`server is running in http://localhost:${port}`);
});
