$(document).ready(function() {

  // define local variable for global class
  var listItem = appTodoList.listItem;

  // define variable for commonly used jQuery objects
  var listType = "default" //$("#listtype");
  var task = $("#task");
  var desc = $("#desc");
  var status = $("#status");

  var currentList = "default-list";


  var currentItem;

  $(".alllists").hide();
  $("#" + currentList).show();

  // dropdown box to select the to-do list to work with
  var selectType = $("#selectlist");

  // button to add new list type
  var addType = $("#addtype");

  // button to close/delete a list item
  var closeItem = $("#closeitem");

  // input form for adding new items
  var inputForm = $("form");

  function clearDetails () {
    $(".taskname").text("");
    $(".taskdesc").text("");
    $(".taskstatus").text("");
  }

  // process the input form
  inputForm.submit( function (e) {
    e.preventDefault();
    var newTask = new listItem( currentList, task.val(), desc.val(), status.val() );
    $("#task").val("");
    $("#desc").val("");
    $("#status").val("");

    $("#" + currentList).append("<p class=\"taskitem\" >" + newTask.task + "</p>");
    $(".taskitem").last().click( function () {
       currentItem = $(this);
       $(".taskname").text(newTask.task);
       $(".taskdesc").text(newTask.taskDesc);
       $(".taskstatus").text(newTask.taskStatus);
     });

  });


  // process changing the list type
  selectType.change( function () {
    $(".alllists").hide();
    currentList = selectType.val();
    $("#" + currentList).show();
    clearDetails();
  });

  // process close/delete item
  closeItem.click( function () {
    clearDetails();
    if ( !(currentItem) ) {
      return false;
    } else {
      currentItem.remove();
    }
  })

});
