import Head from 'next/head'
import { Container } from '@mui/material'
import TopBar from '../components/TopBar'
import TodoList from '../components/TodoList'
import AddTodoFab from '../components/AddTodoFab'
import SaveTodoModal from '../components/SaveTodoModal'
import DeleteConfirmModal from '../components/DeleteConfirmModal'

export default function Home() {

  return (
    <>

      <Head>
        <title>Todo list</title>
      </Head>

      <TopBar />

      <Container maxWidth="sm">
        <TodoList />
      </Container>

      <AddTodoFab />

      <SaveTodoModal />

      <DeleteConfirmModal />

    </>
  )
}
