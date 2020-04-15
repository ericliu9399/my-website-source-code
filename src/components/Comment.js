import React, { useState } from "react"
import styles from "./comment.module.sass"

const Comment = ({ name, email, content, id, isDelete, sendDeletRequest }) => {
  const [isClickDelet, setIsClickDelet] = useState(false)
  const [animate, setAnimate] = useState(null)
  const defaultPwd = "刪文用密碼"
  const [deletePassword, setDeletePassword] = useState(defaultPwd)
  const [message, setMessage] = useState("")
  const onClickDelet = () => {
    const easeOut = () => {
      setAnimate({})
      setTimeout(() => setIsClickDelet(false), 400)
      let pwd = deletePassword === defaultPwd | deletePassword === "" ? "n" : deletePassword
      sendDeletRequest(id, pwd, setMessage)
    }
    const easeIn = () => {
      setIsClickDelet(true)
      setTimeout(() => setAnimate(fadeIn), 0)
    }
    isClickDelet ? easeOut() : easeIn()
  }
  const fadeIn = {
    "opacity": 1,
    "right": "0px",
  }
  return (
    <div className={isDelete === true ? styles.deletedComment : styles.comment}>
      <div className={styles.contentPanel}>
        <h4>{id}樓</h4>
        <h2>Name: {name}</h2>
        <h3>Email: {email}</h3>
        <p>{content}</p>
      </div>
      {
        !isDelete &&
        <div className={styles.deletePanel}>
          <button onClick={onClickDelet}>刪文</button>
          {isClickDelet ?
            <input
              type="text"
              style={animate}
              value={deletePassword}
              onFocus={() => setDeletePassword("")}
              onChange={(e) => setDeletePassword(e.target.value)}
            /> :
            <p>{message}</p>
          }
        </div>
      }
    </div>
  )
}

export default Comment