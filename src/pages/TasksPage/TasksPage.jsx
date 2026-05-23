import Todo from "../../components/Todo/Todo"
import { TasksProvider } from "../../context/TasksProvider"

const TasksPage = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  )
}

export default TasksPage
