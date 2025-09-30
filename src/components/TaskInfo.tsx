import styles from './TaskInfo.module.css'
import type { ITask } from '../types/ITask'

interface TaskInfoProps {
  tasks: ITask[];
}

export function TaskInfo({ tasks }: TaskInfoProps) {
  const completedTasks = tasks.filter(task => task.isCompleted).length;
  
  return (
    <div className={styles.taskInfo}>
        <div className={styles.createdTasks}>
            Tarefas criadas
            <div className={styles.counter}>
                {tasks.length}
            </div>
        </div>
        <div className={styles.doneTasks}>
            Concluídas
            <div className={styles.counter}>
                {completedTasks} de {tasks.length}
            </div>
        </div>
    </div>
  )
}