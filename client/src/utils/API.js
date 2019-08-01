import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('api/signup', {username: username, email: email, password: password});
  },

  //save a new drawing to DB
  saveDrawing: (randName, drawing) => {
    return axios.post('api/savedrawing', {randName: randName, drawing: drawing});
  },

  loadDrawing: () => {
    return axios.get('api/loaddrawing');
  },

  saveColoring: (randName, coloring) => {
    return axios.post('api/savecoloring', {randName: randName, coloring: coloring});
  },

  loadColoring: () => {
    return axios.get('api/loadcoloring');
  },

  //adding a value to metrics, use req body to pass along key for schema field and value to input
  addToMetrics: (key, value) => {
    return axios.post('api/metrics/', {key: key, value: value});
  }
};
