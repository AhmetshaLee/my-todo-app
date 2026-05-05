import { MOCK_TASKS } from "../constants/mockTasks"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
  const totalTasks = MOCK_TASKS.length
  const doneTasks = MOCK_TASKS.filter(({ isDone }) => isDone).length

  const deleteAllTasks = () => {
    console.log("delete all")
  }

  const deleteTask = (taskId) => {
    console.log(taskId)
  }

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(taskId, isDone)
  }

  const filterTasks = (query) => {
    console.log(query)
  }

  const addTask = () => {
    console.log("add")
  }

  return (
    <div className='todo'>
      <h1 className='todo__title'>To Do List</h1>
      <AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={totalTasks}
        done={doneTasks}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={MOCK_TASKS}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  )
}

export default Todo
