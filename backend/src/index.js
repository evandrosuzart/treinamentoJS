const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const cors = require('cors');
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://newUser:newPass@cluster0-67qbq.mongodb.net/test?retryWrites=true&w=majority',{
 useNewUrlParser:true,   
});

app.use((req,res,next) => {
    req.io = io;
    next();
});


app.use(cors());
app.use(require('./routes'));
app.use('/files',express.static(path.resolve(__dirname,'..','uploads','resized')));

app.listen(3333);
