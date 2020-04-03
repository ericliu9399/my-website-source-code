import React from 'react'
import styles from "./form.module.sass"

export default () => (
  <form className={styles.form} action="https://formspree.io/mvorroln" method="POST">
    <div className="up_part">
      <label>Email
        <input type="text" name="_replyto" />
      </label>
      <label>Name
        <input type="text" name="name" />
      </label>
    </div>
    <label id="message">Message
      <textarea name="message" defaultValue={""} />
    </label>
    <button>Send</button>
  </form>
)