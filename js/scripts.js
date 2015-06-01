$(document).ready(function() {
  $("#add-lists").click(function() {
    $("#new-lists").append('<div class="new-list">' +
    '<div class="form-group">' + '<label for="new-task">Task</label>' +
    '<input type="text" class="form-control new-task">' + '</div>' + '</div>'
   );
  });

  $("form#new-lists").submit(function(event){

    event.preventDefault();
    var inputtedList = $("input#new-list").val();
    var inputtedTask = $("input.new-task").val();

    var newList = {list: inputtedList, tasks: []};


  $(".new-list").each(function(){
      var inputtedTask = $(this).find("input.new-task").val();

      var newTask = {task: inputtedTask};

      newList.tasks.push(newTask);
    });

  $("ul#list-name").append("<li><span class='list-li'>" + newList.list +"</span></li>");

  $(".list-li").last().click(function() {
    $(".hidden-list").show();
    $(".name").text(newList.list);
    $("ul#kewl-task").text("");
      newList.tasks.forEach(function(task) {
        $("ul#kewl-task").append("<li>" + task.task + "</li>");
      });
  });

    $("input#new-list").val("");
    $("input.new-task").val("");
  });
});
