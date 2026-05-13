import useTasks from "../hooks/useTasks"
import { TasksContext } from "./TasksContext"

export const TasksProvider = (props) => {
  const { children } = props

  const {
    tasks,
    visibleTasks,
    isFiltered,
    firstIncompleteTaskId,
    firstIncompleteTaskRef,
    newTaskTitle,
    newTaskInputRef,
    searchQuery,
    deleteAllTasks,
    deleteTask,
    toggleTaskComplete,
    addTask,
    setNewTaskTitle,
    setSearchQuery,
  } = useTasks()

  return (
    <TasksContext.Provider
      value={{
        tasks,
        visibleTasks,
        isFiltered,
        firstIncompleteTaskId,
        firstIncompleteTaskRef,
        newTaskTitle,
        newTaskInputRef,
        searchQuery,
        deleteAllTasks,
        deleteTask,
        toggleTaskComplete,
        addTask,
        setNewTaskTitle,
        setSearchQuery,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
