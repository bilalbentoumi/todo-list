export const showAddModal = (dispatch) => {
  dispatch({
    type: 'SHOW_ADD_TODO_MODAL'
  })
}

export const showEditModal = (dispatch, todo) => {
  dispatch({
    type: 'SHOW_EDIT_TODO_MODAL',
    payload: {
      todo: todo
    }
  })
}

export const hideSaveModal = (dispatch) => {
  dispatch({
    type: 'HIDE_TODO_MODAL'
  })
}