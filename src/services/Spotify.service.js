import axios from 'axios';

export const getArtistTopTracks = ({ artistId, token }) => {
  // eslint-disable-next-line no-undef
  return axios.get(`${process.env.REACT_APP_BASE_URI}/artists/${artistId}/top-tracks`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      market: 'ES'
    }
  });
};
