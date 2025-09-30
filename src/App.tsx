import { useState } from 'react';
import { Header } from './components/Header';
import { InputField } from './components/InputField';
import { Tasks } from './components/Tasks';
import type { ITask } from './types/ITask';

import styles from './App.module.css'
import './global.css';

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleCreateTask(newTask: ITask) {
    setTasks(prevTasks => [...prevTasks, newTask]);
  }

  function handleDeleteTask(taskId: string) {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }

  function handleToggleTaskCompletion(taskId: string) {
    setTasks(prevTasks => prevTasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    }));
  }

  return (
      <div className={styles.App}>
        <Header />
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <InputField onCreateTask={handleCreateTask} />
            <Tasks 
              tasks={tasks} 
              onDeleteTask={handleDeleteTask}
              onToggleCompletion={handleToggleTaskCompletion}
            />
          </div>
        </div>
      </div>
  )
}