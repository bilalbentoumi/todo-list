const initialState = {
  open: false,
  todoId: null
}

const deleteModal = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_DELETE_CONFIRM_MODAL':
      return {
        ...state,
        open: true,
        todoId: action.payload.todoId
      }
    case 'HIDE_DELETE_CONFIRM_MODAL':
      return {
        ...state,
        open: false
      }
    default:
      return { ...state }
  }
}

export default deleteModal