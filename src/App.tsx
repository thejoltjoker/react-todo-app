import { useEffect, useState } from "react";
import { Task } from "./models/Task";
import TaskList from "./components/TaskList";
import CreateTask from "./components/CreateTask";

function App() {
  const localStorageKey = "tasks";
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(
    JSON.parse(
      localStorage.getItem(localStorageKey) ??
        `[{"id":"kvd75f","name":"Example task","description":"Remove this and start creating your own tasks by clicking \\"+ Add task\\" below.","priority":3,"isDone":false,"dateAdded":"2024-01-22T17:29:50.163Z"}]`,
    ),
  );

  const sortTasks = (sortBy: string) => {
    if (sortBy === "oldest") {
      setTasks([...tasks.sort((a, b) => (a.dateAdded > b.dateAdded ? 1 : -1))]);
    } else if (sortBy === "newest") {
      setTasks([...tasks.sort((a, b) => (a.dateAdded < b.dateAdded ? 1 : -1))]);
    } else if (sortBy === "priority") {
      setTasks([...tasks.sort((a, b) => (a.priority < b.priority ? 1 : -1))]);
    }
  };

  const toggleTaskIsDone = (taskId: Task["id"]) => {
    setTasks([
      ...tasks.map((task) => {
        if (task.id === taskId) {
          task.isDone = !task.isDone;
          return task;
        }
        return task;
      }),
    ]);
  };

  const addTask = (task: Task) => {
    console.log(task);
    setTasks([...tasks, task]);
  };

  const removeTask = (taskId: Task["id"]) => {
    setTasks([...tasks.filter((task) => task.id != taskId)]);
  };

  const toggleShowCreateTask = () => {
    setShowCreateTask(!showCreateTask);
  };

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="mx-auto max-w-screen-md p-4">
      <TaskList
        tasks={tasks}
        onRemove={removeTask}
        onChecked={toggleTaskIsDone}
        onSort={sortTasks}
      />

      <div className="relative">
        <div
          className={`absolute left-0 top-0 cursor-pointer text-blue-600 transition hover:text-blue-900 ${showCreateTask ? "opacity-0" : "opacity-100"} z-10 w-full py-2`}
          onClick={toggleShowCreateTask}
        >
          + Add task
        </div>

        <div
          className={`absolute left-0 top-4 h-fit w-full transition ${showCreateTask ? "opacity-100" : "opacity-0"}`}
        >
          <CreateTask onSubmit={addTask} onCancel={toggleShowCreateTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
