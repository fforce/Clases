import axios from 'axios'

class ChatApi {
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
      ))


      return results;
    })
  }



}

export default StarWarsApi
