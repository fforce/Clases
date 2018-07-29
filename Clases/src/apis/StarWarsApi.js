import axios from 'axios'

class StarWarsApi {
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://swapi.co/api/',
      params: {
	       headers: {"Access-Control-Allow-Origin": "*"},
      },
    })
  }

  listPeople = () => {
    return this.axios.get('/people').then(response => {

      const results = response.data.results.map((item) =>(
        {
          titulo:item.name,
          texto:item.homeworld,
          residentes:item.residentes
        }
      )


      )

      console.log(response)

      return results;
    })
  }


  listPlanets = () => {
    return this.axios.get('/planets').then(response => {

      const results = response.data.results.map((item) =>(
        {
          titulo:item.name,
          residentes:item.residents

        }
      )


      )

      console.log(response)

      return results;
    })
  }
}

export default StarWarsApi
