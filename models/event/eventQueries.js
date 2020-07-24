const createEvent = 'INSERT INTO events (name, address, city, state,  zip, type, description, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);';
const findEventById = 'SELECT * FROM events WHERE id = ? LIMIT 1;';
const findEventsByDate = 'SELECT * FROM events WHERE start_date >= ?;';
module.exports = {
  createEvent,
  findEventById,
  findEventsByDate,
};
