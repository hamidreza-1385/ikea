import TaskItem from "./TaskItem";
import { useTasks } from "../../../data/dashbord/TaskContext";

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <ul className="mt-4 space-y-2">
      {tasks.length === 0 && <p className="text-gray-500 text-center">هنوز هیچ کاری اضافه نشده است!</p>}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
//