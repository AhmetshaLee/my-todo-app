import { useContext, useState, useRef } from "react"
import Button from "./ui/Button"
import Field from "./ui/Field"
import { TasksContext } from "../context/TasksContext"

const AddTaskForm = () => {
  const { addTask } = useContext(TasksContext)

  const [newTaskTitle, setNewTaskTitle] = useState("")
  const [error, setError] = useState("")

  const newTaskInputRef = useRef(null)

  const clearNewTaskTitle = newTaskTitle.trim()
  const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0

  const onSubmit = (event) => {
    event.preventDefault()

    if (!isNewTaskTitleEmpty) {
      addTask(clearNewTaskTitle)
      setNewTaskTitle("")
      setError("")
      newTaskInputRef.current.focus()
    }
  }

  const onInput = (event) => {
    const { value } = event.target
    const clearValue = value.trim()
    const hasOnlySpaces = value.length > 0 && clearValue.length === 0

    setNewTaskTitle(value)
    setError(hasOnlySpaces ? "Поле не может быть пустым" : "")
  }

  return (
    <form className='todo__form' onSubmit={onSubmit}>
      <Field
        ref={newTaskInputRef}
        className='todo__field'
        label='New task'
        id='new-task'
        error={error}
        value={newTaskTitle}
        onInput={onInput}
        autoFocus
      />
      <Button type='submit' isDisabled={isNewTaskTitleEmpty}>
        Add
      </Button>
    </form>
  )
}

export default AddTaskForm
