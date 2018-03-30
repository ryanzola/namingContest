import axios from 'axios';

export const fetchContest = contestId => {
  return axios
    .get(`/api/contest/${contestId}`)
    .then(resp => resp.data)
    .catch(err => console.error(err));
};

