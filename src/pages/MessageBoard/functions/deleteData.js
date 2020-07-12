import fetchData from './fetchData';
import apiUrl from '../../../lib/apiUrl';

function deleteData(id, deletePassword, setMessage, data, setData) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow',
  };
  const request = new Request(`${apiUrl}${id}/${deletePassword}`, requestOptions);
  fetchData(request, (json) => {
    const arr = [...data];
    arr[id - 1] = json;
    setData(arr);
  }, setMessage);
}
export default deleteData;
