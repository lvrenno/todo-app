import styles from './EmptyList.module.css'

export function EmptyList() {
  return (
    <div className= {styles.emptyList}>
        <img src="src/assets/Clipboard.svg" alt="Icone de prancheta" />
        <div className={styles.text}>
            <b><p>Você ainda não tem tarefas cadastradas</p></b>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    </div>
  )
} 