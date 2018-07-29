import TodoApp from '../components/TodoApp'
import { connect } from 'react-redux'
import { changeDraft } from '../actions/draft'
import * as todoActionCreators from '../actions/todo'

const mapStateToProps = state => ({
  todos: state.todo,
  draft: state.draft,
  filter: state.filter
})

// MAP-DISPATCH-TO-PROPS
//
// Forma 1: Pasando una función que recibe dispatch
// y retorna un object con handlers que invocan a dispatch()
//
// const mapDispatchToProps = dispatch => ({
//   changeDraft: draft => {
//     dispatch(changeDraft(draft))
//   },
//   addTodo: newTodo => {
//     dispatch(changeDraft(newTodo))
//   }
// })
//
// Forma 2: Pasando un object de actionCreators
// después connect invoca el dispatch con el resultado de
// la actionCreator
//
const mapDispatchToProps = {
  onChangeDraft: changeDraft,
  ...todoActionCreators
}

const TodoAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)

export default TodoAppContainer
