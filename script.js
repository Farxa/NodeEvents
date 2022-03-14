// signal that indicates that something has happened in our app
// for example everytime the HTTP receives a request on the port, it raises an event: New Request

const EventEmitter = require('events');
const { emit } = require('process');

// EventEmitter is a class (not a value nor a function)
// a class is container for properties a methods 

const emitter = new EventEmitter();
// emitter is an object and it has bunch of methods
// like eg. emitter.emit()

emit() // is a method that signals that an event has happened
// as an argument to emit('name of the Event') we pass the name of the event


// we need to register a listener for an event to be raised

// we ❗register a listener like this:
emitter.on('nameOfEvent', () => {
    // logic I want excuted when the event is raised
}) 
// alternative to on() we can use emitter.addListener



// this is how we ❗raise an event:
emitter.emit('nameOfEvent');
