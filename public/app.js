//////    Functionalities   ///////

$(document).ready(function(){
    $('#submit').on('click', function(){
       var newTask = {
           task :  $('#newTask').val()
       }
       $.post('/addTask', newTask, function(data){
           $('#newTask').val('');
            populateList(data);
       });
    });

});

function deleteEventListener() {
    $('.delete').on('click', function(){
      var deleteThisId = {
        id:  $(this).attr('data-index')
      }
      
      $.post('/deletetask', deleteThisId, function(response){
         populateList(response);
      });

    });
}


function populateList (data) {
    $('#todolist').empty();
    data.forEach((e , index)  => {
        var listItem = $('<li>');
        var textDiv = $('<div>');
        var button = $('<button>');
        button.addClass('delete');
        button.attr('data-index', index );
        button.text('x');
        textDiv.text(e.task);
        textDiv.addClass('textDiv');
        listItem.append(textDiv);
        listItem.append(button);
        $('#todolist').append(listItem);

    });
    deleteEventListener();
}