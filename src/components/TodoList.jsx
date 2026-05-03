import TodoItem from "./TodoItem"

const TodoList = () => {
  const hasTasks = true

  if (!hasTasks) {
    return <div className='todo__empty-message'></div>
  }

  return (
    <ul className='todo__list'>
      <TodoItem
        className='todo__item'
        id='task-1'
        title='Основы React'
        isDone={false}
      />
      <TodoItem
        className='todo__item'
        id='task-2'
        title='Приготовить поесть'
        isDone
      />
    </ul>
  )
}

export default TodoList
