import { memo, useContext } from "react"
import TodoItem from "./TodoItem"
import { TasksContext } from "../context/TasksProvider"

const TodoList = () => {
  const { visibleTasks, isFiltered } = useContext(TasksContext)

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
        <TodoItem className='todo__item' key={task.id} {...task} />
      ))}
    </ul>
  )
}

export default memo(TodoList)
