import { MOCK_TASKS } from "../constants/mockTasks"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
  return (
    <div className='todo'>
      <h1 className='todo__title'>To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo />
      <TodoList tasks={MOCK_TASKS} />
    </div>
  )
}

export default Todo
