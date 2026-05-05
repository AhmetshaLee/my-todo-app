import Button from "./ui/Button"
import Field from "./ui/Field"

const AddTaskForm = (props) => {
  const { addTask } = props

  const onSubmit = (event) => {
    event.preventDefault()
    addTask()
  }
  return (
    <form className='todo__form' onSubmit={onSubmit}>
      <Field className='todo__field' label='New task' id='new-task' />
      <Button type='submit'>Add</Button>
    </form>
  )
}

export default AddTaskForm
