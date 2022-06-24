import { combineReducers } from 'redux'
import todos from './todosReducer'
import saveModal from './saveModalReducer'
import deleteModal from './deleteModalReducer'

const mainReducer = combineReducers({
    todos: todos,
    saveModal: saveModal,
    deleteModal: deleteModal,
})

export default mainReducer