import React from "react"
import styles from "./Formspree.module.sass"

export default class Formspree extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        className={styles.formspree}
        onSubmit={this.submitForm}
        action="https://formspree.io/mvorroln"
        method="POST"
      >
        <div className={styles.upPart}>
          <label>Email<input type="email" name="email" /></label>
          <label>Name<input type="text" name="name" /></label>
        </div>
        <label className={styles.message}>Message<textarea name="message" defaultValue={""} /></label>
        <div className={styles.bottomPart}>
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
          {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        </div>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}