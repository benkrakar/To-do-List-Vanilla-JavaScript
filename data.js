import connection from "./connection.js";

export default class Data {
  static getdata(res) {
    const sql = "SELECT * FROM todo";
    connection.query(sql, function (err, results) {
      if (err) {
        throw err;
      }
      res.end(JSON.stringify(results));
    });
  }
}