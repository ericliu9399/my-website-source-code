import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import Form from "../components/CommentForm"
import Comment from "../components/Comment"
import "./MessageBoard.sass"
import { Link } from "react-router-dom";
import Hamburger from '../components/Hamburger'
import apiUrl from '../lib/apiUrl'

function MessageBoard() {
  const [data, setData] = useState([])
  useEffect(() => {
    getMethod(setData)
  }, [])
  function getMethod() {
    fetch(apiUrl)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(() => console.log("api error"))
  }
  function postMethod(data, setMessage) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch(apiUrl, requestOptions)
      .then(response => {
        if (response.ok) {
          response.json().then(json => addData(json))
          setMessage("Success!")
        }
      })
      .catch(err => {
        setMessage(err.toString())
      })
  }
  function deleteMethod(id, deletePassword, setMessage) {
    console.log("sendDeletRequest")
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };
    return fetch(apiUrl + `${id}/${deletePassword}`, requestOptions)
      .then(response => {
        if (response.ok) response.json()
          .then(json => {
            putData(json, id)
          })
        else response.text().then(res => { setMessage(res) })
      })
  }
  const addData = (newData) => {
    let arr = [...data]
    arr.push(newData)
    setData(arr)
  }
  const putData = (newData, id) => {
    let arr = [...data]
    arr[id - 1] = newData
    setData(arr)
  }
  const Comments = () =>
    data !== [] && data.map(comment =>
      <Comment
        name={comment.name}
        email={comment.email}
        content={comment.content}
        key={comment.id}
        id={comment.id}
        isDelete={comment.isDelete}
        sendDeletRequest={deleteMethod}
      />
    )
  return (
    <div id="messageBoard">
      <Header>
        <Link to="/">home</Link>
      </Header>
      <div className="container">
        <Comments />
        <Form postMethod={postMethod} />
        <a
          className="reply_btn"
          href="/message_board#CommentForm"
        >
          留言
        </a>
      </div>
      <Hamburger>
        <Link to="/">home</Link>
      </Hamburger>
    </div>
  )
}
export default MessageBoard