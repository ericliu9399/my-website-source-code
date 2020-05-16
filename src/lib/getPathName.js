function getPathName() {
  let pathname = location.pathname.split("/")[1]
  if (pathname !== "") {
    pathname = "/" + pathname
  }
  return pathname
}

export default getPathName