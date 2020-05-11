
module.exports = {
  /**
   *@param cv col vertical alignment
   *@param cs col selector
   *@param rv row vertical alignment
   *@param rh row horizontal alignment
   */
  cv: {
    start: "align-self-start",
    center: "align-self-center",
    end: "align-self-end"
  },
  cs: `[class^="col-"], [class*=" col-"]`,
  rv: {
    start: "align-items-start",
    center: "align-items-center",
    end: "align-items-end"
  },
  rh: {
    start: "justify-content-start",
    center: "justify-content-center",
    end: "justify-content-end",
    around: "justify-content-around",
    between: "justify-content-between"
  }
}