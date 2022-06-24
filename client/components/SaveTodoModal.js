import axios from 'axios'
import moment from 'moment'
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { hideSaveModal } from '../redux/actions/saveModalActions'
import { addTodo, updateTodo } from '../redux/actions/todoActions'
import { useEffect, useState } from 'react'

export default function SaveTodoModal(props) {

  const [hasError, setHasError] = useState(false)
  const dispatch = useDispatch()

  const open = useSelector(state => state.saveModal.open)
  const title = useSelector(state => state.saveModal.title)
  const todo = useSelector(state => state.saveModal.todo)

  useEffect(() => {
    if (open) {
      setHasError(false)
    }
  }, [open])

  const validate = () => {
    setHasError(!todo.description)
    return todo.description
  }

  const handleCancel = () => {
    hideSaveModal(dispatch)
  }

  const handleSave = () => {

    if (!validate()) {
      return
    }

    let url = !todo.id ? '/api/todos/' : `/api/todos/${todo.id}/`
    let method = !todo.id ? 'post' : 'patch'

    if (!todo.id) {
      todo.state = 'NOT_COMPLETED'
      todo.createdAt = moment().format()
      todo.completedAt = moment().format()
    }

    axios({
      method: method,
      url: url,
      data: todo
    }).then(res => {
      if (todo.id) {
        updateTodo(dispatch, todo)
      } else {
        todo = res.data
        addTodo(dispatch, todo)
      }
    })

    hideSaveModal(dispatch)
  }

  return (
    <Dialog open={open}>

      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>

      <DialogContent>
        <TextField
          placeholder="Todo content"
          defaultValue={todo.description}
          onChange={(e) => { todo.description = e.target.value; validate() }}
          multiline
          fullWidth
          rows={3}
          style={{ minWidth: 400 }}
          helperText={hasError ? 'Required.' : ''}
          error={hasError}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleSave} autoFocus>Save</Button>
      </DialogActions>

    </Dialog>
  )
}
