import TodoItem from "./TodoItem"

const TodoList = (props) => {
  const { tasks = [], onDeleteTaskButtonClick, onTaskCompleteChange } = props
  const hasTasks = tasks.length > 0

  if (!hasTasks) {
    return <div className='todo__empty-message'></div>
  }

  return (
    <ul className='todo__list'>
      {tasks.map((task) => (
        <TodoItem
          className='todo__item'
          key={task.id}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          onTaskCompleteChange={onTaskCompleteChange}
          {...task}
        />
      ))}
    </ul>
  )
}

export default TodoList
