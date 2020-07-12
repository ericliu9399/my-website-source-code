import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Form from './CommentForm';
import MobileNav from '../../components/MobileNav';
import Comments from './Comments';
import ReplyBtn from './ReplyBtn';
import getData from './functions/getData';
import deleteData from './functions/deleteData';
import postData2Server from './functions/postData2Server';

function MessageBoard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData(setData);
  }, []);
  return (
    <>
      <Header><Link className="nav-link" to="/">home</Link></Header>
      <div id="container pb-5">
        <Comments
          data={data}
          deleteRequest={(id, deletePassword, setMessage) => {
            deleteData(id, deletePassword, setMessage, data, setData);
          }}
        />
        <Form
          postMethod={(dataToPost, setMessage) => {
            postData2Server(dataToPost, setMessage, data, setData);
          }}
        />
      </div>
      <ReplyBtn />
      <MobileNav><Link className="btn btn-primary" to="/">home</Link></MobileNav>
    </>
  );
}
export default MessageBoard;
