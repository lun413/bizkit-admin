import axios from 'axios';

export default class companiesApi {
  headers = {
    'content-type': 'application/json', // whatever you want
    'Authorization': 'Bearer'
  }

  list(page){
    let url = process.env.REACT_APP_API_URL + "companies/";
    return axios( url, {
        method: 'GET',
        headers: this.headers,
      })
      .then(response => response.data.results)
      .catch(error => {
        throw error;
      });
  };

  read(userId){
    let url = process.env.REACT_APP_API_URL + "companies/" + companyId;
    return axios(url, {
        method: 'GET',
        headers: this.headers,
      })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }
}