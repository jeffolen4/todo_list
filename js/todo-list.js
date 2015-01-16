var appTodoList = appTodoList || {};

// create a list item
appTodoList.listItem = function( listType, task, desc, status ) {

  this.listType = listType;
  this.task = task;
  this.taskDesc = desc;
  if ( status === null || status === "") {
    this.taskStatus = "open";
  } else {
    this.taskStatus = status;
  }
}
