import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StarWarsApi from '../../apis/StarWarsApi'
import ResidentesList from './ResidentesList'

class Residentes extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      error: null,
      residentes: []
    }

    this.starWarsApi = new StarWarsApi()
  }


  loadResidentes()
  {
    this.starWarsApi.listPlanets().then(residentesArray => {
      console.log(residentesArray)
      this.setState({residentes: residentesArray})
    })
  }


  render() {
    const { residentes, loading, error } = this.state
    return <div>
      <ResidentesList residentes={residentes}/>

    </div>
  }
}

export default Residentes
