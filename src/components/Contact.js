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
          <div className={
            "flex-grow-1 d-flex flex-column justify-content-center" +
            " pt-md-0 pb-md-0 pt-lg-1 pb-lg-1 pt-xl-2 pb-xl-2"
          }>
            <form
              className={
                "container flex-grow-1 d-flex flex-column" +
                " pt-sm-5 pb-sm-5"
              }
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
          </div>
        </section>
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