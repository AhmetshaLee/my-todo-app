import { useState, useEffect, useCallback, useMemo } from "react"

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
      Promise.all(
        tasks.map((task) => {
          return fetch(`http://localhost:3001/tasks/${task.id}`, {
            method: "DELETE",
          })
        }),
      ).then(() => setTasks([]))
    }
  }, [tasks])

  const deleteTask = useCallback((taskId) => {
    fetch(`http://localhost:3001/tasks/${taskId}`, {
      method: "DELETE",
    }).then(() => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
    })
  }, [])

  const toggleTaskComplete = useCallback((taskId, isDone) => {
    fetch(`http://localhost:3001/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDone }),
    }).then(() => {
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

    fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((addedTask) => {
        setTasks((prevTasks) => [...prevTasks, addedTask])
        setSearchQuery("")
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((response) => response.json())
      .then(setTasks)
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
