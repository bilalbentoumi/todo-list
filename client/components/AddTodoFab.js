import { Fab, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useDispatch } from 'react-redux'
import { showAddModal } from '../redux/actions/saveModalActions'

export default function AddTodoFab() {

  const dispatch = useDispatch()

  const addTodo = () => {
    showAddModal(dispatch)
  }

  return (
    <Tooltip title="Add todo item">
      <Fab color="primary" aria-label="add" style={{ position: 'fixed', bottom: 16, right: 16 }} onClick={addTodo}>
        <AddIcon />
      </Fab>
    </Tooltip>
  )
}