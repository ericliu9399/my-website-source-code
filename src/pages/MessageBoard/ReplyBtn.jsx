import React from 'react';

function ReplyBtn() {
  return (
    <>
      <a
        className="reply_btn btn btn-primary position-fixed p-3"
        href="/message_board#CommentForm"
      >
        留言
      </a>
      <style jsx>
        {`
.reply_btn{
  bottom: 40px;
  left: 10px;
  z-index: 1;
  text-decoration: none;
}
`}
      </style>
    </>
  );
}
export default ReplyBtn;
