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