function getPathName() {
  let pathname = location.pathname.split("/")[1]
  if (pathname !== "") {
    pathname = "/" + pathname
  }
  if (pathname.search(".html") !== -1) {
    pathname = ""
  }
  return pathname
}

export default getPathName