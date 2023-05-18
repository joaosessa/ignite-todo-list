import styles from './TaskInfo.module.css';

interface ITaskInfoProps {
    created: number;
    completed: number;
}

export function TaskInfo({ created, completed }: ITaskInfoProps) {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <span className={styles.created}>Tarefas criadas</span>
                <span className={styles.counter}>{created}</span>
            </div>

            <div className={styles.box}>
                <span className={styles.completed}>Concluídas</span>
                <span className={styles.counter}>{completed} de {created}</span>
            </div>
        </div>
    )
}