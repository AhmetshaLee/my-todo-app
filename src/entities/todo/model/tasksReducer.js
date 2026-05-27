export const tasksReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL": {
      return Array.isArray(action.tasks) ? action.tasks : state
    }
    case "ADD": {
      return [...state, action.task]
    }
    case "TOGGLE_COMPLETE": {
      return state.map((task) => {
        return task.id === action.id ? { ...task, isDone: action.isDone } : task
      })
    }
    case "DELETE": {
      return state.filter((task) => task.id !== action.id)
    }
    case "DELETE_ALL": {
      return []
    }
    default: {
      return state
    }
  }
}
