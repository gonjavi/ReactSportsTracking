import axios from 'axios';
import formatTime from '../utils/constants';

const postMeasurement = (id, seconds) => {
  axios.post(
    'http://localhost:3001/api/v1/measurements',
    {
      time: formatTime(seconds),
      date: Date(),
      sport_id: id,
    },
    {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH',
      },
    },
  )
    .then(res => {
      if (res.error) {
        throw (res.error);
      }
      window.location.reload(false);
      return res;
    }).catch(error => error);
};

export default postMeasurement;
