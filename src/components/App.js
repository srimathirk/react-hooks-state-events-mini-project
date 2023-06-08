import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [task, setTask] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const taskItems = task.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  });
  function handleDeleteClick(deleteText) {
    setTask(task.filter((item) => item.text !== deleteText));
  }

  
  function handleFormSubmit(newTask){
    setTask([...task,newTask])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategory={setSelectedCategory}  selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onFormSubmit={handleFormSubmit}/>
      <TaskList tasks={taskItems} handleDeleteClick={handleDeleteClick} />
    </div>
  );
}

export default App;
