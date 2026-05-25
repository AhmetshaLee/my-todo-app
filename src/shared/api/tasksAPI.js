const BASE_URL = "http://localhost:3001/tasks"

const headers = {
  "Content-Type": "application/json",
}

const tasksAPI = {
  getAll: () => {
    return fetch(BASE_URL).then((response) => response.json())
  },

  getById: (id) => {
    return fetch(`${BASE_URL}/${id}`).then((response) => response.json())
  },

  add: (task) => {
    return fetch(BASE_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(task),
    }).then((response) => response.json())
  },

  delete: (id) => {
    return fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    })
  },

  deleteAll: (ids) => {
    return Promise.all(ids.map((id) => tasksAPI.delete(id)))
  },

  toggleComplete: (id, isDone) => {
    return fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ isDone }),
    })
  },
}

export default tasksAPI
