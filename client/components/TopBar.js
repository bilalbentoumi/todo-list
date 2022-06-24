import { Box, Container } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export default function TopBar() {

  return (
    <Box sx={{ flexGrow: 1, mb: 10 }}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Container maxWidth="sm">
            <Typography variant="h6" color="inherit" component="div">
              Todo List
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}