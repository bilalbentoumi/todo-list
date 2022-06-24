import Head from 'next/head'
import { Box, Container } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import TodoItem from '../components/TodoItem'
import AddItemFab from '../components/AddItemFab'
import ConfirmDeleteModal from '../components/ConfirmDeleteModal'

export default function Home() {

  return (
    <>

      <Head>
        <title>Todo list</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

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

      <Container maxWidth="sm">

        {[...Array(10)].map((x, i) =>
          <TodoItem description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} />
        )}

      </Container>

      <AddItemFab />

      <ConfirmDeleteModal open={true} />

    </>
  )
}
