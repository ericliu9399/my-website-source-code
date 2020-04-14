import React, { useState } from "react"
import styles from "./CommentForm.module.sass"


export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: ""
    }
  }
  render() {
    const { errorMessage } = this.state;
    return (
      <form
        className={styles.commentForm}
        onSubmit={this.submit}
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
  submit = (ev) => {
    ev.preventDefault()
    let formData = new FormData(ev.target)
    let json = this.form2json(formData)
    this.props.post(json, message => {
      this.setState({ errorMessage: message })
    })
  }
  form2json = (formData) => {
    let jsonData = {}
    formData.forEach((value, key) => {
      jsonData[key] = value
    })
    return jsonData
  }
}