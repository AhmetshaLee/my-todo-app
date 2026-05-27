import { useState, useEffect, useCallback, useMemo, useReducer } from "react"
import tasksAPI from "@/shared/api/tasksAPI"
import { tasksReducer } from "./tasksReducer"

const useTasks = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, [])
  const [searchQuery, setSearchQuery] = useState("")

  const visibleTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase()

    return clearSearchQuery.length > 0
      ? tasks.filter((task) =>
          task.title.toLowerCase().includes(clearSearchQuery),
        )
      : tasks
  }, [tasks, searchQuery])

  const isFiltered = searchQuery.trim().length > 0

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm("Вы точно хотите удалить все задачи?")

    if (isConfirmed) {
      const taskIds = tasks.map((task) => task.id)
      tasksAPI.deleteAll(taskIds).then(() => dispatch({ type: "DELETE_ALL" }))
    }
  }, [tasks])

  const deleteTask = useCallback((taskId) => {
    tasksAPI.delete(taskId).then(() => dispatch({ type: "DELETE", id: taskId }))
  }, [])

  const toggleTaskComplete = useCallback((taskId, isDone) => {
    tasksAPI
      .toggleComplete(taskId, isDone)
      .then(() => dispatch({ type: "TOGGLE_COMPLETE", id: taskId, isDone }))
  }, [])

  const addTask = useCallback((title) => {
    const newTask = {
      title,
      isDone: false,
    }

    tasksAPI
      .add(newTask)
      .then((addedTask) => dispatch({ type: "ADD", task: addedTask }))
  }, [])

  useEffect(() => {
    tasksAPI
      .getAll()
      .then((responseTasks) =>
        dispatch({ type: "SET_ALL", tasks: responseTasks }),
      )
  }, [])

  return {
    tasks,
    visibleTasks,
    isFiltered,
    searchQuery,
    deleteAllTasks,
    deleteTask,
    toggleTaskComplete,
    addTask,
    setSearchQuery,
  }
}

export default useTasks
