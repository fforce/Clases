import Login from "../components/Login"
import {connect} from "react-redux"
import {CHANGE_DRAFT} from '../constants/actionTypes'

const mapStateToProps = (state) => ({
  draft: state.draft //llamo al action create para que me maneje el estado y me devuela lo q necesit
  //(osea un return state.draft)
})

const mapDispatchsToProps = (dispatch) => ({
     onChangeDraft: value => dispatch({
        type: CHANGE_DRAFT,
       draft: value
     })
    //onchangedraft es el evento prop de mi componente entonces lo tengo q dispachar
    //onChangeDraft: value => dispatch(draft(value)) // me atiende mas facil
})

export default connect(mapStateToProps, mapDispatchsToProps)(Login)
