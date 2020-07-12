import fetchData from './fetchData';
import apiUrl from '../../../lib/apiUrl';

function postData2Server(dataToPost, setMessage, data, setData) {
  const appendClientData = (newData) => {
    const arr = [...data];
    arr.push(newData);
    setData(arr);
  };
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const raw = JSON.stringify(dataToPost);
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  const request = new Request(apiUrl, requestOptions);
  const textHandler = (text) => {
    setMessage(text);
  };
  fetchData(request, appendClientData, textHandler);
}
export default postData2Server;
