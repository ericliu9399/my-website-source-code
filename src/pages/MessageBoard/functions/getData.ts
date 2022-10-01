import fetchData from './fetchData';
import {apiUrl} from '../../../lib/constants';
import React from 'react';

function getData(setData: React.Dispatch<React.SetStateAction<any>>): void {
  const request = new Request(apiUrl);
  fetchData(request, setData);
}
export default getData;
