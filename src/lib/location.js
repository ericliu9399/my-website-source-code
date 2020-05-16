console.log("document.URL")
console.log(document.URL)
console.log("document.domain")
console.log(document.domain)
console.log("location.pathname")
let pathArray = location.pathname.split("/")
console.log(pathArray)
console.log(pathArray.map((path => {
  if (path !== "") return path
})))