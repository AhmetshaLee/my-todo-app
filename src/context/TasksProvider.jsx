import useIncompleteTaskScroll from "../hooks/useIncompleteTaskScroll"
import useTasks from "../hooks/useTasks"
import { TasksContext } from "./TasksContext"

export const TasksProvider = (props) => {
  const { children } = props

  const {
    tasks,
    visibleTasks,
    isFiltered,
    searchQuery,
    deleteAllTasks,
    deleteTask,
    toggleTaskComplete,
    addTask,
    setSearchQuery,
  } = useTasks()

  const { firstIncompleteTaskId, firstIncompleteTaskRef } =
    useIncompleteTaskScroll(visibleTasks)

  return (
    <TasksContext.Provider
      value={{
        tasks,
        visibleTasks,
        isFiltered,
        firstIncompleteTaskId,
        firstIncompleteTaskRef,
        searchQuery,
        deleteAllTasks,
        deleteTask,
        toggleTaskComplete,
        addTask,
        setSearchQuery,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
