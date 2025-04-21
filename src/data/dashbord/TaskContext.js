
import { createContext, useState, useContext } from "react";

// ایجاد کانتکست
const TaskContext = createContext();

// تابع Provider برای مدیریت tasks
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // افزودن وظیفه جدید
  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  // حذف وظیفه
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // تغییر وضعیت انجام شدن وظیفه
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
};

// هوک سفارشی برای استفاده از TaskContext
export const useTasks = () => useContext(TaskContext);
//