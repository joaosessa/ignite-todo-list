import { Task } from '../App';
import styles from './TaskList.module.css';
import { ReactComponent as Check } from '../assets/check.svg';
import { ReactComponent as Clipboard } from '../assets/clipboard.svg';
import { ReactComponent as Trash } from '../assets/trash.svg';

interface ITaskListProps {
    tasks: Task[];
    updateStatus: (index: number) => void;
    deleteTask: (index: number) => void;
}


export function TaskList({ tasks, updateStatus, deleteTask }: ITaskListProps) {
    return (
        <div className={styles.container}>
            {
                tasks.length == 0
                    ? <div className={styles.emptyList}>
                        <Clipboard />

                        <div>
                            <b>Você ainda não tem tarefas cadastradas</b>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    </div>
                    : tasks.map((task, index) =>
                        <div key={index} className={styles.task}>
                            <button
                                onClick={() => updateStatus(index)}
                                className={task.isComplete ? styles.completeButton : styles.incompleteButton}
                            >
                                <Check />
                            </button>

                            <span className={task.isComplete ? styles.completeTask : styles.incompleteTask}>
                                {task.text}
                            </span>

                            <button
                                onClick={() => deleteTask(index)}
                                className={styles.deleteButton}
                            >
                                <Trash />
                            </button>
                        </div>
                    )
            }

        </div>
    )
}