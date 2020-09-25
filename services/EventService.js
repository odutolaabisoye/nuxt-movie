// eslint-disable-next-line
/* eslint-disable */

import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/popular?api_key=')
  },
  getEvent(id) {
    return apiClient.get('/popular?api_key=/' + id)
  }
}
