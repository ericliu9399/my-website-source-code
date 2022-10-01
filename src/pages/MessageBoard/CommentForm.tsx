import React, { useState } from 'react';

function CommentForm({ postMethod }) {
  const [errorMessage, setErrorMessage] = useState('');
  function submit(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    postMethod(form2json(formData), (message) => {
      setErrorMessage(message);
    });
  }
  function form2json(formData) {
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });
    return jsonData;
  }
  return (
    <>
      <div className="pb-5">
        <div className="pb-5 pb-lg-0">
          <form
            className={
              'CommentForm w-100 container d-flex flex-column p-3 mt-3 bg-secondary rounded-10'
              + ' mb-5'
            }
            onSubmit={submit}
            id="CommentForm"// 連結跳轉用
          >
            <div className="row">
              <label className="col-12 col-sm-6">
                Name
                <input className="w-100 rounded" type="text" name="name" />
              </label>
              <label className="col-12 col-sm-6">
                Email
                <input className="w-100 rounded" type="email" name="email" />
              </label>
            </div>
            <label className="flex-grow-1 d-flex flex-column">
              Message
              <textarea className="flex-grow-1 rounded" name="content" defaultValue="" />
            </label>
            <div className="d-flex">
              <label className="flex-grow-1">
                Password for delete
                <input className="w-100 rounded" name="deletePassword" defaultValue="" />
              </label>
              <button className="btn btn-primary m-3">Submit</button>
            </div>
            <p className="m-0 p-0">{errorMessage}</p>
          </form>
        </div>
      </div>
      {/* <style jsx>
        {`
form{
height: 70vh;
}
.CommentForm{
height: 60vh;
}
textarea{
resize: none;
}
`}
      </style> */}
    </>
  );
}

export default CommentForm;
