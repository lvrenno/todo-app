import { EmptyList } from './EmptyList.tsx'
import type { ITask } from '../types/ITask.ts'
import styles from './TaskList.module.css'
import { Task } from './Task.tsx';

interface TaskListProps {
    tasks: ITask[];
    onDeleteTask: (taskId: string) => void;
    onToggleCompletion: (taskId: string) => void;
}

export function TaskList({ tasks, onDeleteTask, onToggleCompletion }: TaskListProps) {
  return (
    <div className={styles.taskList}>
      {tasks.length === 0 && (
        <EmptyList />
      )}
        {tasks.map((task) => (
            <Task 
                id={task.id}
                title={task.title}
                isCompleted={task.isCompleted}
                onDelete={() => onDeleteTask(task.id)}
                onToggleCompletion={() => onToggleCompletion(task.id)}
            />
        ))}
    </div>
  )
}
