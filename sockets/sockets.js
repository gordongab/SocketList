const db = require("../models");

module.exports = function(io) {
  io.on('connection', function(socket) {
      socket.on('send-item', function(data) {
      db.Todo.create(data)
      .then(function(data){
      io.emit('display-item', data);  
        })
            })
                });
                    



    socket.on("complete-task", function(data){
        db.Todo.findByIdAndUpdate({_id: data},{$set: { done: true }})
          .then(function (result) {
           io.emit("edit-todo", result);
                   })
            .catch(function (err) {
            console.log(err.message);
                                       });
                                   })
                     
                     
                     
    socket.on("delete-task", function(data){
       db.Todo.findByIdAndDelete({_id: data})
          .then(function (result) {
          io.emit("delete-todo", result);
                })
          .catch(function (err) {
          console.log(err.message);
                                     });
                                 })     
                                 
                     
    db.Todo.find({}, function(err, data){
       if(err) throw err;
       socket.emit("message", data);
                             })   
                                        
                                   };
                     