function padLeadingZeros(num, size) {
    let s = `${num}`;
    while (s.length < size) s = `0${s}`;
    return s;
  }
  
  const dateToYearMoDa = (d) => {
    const day = padLeadingZeros(d.getDate(), 2);
    const month = padLeadingZeros(d.getMonth() + 1, 2);
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  }
  
  module.exports = {
    dateToYearMoDa,
  };
  