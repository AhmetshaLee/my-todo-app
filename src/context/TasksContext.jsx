import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  createContext,
} from "react"
import { MOCK_TASKS } from "../constants/mockTasks"

export const TasksContext = createContext({})

export const TasksProvider = (props) => {
  const { children } = props

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : MOCK_TASKS
  })
  const [newTaskTitle, setNewTaskTitle] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const newTaskInputRef = useRef(null)
  const firstIncompleteTaskRef = useRef(null)

  const visibleTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase()

    return clearSearchQuery.length > 0
      ? tasks.filter((task) =>
          task.title.toLowerCase().includes(clearSearchQuery),
        )
      : tasks
  }, [tasks, searchQuery])

  const isFiltered = searchQuery.trim().length > 0
  const firstIncompleteTaskId = visibleTasks.find((task) => !task.isDone)?.id

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm("Вы точно хотите удалить все задачи?")

    if (isConfirmed) {
      setTasks([])
    }
  }, [])

  const deleteTask = useCallback(
    (taskId) => {
      setTasks(tasks.filter((task) => task.id !== taskId))
    },
    [tasks],
  )

  const toggleTaskComplete = useCallback(
    (taskId) => {
      setTasks(
        tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, isDone: !task.isDone }
          }

          return task
        }),
      )
    },
    [tasks],
  )

  const addTask = useCallback(() => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      }

      setTasks((prevTasks) => [...prevTasks, newTask])
      setNewTaskTitle("")
      setSearchQuery("")
      newTaskInputRef.current.focus()
    }
  }, [newTaskTitle])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    newTaskInputRef.current.focus()
  }, [])

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
