import fetchData from './fetchData';
import {apiUrl} from '../../../lib/constants';

function deleteData(
  id: number,
  deletePassword: number | string,
  setMessage: (text: string) => void,
  data: Array<object>,
  setData: (data: Array<object>) => void,
) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const request = new Request(
    `${apiUrl}${id}/${deletePassword}`,
    {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow',
    });
  fetchData(request, (json) => {
    const arr = [...data];
    arr[id - 1] = json;
    setData(arr);
  }, setMessage);
}
export default deleteData;
