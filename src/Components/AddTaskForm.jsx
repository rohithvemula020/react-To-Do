import React from "react";

const AddTaskForm = ({newTask,setNewTask,AddTask}) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <input
            className="form-control form-control-lg"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="col-auto" >
          <button onClick={AddTask} type="button" className="btn btn-success">
            Add Task
          </button>
        </div>
      </div>
      <br />
    </div>
  );
};

export default AddTaskForm;
