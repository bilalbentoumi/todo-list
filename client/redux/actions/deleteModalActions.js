export const showDeleteConfirmModal = (dispatch, todoId) => {
  dispatch({
    type: 'SHOW_DELETE_CONFIRM_MODAL',
    payload: {
      todoId: todoId
    }
  })
}

export const hideDeleteConfirmModal = (dispatch) => {
  dispatch({
    type: 'HIDE_DELETE_CONFIRM_MODAL'
  })
}