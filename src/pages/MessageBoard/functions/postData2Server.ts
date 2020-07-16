import fetchData from './fetchData';
import apiUrl from '../../../lib/apiUrl';

function postData2Server(
  dataToPost: object,
  setMessage: (message: string) => void,
  data: Array<object>,
  setData: (data: Array<object>) => void
) {
  const appendClientData = (newData) => {
    const arr = [...data];
    arr.push(newData);
    setData(arr);
  };
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const raw = JSON.stringify(dataToPost);
  const request = new Request(apiUrl, {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  });
  const textHandler = (text) => {
    setMessage(text);
  };
  fetchData(request, appendClientData, textHandler);
}
export default postData2Server;
