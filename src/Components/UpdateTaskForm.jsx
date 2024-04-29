import React from "react";

const UpdateTaskForm = ({UpdateData,ChangeTask,updateTask,CancelUpdate}) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <input
            value={UpdateData && UpdateData.title}
            onChange={(e) => ChangeTask(e)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button
            type="button"
            onClick={updateTask}
            className="btn btn-success mr-20"
          >
            Update
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={CancelUpdate}
          >
            Cancel
          </button>
        </div>
      </div>
      <br />
    </div>
  );
};

export default UpdateTaskForm;
