import { TaskInfo } from './TaskInfo'
import { TaskList } from './TaskList.tsx'
import type { ITask } from '../types/ITask.ts'
import styles from './Tasks.module.css'

interface TasksProps {
  tasks: ITask[];
  onDeleteTask: (taskId: string) => void;
  onToggleCompletion: (taskId: string) => void;
}

export function Tasks({ tasks, onDeleteTask, onToggleCompletion }: TasksProps) {

  return (
    <div className={styles.tasks}>
      <TaskInfo tasks={tasks} />
      <TaskList 
        tasks={tasks} 
        onDeleteTask={onDeleteTask}
        onToggleCompletion={onToggleCompletion}
      />
    </div>
  )
}