import { Task } from "../models/Task";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onSort: (sortBy: string) => void;
  onChecked: (taskId: Task["id"]) => void;
  onRemove: (taskId: Task["id"]) => void;
}

const TaskList = (props: TaskListProps) => {
  const handleSortingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onSort(e.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-300">
        <h1 className="text-xl font-bold">Tasks</h1>
        <div>
          <label htmlFor="sort">Sort by:</label>
          <select
            name="sort"
            onChange={handleSortingChange}
            className="border-none font-bold"
          >
            <option value="oldest">Oldest first</option>
            <option value="newest">Newest first</option>
            <option value="priority">Priority</option>
          </select>
        </div>
      </div>

      <ul className="flex flex-col">
        {props.tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onRemove={props.onRemove}
            onChecked={props.onChecked}
          />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
