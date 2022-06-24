import axios from 'axios'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { hideDeleteConfirmModal } from '../redux/actions/deleteModalActions'
import { deleteTodo } from '../redux/actions/todoActions'

export default function DeleteConfirmModal(props) {

  const dispatch = useDispatch()

  const open = useSelector(state => state.deleteModal.open)
  const todoId = useSelector(state => state.deleteModal.todoId)

  const handleCancel = () => {
    hideDeleteConfirmModal(dispatch)
  }

  const handleConfirm = () => {

    axios({
      method: 'delete',
      url: `/api/todos/${todoId}/`,
    }).then(res => {
      deleteTodo(dispatch, todoId)
      hideDeleteConfirmModal(dispatch)
    })

  }

  return (
    <Dialog open={open}>

      <DialogTitle id="alert-dialog-title">
        Delete Confirm
      </DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this todo?
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleConfirm} autoFocus>Confirm</Button>
      </DialogActions>

    </Dialog>
  )
}
