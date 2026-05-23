import { useState, useEffect, useCallback, useMemo } from "react"
import tasksAPI from "../../../api/tasksAPI"

const useTasks = () => {
  const [tasks, setTasks] = useState([])
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
      tasksAPI.deleteAll(taskIds).then(() => setTasks([]))
    }
  }, [tasks])

  const deleteTask = useCallback((taskId) => {
    tasksAPI.delete(taskId).then(() => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
    })
  }, [])

  const toggleTaskComplete = useCallback((taskId, isDone) => {
    tasksAPI.toggleComplete(taskId, isDone).then(() => {
      setTasks((prevTasks) =>
        prevTasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, isDone: !task.isDone }
          }

          return task
        }),
      )
    })
  }, [])

  const addTask = useCallback((title) => {
    const newTask = {
      title,
      isDone: false,
    }

    tasksAPI.add(newTask).then((addedTask) => {
      setTasks((prevTasks) => [...prevTasks, addedTask])
      setSearchQuery("")
    })
  }, [])

  useEffect(() => {
    tasksAPI.getAll().then(setTasks)
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
