import { useState, useEffect } from "react"
import tasksAPI from "../api/tasksAPI"

const TaskPage = () => {
  const taskId = 123

  const [task, setTask] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    tasksAPI
      .getById(taskId)
      .then((taskData) => {
        setTask(taskData)
        setHasError(false)
      })
      .catch(() => {
        setHasError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <div>Загрузка...</div>
  }

  if (hasError) {
    return <div>Задача не найдена!</div>
  }

  return (
    <div>
      <h1>{task.title}</h1>
      {task.isDone ? "Задача выполнена" : "Задача не выполнена"}
    </div>
  )
}

export default TaskPage
