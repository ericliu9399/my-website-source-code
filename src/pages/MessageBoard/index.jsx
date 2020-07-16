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
  const [comments, setComments] = useState([]);
  useEffect(() => {
    console.log('get all message')
    getData(setComments);
  }, []);
  return (
    <>
      <Header><Link className="nav-link" to="/">home</Link></Header>
      <div id="container pb-5">
        <Comments
          data={comments}
          deleteRequest={(id, deletePassword, setMessage) => {
            deleteData(id, deletePassword, setMessage, comments, setComments);
          }}
        />
        <Form
          postMethod={(dataToPost, setMessage) => {
            postData2Server(dataToPost, setMessage, comments, setComments);
          }}
        />
      </div>
      <ReplyBtn />
      <MobileNav><Link className="btn btn-primary" to="/">home</Link></MobileNav>
    </>
  );
}
export default MessageBoard;
