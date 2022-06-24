import { Fab, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const fabStyle = {
  position: 'fixed',
  bottom: 16,
  right: 16
}

export default function AddItemFab() {

  return (
    <Tooltip title="Add todo item">
      <Fab color="primary" aria-label="add" style={fabStyle}>
        <AddIcon />
      </Fab>
    </Tooltip>
  )
}