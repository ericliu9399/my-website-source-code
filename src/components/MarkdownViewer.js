import React, { useState, useEffect } from 'react'
import marked from 'marked'

function markdown2html(text) {
  marked.setOptions({
    breaks: true,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });
  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };
  renderer.table = function (header, body) {
    return '<table class="table table-striped">' + header + body + '</table>';
  };

  return marked(text, { renderer: renderer })
}

/**
 * @param url {string} './readme.md'
 */
function MarkdownViewer({ url }) {
  const [content, setContent] = useState("")
  useEffect(() => {
    fetch(url)
      .then(res => res.text())
      .then(text => setContent(markdown2html(text)))
  }, [url])
  return <div className="MarkdownViewer" dangerouslySetInnerHTML={{ __html: content }} />
}

export default MarkdownViewer