import React, { useState } from "react"
import styles from "./CommentForm.module.sass"

function CommentForm({ postMethod }) {
  const [errorMessage, setErrorMessage] = useState("")
  function submit(ev) {
    ev.preventDefault()
    let formData = new FormData(ev.target)
    postMethod(form2json(formData), message => {
      console.log(message)
      setErrorMessage(message)
    })
  }
  function form2json(formData) {
    let jsonData = {}
    formData.forEach((value, key) => {
      jsonData[key] = value
    })
    return jsonData
  }
  return (
    <form
      className={styles.commentForm}
      onSubmit={submit}
      id="CommentForm"//連結跳轉用
    >
      <div className={styles.upPart}>
        <label>Name
            <input type="text" name="name" />
        </label>
        <label>Email
            <input type="email" name="email" />
        </label>
      </div>
      <label className={styles.middlePart}>Message
          <textarea name="content" defaultValue={""} />
      </label>
      <div className={styles.bottomPart}>
        <label>
          Password for delete
            <input name="deletePassword" defaultValue={""} />
        </label>
        <button>Submit</button>
      </div>
      <p className={styles.errorMes}>{errorMessage}</p>
    </form>
  )
}

export default CommentForm