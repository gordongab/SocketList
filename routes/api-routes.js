module.exports = function(app) {

var tasks = [];

  ////////////////////  ROUTES    //////////////////////


  //GET route
app.get("/", function(req, res) {
  res.sendfile('/index.html');
});

// POST route to render the added task
app.post('/addtask', function (req, res) {

var newTask = req.body;
tasks.push(newTask);
res.send(tasks);

});

/* PUT command to render the added task
app.put('/edittask', function (req, res) {
res.render('./public/index.html')
}); */


// *quasi DELETE (post) route to delete tasks
// note to implement splice 

app.post('/deletetask', function (req, res) {
 var deleteThisId = req.body.id;
 tasks.splice(deleteThisId, 1);
 res.send(tasks);
});

}