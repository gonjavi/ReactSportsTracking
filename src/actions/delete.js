import axios from 'axios';

const deleteMeasurementApi = id => {
  axios.delete(`http://localhost:3001/api/v1/measurements/${id}`)
    .then(res => {
      if (res.error) {
        throw (res.error);
      }
      window.location.reload(false);
      return res;
    }).catch(error => error);
};

export default deleteMeasurementApi;
