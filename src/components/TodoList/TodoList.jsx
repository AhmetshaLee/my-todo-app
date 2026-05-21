import { useContext } from "react"
import TodoItem from "../TodoItem/TodoItem"
import { TasksContext } from "../../context/TasksContext"

const TodoList = (props) => {
  const { styles } = props

  const {
    visibleTasks,
    isFiltered,
    deleteTask,
    toggleTaskComplete,
    firstIncompleteTaskId,
    firstIncompleteTaskRef,
  } = useContext(TasksContext)

  if (!visibleTasks.length) {
    return (
      <div className={styles.emptyMessage}>
        {isFiltered ? "Задачи не найдены" : "Задач пока нет"}
      </div>
    )
  }

  return (
    <ul className={styles.list}>
      {visibleTasks.map((task) => (
        <TodoItem
          className={styles.item}
          key={task.id}
          task={task}
          onDelete={deleteTask}
          onToggle={toggleTaskComplete}
          ref={
            task.id === firstIncompleteTaskId ? firstIncompleteTaskRef : null
          }
        />
      ))}
    </ul>
  )
}

export default TodoList
