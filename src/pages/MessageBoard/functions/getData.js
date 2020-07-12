import fetchData from './fetchData';
import apiUrl from '../../../lib/apiUrl';

function getData(setData) {
  const request = new Request(apiUrl);
  fetchData(request, setData);
}
export default getData;
