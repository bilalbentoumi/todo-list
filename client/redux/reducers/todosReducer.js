const initialState = {
  todos: []
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.payload.todos
      }
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload.todo]
      }
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id == action.payload.todoId) {
            todo = action.payload.todo
          }
          return todo
        })
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id != action.payload.todoId)
      }
    default:
      return { ...state }
  }
}

export default todos