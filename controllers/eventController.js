const connection = require('../config/connection');
const eventQueries = require('../models/event/eventQueries');


function padLeadingZeros(num, size) {
  let s = `${num}`;
  while (s.length < size) s = `0${s}`;
  return s;
}

function dateToMoDaYear(d) {
  const day = padLeadingZeros(d.getDate(), 2);
  const month = padLeadingZeros(d.getMonth() + 1, 2);
  const year = d.getFullYear();
  return `${month}/${day}/${year}`;
}

function dateToYearMoDa(d) {
  const day = padLeadingZeros(d.getDate(), 2);
  const month = padLeadingZeros(d.getMonth() + 1, 2);
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
}

function correctDates(events) {
  const e = [...events];
  for (let i = 0; i < e.length; i++) {
    e[i].startdate = dateToMoDaYear(e[i].start_date);
    e[i].enddate = dateToMoDaYear(e[i].end_date);
  }
  return e;
}


module.exports = {
  findEventById: async (req, res) => {
    const { id } = req.body.fields;
    try {
      const [row] = await connection.query(eventQueries.findEventById, id);
      return res.json(row[0]);
    } catch (e) {
      console.log(e);
      return res.status(403).json({ e });
    }
  },

  createEvent: async (req, res) => {
    console.log(req.body.fields);
    const { name, address, city, state, zip, type, description, startdate, enddate } = req.body.fields;
    try {
      const [result] = await connection.query(eventQueries.createEvent,
        [name, address, city, state, zip, type, description, startdate, enddate]);
      const [row] = await connection.query(eventQueries.findEventById, result.insertId);
      return res.json(row[0]);
    } catch (e) {
      console.log(e);
      return res.status(403).json({ e });
    }
  },

  findEventsByDate: async (req, res) => {
    const date = new Date();
    try {
      const data = await connection.query(eventQueries.findEventsByDate, date);
      const events = [...correctDates(data[0])];
      return res.json(events);
    } catch (e) {
      console.log(e);
      return res.status(403).json({ e });
    }
  },
};
