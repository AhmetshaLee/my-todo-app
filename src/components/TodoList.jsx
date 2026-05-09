import TodoItem from "./TodoItem"

const TodoList = (props) => {
  const {
    tasks = [],
    firstIncompleteTaskRef,
    firstIncompleteTaskId,
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
  } = props

  if (!tasks.length) {
    return (
      <div className='todo__empty-message'>
        {tasks.length === 0 && !firstIncompleteTaskId
          ? "Задачи не найдены"
          : "Задач пока нет"}
      </div>
    )
  }

  return (
    <ul className='todo__list'>
      {tasks.map((task) => (
        <TodoItem
          ref={
            task.id === firstIncompleteTaskId ? firstIncompleteTaskRef : null
          }
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
