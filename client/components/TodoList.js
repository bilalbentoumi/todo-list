import axios from 'axios'
import { Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTodos } from '../redux/actions/todoActions'
import TodoCard from './TodoCard'

export default function TodoList() {

  const dispatch = useDispatch()

  const todos = useSelector(state => state.todos.todos)

  useEffect(() => {

    axios('/api/todos?format=json', {
      method: 'get'
    }).then(res => res.data).then(todos => {
      setTodos(dispatch, todos)
    })

  }, [])

  if (!todos.length) {
    return (
      <Typography variant="h6" color="inherit" component="p" style={{ fontSize: '16px', color: '#000A' }}>
        No todos found
      </Typography>
    )
  }

  const completed = todos.filter((todo) => todo.state == 'COMPLETED')
  const inProgress = todos.filter((todo) => todo.state == 'NOT_COMPLETED')

  return (
    <>

      {completed.length > 0 && <Typography variant="h6" color="inherit" component="p" style={{ fontSize: '16px', color: '#000A' }}>
        Completed
      </Typography>}

      {completed.map((todo) =>
        <TodoCard todo={todo} key={todo.id} />
      )}

      {inProgress.length > 0 && <Typography variant="h6" color="inherit" component="p" style={{ fontSize: '16px', color: '#000A' }}>
        In progress
      </Typography>}

      {inProgress.map((todo) =>
        <TodoCard todo={todo} key={todo.id} />
      )}

    </>
  )
}