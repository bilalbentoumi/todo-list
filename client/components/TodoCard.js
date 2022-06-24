import axios from 'axios'
import moment from 'moment'
import { Box, Checkbox, IconButton, Tooltip } from '@mui/material'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { showEditModal } from '../redux/actions/saveModalActions'
import { updateTodo } from '../redux/actions/todoActions'
import { showDeleteConfirmModal } from '../redux/actions/deleteModalActions'
import { useDispatch } from 'react-redux'

export default function TodoCard(props) {

  const { todo } = props
  const dispatch = useDispatch()

  const updateStatus = (status) => {

    todo.state = status
    if (status == 'COMPLETED') {
      todo.completedAt = moment().format()
    }

    axios({
      method: 'patch',
      url: `/api/todos/${todo.id}/`,
      data: todo
    }).then(res => res.data).then(todo => {
      updateTodo(dispatch, todo)
    })

  }

  const deleteItem = () => {
    showDeleteConfirmModal(dispatch, todo.id)
  }

  const editItem = () => {
    showEditModal(dispatch, todo)
  }

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <Card sx={{ minWidth: 275 }} sy={{ m: 5 }} elevation={7}>
        <CardContent style={{ display: 'flex', alignItems: 'start' }}>

          <Checkbox checked={todo.state == 'COMPLETED'} onChange={(e) => updateStatus(e.target.checked ? 'COMPLETED' : 'NOT_COMPLETED')} />

          <Box style={{ flex: 1 }}>

            <Typography variant="h6" color="inherit" component="p" style={{
              marginTop: 5,
              textDecoration: todo.state == 'COMPLETED' ? 'line-through' : ''
            }}>
              {todo.description}
            </Typography>

            <Typography variant="h6" component="p" style={{ fontSize: '14px', color: '#0008' }}>
              Created at: {moment(todo.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
            </Typography>

            {todo.state == 'COMPLETED' && <Typography variant="h6" component="p" style={{ fontSize: '14px', color: '#0008' }}>
              Completed at: {moment(todo.completedAt).format('MMMM Do YYYY, h:mm:ss a')}
            </Typography>}

          </Box>

          <Tooltip title="Edit">
            <IconButton onClick={editItem}>
              <EditIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton onClick={deleteItem}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>

        </CardContent>
      </Card>
    </Box>
  )
}