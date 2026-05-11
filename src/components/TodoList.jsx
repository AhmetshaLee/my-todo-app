import { memo } from "react"
import TodoItem from "./TodoItem"

const TodoList = (props) => {
  const {
    tasks = [],
    isFiltered,
    firstIncompleteTaskRef,
    firstIncompleteTaskId,
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
  } = props

  if (!tasks.length) {
    return (
      <div className='todo__empty-message'>
        {isFiltered ? "Задачи не найдены" : "Задач пока нет"}
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

export default memo(TodoList)
