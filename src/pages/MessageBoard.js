import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import Form from "../components/CommentForm"
import Comment from "../components/Comment"
import { Link } from "react-router-dom";
import MobileNav from '../components/MobileNav'
import apiUrl from '../lib/apiUrl'

function ReplyBtn() {
  return <>
    <a
      className="reply_btn btn btn-primary position-fixed p-3"
      href="/message_board#CommentForm"
    >
      留言
        </a>
    <style jsx>{`
.reply_btn{
  bottom: 40px;
  left: 10px;
  z-index: 1;
  text-decoration: none;
}
`}</style>
  </>
}
function Comments({ data, deleteRequest }) {
  return <div className="pt-sm-5">
    <div className="container p-0 pt-sm-5">
      {data !== [] && data.map(comment =>
        <Comment
          name={comment.name}
          email={comment.email}
          content={comment.content}
          key={comment.id}
          id={comment.id}
          isDelete={comment.isDelete}
          sendDeletRequest={deleteRequest}
        />
      )}
    </div>
  </div>
}

function MessageBoard({ pathName = "" }) {
  const [data, setData] = useState([])
  useEffect(() => {
    getRequest()
  }, [])
  function fetchData(request, jsonHandler, textHandler) {
    fetch(request)
      .then(response => response.text())
      .then(text => {
        try {
          const json = JSON.parse(text);
          // Do your JSON handling here
          if (typeof jsonHandler === 'function') jsonHandler(json)
        } catch (err) {
          // It is text, do you text handling here
          if (typeof textHandler === 'function') textHandler(text)
        }
      });
  }
  function getRequest() {
    const request = new Request(apiUrl)
    fetchData(request, setData)
  }
  function postRequest(data, setMessage) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(data);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    const request = new Request(apiUrl, requestOptions)
    const textHandler = (text) => {
      setMessage(text)
    }
    fetchData(request, addFrontEndData, textHandler)
  }
  function deleteRequest(id, deletePassword, setMessage) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };
    const request = new Request(apiUrl + `${id}/${deletePassword}`, requestOptions)
    fetchData(request, (json) => { putFrontEndData(json, id) }, setMessage)
  }
  const addFrontEndData = (newData) => {
    let arr = [...data]
    arr.push(newData)
    setData(arr)
  }
  const putFrontEndData = (newData, id) => {
    let arr = [...data]
    arr[id - 1] = newData
    setData(arr)
  }
  return (
    <>
      <Header><Link className="nav-link" to={pathName + "/"}>home</Link></Header>
      <div id="container pb-5">
        <Comments data={data} deleteRequest={deleteRequest} />
        <Form postMethod={postRequest} />
      </div>
      <ReplyBtn />
      <MobileNav><Link className="btn btn-primary" to={pathName + "/"}>home</Link></MobileNav>
    </>
  )
}
export default MessageBoard