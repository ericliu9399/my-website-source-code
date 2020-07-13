declare function deleteData(
  id: number | string,
  deletePassword: number | string,
  setMessage: (text: string) => void,
  data: Array<object>,
  setData: (data: Array<object>) => void,
): void

export default deleteData;
