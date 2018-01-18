const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const socketio = require('@feathersjs/socketio');
// Create a NeDB instance
const Model = new NeDB({
  filename: './data/messages.db',
  autoload: true
});

// This creates an app that is both, an Express and Feathers app
const app = express(feathers());


// Turn on JSON body parsing for REST services
app.use(express.json())
// Turn on URL-encoded body parsing for REST services
app.use(express.urlencoded({ extended: true }));

// Set up REST transport using Express
app.configure(express.rest());
app.configure(socketio());

app.use("app",{
    async get(id,params) {
        // Return an object in the form of { name, text }
        return {
            id,
            text: `You have to do ${id},${params}`
        };
    }
})
app.use("/demo",service({Model}))
// Set up an error handler that gives us nicer errors
app.use(express.errorHandler());
app.on('connection', connection => app.channel('everybody').join(connection));

// Publish all events to the `everybody` channel
app.publish(() => app.channel('everybody'));
setInterval(function(){
    app.service("demo").create({
        name:"dalodddng",
        age:33,
        version:"v1"
    });
},6000)
// Start the server on port 3030
app.listen(3030);