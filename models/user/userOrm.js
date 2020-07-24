/* eslint-disable max-len */
/* eslint-disable camelcase */
const { genSalt, hash, compare } = require('bcryptjs');
const connection = require('../../config/connection');
const userQueries = require('./userQueries');


const findUserById = async (id) => {
  try {
    const [row] = await connection.query(userQueries.findUserById, id);
    console.log(row);
    return Promise.resolve(row[0]);
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
};

const findUserByEmail = async (email) => {
  try {
    const [row] = await connection.query(userQueries.findUserByEmail, email);
    return Promise.resolve(row[0]);
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
};

const createUser = async ({name, email, password, address, city, state, zip, acceptEmail }) => {
  try {
    console.log(email);
    console.log(password);
    const salt = await genSalt();
    const hashedPassword = await hash(password, salt);
    const [result] = await connection.query(userQueries.createUser,
      [name, email, hashedPassword, address, city, state, zip, acceptEmail]);
    console.log("Saved");
    console.log(result);
    const [userRow] = await connection.query(userQueries.findUserById, result.insertId);
    return Promise.resolve(userRow[0]);
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
};

const comparePassword = async (candidatePassword, userpassword) => Promise.resolve(await compare(candidatePassword, userpassword));

module.exports = {
  findUserById,
  findUserByEmail,
  createUser,
  comparePassword,
};
