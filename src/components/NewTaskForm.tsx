import { useState } from 'react';
import { ReactComponent as Plus } from '../assets/plus.svg';
import styles from './NewTaskForm.module.css';

interface INewTaskFormProps {
    onSubmit: (text: string) => void;
}

export function NewTaskForm({ onSubmit }: INewTaskFormProps) {
    const [taskText, setTaskText] = useState('');

    function handleCreateNewTask() {
        event?.preventDefault();
        onSubmit(taskText);
        setTaskText('');
    }

    return (
        <form onSubmit={handleCreateNewTask} className={styles.container}>
            <input
                type='text'
                onChange={e => setTaskText(e.target.value)}
                value={taskText}
                placeholder='Adicione uma nova tarefa'
            />

            <button disabled={!taskText} type='submit'>
                <span>Criar</span>

                <Plus />
            </button>
        </form>
    )
}