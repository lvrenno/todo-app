import { PlusCircle } from 'phosphor-react'
import styles from './InputField.module.css'
import { useState, type ChangeEvent, type FormEvent, type InvalidEvent} from 'react'
import type { ITask } from '../types/ITask'

interface InputFieldProps {
    onCreateTask: (task: ITask) => void;
}

export function InputField({ onCreateTask }: InputFieldProps) {
  const [newTaskText, setNewTaskText] = useState('');
  const isNewTaskEmpty = newTaskText.length === 0;

  function handleCreateNewTask(event: FormEvent){
        event.preventDefault();
        const newTask: ITask = {
            id: crypto.randomUUID(),
            title: newTaskText,
            isCompleted: false
        };
        onCreateTask(newTask);
        setNewTaskText('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setNewTaskText(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }
  
  return (
    <div className = { styles.inputField }>
        <div className = { styles.container }>
            <input onSubmit = { handleCreateNewTask } 
                  className = {styles.inputBox} 
                  type = 'text'
                  name = 'task'
                  placeholder = 'Crie uma nova tarefa'
                  value = {newTaskText}
                  onChange = {handleNewTaskChange}
                  onInvalid = {handleNewTaskInvalid}
                  required
              />

                <button onClick = {handleCreateNewTask} type = 'submit' disabled = {isNewTaskEmpty} className = { styles.button }> 
                    Criar
                    <PlusCircle size={20} weight = {'bold'} />
                </button>
            
        </div>
    </div>
  )
}