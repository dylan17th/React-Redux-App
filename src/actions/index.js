import axios from "axios";
export const FETCHING_QOUTES_START = "FETCHING_QOUTES_START";
export const FETCHING_QOUTES_SUCCESS = "FETCHING_QOUTES_SUCCESS";
export const FETCHING_QOUTES_ERROR = "FETCHING_QOUTES_ERROR";

export const dataGetter = name => dispatch => {
  dispatch({ type: FETCHING_QOUTES_START });
  axios
    .get(`https://www.breakingbadapi.com/api/quote?author=${name}`)
    .then(res => {
      dispatch({
        type: FETCHING_QOUTES_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: FETCHING_QOUTES_ERROR ,payload: err });
    });
};