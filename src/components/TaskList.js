import React from "react";
import Task from "./Task";

function TaskList({tasks,handleDeleteClick}) {
  
  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}

      {tasks.map((task,index) => (<Task key={index} text={task.text} category={task.category} handleDeleteClick={handleDeleteClick}/>))}
    </div>
  );
}

export default TaskList;
