import styles from './Task.module.css'
import { CheckCircle, Circle, Trash } from 'phosphor-react'

interface TaskProps {
    title: string;
    id: string;
    isCompleted: boolean;
    onDelete: () => void;
    onToggleCompletion: () => void;
}

export function Task({ title, isCompleted, onDelete, onToggleCompletion }: TaskProps) {

    return (
        <div className = { styles.task } >
            
            {isCompleted ? (
            <div className = { styles.wrapper }>
                <CheckCircle
                onClick={onToggleCompletion}
                className={styles.checkIcon}
                size={24} 
                weight="fill"
                fill='var(--purple-dark)'
                />
                
                <p className={styles.taskCompleted}>{title}</p>
            
            </div>
            ) : (
            <div className={styles.wrapper}>
                <Circle 
                className={styles.circle}
                onClick={onToggleCompletion}
                size={24} 
                weight="light"
                color='var(--blue)' 
                /> 
            
                <p>{title}</p>
            </div>
            )}
                <Trash 
                className={styles.trash}
                size={18}
                weight='thin'
                onClick={onDelete}
                /> 

        </div>)
    }