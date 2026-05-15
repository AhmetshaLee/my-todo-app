import { memo, useContext } from "react"
import TodoItem from "./TodoItem"
import { TasksContext } from "../context/TasksContext"

const TodoList = () => {
  const {
    visibleTasks,
    isFiltered,
    deleteTask,
    toggleTaskComplete,
    firstIncompleteTaskId,
    firstIncompleteTaskRef,
  } = useContext(TasksContext)

  if (!visibleTasks.length) {
    return (
      <div className='todo__empty-message'>
        {isFiltered ? "Задачи не найдены" : "Задач пока нет"}
      </div>
    )
  }

  return (
    <ul className='todo__list'>
      {visibleTasks.map((task) => (
        <TodoItem
          className='todo__item'
          key={task.id}
          task={task}
          onDelete={deleteTask}
          onToggle={toggleTaskComplete}
          ref={
            task.id === firstIncompleteTaskId ? firstIncompleteTaskRef : null
          }
        />
      ))}
    </ul>
  )
}

export default memo(TodoList)
