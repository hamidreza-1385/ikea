import { useTasks } from "../../../data/dashbord/TaskContext";

const TaskItem = ({ task }) => {
  const { toggleTask, removeTask } = useTasks();

  return (
    <li className="d-flex justify-content-between items-center bg-white p-2 m-2 rounded shadow">
      <div className="flex items-center">
        <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} className="mr-2" />
        <span className={task.completed ? "line-through text-gray-500 decoration-vip" : ""}> {task.text} </span>
      </div>
      <button onClick={() => removeTask(task.id)} className="bg-red-500 text-white px-2 py-1 rounded">حذف</button>
    </li>
  );
};

export default TaskItem;