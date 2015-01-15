var appTodoList = appTodoList || {};

// create a list item
appTodoList.listItem = function( listType, task, description, status ) {

  this.listType = listType;
  this.task = task;
  this.description = description;
  if ( status === null || status === "") {
    this.status = "open";
  } else {
    this.status = status;
  }
}
