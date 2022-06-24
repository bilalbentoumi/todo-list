export const setTodos = (dispatch, todos) => {
  dispatch({
    type: 'SET_TODOS',
    payload: {
      todos: todos
    }
  })
}

export const addTodo = (dispatch, todo) => {
  dispatch({
    type: 'ADD_TODO',
    payload: {
      todo: todo
    }
  })
}

export const updateTodo = (dispatch, todo) => {
  dispatch({
    type: 'UPDATE_TODO',
    payload: {
      todo: todo
    }
  })
}

export const deleteTodo = (dispatch, todoId) => {
  dispatch({
    type: 'DELETE_TODO',
    payload: {
      todoId: todoId
    }
  })
}