import { useState, useEffect, useCallback, useMemo } from "react"
import { MOCK_TASKS } from "../constants/mockTasks"
import { getSavedTasks, saveTasks } from "../utils/storage"

const useTasks = () => {
  const [tasks, setTasks] = useState(() => getSavedTasks() ?? MOCK_TASKS)
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
      setTasks([])
    }
  }, [])

  const deleteTask = useCallback((taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
  }, [])

  const toggleTaskComplete = useCallback((taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isDone: !task.isDone }
        }

        return task
      }),
    )
  }, [])

  const addTask = useCallback((title) => {
    const newTask = {
      id: crypto?.randomUUID() ?? Date.now().toString(),
      title,
      isDone: false,
    }

    setTasks((prevTasks) => [...prevTasks, newTask])
    setSearchQuery("")
  }, [])

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

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
