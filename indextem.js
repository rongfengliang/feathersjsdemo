(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const socket = io('http://localhost:3030');

socket.emit('find', 'demo', (error, messageList) => {
    if (error) throw error
    console.log('Current messages', messageList);
});
setInterval(function(){
    socket.emit('find', 'demo', (error, messageList) => {
        if (error) throw error
        console.log('Current messages', messageList);
    });
},8000)
// Listen to new messages being created
// socket.on('demo created', message =>
//   console.log('Someone created a message', message)
// );
// socket.emit('create', 'demo', {
//   name:"dddddddd",
//   age:33333333
// }, (error, result) => {
//   if (error) throw error
//   socket.emit('find', 'demo', (error, messageList) => {
//     if (error) throw error
//     console.log('Current messages', messageList);
//   });
// });
},{}]},{},[1]);
