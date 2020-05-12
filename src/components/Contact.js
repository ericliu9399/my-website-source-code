import React from "react"
// import styles from "./Contact.module.sass"
import Button from './BsButton'
import SectionTitle from './SectionTitle'

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }
  render() {
    const { status } = this.state
    const { data: { title } } = this.props
    return (
      <>
        <section className="min-vh-100 d-flex flex-column" id="contact">
          <SectionTitle title={title} />
          <form
            className="flex-grow-1 d-flex flex-column"
            onSubmit={this.submitForm}
            action="https://formspree.io/mvorroln"
            method="POST"
          >
            <div className="container flex-grow-1 d-flex flex-column">
              <label className="d-flex flex-column">
                Email<input className="" type="email" name="email" />
              </label>
              <label className="d-flex flex-column">
                Name<input className="" type="text" name="name" />
              </label>
              <label className="flex-grow-1 d-flex flex-column">
                Message<textarea className="flex-grow-1" name="message" defaultValue={""} />
              </label>
              <div className="">
                {status === "SUCCESS" ? <p>Thanks!</p> : <button className="btn btn-primary">Submit</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
              </div>
            </div>
          </form>
        </section>
        <style jsx>{`
*{
border: solid 1px white;
}
{/* .vh-50{
height: 80vh;
} */}
`}</style>
      </>
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