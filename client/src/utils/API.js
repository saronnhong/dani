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
  saveDrawing: (id, randName, drawing) => {
    return axios.post('api/savedrawing/' + id, {randName: randName, drawing: drawing});
  },

  loadDrawing: (id) => {
    return axios.get('api/loaddrawing/' + id);
  },

  saveColoring: (id, randName, coloring) => {
    return axios.post('api/savecoloring/' + id, {randName: randName, coloring: coloring});
  },

  loadColoring: (id) => {
    return axios.get('api/loadcoloring/' + id);
  },


  startMetrics: () => {
    return axios.post('api/startmetrics');
  },

  getMetrics: (id) => {
    return axios.get('api/getMetrics/'+id);
  },

  //adding a value to metrics, use req body to pass along key for schema field and value to input
  addToMetrics: (metricID, key) => {
    return axios.put('api/addMetrics/'+metricID+"/"+key);
  }
};
