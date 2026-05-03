import Button from "./ui/Button"
import Field from "./ui/Field"

const AddTaskForm = () => {
  return (
    <form className='todo__form'>
      <Field className='todo__field' label='New task' id='new-task' />
      <Button type='submit'>Add</Button>
    </form>
  )
}

export default AddTaskForm
