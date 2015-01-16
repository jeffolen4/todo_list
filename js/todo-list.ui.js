$(document).ready(function() {

  // define local variable for global class
  var listItem = appTodoList.listItem;

  // define variable for commonly used jQuery objects
  var listType = "default" //$("#listtype");
  var task = $("#task");
  var desc = $("#desc");
  var status = $("#status");

  var inputForm = $("form");
  //console.log("running document.ready.")

  inputForm.submit( function (e) {
    //console.log("captured submit event.")
    e.preventDefault();
    var newTask = new listItem( listType, task.val(), desc.val(), status.val() );

    $("#task-item-line").append("<p class=\"taskitem\" >" + newTask.task + "</p>");
    $("p.taskitem").last().click( function () {
       $(".taskname").text(newTask.task);
       $(".taskdesc").text(newTask.taskDesc);
       $(".taskstatus").text(newTask.taskStatus);
     });

  });

});
