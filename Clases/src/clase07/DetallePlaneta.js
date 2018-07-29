import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StarWarsApi from '../apis/StarWarsApi'
import {Link} from 'react-router-dom'


class DetallePlaneta extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      error: null,
      planeta: null

    }

    this.starWarsApi = new StarWarsApi()
  }

  componentDidMount() {
    const {match} = this.props;
        console.log('imprimo match');
    console.log(match);
    this.starWarsApi.GetPlanetsOriginal(match.params.id).then(planetArray => {

      console.log("imprtimo comp");
      console.log(planetArray)
      this.setState({planeta: planetArray})
    })
  }





  render() {

    return( <div>

      {this.state.planeta.name}
    </div>
  )
  }
}

export default DetallePlaneta
