const createUser = 'INSERT INTO users (name, email, password, address, city, state, zip, accept_email) VALUES (?, ?, ?,?, ?, ?, ?, ?);';

const findUserById = 'SELECT * FROM users WHERE id = ? LIMIT 1;';

const findUserByEmail = 'SELECT * FROM users WHERE email = ? LIMIT 1;';

module.exports = {
  createUser,
  findUserById,
  findUserByEmail,
};
