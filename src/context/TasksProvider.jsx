import { useMemo } from "react"
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

  const contextValue = useMemo(
    () => ({
      tasks,
      visibleTasks,
      isFiltered,
      searchQuery,
      firstIncompleteTaskId,
      firstIncompleteTaskRef,
      deleteAllTasks,
      deleteTask,
      toggleTaskComplete,
      addTask,
      setSearchQuery,
    }),
    [
      tasks,
      visibleTasks,
      isFiltered,
      searchQuery,
      firstIncompleteTaskId,
      firstIncompleteTaskRef,
      deleteAllTasks,
      deleteTask,
      toggleTaskComplete,
      addTask,
      setSearchQuery,
    ],
  )

  return (
    <TasksContext.Provider value={contextValue}>
      {children}
    </TasksContext.Provider>
  )
}
