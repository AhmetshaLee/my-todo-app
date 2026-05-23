import { useContext } from "react"
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm"
import SearchTaskForm from "../../components/SearchTaskForm/SearchTaskForm"
import TodoInfo from "../../features/stats/TodoInfo"
import TodoList from "../../entities/todo"
import Button from "../../components/ui/Button/Button"
import { TasksContext } from "../../entities/todo"
import styles from "./Todo.module.scss"

const Todo = () => {
  const { firstIncompleteTaskRef } = useContext(TasksContext)

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>To Do List</h1>
      <AddTaskForm styles={styles} />
      <SearchTaskForm styles={styles} />
      <TodoInfo styles={styles} />
      <Button
        onClick={() => {
          firstIncompleteTaskRef.current?.scrollIntoView({
            behavior: "smooth",
          })
        }}
      >
        Показать невыполненные задачи
      </Button>
      <TodoList styles={styles} />
    </div>
  )
}

export default Todo
