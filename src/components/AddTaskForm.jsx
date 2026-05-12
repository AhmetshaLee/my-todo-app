import Button from "./ui/Button"
import Field from "./ui/Field"

const AddTaskForm = (props) => {
  const { addTask, newTaskTitle, setNewTaskTitle, newTaskInputRef } = props

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
