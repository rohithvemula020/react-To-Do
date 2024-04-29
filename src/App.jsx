import React, { useState} from "react";
import AddTaskFrom from "./Components/AddTaskForm";
import UpdateTaskForm from "./Components/UpdateTaskForm";
import ToDo from "./Components/ToDoApp";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  // task stattes
  const [toDo, SetTodo] = useState([
  ]);
  // temporary states
  const [newTask, setNewTask] = useState("");
  const [UpdateData, setUpdateData] = useState("");

  // function to Add task

  const AddTask = () => {
    if(newTask){
      let num =toDo.length + 1
      let newEntry ={id:num,title:newTask,status:false}
      SetTodo([...toDo,newEntry])
      setNewTask('')
    }
  };
  // function to Delete task

  const DeleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !==id)
    SetTodo(newTasks)
  };
  // function to Mark task

  const markDone = (id) => {
    let newTask=toDo.map(task =>{
      if(task.id === id){
        return({...task,status:!task.status})
      }
      return task
    })
    SetTodo(newTask)

  };
  // function to cancel update

  const CancelUpdate = () => {
    setUpdateData('')

  };
  // function to change task
  const ChangeTask = (e) => {
    let newEntry={
      id:UpdateData.id,
      title:e.target.value,
      status:UpdateData.status ? true : false
    }
    setUpdateData(newEntry)


  };
  // function to update task
  const updateTask = () => {
    const updatedTasks = toDo.map(task => {
      if (task.id === UpdateData.id) {
        return {
          ...task,
          title: UpdateData.title,
          status: UpdateData.status
        };
      }
      return task;
    });
    SetTodo(updatedTasks);
    setUpdateData('');
  };


  
  return (
    <div className="container App">
      <h2>To Do Application</h2>
      {/* displaying tasks and messages */}
      {/* update tasks */}
      {UpdateData && UpdateData ? (
        <>
       <UpdateTaskForm
       UpdateData={UpdateData}
       ChangeTask={ChangeTask}
       updateTask={updateTask}
       CancelUpdate={CancelUpdate}
       />
      </>
      ) : (
<>
{/* add tasks */}
<AddTaskFrom 
newTask={newTask}
setNewTask={setNewTask}
AddTask={AddTask}
/>
</>
      )
    }
      

      

      {toDo && toDo.length ? "" : "No Tasks..."}
     <ToDo toDo={toDo}
     markDone={markDone}
     setUpdateData={setUpdateData}
     DeleteTask={DeleteTask} />
    </div>
  );
};

export default App;
