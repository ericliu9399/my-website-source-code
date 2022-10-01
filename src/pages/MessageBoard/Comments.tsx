import React from 'react';
import Comment from './Comment';

function Comments({ data, deleteRequest }) {
  return (
    <div className="pt-sm-5">
      <div className="container p-0 pt-sm-5">
        {data.length && data.map((comment) => (
          <Comment
            name={comment.name}
            email={comment.email}
            content={comment.content}
            key={comment.id}
            id={comment.id}
            isDelete={comment.isDelete}
            sendDeletRequest={deleteRequest}
          />
        ))}
      </div>
    </div>
  );
}

export default Comments;
