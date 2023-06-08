import React, { useState } from "react";

import { CATEGORIES } from "../data";
function NewTaskForm({ onFormSubmit }) {
  const [newText, setNewText] = useState("");
  const [addCategory, setAddCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onFormSubmit({ text: newText, category: addCategory });
  }
  function handleTextChange(e) {
    setNewText(e.target.value);
  }
  function handleCategoryChange(e) {
    setAddCategory(e.target.value);
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={newText}
          onChange={handleTextChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={addCategory}
          onChange={handleCategoryChange}
        >
          {/* render <option> elements for each category here */}
          {CATEGORIES.filter((category) => category !== "All").map(
            (category) => (
              <option key={category}>{category}</option>
            )
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
