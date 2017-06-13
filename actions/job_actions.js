import axios from 'axios';
import reverseGeoCode from 'lantlng-to-zip';
import qs from 'qs';

import { publisher } from '../indeedSettings.json';

import {
  FETCH_JOBS,
} from './types';

const JOB_QUERY_PARAMS = {
  publisher,
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript', // just hardcoding this for now
};

export const fetchJobs = region => async dispatch => {
  try {
    let zip = await reverseGeoCode(region);
  } catch(e) {
    console.error(e);
  }
};
