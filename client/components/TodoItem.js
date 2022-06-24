import { Box, Checkbox, IconButton, Tooltip } from '@mui/material'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const cardContentStyle = {
  display: 'flex',
  alignItems: 'start'
}

export default function TodoItem(props) {

  const description = props.description

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <Card sx={{ minWidth: 275 }} sy={{ m: 5 }} elevation="7">
        <CardContent style={cardContentStyle}>

          <Checkbox />

          <Typography variant="h6" color="inherit" component="span" style={{ marginTop: 5, flex: 1 }}>
            {description}
          </Typography>

          <Tooltip title="Edit">
            <IconButton>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>

        </CardContent>
      </Card>
    </Box>
  )
}