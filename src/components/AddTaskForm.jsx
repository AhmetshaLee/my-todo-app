import { useContext } from "react"
import Button from "./ui/Button"
import Field from "./ui/Field"
import { TasksContext } from "../context/TasksContext"

const AddTaskForm = () => {
  const { addTask, newTaskTitle, setNewTaskTitle, newTaskInputRef } =
    useContext(TasksContext)

  const onSubmit = (event) => {
    event.preventDefault()
    addTask()
  }

  return (
    <form className='todo__form' onSubmit={onSubmit}>
      <Field
        ref={newTaskInputRef}
        className='todo__field'
        label='New task'
        id='new-task'
        value={newTaskTitle}
        onInput={(event) => setNewTaskTitle(event.target.value)}
      />
      <Button type='submit'>Add</Button>
    </form>
  )
}

export default AddTaskForm
