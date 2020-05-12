import React from "react"
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
        <section className="vh-100 d-flex flex-column" id="contact">
          <SectionTitle title={title} />
          <form
            className="container flex-grow-1 d-flex flex-column"
            onSubmit={this.submitForm}
            action="https://formspree.io/mvorroln"
            method="POST"
          >
            <div className="row">
              <label className="col-sm-6">
                Email<input className="w-100" type="email" name="email" />
              </label>
              <label className="col-sm-6">
                Name<input className="w-100" type="text" name="name" />
              </label>
            </div>
            <label className="flex-grow-1 d-flex flex-column">
              Message<textarea className="w-100 flex-grow-1" name="message" defaultValue={""} />
            </label>
            <div className="w-100 pb-3">
              {status === "SUCCESS" ? <p>Thanks!</p> : <button className="btn btn-primary">Submit</button>}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </div>
          </form>
        </section>
        <style jsx>{`
{/* *{
border: solid 1px white;
} */}
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