import { useState } from 'react';
import { Header } from './components/Header';
import { NewTaskForm } from './components/NewTaskForm';
import { TaskInfo } from './components/TaskInfo';
import { TaskList } from './components/TaskList';

import './global.css';

export interface Task {
  text: string;
  isComplete: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const created = tasks.length;
  const completed = tasks.filter(task => task.isComplete).length;

  function handleCreateNewTask(text: string) {
    const newTask = {
      text: text,
      isComplete: false,
    } as Task;

    setTasks(state => [...state, newTask]);
  }

  function updateStatus(index: number) {
    const task = { ...tasks[index] };
    const newTasks = [...tasks];

    task.isComplete = !task.isComplete;
    newTasks[index] = task;

    setTasks(newTasks);
  }

  function deleteTask(index: number) {
    const newTasks = [...tasks];

    newTasks.splice(index, 1);

    setTasks(newTasks);
  }

  return (
    <>
      <Header />
      <NewTaskForm onSubmit={handleCreateNewTask} />
      <TaskInfo created={created} completed={completed} />
      <TaskList tasks={tasks} updateStatus={updateStatus} deleteTask={deleteTask} />
    </>
  )
}
