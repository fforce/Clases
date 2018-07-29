import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StarWarsApi from '../../apis/StarWarsApi'
import PlanetaList from './PlanetaList'
import ResidentesList from './ResidentesList'

class PlanetaApp extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      error: null,
      planetas: [],
      residentes: []
    }

    this.starWarsApi = new StarWarsApi()
  }

  componentDidMount() {

    this.starWarsApi.listPlanets().then(planetArray => {
      this.setState({planetas: planetArray})
    })
  }


  loadResidentes = planeta => event => {

    console.log("imprimo")
    console.log(planeta.residentes);

    this.setState({residentes: planeta.residentes})

  }


  render() {
    const { planetas, loading, error, residentes } = this.state
    return <div>
      <PlanetaList planetas={planetas} loadResidenteClick={this.loadResidentes} />
      <ResidentesList residentes={residentes} />
    </div>
  }
}

export default PlanetaApp
