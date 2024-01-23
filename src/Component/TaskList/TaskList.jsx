import React from "react";

const TaskList = () =>(
    <header className="TaskList">
      <div>
        <ul>
          <li>
            <input type='checkbox'></input>
            <h2>Build this App</h2>
            <button>Delete</button>
          </li>
        </ul>
      </div>
  </header>
);

export default TaskList;