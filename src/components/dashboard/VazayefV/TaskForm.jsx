import { useState } from "react";
import { useTasks } from "../../../data/dashbord/TaskContext";
import ColorSlider from "../ColorSlider";


const TaskForm = () => {
  const [task, setTask] = useState("");
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask(""); // پاک کردن ورودی بعد از افزودن تسک
    }
  };
  const [style, setStyle] = useState("no-border text-end p-3 w-100")

  return (
    
    <form onSubmit={handleSubmit} className="flex gap-2">
      
      
        <div className="border p-2 rounded text-end w-100">
          <div className="d-flex justify-content-end">
          <span className=" btn border m-2" onClick={()=> setStyle("no-border text-end p-3 w-100")}>N</span>
          <span className=" btn border m-2" onClick={()=> setStyle("no-border text-end p-3 w-100 fw-bold")}>B</span>
          <span className=" btn border m-2" onClick={()=> setStyle("no-border text-end p-3 w-100 fst-italic")}>I</span>
          <span className=" btn border m-2" onClick={()=> setStyle("no-border text-end p-3 w-100 text-decoration-underline")}>U</span>
          <span className=" btn border m-2 text-danger" onClick={()=> setStyle("no-border text-end p-3 w-100 text-danger")}>red</span>
          <span className=" btn border m-2 text-primary" onClick={()=> setStyle("no-border text-end p-3 w-100 text-primary")}>blue</span>
          <span className=" btn border m-2 text-muted" onClick={()=> setStyle("no-border text-end p-3 w-100 text-muted")}>black</span>
          </div>
        
        <input type="text" className={style} placeholder="متن کار را وارد کنید..." value={task} onChange={(e) => setTask(e.target.value)} />
        </div>
        
      <ColorSlider/>
      <div className="justify-content-center d-flex pt-5"><button className="bg-primary text-white px-4 py-2 rounded">افزودن</button></div>
    </form>
  );
};

export default TaskForm;