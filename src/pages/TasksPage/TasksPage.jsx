import Todo from "../../widgets/Todo"
import { TasksProvider } from "../../context/TasksProvider"

const TasksPage = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  )
}

export default TasksPage
