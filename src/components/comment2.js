import React from "react"

const Comment = ({isDelete}) => {

  return (
    <div className={isDelete ? styles.deleted : styles.comment}>
      <div className="contentPanel">
        <h4>{id}樓</h4>
        <h2>Name: {name}</h2>
        <h3>Email: {email}</h3>
        <p>{deletedMessage || content}</p>
      </div>
      <div className="deletPanel">
        <button onClick={onClickDelet}>刪文</button>
        {isClickDelet ?
          <input
            type="text"
            className={animateClass}
            value={deletePassword}
            onFocus={() => setDeletePassword("")}
            onChange={(e) => setDeletePassword(e.target.value)}
          /> :
          <p>{message}</p>
        }
      </div>
    </div>
  )
}

export default Comment