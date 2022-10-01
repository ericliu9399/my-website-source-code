import React, { useState, useEffect } from "react";
import { marked } from "marked";
import hljs from "highlight.js";

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};
renderer.table = function (header, body) {
  return `<table class="table table-striped">${header}${body}</table>`;
};

marked.setOptions({
  breaks: true,
  highlight(code) {
    return hljs.highlightAuto(code).value;
  },
  renderer,
});

function markdown2html(text: string) {
  return marked.parse(text);
}

/**
 * @param url {string} './readme.md'
 */
function MarkdownViewer({ url }) {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch(url, { cache: "no-cache" })
      .then((res) => res.text())
      .then((text) => setContent(markdown2html(text)));
  }, [url]);
  return (
    <div
      className="MarkdownViewer"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default MarkdownViewer;
