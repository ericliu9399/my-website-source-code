import React, { useState } from 'react';

const Comment = ({
  name, email, content, id, isDelete = false, sendDeletRequest,
}) => {
  const [isClickDelete, setIsClickDelete] = useState(false);
  const [animate, setAnimate] = useState(null);
  const defaultPwd = '刪文用密碼';
  const [deletePassword, setDeletePassword] = useState(defaultPwd);
  const [message, setMessage] = useState('');
  const onClickDelet = () => {
    const easeOut = () => {
      setAnimate({});
      setTimeout(() => setIsClickDelete(false), 400);
      const pwd = deletePassword === defaultPwd || deletePassword === '' ? 'n' : deletePassword;
      sendDeletRequest(id, pwd, setMessage);
    };
    const easeIn = () => {
      setIsClickDelete(true);
      setTimeout(() => setAnimate(fadeIn), 0);
    };
    isClickDelete ? easeOut() : easeIn();
  };
  const fadeIn = {
    opacity: 1,
    right: '0px',
  };
  return (
    <>
      <div className={
        (!isDelete ? 'p-4 bg-secondary mb-3 rounded-10' : 'deletedComment')
      }
      >
        <div className="">
          <h4>
            {id}
            樓
          </h4>
          <h2>
            Name:
            {name}
          </h2>
          <h3>
            Email:
            {email}
          </h3>
          <p>{content}</p>
        </div>
        {
          !isDelete
          && (
            <div className="deletePanel d-flex align-items-center">
              <button className="btn btn-primary" onClick={onClickDelet}>刪文</button>
              {isClickDelete
                ? (
                  <input
                    className="ml-2 flex-grow-1 rounded bg-light position-relative"
                    type="text"
                    style={animate}
                    value={deletePassword}
                    onFocus={() => setDeletePassword('')}
                    onChange={(e) => setDeletePassword(e.target.value)}
                  />
                )
                : <p className="flex-grow-1 text-center m-0">{message}</p>}
            </div>
          )
        }
      </div>
      {/* <style jsx>
        {`
.deletePanel button {
order: -1;
}
.deletePanel input {
opacity: 0;
transition-duration: 0.4s;
  right: -20px;
}
.deletedComment {
background: none;
height: fit-content;
margin-top: 10px;
border-radius: 10px;
}
.deletedComment h2, .deletedComment h3 {
font-size: 10px;
}
.deletedComment h2, .deletedComment h3, .deletedComment h4, .deletedComment p {
margin: 5px;
padding: 0px;
}
.deletedComment button {
height: 0px;
visibility: hidden;
}
`}
      </style> */}
    </>
  );
};

export default Comment;
