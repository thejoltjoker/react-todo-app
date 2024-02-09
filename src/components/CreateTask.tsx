import { useState } from "react";
import { Task } from "../models/Task";
import PriorityFlag from "./PriorityFlag";

interface CreateTaskProps {
  onSubmit: (task: Task) => void;
  onCancel: () => void;
}

const CreateTask = (props: CreateTaskProps) => {
  const [newTask, setNewTask] = useState(new Task("", "", 0, false));

  const clearForm = () => {
    setNewTask(new Task("", "", 0, false));
  };

  const handleCancelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    clearForm();
    props.onCancel();
  };

  const handlePriorityClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const priority = newTask.priority === 3 ? 0 : newTask.priority + 1;
    setNewTask({ ...newTask, priority: priority });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit({ ...newTask, dateAdded: new Date().toJSON() });
    clearForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col rounded-lg border border-gray-300 bg-white p-4"
    >
      <input
        type="text"
        name="name"
        className="border-none p-0 font-bold"
        value={newTask.name}
        placeholder="Task name"
        onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
      />
      <input
        type="text"
        name="description"
        className="border-none px-0"
        placeholder="Description"
        value={newTask.description}
        onChange={(e) =>
          setNewTask({ ...newTask, description: e.target.value })
        }
      />
      <div className="flex items-center justify-between">
        <button
          className={`inline-flex h-fit w-fit shrink items-center gap-1 rounded-md border border-gray-300 px-2 py-1 text-sm`}
          type="button"
          onClick={handlePriorityClick}
        >
          <PriorityFlag value={newTask.priority} />
          {newTask.priority}
        </button>
        <div>
          <button
            className="me-2 rounded-lg bg-gray-500 px-3 py-1.5 text-sm font-bold text-white transition hover:bg-gray-700"
            type="button"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button
            className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-bold text-white transition hover:bg-blue-900 disabled:bg-blue-600/50"
            type="submit"
            disabled={!newTask.name ? true : false}
          >
            Add task
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateTask;
