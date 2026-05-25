export const getSavedTasks = () => {
  try {
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : null
  } catch (error) {
    console.error("Ошибка чтения списка задач из localStorage:", error)
    return null
  }
}

export const saveTasks = (tasks) => {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  } catch (error) {
    console.error("Ошибка сохранения в localStorage:", error)
  }
}
