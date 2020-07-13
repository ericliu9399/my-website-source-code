declare function fetchData(
  request: RequestInfo,
  jsonHandler: (json: object) => void,
  errorMessageHandler: (text: string) => void
): void

export default fetchData;
