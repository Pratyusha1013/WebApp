require('dotenv').config();
const mysql = require('mysql2');

const con = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Bhavitha@1712',
  database:'decor'
});

const query = (sql, binding) => {
  return new Promise((resolve, reject) => {
    con.query(sql, binding, (err, result, fields) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

module.exports = { con, query };
