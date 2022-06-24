const initialState = {
  open: false,
  title: null,
  todo: {
    id: '',
    description: '',
    state: '',
    createdAt: '',
    completedAt: ''
  }
}

const saveReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_ADD_TODO_MODAL':
      return {
        ...state,
        open: true,
        title: 'Add todo item',
      }
    case 'SHOW_EDIT_TODO_MODAL':
      return {
        ...state,
        open: true,
        title: 'Edit todo item',
        todo: action.payload.todo
      }
    case 'HIDE_TODO_MODAL':
      return {
        ...state,
        open: false,
        todo: {}
      }
    default:
      return { ...state }
  }
}

export default saveReducer