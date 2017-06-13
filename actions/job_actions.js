import axios from 'axios';
import reverseGeoCode from 'latlng-to-zip';
import qs from 'qs';

import { publisher } from '../indeedSettings.json';

import {
  FETCH_JOBS,
} from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
  publisher,
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript', // just hardcoding this for now
};

const buildJobsUrl = (zip) => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = region => async dispatch => {
  try {
    let zip = await reverseGeoCode(region);
    const url = buildJobsUrl(zip);
    let { data } = await axios.get(url);
    console.log(data);
    dispatch({ type: FETCH_JOBS, payload: data });
  } catch(e) {
    console.error(e);
  }
};
