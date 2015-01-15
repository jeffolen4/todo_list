$(document).ready(function() {

  // define local variable for global class
  var listItem = appTodoList.listItem;

  // define variable for commonly used jQuery objects
  var listType = "default" //$("#listtype");
  var task = $("#task");
  var desc = $("#description");
  var status = $("#status");

  var inputForm = $("form");
  //console.log("running document.ready.")


  inputForm.submit( function (e) {
    //console.log("captured submit event.")
    e.preventDefault();
    var newTask = new listItem( listType, task.val(), desc.val(), status.val() );

    $("ul").append("<li>Task: " + newTask.task + " Description: " + newTask.description + " status: " + newTask.status + "</li>";
    $("li").last.click( function () {
      newTask.status = "closed";
    })
    
  });

});
