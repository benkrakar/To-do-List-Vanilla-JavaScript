const { connection } = require('../database/connection.js');

function getAll() {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM todo';
    connection.query(sql, function (err, tasks) {
      if (err) {
        throw err;
      }
      resolve(tasks);
    });
  });
}
function getById(id) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM todo WHERE  id = ${id}`;
    connection.query(sql, function (err, tasks) {
      if (err) {
        throw err;
      }
      resolve(tasks);
    });
  });
}
module.exports = {
  getAll,
  getById,
};
