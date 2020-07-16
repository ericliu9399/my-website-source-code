export default function fetchData(
  request: RequestInfo,
  jsonHandler: (json: object) => void,
  errorMessageHandler?: (text: string) => void
) {
  fetch(request)
    .then((response) => response.text())
    .then((text) => {
      try {
        const json = JSON.parse(text);
        // Do your JSON handling here
        if (typeof jsonHandler === 'function') jsonHandler(json);
      } catch (err) {
        // It is text, do you text handling here
        if (typeof errorMessageHandler === 'function') errorMessageHandler(text);
      }
    });
}
