import { Task } from "../models/Task";
import PriorityFlag from "./PriorityFlag";
import TaskItemRemove from "./TaskItemRemove";

interface TaskItemProps {
  task: Task;
  onChecked: (taskId: Task["id"]) => void;
  onRemove: (taskId: Task["id"]) => void;
}

const TaskItem = (props: TaskItemProps) => {
  const handleRemove = () => {
    props.onRemove(props.task.id);
  };

  const handleCheckbox = () => {
    props.onChecked(props.task.id);
  };

  return (
    <li className="inline-flex items-center gap-2 border-b border-gray-300 p-4">
      <input
        type="checkbox"
        name="check"
        className="mr-2 rounded-full p-2"
        onChange={handleCheckbox}
        checked={props.task.isDone}
      />

      <div
        className={`${props.task.isDone ? "opacity-35" : "opacity-100"} transition`}
      >
        <h2 className="text-gray-900">{props.task.name}</h2>
        <p className="text-sm text-gray-500">{props.task.description}</p>
      </div>
      <div className="ml-auto flex gap-4">
        <PriorityFlag value={props.task.priority} />
        <TaskItemRemove onClick={handleRemove} />
      </div>
    </li>
  );
};

export default TaskItem;
