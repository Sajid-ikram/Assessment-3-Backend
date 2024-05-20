const express = require('express');
const bodyParser = require('body-parser');
const flights = require('./routes/flight_route');
const cors = require('cors');

const app = express();
app.use(cors());

const server = require("http").createServer(app);


require('./config/db')


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use("/flight",flights);


app.get("/", (req, res)=>{
    res.send("Welcome Home");
})


// rout not found
app.use((req, res, next)=>{
    res.status(404).json({message : "Route not found"});
})

// server error
app.use((err, req, res, next)=>{
    res.status(500).json({message : "Something  broke"});
})


module.exports = server;  